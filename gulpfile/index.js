import gulp from 'gulp'

import browserSync from 'browser-sync'

browserSync.create()

// Config
import path from './config/path.js'
import app from './config/app.js'

// Import tasks
import clear from './task/clear.js'
import html from './task/html.js'
import scss from './task/scss.js'
import js from './task/js.js'
import img from './task/img.js'
import font from './task/font.js'
import sprite from './task/svg-sprite.js'

// Watching
const watcher = () => {
  gulp.watch(path.html.watch, html)
  gulp.watch(path.scss.watch, scss)
  gulp.watch(path.js.watch, js)
  gulp.watch(path.img.watch, img)
  gulp.watch(path.font.watch, font)
  gulp.watch(path.sprite.watch, sprite)
}

// Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

const build = gulp.series(
  clear,
  gulp.parallel(html, scss, js, img, font, sprite)
)

const dev = gulp.series(build, gulp.parallel(watcher, server))

// Tasks
export {html, scss, js, font, sprite, img}

// Сборка
export default app.isProd ? build : dev
