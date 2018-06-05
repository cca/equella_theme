/* global module,require */
module.exports = (grunt) => {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt)

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
        scsslint: {
          dist: [ 'css/*.scss' ],
          options: {
            compact: true,
            config: '.scss-lint.yml',
            colorizeOutput: true
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
        },
        watch: {
          dist: {
            files: ['css/*.scss'],
            tasks: ['build']
          }
      },
      open: {
          dist: {
              path: 'https://vault.cca.edu/access/themesettings.do'
          }
      }
    });

    grunt.registerTask('build', [
        'clean',
        'sass',
        'copy',
        'compress'
    ]);

    grunt.registerTask('test', [
        'scsslint'
    ])

    grunt.registerTask('default', [
        'build'
    ]);
};
