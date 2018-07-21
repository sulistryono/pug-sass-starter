var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    connect = require('gulp-connect'),
    pug     = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    rename  = require('gulp-rename'),
    clean   = require('gulp-clean-css'),
    uglify  = require('gulp-uglify');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8080
  });
});

var vendorStyles = [
  // 3rd party styles here, if possible use minified version files please.
 ];
 
 var vendorScripts = [
  // 3rd party scripts here, if possible use minified version files please.
 ];
 
 gulp.task('styles-combine', function() {
   gulp.src(vendorStyles)
   .pipe(plumber())
   .pipe(concat('vendors.min.css'))
   .pipe(clean())
   .pipe(gulp.dest('assets/css'));
 });
 
 gulp.task('scripts-combine', function() {
   gulp.src(vendorScripts)
   .pipe(plumber())
   .pipe(concat('vendors.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('assets/js'));
 });

gulp.task('styles', function() {
  gulp.src('src/sass/styles.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(gulp.dest('assets/css'))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(rename('styles.min.css'))
  .pipe(gulp.dest('assets/css'))
  .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src('src/js/scripts.js')
  .pipe(plumber())
  .pipe(gulp.dest('assets/js'))
  .pipe(uglify())
  .pipe(rename('scripts.min.js'))
  .pipe(gulp.dest('assets/js'))
  .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('*.html')
  .pipe(plumber())
  .pipe(connect.reload());
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/pug/pages/*.pug')
  .pipe(plumber())
  .pipe(pug({
      pretty: true
  }))
  .pipe(gulp.dest(''))
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['src/sass/**/*.scss'], ['styles']);
  gulp.watch(['src/js/scripts.js'], ['scripts']);
  gulp.watch(['src/pug/**/*.pug'], ['views']);
});

gulp.task('combine', ['styles-combine', 'scripts-combine']);

gulp.task('default', ['connect', 'styles', 'scripts', 'html', 'views', 'watch']);