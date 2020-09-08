module.exports = function(grunt) {
	// body...
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt,{
		useminPrepare: 'grunt-usemin'
	});
	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.scss'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		},
		watch: {
			files: ['css/*.scss'],
			tasks: ['css']
		},
		browserSync: {
			dev: {
				bsFiles:{
					src: [
					'css/*.css',
					'*.html',
					'js/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}
		},
		imagemin: {
			dynamic:{
				files:[ {
					expand: true,
					cwd: './',
					src: 'imagen/*.{png,gif,jpg,jpeg}',
					dest: 'dist/'
				}]
			}
		},
		
		copy:{
			html: {
				files:[{
					expand: true,
					dot: true,
					cwd: './',
					src: ['*.html'],
					dest: 'dist'
				}]
			},
			fonts: {
				expand:true,
				dot: true,
				cwd: 'node_modules/open-iconic/font',
				src: ['fonts/*.*'],
				dest: 'dist'
			}
		},

		clean:{
			build:{
				src: ['dist/']
			}
		},

		cssmin:{
			dist: {}
		},

		uglify: {
			dist: {}
		},

		filerev:{
			options:{
	
				algorithm: 'md5',
				length: 50
			},

			release:{

			
				files: [{
					src:['dist/css/*.css', 'dist/js/*.js',]
				}]
			}

			
		},

		concat: {
			options: {
				separator:';'
			},
			dist:{}
		},

		useminPrepare:{
			foo: {
				dist: 'dist',
				src:['index.html', 'about.html', 'precio.html', 'terminos.html', 'contacto.html']
			},
			options: {
				flow: {
					steps:{
						css: ['cssmin'],
						js: ['uglify']
					},
					post:{
						css:[{
							name: 'cssmin',
							createConfig: function(context, block){
								var generated = context.options.generated;
								generated.options={
									
									keepSpecialComments:0,
									rebase: false
									
								}
							}
						}],

						js:[{
							name: 'uglify',
							createConfig: function(context, block){
								var generated = context.options.generated;
								generated.options={
									
									keepSpecialComments:0,
									rebase: false
									
								}
							}
						}]
					}
				}
			}
		},

		usemin:{
			html:['dist/index.html', 'dist/about.html', 'dist/precio.html', 'dist/terminos.html', 'dist/contacto.html'],
			options:{
				assetsDir: ['dist', 'dist/css', 'dist/js']
			}
		}/*,

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      dot: true,
		      cwd: 'css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/css',
		      ext: '.css'
		    }]
		  }
		},


		uglify: {
		  target: {
		    files: [{
		      expand: true,
		      dot: true,
		      cwd: 'js',
		      src: ['*.js'],
		      dest: 'dist/js',
		      ext: '.js'
		    }]
		  }
		}
*/


	});

	/*grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-filerev');*/
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('css',['sass']);
	grunt.registerTask('default',['browserSync', 'watch']);
	grunt.registerTask('img:compress',['imagemin']);
	grunt.registerTask('build', [
		'clean',
		'copy',
		'imagemin',
		'useminPrepare',
		'concat',
		'cssmin',
		'uglify',
		'filerev',
		'usemin'
		]);
};
/*module.exports = function(grunt) { 
	grunt.registerTask('default', function(){ 
	console.log('Hola hemos lanzado un mensaje en Grunt.');
	});
};*/