

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b666735d.js","_app/immutable/chunks/scheduler.5ad4c757.js","_app/immutable/chunks/index.2eb253e2.js","_app/immutable/chunks/index.esm.31293e7b.js"];
export const stylesheets = ["_app/immutable/assets/0.e3b0c442.css"];
export const fonts = [];
