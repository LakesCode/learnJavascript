/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, white: true, nomen: true */
/*global */

'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    appFolder: './app',
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>',

    watch: {
      less: {
        files: '<%= appFolder %>/**/*.less',
        tasks: ['less:dev']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= appFolder %>/{,*/}*.html',
          '<%= appFolder %>/**/*.css',
          '<%= appFolder %>/**/*.js'
        ]
      }
    },
    connect: {
      options: {
        port: 8080,
        livereload: 35729,
        hostname: 'localhost'/*,
        base: '<%= appFolder %>',
        //keepalive: true,
        middleware: function(connect, options) {
          return [
            // Serve static files.
            connect.static(options.base),
            // Make empty directories browsable.
            connect.directory(options.base)
          ];
        }*/
      },
      livereload: {
        options: {
          open: true,
          base:
             '<%= appFolder %>'
        }
      }
    },
    
/*    open : {
      dev : {
        path: 'http://127.0.0.1:8080'/!*,
        app: 'Google Chrome'*!/
      }
    },*/
    
    // Task configuration.
    less: {
      options: {
        paths: ['<%= appFolder %>/styles/less']
      },
      dev: {
        src: ['<%= appFolder %>/styles/less/main.less'],
        dest: '<%= appFolder %>/styles/css/main.css'
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  // Default task.
  grunt.registerTask('dev', ['less:dev', 'connect:livereload', 'open:dev', 'watch']);
  grunt.registerTask('default', ['develop']);

  grunt.registerTask('server', function (target) {
    grunt.task.run([
      'less:dev',
      'connect:livereload',
      //'open:dev',
      'watch'
    ]);
  });

};
