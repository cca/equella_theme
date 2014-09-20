'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist'
                    ]
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/customer.css': [ 'css/customer.css' ]
                }
            }
        },
        csslint: {
            dist: {
                options: {
                    csslintrc: '.csslintrc'
                },
                src: [ 'css/customer.css' ]
            }
        },
        // copy over all images
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '.',
                    dest: 'dist',
                    src: [
                        'p/r/*/images/*.{webp,gif,png,jpg,jpeg}'
                    ]
                }]
            }
        },
        compress: {
            dist: {
                options: {
                    archive: 'theme.zip'
                },
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**'],
                    dest: ''
                }]
            }
        }
    });

    grunt.registerTask('test', [
        'csslint'
    ]);

    grunt.registerTask('build', [
        'clean',
        'cssmin',
        'copy',
        'compress'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
