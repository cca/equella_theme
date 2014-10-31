/* global module,require */
module.exports = function (grunt) {
    'use strict';
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // @todo no watch task, is it even worth it?

    grunt.initConfig({
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist'
                    ]
                },{
                    src: [ 'theme.zip' ]
                }]
            }
        },
        cssmin: {
            options: {
                banner: '/* Last updated: ' + grunt.template.today() + ' */'
            },
            dist: {
                files: {
                    'dist/css/customer.css': [ 'css/customer.css' ]
                }
            }
        },
        csslint: {
            dist: {
                options: {
                    // see https://github.com/CSSLint/csslint/wiki/Rules
                    // for available rules
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
