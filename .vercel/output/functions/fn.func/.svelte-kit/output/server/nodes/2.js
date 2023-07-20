

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.60e14b95.js","_app/immutable/chunks/scheduler.5ad4c757.js","_app/immutable/chunks/index.2eb253e2.js","_app/immutable/chunks/index.4fb04baf.js","_app/immutable/chunks/index.esm.31293e7b.js"];
export const stylesheets = ["_app/immutable/assets/2.4f1e9ba5.css"];
export const fonts = [];
