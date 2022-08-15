import gulp from "gulp";
import browserSync from "browser-sync";

// Конфигурация
import path from "./config/path.js";
import app from "./config/app.js";

// Задачи
import clear from "./task/clear.js";
import pug from "./task/pug.js";
import html from "./task/html.js";
import scss from './task/scss.js';
import js from './task/js.js';
import img from './task/img.js';
import font from './task/font.js';

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root,
            ui: {
                port: 8080
            }
        }
    });
};

// Наблюдение
const watcher = () => {
    gulp.watch(path.pug.watch , pug).on('all', browserSync.reload);
    gulp.watch(path.html.watch , html).on('all', browserSync.reload);
    gulp.watch(path.scss.watch , scss).on('all', browserSync.reload);
    gulp.watch(path.js.watch , js).on('all', browserSync.reload);
    gulp.watch(path.img.watch , img).on('all', browserSync.reload);
    gulp.watch(path.font.watch , font).on('all', browserSync.reload);
};

const build = gulp.series(
    clear,
    gulp.parallel(html, scss, js, img, font),
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server) 
);

// Публичные задачи
export { pug };
export { html };
export { scss };
export { js };
export { img };
export { font };

// Сборка
export default app.isProd ? build : dev;