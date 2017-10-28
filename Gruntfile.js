module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
    pkg: grunt.file.readJSON('.creds.json'),
    screeps: {
      options: {
        email: '<%= pkg.email %>',
        password: '<%= pkg.password %>',
        branch: 'default',
        ptr: false
      },
      dist: {
         src: ['dist/*.js']
      }
    }
  });
}
