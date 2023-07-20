export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","headPic.jpg","lune.png","sun.png","timeStamp.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.bb13f2b1.js","app":"_app/immutable/entry/app.c62bca56.js","imports":["_app/immutable/entry/start.bb13f2b1.js","_app/immutable/chunks/scheduler.5ad4c757.js","_app/immutable/chunks/singletons.7271f531.js","_app/immutable/chunks/index.4fb04baf.js","_app/immutable/entry/app.c62bca56.js","_app/immutable/chunks/scheduler.5ad4c757.js","_app/immutable/chunks/index.2eb253e2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
