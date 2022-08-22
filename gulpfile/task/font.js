import gulp from 'gulp'

// Config
import path from '../config/path.js'
import app from '../config/app.js'

// Plugins
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
import browserSync from 'browser-sync'

// Обработка шрифтов
const font = () => {
  return gulp
    .src(path.font.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Font',
          message: error.message
        }))
      })
    )
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.font.dest))
    .pipe(browserSync.stream())
}

export default font
