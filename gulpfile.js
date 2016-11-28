var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var babelify = require('babelify');

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
        .transform(reactify)
		.transform(babelify.configure({
			stage:0,
			sourceMaps:true
		}))
		.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'));

})


//apply theme on app.js that resides in temp
gulp.task('copy',function(){
  	gulp.src(['bower_components/**'])
		.pipe(gulp.dest('./.tmp/bower_components'));
        gulp.src(['app/css/*.css'])
        .pipe(gulp.dest('./.tmp'));
        gulp.src(['app/images/*'])
        .pipe(gulp.dest('./.tmp/images'));
})

gulp.task('temp',function(){
	gulp.src(['app/index.html','app/*.css'])
		.pipe(gulp.dest('./.tmp'));

	gulp.src(['bower_components/**'])
		.pipe(gulp.dest('./.tmp/bower_components'));
});

gulp.task('bundle-n-reload',['bundle'],browserSync.reload)

gulp.task('observe-all',function(){
	gulp.watch('app/**/*.*',['bundle-n-reload']);
	gulp.watch('app/*.*',['temp']);
	gulp.watch('./server/**/*.js',['live-server']);
});

// combined master task + bundle(i.e. generate app.js) -> server start - >host
gulp.task('serve',  ['live-server','bundle','temp','observe-all'], function () {
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
});

