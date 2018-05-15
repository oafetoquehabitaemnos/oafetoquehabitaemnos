let gulp        = require('gulp');
let sass        = require('gulp-sass');
let pug         = require('gulp-pug');
let browserSync = require('browser-sync').create();


let dirs = {
    scss: './dev/src/styles/scss/',
    css: './dev/src/styles/css/',
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(dirs.scss + '**/*.scss', ['sass']);
    gulp.watch( '**/*.pug', ['views']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(dirs.scss + '**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(dirs.css))
        .pipe(browserSync.stream());
});


// Writer with .pug
gulp.task('views', function buildHTML(){
    return gulp.src('dev/views/*.pug')
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
  });

gulp.task('default', ['sass','views','serve']);