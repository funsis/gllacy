var gulp = require("gulp")
var sass = require ("gulp-sass")
var plumber = require("gulp-plumber")
var postcss = require("gulp-postcss")
var autoprefixer = require("autoprefixer")

gulp.task('style', function() {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("css"));
});
