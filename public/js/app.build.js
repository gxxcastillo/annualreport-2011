/**
 * To build:
 * r.js -o path/to/app.build.js
 *
 * See an example here:
 * https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */
({
	appDir: '../'
    , baseUrl: 'js'

	// Pointer to the runtime, main.js configuration file
	, mainConfigFile: 'main.js'

	// Where to output the build files
	, dir: '../../public_build'

	// This is the default, just making it explicit
	, optimize: 'uglify'
	, inlineText: true
	, useStrict: true

	// Should we namespace?
	//, namespace: 'kv'
	, modules: [
		{
			name: 'main'
		}
    ]
})