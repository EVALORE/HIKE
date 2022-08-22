import gulp from 'gulp'

// Config
import path from '../config/path.js'
import app from '../config/app.js'

// Plugins
import fs from 'fs'
import merge from 'merge-stream'
import svgSprite from 'gulp-svg-sprite'
import browserSync from 'browser-sync'

// Обработка SVG Спрайтов
const sprite = () => {
  let imgDirs = fs.readdirSync(path.sprite.src)
  let arr = []

  imgDirs.map(function (dir) {
    // console.log(`${srcFolder}/img/svg/${dir}`)
    arr.push(
      gulp
        .src(`${path.sprite.src}/${dir}/*.svg`)
        .pipe(
          svgSprite({
            mode: {
              stack: {
                sprite: `../${dir}.svg`
              }
            }
          })
        )
        .pipe(gulp.dest(path.sprite.dest))
        .pipe(browserSync.stream())
    )
  })

  return merge(arr)
}

export default sprite
