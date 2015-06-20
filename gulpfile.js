// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var minifyHTML = require('gulp-minify-html');


// JS hint task
gulp.task('jshint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function() {
    var imgSrc = './assets/img/**/*',
        imgDst = './build/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
//    .pipe(imageResize({
//      width : 300,
//      height : 400,
//      crop : true,
//      upscale : false
//    }))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages


gulp.task('htmlpage', function() {
    var htmlSrc = './*.html',
        htmlDst = './build';

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));
});