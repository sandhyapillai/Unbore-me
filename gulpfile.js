/*
 * 
 * Gulp file for auto build 
 */
'use strict'

var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
minifycss =require('gulp-minify-css'),
del = require('del'),
exec = require('child_process').exec,
ngAnnotate = require('gulp-ng-annotate'),
htmlbuild = require('gulp-htmlbuild'),
nodemon = require('gulp-nodemon'),
runSequence = require('run-sequence'),
browserSync = require('browser-sync').create(),
Server = require('karma').Server,
reload = browserSync.reload;

//Function to handle errors
function handleError(error){
	console.log(error);
	this.emit('end');
}

//use this for development
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function () {
    done();
  }).start();
});

// use this for building
gulp.task('ci-test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

//Task to run build
gulp.task("build",function(done){
	runSequence(
			'build:clean',
			[
				'build:html',
				'build:js'
			],
			'build:cleanup',
			done
	);
	
});

gulp.task('build:clean',function(done){
	exec('rm -rf dist && mkdir dist',function(err){
		if(err !=null){throw err;}
		done();
	})
})


gulp.task('build:html',function(){
	gulp.src('src/index.html')
	.pipe(htmlbuild({
		js:htmlbuild.preprocess.js(function(block){
			block.write('app.min.js');
			block.end();
		})
	}))
	.on('error',handleError)
	.pipe(gulp.dest('./dist'))
	
});

gulp.task('build:js',['bundle:js'],function(){
	gulp.src('./dist/app.js')
	.pipe(ngAnnotate())
	.on('error',handleError)
	.pipe(uglify())
	.on('error',handleError)
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('./dist'))
	.pipe(reload({stream:true}));
});

gulp.task('bundle:js',function(done){
	exec('cd src && jspm bundle-sfx app/app.js  ../dist/app.js --skip-source-maps',
	  function(err){
		if(err !=null){ throw err;}
		done();
	})
})

gulp.task('build:css',function(){
	gulp.src('src/styles/*.css')
		.pipe(gulp.dest('./dist/styles'))
		
});

gulp.task('build:cleanup',function(done){
	exec('rm ./dist/app.js',function(err){
		if (err != null) { throw err; }
	    done();
	})
});

//end of build task
gulp.task('nodemon',function(done){
	var running = false;
	return nodemon({
		script:'server/index.js',
		watch:['server/*.*']
	})
	.on('start',function(){
		if(!running){
			done();
		}
		running=true;
	})
	.on('restart',function(){
		setTimeout(function () {
	        reload();
	      }, 500);
	})
});

gulp.task('browser:sync',['nodemon'],function(){
	browserSync.init(null,{
		server:'./dist',
		browser:'google chrome',
		port:7000
	});
});

gulp.task('serve',['browser:sync'],function(){
	gulp.watch('src/index.html',['build']);
	gulp.watch('src/**/*.js',['build']);
	gulp.watch('src/**/*.css',['build']);
});

gulp.task('default',['build','serve'],function(){
	console.log("Finished running gulp");
})

