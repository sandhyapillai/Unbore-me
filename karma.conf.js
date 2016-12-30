// Karma configuration
// Generated on Wed Dec 28 2016 12:12:48 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    babelPreprocessor:{
    	options:{
    		presets:['es2015'],
    		sourceMap:'inline'
    	}
    },
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm','jasmine'],


    // list of files / patterns to load in the browser
    files: [
    	'./src/jspm_packages/npm/angular@1.6.1/angular.js',
    	'./src/jspm_packages/npm/angular-mocks@1.6.1/angular-mocks.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins:[
    	'karma-babel-preprocessor',
    	'karma-coverage',
    	'karma-jasmine',
    	'karma-jspm',
    	'karma-phantomjs-launcher',
    	'karma-chrome-launcher',
    	'karma-spec-reporter'
    ],
    
    jspm:{
    	config:'src/config.js',
    	packages:'src/jspm_packages',
    	loadFiles:['src/test/*.spec.js'],
    	serveFiles:['src/**/*.js']
    },
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	'src/app/{*.js,!jspm_packages{,/**}}':['babel'],
    	'src/app/controllers/**/!(*.spec).js':['babel']
    },
     proxies:{
    	 '/src/':'/base/src/',
    	 '/jspm_packages/':'/base/src/jspm_packages/',
    	 
     }, 
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}