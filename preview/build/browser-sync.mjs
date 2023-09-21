import browserSync from 'browser-sync'

browserSync({
	watch: true,
	server: {
		baseDir: '_site',
		routes: {
			'/node_modules': 'node_modules',
			'/dist/css': `dist/css`,
			'/dist/js': `dist/js`,
			'/dist/img': `dist/img`,
			'/static': `static`,
		},
		port: 3000,
		open: false,
		host: 'localhost',
		notify: false,
		reloadOnRestart: true,
	},
});