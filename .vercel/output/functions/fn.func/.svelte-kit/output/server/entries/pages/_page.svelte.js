import { b as get_store_value, c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { initializeApp } from "firebase/app";
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
const ProgressBar_svelte_svelte_type_style_lang = "";
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
    $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
    $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
    $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
    $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0)
    $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-gewkj4_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-gewkj4_END -->`, ""} <div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)} title="${"Toggle " + escape($modeCurrent === true ? "Dark" : "Light", true) + " Mode"}" tabindex="0"> <div class="${"lightswitch-thumb " + escape(classesThumb, true)}"> <svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const MINUTES = 60;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let difference;
  let days;
  let hours;
  let minutes;
  let seconds;
  let launchDate = Date.parse("2023-10-11T14:05:15+0200") / 1e3;
  let data = /* @__PURE__ */ new Date();
  const HOURS = 60 * MINUTES;
  const DAYS = 24 * HOURS;
  const firebaseConfig = {
    apiKey: "AIzaSyAxsIOu0trroGcktxmKSEA03YsS6RqbSw0",
    authDomain: "car-bones.firebaseapp.com",
    projectId: "car-bones",
    storageBucket: "car-bones.appspot.com",
    messagingSenderId: "1017119946706",
    appId: "1:1017119946706:web:0e0de7154df6a1d6feba0b",
    measurementId: "G-2P0GYLP3CW"
  };
  initializeApp(firebaseConfig);
  difference = launchDate - data.getTime() / 1e3;
  days = Math.floor(difference / DAYS);
  hours = Math.floor(difference % DAYS / HOURS);
  minutes = Math.floor(difference % HOURS / MINUTES);
  seconds = Math.floor(difference % MINUTES);
  return `<div class="p-4"><header class="relative"><div class="grid grid-cols-2 relative md:absolute w-full h-full z-20"><h1 class="flex ml-10 mt-6 lg:text-7xl md:text-6xl text-3xl font-bold text-white" data-svelte-h="svelte-1ustuzj">Carbone</h1> <div class="">${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})} </div> <div class="flex flex-col justify-center md:ml-10 md:col-auto col-span-2 mx-auto mt-20 md:mt-0"> <h3 class="md:text-white font-semibold lg:text-xl md:text-lg text-md mb-8 mt-10 md:mt-0" data-svelte-h="svelte-18f59qa">Lancement prochainement</h3> <div class="flex gap-2"><div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg"><p id="hours" class="lg:text-2xl md:text-xl text-black md:text-white text-center">${escape(days)}</p> <p class="text-center" data-svelte-h="svelte-4vwrb6"><em class="text-xs text-slate-400">jours</em></p></div> <div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg"><p id="hours" class="lg:text-2xl md:text-xl text-black md:text-white text-center">${escape(hours)}</p> <p class="text-center" data-svelte-h="svelte-8e6fyv"><em class="text-xs text-slate-400">heures</em></p></div> <div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg"><p id="minutes" class="lg:text-2xl md:text-xl text-black md:text-white text-center">${escape(minutes)}</p> <p class="text-center" data-svelte-h="svelte-ue209m"><em class="text-xs text-slate-400">minutes</em></p></div> <div class="lg:w-14 w-12 lg:h-14 h-12 bg-slate-300/30 md:bg-slate-100/10 rounded-lg"><p id="seconds" class="lg:text-2xl md:text-xl text-black md:text-white text-center">${escape(seconds)}</p> <p class="text-center" data-svelte-h="svelte-6aa083"><em class="text-xs text-slate-400">secondes</em></p></div></div></div> <div class="flex justify-end md:mr-10 md:-mb-8 m-10 md:my-0 col-span-2 md:col-auto" data-svelte-h="svelte-1cdytgw"><div class="lg:pt-12 md:pt-8 p-4 lg:p-8 md:p-6 lg:w-80 md:w-64 border-4 border-primary-500/50 rounded-lg"><p class="lg:text-xl md:text-lg font-bold text-black md:text-white">Fini le temps perdu à chercher vos factures, tout est regroupé en une application</p> <p class="lg:mt-10 md:mt-6 mt-4 lg:text-lg md:text-md text-slate-400">Carbone vous offre un suivi complet de l&#39;historique de votre véhicule, les réparations réalisées, les contrôles techniques</p></div></div></div> <img src="headPic.jpg" alt="head pic" class="top-0 absolute z-10 md:static">    </header> <div class="mt-16 mb:mt-24 mx-10 lg:mx-36 md:mx-20" data-svelte-h="svelte-1g2ntxs"><h2 class="text-2xl md:text-3xl font-bold mb-8">Présentation du 
			<span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary-500/50 relative inline-block"><span class="relative text-slate-100">projet</span></span></h2> <p class="md:mb-2 md:text-md lg:text-lg">Carbone, est une application dite Progressive WebApp (PWA)</p> <p class="mb-2 md:text-md lg:text-lg">Ce qui signifie que vous pouvez l&#39;utiliser sur n&#39;importe quel appareil de votre choix</p> <p class="text-slate-500">Vous pouvez utiliser cette application comme suivi d&#39;historique, certificat de cession de votre véhicule</p> <p class="text-slate-500">bien entendu, si vous avez plusieurs véhicules, vous pourez y avoir accès en un seul clic</p></div> <p class="mx-10 text-2xl font-bold mb-4 md:text-3xl md:font-bold mt-20 md:mb-8 lg:mx-36 md:mx-20" data-svelte-h="svelte-1cjenqu">Roadmap du projet</p> <div class="p-8 grid lg:grid-cols-2 md:grid-cols-5 md:gap-8 justify-items-center content-center md:mx-auto md:max-w-3xl lg:max-w-5xl" data-svelte-h="svelte-kaadev"><img src="/timeStamp.jpg" alt="imagedoc" class="bg-cover drop-shadow-lg h-full md:w-full lg:col-span-1 md:col-span-3 "> <ol class="mt-4 relative border-l-2 border-primary-500/50 dark:border-gray-700 lg:mr-12 md:mr-4 lg:col-span-1 md:col-span-2 overflow-auto h-full"><li class="lg:mb-10 md:mb-6 ml-4 mt-5 "><div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Juillet 2023</time> <h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Deploiement site internet</h3> <p class="mb-4 lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">Le site apporte une vision détaillé du projet et un support pour son financement participatif</p></li> <li class="lg:mb-10 md:mb-6 ml-4 mt-5"><div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Aout 2023</time> <h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Mise en ligne du POC</h3> <p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">L&#39;accès au POC est réservé aux inscrits et participants de la cagnotte. Il est accessible depuis n&#39;importe quel moteur de recherche.</p></li> <li class="lg:mb-10 md:mb-6 ml-4 mt-5"><div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Septembre 2023</time> <h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Mise en ligne du MVP</h3> <p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">Deploiement de la version (V0), élaboration d&#39;une étude commune avec les participants de la cagnotte. !! Fermeture de la cagnotte !!</p></li> <li class="lg:mb-10 md:mb-6 ml-4 mt-5"><div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Octobre 2023</time> <h3 class="lg:text-lg md:text-md text-sm font-semibold text-gray-900 dark:text-white">Mise en service de l&#39;application</h3> <p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">L&#39;application est maintenant disponible en avant première et gratuite à vie pour tous les participants (version V1.0)</p></li> <li class="ml-4 mt-5"><div class="absolute w-3 h-3 bg-primary-500/50 rounded-full mt-1.5 -left-1.5 border border-primary-500/50 dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 lg:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">Novembre 2023</time> <h3 class="lg:text-lg md:text-md text-base font-semibold text-gray-900 dark:text-white">Lancement de l&#39;application</h3> <p class="lg:text-base text-sm font-normal text-gray-500 dark:text-gray-400">L&#39;application est déployé, ajout de la première fonctionnalité (achat/vente)</p></li></ol></div></div>`;
});
export {
  Page as default
};
