const pathSrc = "./src";
const pathDest = "./public";


export default {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    pug: {
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },

    scss: {
        src: pathSrc + "/sass/*.{scss,sass}",
        watch: pathSrc + "/sass/**/*.{scss,sass}",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.{js, json}",
        dest: pathDest + "/js"
    },

    img: {
        src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: pathDest + "/img"
    },

    font: {
        src: pathSrc + "/font/**/*.{ttf,eot,otf,ttc,woff,woff,svg,otc}",
        watch: pathSrc + "/font/**/*.{ttf,eot,otf,ttc,woff,woff,svg, otc}",
        dest: pathDest + "/font"
    }
};