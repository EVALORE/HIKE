import gulp from 'gulp'

// Config
import path from '../config/path.js'
import app from '../config/app.js'

// Plugins
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import babel from 'gulp-babel'
import webpack from 'webpack-stream'
import browserSync from 'browser-sync'

// Обработка JS
const js = () => {
  return (
    gulp
      .src(path.js.src, {sourcemaps: app.isDev})
      // .pipe(
      //   plumber({
      //     errorHandler: notify.onError((error) => ({
      //       title: 'JavaScript',
      //       message: error.message
      //     }))
      //   })
      // )
      .pipe(babel())
      .pipe(webpack(app.webpack))
      .pipe(gulp.dest(path.js.dest, {sourcemaps: app.isDev}))
      .pipe(browserSync.stream())
  )
}

export default js
