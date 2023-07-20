import { c as create_ssr_component } from "../../chunks/ssr.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const app$1 = "";
const firebaseConfig = {
  apiKey: "AIzaSyAxsIOu0trroGcktxmKSEA03YsS6RqbSw0",
  authDomain: "car-bones.firebaseapp.com",
  projectId: "car-bones",
  storageBucket: "car-bones.appspot.com",
  messagingSenderId: "1017119946706",
  appId: "1:1017119946706:web:0e0de7154df6a1d6feba0b",
  measurementId: "G-2P0GYLP3CW"
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
