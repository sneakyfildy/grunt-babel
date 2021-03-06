'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		babel: {
			compile: {
				files: {
					'test/tmp/fixture-compiled.js': 'test/fixture.js'
				}
			}
		},
		nodeunit: {
			tasks: ['test/test.js']
		},
		clean: {
			test: ['test/tmp/**']
		}
	});
	
	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	
	grunt.file.setBase('../');
	grunt.registerTask('default', ['clean', 'babel', 'nodeunit', 'clean']);
};
