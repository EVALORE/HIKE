import gulp from 'gulp'

// Config
import path from '../config/path.js'
import app from '../config/app.js'

// Plugins
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import pugs from 'gulp-pug'
import webpHtml from 'gulp-webp-html'

// Обработка PUG
const pug = () => {
  return gulp
    .src(path.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Pug',
          message: error.message
        }))
      })
    )
    .pipe(pugs(app.pug))
    .pipe(webpHtml())
    .pipe(gulp.dest(path.pug.dest))
}

export default pug
