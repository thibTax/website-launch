import{s as _e,c as Re,u as Pe,g as Me,d as Oe}from"../chunks/scheduler.5ad4c757.js";import{S as Fe,i as Le,d as $e,t as je}from"../chunks/index.2eb253e2.js";import{r as T,_ as v,C as A,a as C,E as ne,F as ae,g as ie,b as Be,d as Ne,L as xe,i as qe,c as G,e as Ve,v as ze,f as Ge,h as Ue}from"../chunks/index.esm.31293e7b.js";const Ke=(e,t)=>t.some(n=>e instanceof n);let U,K;function We(){return U||(U=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function He(){return K||(K=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const se=new WeakMap,L=new WeakMap,re=new WeakMap,_=new WeakMap,B=new WeakMap;function Ye(e){const t=new Promise((n,a)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{n(g(e.result)),i()},r=()=>{a(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)});return t.then(n=>{n instanceof IDBCursor&&se.set(n,e)}).catch(()=>{}),B.set(t,e),t}function Je(e){if(L.has(e))return;const t=new Promise((n,a)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{n(),i()},r=()=>{a(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)});L.set(e,t)}let $={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return L.get(e);if(t==="objectStoreNames")return e.objectStoreNames||re.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xe(e){$=e($)}function Qe(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(R(this),t,...n);return re.set(a,t.sort?t.sort():[t]),g(a)}:He().includes(e)?function(...t){return e.apply(R(this),t),g(se.get(this))}:function(...t){return g(e.apply(R(this),t))}}function Ze(e){return typeof e=="function"?Qe(e):(e instanceof IDBTransaction&&Je(e),Ke(e,We())?new Proxy(e,$):e)}function g(e){if(e instanceof IDBRequest)return Ye(e);if(_.has(e))return _.get(e);const t=Ze(e);return t!==e&&(_.set(e,t),B.set(t,e)),t}const R=e=>B.get(e);function et(e,t,{blocked:n,upgrade:a,blocking:i,terminated:s}={}){const r=indexedDB.open(e,t),o=g(r);return a&&r.addEventListener("upgradeneeded",c=>{a(g(r.result),c.oldVersion,c.newVersion,g(r.transaction))}),n&&r.addEventListener("blocked",()=>n()),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const tt=["get","getKey","getAll","getAllKeys","count"],nt=["put","add","delete","clear"],P=new Map;function W(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(P.get(t))return P.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,i=nt.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(i||tt.includes(n)))return;const s=async function(r,...o){const c=this.transaction(r,i?"readwrite":"readonly");let u=c.store;return a&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&c.done]))[0]};return P.set(t,s),s}Xe(e=>({...e,get:(t,n,a)=>W(t,n)||e.get(t,n,a),has:(t,n)=>!!W(t,n)||e.has(t,n)}));const oe="@firebase/installations",N="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=1e4,ue=`w:${N}`,le="FIS_v2",at="https://firebaseinstallations.googleapis.com/v1",it=60*60*1e3,st="installations",rt="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},I=new ne(st,rt,ot);function de(e){return e instanceof ae&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe({projectId:e}){return`${at}/projects/${e}/installations`}function pe(e){return{token:e.token,requestStatus:2,expiresIn:ut(e.expiresIn),creationTime:Date.now()}}async function ge(e,t){const a=(await t.json()).error;return I.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function he({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ct(e,{refreshToken:t}){const n=he(e);return n.append("Authorization",lt(t)),n}async function me(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ut(e){return Number(e.replace("s","000"))}function lt(e){return`${le} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=fe(e),i=he(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const r={fid:n,authVersion:le,appId:e.appId,sdkVersion:ue},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await me(()=>fetch(a,o));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:pe(u.authToken)}}else throw await ge("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=/^[cdef][\w-]{21}$/,j="";function gt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ht(e);return pt.test(n)?n:j}catch{return j}}function ht(e){return ft(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Map;function ye(e,t){const n=k(e);be(n,t),mt(n,t)}function be(e,t){const n=we.get(e);if(n)for(const a of n)a(t)}function mt(e,t){const n=It();n&&n.postMessage({key:e,fid:t}),wt()}let m=null;function It(){return!m&&"BroadcastChannel"in self&&(m=new BroadcastChannel("[Firebase] FID Change"),m.onmessage=e=>{be(e.data.key,e.data.fid)}),m}function wt(){we.size===0&&m&&(m.close(),m=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="firebase-installations-database",bt=1,w="firebase-installations-store";let M=null;function x(){return M||(M=et(yt,bt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),M}async function S(e,t){const n=k(e),i=(await x()).transaction(w,"readwrite"),s=i.objectStore(w),r=await s.get(n);return await s.put(t,n),await i.done,(!r||r.fid!==t.fid)&&ye(e,t.fid),t}async function Te(e){const t=k(e),a=(await x()).transaction(w,"readwrite");await a.objectStore(w).delete(t),await a.done}async function D(e,t){const n=k(e),i=(await x()).transaction(w,"readwrite"),s=i.objectStore(w),r=await s.get(n),o=t(r);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!r||r.fid!==o.fid)&&ye(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){let t;const n=await D(e.appConfig,a=>{const i=Tt(a),s=vt(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===j?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Tt(e){const t=e||{fid:gt(),registrationStatus:0};return ve(t)}function vt(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(I.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=At(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:St(e)}:{installationEntry:t}}async function At(e,t){try{const n=await dt(e,t);return S(e.appConfig,n)}catch(n){throw de(n)&&n.customData.serverCode===409?await Te(e.appConfig):await S(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function St(e){let t=await H(e.appConfig);for(;t.registrationStatus===1;)await Ie(100),t=await H(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await q(e);return a||n}return t}function H(e){return D(e,t=>{if(!t)throw I.create("installation-not-found");return ve(t)})}function ve(e){return Et(e)?{fid:e.fid,registrationStatus:0}:e}function Et(e){return e.registrationStatus===1&&e.registrationTime+ce<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct({appConfig:e,heartbeatServiceProvider:t},n){const a=kt(e,n),i=ct(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const r={installation:{sdkVersion:ue,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await me(()=>fetch(a,o));if(c.ok){const u=await c.json();return pe(u)}else throw await ge("Generate Auth Token",c)}function kt(e,{fid:t}){return`${fe(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){let n;const a=await D(e.appConfig,s=>{if(!Ae(s))throw I.create("not-registered");const r=s.authToken;if(!t&&Rt(r))return s;if(r.requestStatus===1)return n=Dt(e,t),s;{if(!navigator.onLine)throw I.create("app-offline");const o=Mt(s);return n=_t(e,o),o}});return n?await n:a.authToken}async function Dt(e,t){let n=await Y(e.appConfig);for(;n.authToken.requestStatus===1;)await Ie(100),n=await Y(e.appConfig);const a=n.authToken;return a.requestStatus===0?V(e,t):a}function Y(e){return D(e,t=>{if(!Ae(t))throw I.create("not-registered");const n=t.authToken;return Ot(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function _t(e,t){try{const n=await Ct(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await S(e.appConfig,a),n}catch(n){if(de(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Te(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await S(e.appConfig,a)}throw n}}function Ae(e){return e!==void 0&&e.registrationStatus===2}function Rt(e){return e.requestStatus===2&&!Pt(e)}function Pt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+it}function Mt(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ot(e){return e.requestStatus===1&&e.requestTime+ce<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e){const t=e,{installationEntry:n,registrationPromise:a}=await q(t);return a?a.catch(console.error):V(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t=!1){const n=e;return await $t(n),(await V(n,t)).token}async function $t(e){const{registrationPromise:t}=await q(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){if(!e||!e.options)throw O("App Configuration");if(!e.name)throw O("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw O(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function O(e){return I.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="installations",Bt="installations-internal",Nt=e=>{const t=e.getProvider("app").getImmediate(),n=jt(t),a=C(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},xt=e=>{const t=e.getProvider("app").getImmediate(),n=C(t,Se).getImmediate();return{getId:()=>Ft(n),getToken:i=>Lt(n,i)}};function qt(){v(new A(Se,Nt,"PUBLIC")),v(new A(Bt,xt,"PRIVATE"))}qt();T(oe,N);T(oe,N,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="analytics",Vt="firebase_id",zt="origin",Gt=60*1e3,Ut="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",z="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new xe("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new ne("analytics","Analytics",Kt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){if(!e.startsWith(z)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return l.warn(t.message),""}return e}function Ee(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ht(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Yt(e,t){const n=Ht("firebase-js-sdk-policy",{createScriptURL:Wt}),a=document.createElement("script"),i=`${z}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function Jt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Xt(e,t,n,a,i,s){const r=a[i];try{if(r)await t[r];else{const c=(await Ee(n)).find(u=>u.measurementId===i);c&&await t[c.appId]}}catch(o){l.error(o)}e("config",i,s)}async function Qt(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const o=await Ee(n);for(const c of r){const u=o.find(h=>h.measurementId===c),f=u&&t[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){l.error(s)}}function Zt(e,t,n,a){async function i(s,...r){try{if(s==="event"){const[o,c]=r;await Qt(e,t,n,o,c)}else if(s==="config"){const[o,c]=r;await Xt(e,t,n,a,o,c)}else if(s==="consent"){const[o]=r;e("consent","update",o)}else if(s==="get"){const[o,c,u]=r;e("get",o,c,u)}else if(s==="set"){const[o]=r;e("set",o)}else e(s,...r)}catch(o){l.error(o)}}return i}function en(e,t,n,a,i){let s=function(...r){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Zt(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function tn(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(z)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=30,an=1e3;class sn{constructor(t={},n=an){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ce=new sn;function rn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function on(e){var t;const{appId:n,apiKey:a}=e,i={method:"GET",headers:rn(a)},s=Ut.replace("{app-id}",n),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let o="";try{const c=await r.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function cn(e,t=Ce,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw d.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw d.create("no-api-key")}const r=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new dn;return setTimeout(async()=>{o.abort()},n!==void 0?n:Gt),ke({appId:a,apiKey:i,measurementId:s},r,o,t)}async function ke(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=Ce){var s;const{appId:r,measurementId:o}=e;try{await un(a,t)}catch(c){if(o)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:r,measurementId:o};throw c}try{const c=await on(e);return i.deleteThrottleMetadata(r),c}catch(c){const u=c;if(!ln(u)){if(i.deleteThrottleMetadata(r),o)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:o};throw c}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?G(n,i.intervalMillis,nn):G(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(r,h),l.debug(`Calling attemptFetch again in ${f} millis`),ke(e,h,a,i)}}function un(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ln(e){if(!(e instanceof ae)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class dn{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function fn(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,r=Object.assign(Object.assign({},a),{send_to:s});e("event",n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(){if(Ve())try{await ze()}catch(e){return l.warn(d.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return l.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gn(e,t,n,a,i,s,r){var o;const c=cn(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>l.error(p)),t.push(c);const u=pn().then(p=>{if(p)return a.getId()}),[f,h]=await Promise.all([c,u]);tn(s)||Yt(s,f.measurementId),i("js",new Date);const b=(o=r==null?void 0:r.config)!==null&&o!==void 0?o:{};return b[zt]="firebase",b.update=!0,h!=null&&(b[Vt]=h),i("config",f.measurementId,b),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.app=t}_delete(){return delete y[this.app.options.appId],Promise.resolve()}}let y={},J=[];const X={};let F="dataLayer",mn="gtag",Q,De,Z=!1;function In(){const e=[];if(qe()&&e.push("This is a browser extension environment."),Ge()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});l.warn(n.message)}}function wn(e,t,n){In();const a=e.options.appId;if(!a)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(y[a]!=null)throw d.create("already-exists",{id:a});if(!Z){Jt(F);const{wrappedGtag:s,gtagCore:r}=en(y,J,X,F,mn);De=s,Q=r,Z=!0}return y[a]=gn(e,J,X,t,Q,F,n),new hn(e)}function yn(e=Be()){e=ie(e);const t=C(e,E);return t.isInitialized()?t.getImmediate():bn(e)}function bn(e,t={}){const n=C(e,E);if(n.isInitialized()){const i=n.getImmediate();if(Ne(t,n.getOptions()))return i;throw d.create("already-initialized")}return n.initialize({options:t})}function Tn(e,t,n,a){e=ie(e),fn(De,y[e.app.options.appId],t,n,a).catch(i=>l.error(i))}const ee="@firebase/analytics",te="0.10.0";function vn(){v(new A(E,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return wn(a,i,n)},"PUBLIC")),v(new A("analytics-internal",e,"PRIVATE")),T(ee,te),T(ee,te,"esm2017");function e(t){try{const n=t.getProvider(E).getImmediate();return{logEvent:(a,i,s)=>Tn(n,a,i,s)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}vn();const An={apiKey:"AIzaSyAxsIOu0trroGcktxmKSEA03YsS6RqbSw0",authDomain:"car-bones.firebaseapp.com",projectId:"car-bones",storageBucket:"car-bones.appspot.com",messagingSenderId:"1017119946706",appId:"1:1017119946706:web:0e0de7154df6a1d6feba0b",measurementId:"G-2P0GYLP3CW"},Sn=Ue(An);yn(Sn);function En(e){let t;const n=e[1].default,a=Re(n,e,e[0],null);return{c(){a&&a.c()},l(i){a&&a.l(i)},m(i,s){a&&a.m(i,s),t=!0},p(i,[s]){a&&a.p&&(!t||s&1)&&Pe(a,n,i,i[0],t?Oe(n,i[0],s,null):Me(i[0]),null)},i(i){t||($e(a,i),t=!0)},o(i){je(a,i),t=!1},d(i){a&&a.d(i)}}}function Cn(e,t,n){let{$$slots:a={},$$scope:i}=t;return e.$$set=s=>{"$$scope"in s&&n(0,i=s.$$scope)},[i,a]}class Rn extends Fe{constructor(t){super(),Le(this,t,Cn,En,_e,{})}}export{Rn as component};
