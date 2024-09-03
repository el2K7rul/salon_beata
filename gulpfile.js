const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const kit = require("gulp-kit-2");
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const clean = require("gulp-clean");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

const path = {
  html: "./html/**/*.kit",
  sass: "./src/sass/**/*.scss",
  js: "./src/js/**/*.js",
  // img: "./src/img/*",
  dist: "./dist",
  sassDest: "./dist/css",
  jsDest: "./dist/js",
  // imgDest: "./dist/img/",
};

function sassCompiler(done) {
  src(path.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(dest(path.sassDest));
  done();
}

function javaScript(done) {
  src(path.js)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(dest(path.jsDest));
  done();
}
function cleanStuff(done) {
  src(path.dist, { read: false }).pipe(clean());
  done();
}
function handleKits(done) {
  src(path.html).pipe(kit()).pipe(dest("./"));
  done();
}
function startBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  done();
}
function watchForChanges(done) {
  watch("./*.html").on("change", reload);
  watch([path.html, path.sass, path.js], parallel(handleKits, sassCompiler, javaScript)).on(
    "change",
    reload
  );
  //   watch(path.img convertImg ).on("change", reload);
  done();
}

// function convertImg(done) {
//   src(path.img).pipe(imagemin()).pipe(dest(path.convertImgDest));
//   done();
// }

const mainFunction = parallel(handleKits, sassCompiler, javaScript);
exports.cleanStuff = cleanStuff;
exports.default = series(mainFunction, startBrowserSync, watchForChanges);
