module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
	    options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
       },
	    bootstrap: { // Обязательно сохраняйте порядок склеки
	        src: ['_/components/javascripts/jquery.js', // JQuery
				'_/components/javascripts/affix.js', // Start bootstrap
				'_/components/javascripts/transition.js',
				'_/components/javascripts/tooltip.js',
				'_/components/javascripts/alert.js',
				'_/components/javascripts/button.js',
				'_/components/javascripts/carousel.js',
				'_/components/javascripts/collapse.js',
				'_/components/javascripts/dropdown.js',
				'_/components/javascripts/madal.js',
				'_/components/javascripts/popover.js',
				'_/components/javascripts/scrollspy.js',
				'_/components/javascripts/tab.js' // End Botstrap
				],
            dest: '_/components/javascripts/_bootstrap.js'
	    },
        all_js: {
            src: [
                '_/components/javascripts/_bootstrap.js',
                '_/components/javascripts/my_working.js' // My js compiled from coffee script
            ],
            dest: '_/components/javascripts/_main.js'
        },
	    all_css: {
	        src: ['_/components/styles/bootstrap.css',
                  '_/components/styles/less.css',
                  '_/components/styles/sass.css'
                 ],
            dest: '_/components/styles/_style.css'
	    }
	},
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '_/components/javascripts/_main.js',
            dest: '_/javascripts/main.min.js'
        }
    },
    cssmin: {
        build: {
            src: '_/components/styles/_style.css',
            dest: '_/styles/style.min.css'
        }
    },
	coffee: {
		options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '_/components/javascripts/working/my_working.coffee',
            dest: '_/components/javascripts/my_working.js'
        }
	},
	haml: {
		options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			language: 'coffee'
        },
        index: {
            src: '_/components/views/index.haml',
            dest: 'index.php'
        },
        about: {
            src: '_/components/views/about.haml',
            dest: 'about.php'
        },
        artists: {
            src: '_/components/views/artists.haml',
            dest: 'artists.php'
        },
        privacypolicy: {
            src: '_/components/views/privacypolicy.haml',
            dest: 'privacypolicy.php'
        },
        register: {
            src: '_/components/views/register.haml',
            dest: 'register.php'
        },
        schedule: {
            src: '_/components/views/schedule.haml',
            dest: 'schedule.php'
        },
        venuetravel: {
            src: '_/components/views/venuetravel.haml',
            dest: 'venuetravel.php'
        },
        header: {
            src: '_/components/views/layouts/header.haml',
            dest: '_/views/layouts/header.php'
        },
        footer: {
            src: '_/components/views/layouts/footer.haml',
            dest: '_/views/layouts/footer.php'
        },
        carousel: {
            src: '_/components/views/layouts/snippet-carousel.haml',
            dest: '_/views/layouts/snippet-carousel.php'
        },
        article_intro: {
            src: '_/components/views/layouts/article-intro.haml',
            dest: '_/views/layouts/article-intro.php'
        },
        article_article_about_the_artists: {
            src: '_/components/views/layouts/article-about_the_artists.haml',
            dest: '_/views/layouts/article-about_the_artists.php'
        },
        snippet_artist_photogrid: {
            src: '_/components/views/layouts/snippet-artist_photogrid.haml',
            dest: '_/views/layouts/snippet-artist_photogrid.php'
        },
        article_about_the_venue: {
            src: '_/components/views/layouts/article-about_the_venue.haml',
            dest: '_/views/layouts/article-about_the_venue.php'
        },
        aside_register: {
            src: "_/components/views/layouts/aside-register.haml",
            dest: "_/views/layouts/aside-register.php"
        },
        aside_lastyear: {
            src: '_/components/views/layouts/aside-lastyear.haml',
            dest: '_/views/layouts/aside-lastyear.php'
        }
	},
	less: {
		options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '_/components/styles/working/less.less',
            dest: '_/components/styles/less.css'
        },
		bootstrap: {
			src: '_/components/styles/bootstrap3/bootstrap.less',
            dest: '_/components/styles/bootstrap.css'
		}
	},
	sass: {
		options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			compass: true,
			style: 'expanded',
			debugInfo: false
        },
		build: {
            src: '_/components/styles/working/sass.sass',
            dest: '_/components/styles/sass.css'
        }
	},
	compass: {
		options: {
            sassDir: '_/components/styles',
			cssDir: '_/css'
        }
	},
	watch: { // grunt watch для запуска отслеживания
		views: {
			files: "_/components/views/*.haml",
			tasks: 'haml'
		},
        layouts: {
            files: "_/components/views/layouts/*.haml",
			tasks: 'haml'
        },
        styles: {
            files: "_/components/styles/working/*.sass",
			tasks: ['sass', 'concat:all_css', 'cssmin']
        },
        scripts: {
            files: "_/components/javascripts/working/*.coffee",
			tasks: ['coffee', 'concat:all_js', 'uglify']
        }
	}
  });

  // Load the plugin that provides the "uglify" task.
  //require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'coffee', 'haml', 'less', 'sass', 'compass', 'watch']);

};