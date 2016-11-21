var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

// server start
gulp.task('live-server', function () {
    var server = new liveServer('server/main.js');
    server.start();
})

//complile JSX and bundle it for browserify(entry JSX) ->transform to reactify -> Java script(Output JS)
gulp.task('bundle',['copy'], function () {
    return browserify({
            entries: 'app/mount.jsx', //entry point 
            debug: true
        })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./temp'));

})

//apply theme on app.js that resides in temp
gulp.task('copy',function(){
        gulp.src(['app/css/*.css'])
        .pipe(gulp.dest('./temp'));
        gulp.src(['app/images/*'])
        .pipe(gulp.dest('./temp/images'));
})

// combined master task + bundle(i.e. generate app.js) -> server start - >host
gulp.task('serve', ['bundle', 'live-server'], function () {
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
})
