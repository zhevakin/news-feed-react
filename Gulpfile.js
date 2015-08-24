var gulp = require('gulp'),
    serve = require('browser-sync'),
    sync = require('run-sequence'),
    webpack = require('gulp-webpack'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

var paths = {
    app: ['client/app/**/*.{jsx,less,html}']
};

gulp.task('build', function() {
    return gulp.src('./client/app/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('client'));
});

gulp.task('serve', function () {
    serve({
        port: 4501,
        open: false,
        server: {
            baseDir: 'client'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(paths.app, ['build', serve.reload]);
});

gulp.task('dev', function (done) {
    sync('build', 'serve', 'watch', done);
});