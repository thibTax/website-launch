

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2b3bbeb3.js","_app/immutable/chunks/scheduler.5ad4c757.js","_app/immutable/chunks/index.2eb253e2.js","_app/immutable/chunks/singletons.7271f531.js","_app/immutable/chunks/index.4fb04baf.js"];
export const stylesheets = [];
export const fonts = [];
