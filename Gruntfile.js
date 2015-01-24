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
        sass: {
          dist: {
            options: {
              style: 'compressed',
              sourcemap: 'none'
            },
            files: {
              'dist/css/customer.css': 'css/customer.scss'
            }
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

    grunt.registerTask('build', [
        'clean',
        'sass',
        'copy',
        'compress'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
