var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    connect = require('gulp-connect'),
    pug     = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    uglify  = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer');

function reload(done) {
  connect.server({
    livereload: true,
    port: 8080
  });
  done();
}

function styles() {
  return (
    gulp.src('src/sass/styles.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload())
  );
}

function scripts() {
  return (
    gulp.src('src/js/scripts.js')
    .pipe(plumber())
    .pipe(gulp.dest('assets/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(connect.reload())
  );
}

function html() {
  return (
    gulp.src('*.html')
    .pipe(plumber())
    .pipe(connect.reload())
  );
}

function views() {
  return (
    gulp.src('src/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload())
  )
}

function watchTask(done) {
  gulp.watch('*.html', html);
  gulp.watch('src/sass/**/*.sass', styles);
  gulp.watch('src/js/scripts.js', scripts);
  gulp.watch('src/pug/**/*.pug', views);
  done();
}

const watch = gulp.parallel(watchTask, reload);
const build = gulp.series(gulp.parallel(styles, scripts, html, views));

exports.reload = reload;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.views = views;
exports.watch = watch;
exports.build = build;
exports.default = watch;