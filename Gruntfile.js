module.exports = function (grunt) {

    var bowerDir = 'app/bower_components/';
    var autoprefixer = require('autoprefixer-core');
    var compass = require('compass');

    // Use a grunt process timer
    require('time-grunt')(grunt);



    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        bower: {
            install: {
            //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },


        // Clean out the build directory before copying source files to it
        clean: {
            build: {
                src: [ 'build' ]
            }
        },


        // Copy source files files to the build directory
        copy: {
            bower: {

                // Copy vendor files over from Bower to build directory

                files: [

                    // Bootstrap
                    {
                        expand: true,
                        cwd: bowerDir + 'bootstrap-sass-official',
                        src: ['**/*'],
                        dest: 'build/bower_components/bootstrap-sass-official',
                    },


                    // Isotope
                    {
                        expand: true,
                        cwd: bowerDir + 'isotope',
                        src: ['**/*'],
                        dest: 'build/bower_components/isotope',
                    },


                    // BLazy lazyloader
                    {
                        expand: true,
                        cwd: bowerDir + 'blazy',
                        src: ['**/*'],
                        dest: 'build/bower_components/blazy',
                    }

                ],
            },

            // App scss files to build directory
            buildcss: {
                expand: true,
                cwd: 'app/styles',
                src: [ '**/*' ],
                dest: 'build/app/styles',
            },

            // Javascript files over to build directory
            buildjs: {
                expand: true,
                cwd: 'app/js',
                src: ['**/*'],
                dest: 'build/app/js/',
            },


            // Copy compiled files over to the distributed (live) directory
            distcss: {
                expand: true,
                cwd: 'build/processed/styles/css/',
                src: ['*'],
                dest: 'stylesheets'
            },


            distjs: {
                expand: true,
                flatten: true,
                src: [ 'build/app/js/vendor/*.js', 'build/processed/js/*.js'],
                dest: 'js/'
            },
        },


        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    basePath: ''
                }
            }
        },


        // Grunt-Sass preprocessor (NPM version for LibSass)
        sass: {
            options: {

            },
            dist: {
                files: {
                    'build/processed/styles/css/screen.css' : 'build/app/styles/scss/screen.scss',
                    'build/processed/styles/css/shame.css' : 'build/app/styles/scss/shame.scss'
                }
            }


        },


        // Concatenate files
        concat: {

            js: {
                src: [
                    'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
                    'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
                    'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js'
                ],
                dest: 'build/processed/js/bootstrap.js'
            }
        },


        // Autoprefixer - post css processor
        // https://www.npmjs.com/package/autoprefixer
        postcss: {
            options: {
                processors: [
                  autoprefixer({ browsers: ['last 2 version'] }).postcss
                ]
            },
            dist: { src: 'build/processed/styles/css/screen.css' }
        },


        // Minify the css
        cssmin: {
            frontEnd: {
                files: {
                    'build/processed/styles/css/screen.min.css': 'build/processed/styles/css/screen.css',
                    'build/processed/styles/css/shame.min.css': 'build/processed/styles/css/shame.css'
                }
            }
        },


        // Minify the js
        uglify: {
            build: {
                options: {
                  mangle: false,
                  report: 'min'
                },
                files: {
                  'build/processed/js/app.min.js': ['build/processed/js/app.js'],
                  'build/processed/js/admin.min.js': ['build/processed/js/admin.js']
                }
            }
        },


        // Watch these folders with LiveReload
        watch: {
            options: {
                spawn: false,
                  livereload: {
                    port: 1337
                  },
            },
            html: {
                files: [

                ]
            },
            css: {
              files: ['app/styles/scss/partials/*.scss', 'app/styles/scss/*.scss'],
            },
            js: {
              files: ['app/js/*.js'],
              tasks: ['buildjs']
            }
        },


        // Generate statistics for the css file. Run as 'grunt stylestats'.
        stylestats: {
            options: {

            },
            src: ['styles/app.css']
        },
    });



    // Load all grunt tasks in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);



    // ===============================================================================
    // Individual Grunt tasks
    // ===============================================================================


    // -------------------------------
    // Copy all source files to build
    // -------------------------------

    grunt.registerTask('copybuild', 'Copies the files to the build directory.', [ 'copy:bower', 'copy:buildcss',  'copy:buildjs']);



    // ------------------------
    // Copy processed files
    // ------------------------

    grunt.registerTask('copydist', 'Copies the compiled files to the live directory.', [ 'copy:distcss',  'copy:distjs']);



    // ------------------------
    // Process CSS
    // ------------------------

    grunt.registerTask('css', 'Compiles all of the scss (libsass) and copies the files to the live directory.', [ 'copybuild', 'compass', 'cssmin', 'copy:distcss']);



    // ------------------------
    // Process JS
    // ------------------------
    grunt.registerTask('js', 'Compiles all of the js and copies the files to the live directory.', [ 'copybuild', 'concat:js', 'uglify', 'copy:distjs']);



    // ===============================================================================
    // Default Grunt task to build the entire site.
    // ===============================================================================

    grunt.registerTask('default', ['clean', 'copybuild', 'sass','concat', 'cssmin', 'uglify', 'copydist']);

};