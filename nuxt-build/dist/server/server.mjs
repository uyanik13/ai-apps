
// --------------------
// Request: /Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// --------------------
const $id_378ba7f5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const entry = true ? (ctx) => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default(ctx)) : () => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default);
if (false) {
  entry();
}
__vite_ssr_exports__.default = entry;
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/bootstrap.mjs
// Parents: 
// - /Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/app/entry ($id_378ba7f5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/css.mjs ($id_e938eca9)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/root-component.mjs ($id_1d6bf11a)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/app-component.mjs ($id_dce2ff42)
// --------------------
const $id_fef466a9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue/dist/vue.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue/dist/vue.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, () => plugin(nuxtApp)) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/hookable/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/hookable/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/unenv/runtime/mock/proxy.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/unenv/runtime/mock/proxy.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  Object.assign(await res, __vite_ssr_import_0__.toRefs(data));
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue-router/dist/vue-router.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue-router/dist/vue-router.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/murmurhash-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/murmurhash-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/cookie-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/cookie-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/h3/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/h3/dist/index.mjs".') })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/destr/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/destr/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/css.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// --------------------
const $id_e938eca9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/css.mjs ($id_e938eca9)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*\n! tailwindcss v3.0.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: -apple-system, HankenSans, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Commissioner\", \"Source Sans Pro\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #cbd5e0; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #cbd5e0; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #cbd5e0; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n:root {\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity,1));\n  color: hsla(var(--bc) / var(--tw-text-opacity,1));\n}\n\nhtml {\n  -webkit-tap-highlight-color: transparent;\n}\n\n:root {\n  --p: 229 52.4% 36.3%;\n  --pf: 229 52.4% 36.3%;\n  --pc: 0 0% 100%;\n  --s: 345 75.3% 55.5%;\n  --sf: 345 75.3% 55.5%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --af: 174 59.8% 41%;\n  --ac: 0 0% 100%;\n  --n: 219 14.1% 27.8%;\n  --nf: 222 13.4% 19%;\n  --nc: 0 0% 100%;\n  --b1: 227 25.3% 14.7%;\n  --b2: 168 54.6% 76.7%;\n  --b3: 227 20.2% 34.9%;\n  --bc: 0 0% 91%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n}\n\n@media (prefers-color-scheme: dark) {\n\n  :root {\n    --p: 259 94% 61%;\n    --pf: 259 94.4% 51.2%;\n    --pc: 0 0% 100%;\n    --s: 314 100% 47.1%;\n    --sf: 314 100% 37.1%;\n    --sc: 0 0% 100%;\n    --a: 174 60% 51%;\n    --af: 174 59.8% 41%;\n    --ac: 0 0% 100%;\n    --n: 222 13.4% 19%;\n    --nf: 223 13.7% 10%;\n    --nc: 0 0% 100%;\n    --b1: 219 14.1% 27.8%;\n    --b2: 222 13.4% 19%;\n    --b3: 223 13.7% 10%;\n    --bc: 228 14.3% 93.1%;\n    --in: 202 100% 70%;\n    --su: 89 61.6% 52%;\n    --wa: 54 68.8% 63.5%;\n    --er: 0 100% 71.8%;\n    --border-color: var(--b3);\n    --rounded-box: 1rem;\n    --rounded-btn: 0.5rem;\n    --rounded-badge: 1.9rem;\n    --animation-btn: 0.25s;\n    --animation-input: .2s;\n    --btn-text-case: uppercase;\n    --btn-focus-scale: 0.95;\n    --navbar-padding: .5rem;\n    --border-btn: 1px;\n    --tab-border: 1px;\n    --tab-radius: 0.5rem;\n  }\n}\n\n[data-theme=ctw] {\n  --p: 229 52.4% 36.3%;\n  --pf: 229 52.4% 36.3%;\n  --pc: 0 0% 100%;\n  --s: 345 75.3% 55.5%;\n  --sf: 345 75.3% 55.5%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --af: 174 59.8% 41%;\n  --ac: 0 0% 100%;\n  --n: 219 14.1% 27.8%;\n  --nf: 222 13.4% 19%;\n  --nc: 0 0% 100%;\n  --b1: 227 25.3% 14.7%;\n  --b2: 168 54.6% 76.7%;\n  --b3: 227 20.2% 34.9%;\n  --bc: 0 0% 91%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n}\n\n[data-theme=light] {\n  --p: 259 94.4% 51.2%;\n  --pf: 259 94.3% 41%;\n  --pc: 0 0% 100%;\n  --s: 314 100% 47.1%;\n  --sf: 314 100% 37.1%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --af: 174 59.8% 41%;\n  --ac: 0 0% 100%;\n  --n: 219 14.1% 27.8%;\n  --nf: 222 13.4% 19%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 210 20% 98%;\n  --b3: 216 12.2% 83.9%;\n  --bc: 215 27.9% 16.9%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=dark] {\n  --p: 259 94% 61%;\n  --pf: 259 94.4% 51.2%;\n  --pc: 0 0% 100%;\n  --s: 314 100% 47.1%;\n  --sf: 314 100% 37.1%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --af: 174 59.8% 41%;\n  --ac: 0 0% 100%;\n  --n: 222 13.4% 19%;\n  --nf: 223 13.7% 10%;\n  --nc: 0 0% 100%;\n  --b1: 219 14.1% 27.8%;\n  --b2: 222 13.4% 19%;\n  --b3: 223 13.7% 10%;\n  --bc: 228 14.3% 93.1%;\n  --in: 202 100% 70%;\n  --su: 89 61.6% 52%;\n  --wa: 54 68.8% 63.5%;\n  --er: 0 100% 71.8%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=cupcake] {\n  --p: 183 47.4% 59%;\n  --pf: 183 47.2% 49%;\n  --pc: 0 0% 100%;\n  --s: 338 71.4% 78%;\n  --sf: 338 71.8% 68%;\n  --sc: 0 0% 100%;\n  --a: 39 84.1% 58%;\n  --af: 39 83.7% 48%;\n  --ac: 0 0% 100%;\n  --n: 280 46.5% 13.9%;\n  --nf: 279 46.4% 11%;\n  --nc: 0 0% 100%;\n  --b1: 24 33.3% 97.1%;\n  --b2: 27 22% 92%;\n  --b3: 22 14.3% 89%;\n  --bc: 280 46.5% 13.9%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 1.9rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 2px;\n  --tab-radius: .5rem;\n}\n\n[data-theme=bumblebee] {\n  --p: 50 94.4% 58%;\n  --pf: 50 94.3% 47.8%;\n  --pc: 240 33.3% 14.1%;\n  --s: 41 74.2% 52.9%;\n  --sf: 41 73.6% 43.1%;\n  --sc: 0 0% 100%;\n  --a: 240 33.3% 14.1%;\n  --af: 240 33.3% 10%;\n  --ac: 0 0% 100%;\n  --n: 240 33.3% 14.1%;\n  --nf: 240 33.3% 10%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 96.1%;\n  --b3: 0 0% 89%;\n  --bc: 0 0% 0%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=emerald] {\n  --p: 141 50% 60%;\n  --pf: 141 49.8% 50%;\n  --pc: 210 20% 98%;\n  --s: 219 96.1% 60%;\n  --sf: 219 96.1% 50%;\n  --sc: 210 20% 98%;\n  --a: 10 81.2% 56.1%;\n  --af: 10 81.2% 45.9%;\n  --ac: 210 20% 98%;\n  --n: 219 20.3% 25.1%;\n  --nf: 220 19.5% 15.1%;\n  --nc: 210 20% 98%;\n  --b1: 0 0% 100%;\n  --b2: 210 20% 98%;\n  --b3: 0 0% 94.9%;\n  --bc: 219 20.3% 25.1%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 1;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=corporate] {\n  --p: 229 95.7% 63.9%;\n  --pf: 229 95.7% 53.9%;\n  --pc: 233 27.3% 12.9%;\n  --s: 215 26.3% 59%;\n  --sf: 214 26.1% 48.8%;\n  --sc: 233 27.3% 12.9%;\n  --a: 154 49% 60%;\n  --af: 154 49% 50%;\n  --ac: 233 27.3% 12.9%;\n  --n: 233 27.3% 12.9%;\n  --nf: 240 25% 3.1%;\n  --nc: 210 38.5% 94.9%;\n  --b1: 0 0% 100%;\n  --b2: 210 60% 98%;\n  --b3: 210 38.5% 94.9%;\n  --bc: 233 27.3% 12.9%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 1;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=synthwave] {\n  --p: 321 69.6% 69%;\n  --pf: 321 70.3% 59%;\n  --pc: 257 63.2% 17.1%;\n  --sf: 197 87.4% 75.1%;\n  --s: 197 86.6% 64.9%;\n  --sc: 257 63.2% 17.1%;\n  --af: 48 89.3% 67.1%;\n  --a: 48 89% 57.1%;\n  --ac: 257 63.2% 17.1%;\n  --n: 253 60.8% 19%;\n  --nf: 257 64.3% 11%;\n  --nc: 260 60% 98%;\n  --b1: 254 59.1% 25.9%;\n  --b2: 253 60.8% 19%;\n  --b3: 257 64.3% 11%;\n  --bc: 260 60% 98%;\n  --in: 199 87% 63.9%;\n  --su: 168 74.2% 68%;\n  --wa: 48 89% 57.1%;\n  --er: 352 73.6% 56.9%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=retro] {\n  font-family: uisecondaryerif,Georgia,Cambria,Times New Roman,Times,serif;\n  --p: 3 73.8% 76.1%;\n  --pf: 3 73.6% 65.9%;\n  --pc: 345 5.3% 14.9%;\n  --s: 145 27.3% 72%;\n  --sf: 145 26.8% 62%;\n  --sc: 345 5.3% 14.9%;\n  --a: 49 67.2% 76.1%;\n  --af: 49 66.7% 65.9%;\n  --ac: 345 5.3% 14.9%;\n  --n: 42 16.8% 42%;\n  --nf: 41 13.1% 23.9%;\n  --nc: 45 47.1% 80%;\n  --b1: 45 47.1% 80%;\n  --b2: 45 37.1% 72%;\n  --b3: 42 36% 65.1%;\n  --bc: 345 5.3% 14.9%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 0.4rem;\n  --rounded-btn: 0.4rem;\n  --rounded-badge: 0.4rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=cyberpunk] {\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n  --p: 345 100% 72.9%;\n  --pf: 344 100% 67.1%;\n  --pc: 0 0% 0%;\n  --s: 195 80.4% 70%;\n  --sf: 194 65.8% 61%;\n  --sc: 0 0% 0%;\n  --a: 276 74.3% 71%;\n  --af: 276 75.7% 62.9%;\n  --ac: 0 0% 0%;\n  --n: 57 100% 12.9%;\n  --nf: 60 80% 2%;\n  --nc: 56 100% 50%;\n  --b1: 56 100% 50%;\n  --b2: 56 100% 42.9%;\n  --b3: 56 100% 36.1%;\n  --bc: 0 0% 0%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 0;\n  --rounded-btn: 0;\n  --rounded-badge: 0;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0;\n}\n\n[data-theme=valentine] {\n  --p: 353 73.8% 67.1%;\n  --pf: 353 73.6% 56.9%;\n  --pc: 0 0% 100%;\n  --s: 254 86.4% 76.9%;\n  --sf: 254 86.9% 67.1%;\n  --sc: 0 0% 100%;\n  --a: 181 55.6% 70%;\n  --af: 181 54.9% 60%;\n  --ac: 0 0% 100%;\n  --n: 336 42.9% 48%;\n  --nf: 340 40.2% 38%;\n  --nc: 318 46.4% 89%;\n  --b1: 318 46.4% 89%;\n  --b2: 315 58.9% 79%;\n  --b3: 316 62.3% 72.9%;\n  --bc: 344 38.5% 28%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 1.9rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=halloween] {\n  --p: 32 89.3% 52.2%;\n  --pf: 32 88.8% 42%;\n  --pc: 180 7.3% 8%;\n  --s: 271 45.8% 42%;\n  --sf: 271 46% 32%;\n  --sc: 0 0% 100%;\n  --a: 91 100% 32.9%;\n  --af: 91 100% 22.9%;\n  --ac: 0 0% 100%;\n  --n: 180 3.6% 11%;\n  --nf: 180 7.3% 8%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 12.9%;\n  --b2: 180 3.6% 11%;\n  --b3: 180 7.3% 8%;\n  --bc: 0 0% 100%;\n  --in: 202 100% 70%;\n  --su: 89 61.6% 52%;\n  --wa: 54 68.8% 63.5%;\n  --er: 0 100% 71.8%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=garden] {\n  --p: 139 16% 42.9%;\n  --pf: 137 14.8% 33.1%;\n  --pc: 0 0% 100%;\n  --s: 97 37.1% 93.1%;\n  --sf: 98 36.3% 82.2%;\n  --sc: 96 32.5% 15.1%;\n  --a: 0 67.7% 93.9%;\n  --af: 0 71.1% 85.1%;\n  --ac: 0 22% 16.1%;\n  --n: 0 3.9% 35.1%;\n  --nf: 0 3.7% 15.9%;\n  --nc: 0 4.3% 91%;\n  --b1: 0 4.3% 91%;\n  --b2: 0 5.2% 81%;\n  --b3: 0 5.4% 71%;\n  --bc: 0 3.2% 6.1%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=forest] {\n  --p: 141 72% 42%;\n  --pf: 141 71.8% 32%;\n  --pc: 0 0% 100%;\n  --s: 141 74.7% 48%;\n  --sf: 141 75.3% 38%;\n  --sc: 0 0% 100%;\n  --a: 35 69% 52%;\n  --af: 35 69.2% 42%;\n  --ac: 0 0% 100%;\n  --n: 0 9.7% 6.1%;\n  --nf: 0 20% 2%;\n  --nc: 0 0% 100%;\n  --b1: 0 12.2% 8%;\n  --b2: 0 9.7% 6.1%;\n  --b3: 0 20% 2%;\n  --bc: 0 0% 100%;\n  --rounded-btn: 0.5rem;\n  --in: 202 100% 70%;\n  --su: 89 61.6% 52%;\n  --wa: 54 68.8% 63.5%;\n  --er: 0 100% 71.8%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=aqua] {\n  --p: 189 100% 62.9%;\n  --pf: 189 100% 52.9%;\n  --pc: 0 0% 0%;\n  --s: 274 30.9% 56.9%;\n  --sf: 274 30.8% 47.1%;\n  --sc: 0 0% 100%;\n  --a: 47 100% 80%;\n  --af: 47 100% 70%;\n  --ac: 0 0% 100%;\n  --n: 231 77.4% 32.9%;\n  --nf: 231 67.6% 29%;\n  --nc: 0 0% 100%;\n  --b1: 231 88.7% 38%;\n  --b2: 231 77.4% 32.9%;\n  --b3: 231 67.6% 29%;\n  --bc: 0 0% 100%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=lofi] {\n  --p: 0 0% 50.2%;\n  --pf: 0 0% 45.1%;\n  --pc: 240 4% 95.1%;\n  --s: 0 0% 30.2%;\n  --sf: 0 0% 25.1%;\n  --sc: 240 4% 95.1%;\n  --a: 0 0% 10.2%;\n  --af: 0 0% 5.1%;\n  --ac: 240 4% 95.1%;\n  --n: 240 4% 95.1%;\n  --nf: 240 5.9% 90%;\n  --nc: 0 0% 30.2%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 100%;\n  --b3: 0 0% 100%;\n  --bc: 0 0% 49%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: #e6e6e6;\n  --rounded-box: 0;\n  --rounded-btn: 0;\n  --rounded-badge: 0;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 1;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0;\n}\n\n[data-theme=lofi] *:where(.btn) {\n  border-color: var(--border-color) !important;\n  --tw-border-opacity: 1 !important;\n  --tw-text-opacity: 1 !important;\n  --tw-shadow: 0 0 0 1px var(--border-color) !important;\n}\n\n[data-theme=lofi] *:where(.card) {\n  border-color: var(--border-color) !important;\n  --tw-border-opacity: 1 !important;\n  --tw-text-opacity: 1 !important;\n  --tw-shadow: 0 0 0 1px var(--border-color) !important;\n}\n\n[data-theme=pastel] {\n  --p: 284 21.6% 80%;\n  --pf: 282 21.6% 70%;\n  --pc: 0 0% 0%;\n  --s: 352 70.5% 88%;\n  --sf: 352 69.6% 78%;\n  --sc: 0 0% 100%;\n  --a: 158 54.6% 81%;\n  --af: 158 55.4% 71%;\n  --ac: 0 0% 100%;\n  --n: 199 43.7% 61%;\n  --nf: 199 44% 51%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 210 20% 98%;\n  --b3: 216 12.2% 83.9%;\n  --bc: 206 3.1% 55.1%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --rounded-box: 1rem;\n  --rounded-btn: 1.9rem;\n  --rounded-badge: 1.9rem;\n  --border-color: var(--b3);\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=fantasy] {\n  --p: 296 82.8% 25.1%;\n  --pf: 296 81.8% 15.1%;\n  --pc: 0 0% 100%;\n  --s: 200 100% 37.1%;\n  --sf: 200 100% 27.1%;\n  --sc: 0 0% 100%;\n  --a: 31 94.4% 51.2%;\n  --af: 31 94.3% 41%;\n  --ac: 0 0% 100%;\n  --n: 215 27.9% 16.9%;\n  --nf: 221 39.3% 11%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 210 20% 98%;\n  --b3: 216 12.2% 83.9%;\n  --bc: 215 27.9% 16.9%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=wireframe] {\n  font-family: Chalkboard,comic sans ms,\"sanssecondaryerif\";\n  --p: 0 0% 72.2%;\n  --pf: 0 0% 72.2%;\n  --pc: 0 0% 0%;\n  --s: 0 0% 72.2%;\n  --sf: 0 0% 72.2%;\n  --sc: 0 0% 0%;\n  --a: 0 0% 72.2%;\n  --af: 0 0% 72.2%;\n  --ac: 0 0% 0%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 93.3%;\n  --b3: 0 0% 86.7%;\n  --bc: 0 0% 0%;\n  --n: 0 0% 92.2%;\n  --nf: 0 0% 92.2%;\n  --nc: 0 0% 0%;\n  --in: 240 100% 50%;\n  --su: 120 100% 25.1%;\n  --wa: 60 30.2% 50%;\n  --er: 0 100% 50%;\n  --border-color: #000000;\n  --rounded-box: 0.2rem;\n  --rounded-btn: 0.2rem;\n  --rounded-badge: 0.2rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.2rem;\n}\n\n[data-theme=wireframe] * {\n  border-color: var(--border-color) !important;\n  --tw-border-opacity: 1 !important;\n  --tw-text-opacity: 1 !important;\n  --tw-shadow: 0 0 0 1px var(--border-color) !important;\n}\n\n[data-theme=black] {\n  --p: 0 0% 100%;\n  --pf: 0 0% 100%;\n  --pc: 0 0% 0%;\n  --s: 0 0% 100%;\n  --sf: 0 0% 100%;\n  --sc: 0 0% 0%;\n  --a: 0 0% 100%;\n  --af: 0 0% 100%;\n  --ac: 0 0% 0%;\n  --b1: 0 0% 0%;\n  --b2: 0 0% 20%;\n  --b3: 0 0% 30.2%;\n  --bc: 0 0% 100%;\n  --n: 0 0% 20%;\n  --nf: 0 0% 30.2%;\n  --nc: 0 0% 100%;\n  --in: 240 100% 50%;\n  --su: 120 100% 25.1%;\n  --wa: 60 100% 50%;\n  --er: 0 100% 50%;\n  --border-color: var(--b3);\n  --rounded-box: 0;\n  --rounded-btn: 0;\n  --rounded-badge: 0;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-text-case: lowercase;\n  --btn-focus-scale: 1;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0;\n}\n\n[data-theme=luxury] {\n  --p: 0 0% 100%;\n  --pf: 0 0% 90.2%;\n  --pc: 0 0% 0%;\n  --s: 218 54.3% 18%;\n  --sf: 219 56.1% 8%;\n  --sc: 0 0% 100%;\n  --a: 319 21.8% 26.1%;\n  --af: 320 22% 16.1%;\n  --ac: 0 0% 100%;\n  --n: 270 4.3% 9%;\n  --nf: 270 2.2% 18%;\n  --nc: 37 67.3% 58%;\n  --b1: 240 10% 3.9%;\n  --b2: 270 4.3% 9%;\n  --b3: 270 2.2% 18%;\n  --bc: 37 67.3% 58%;\n  --in: 202 100% 70%;\n  --su: 89 61.6% 52%;\n  --wa: 54 68.8% 63.5%;\n  --er: 0 100% 71.8%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n\n[data-theme=dracula] {\n  --p: 330 100% 85.1%;\n  --pf: 330 100% 75.1%;\n  --pc: 233 12.1% 12.9%;\n  --s: 115 100% 85.1%;\n  --sf: 115 100% 75.1%;\n  --sc: 233 12.1% 12.9%;\n  --a: 60 100% 85.1%;\n  --af: 60 100% 75.1%;\n  --ac: 233 12.1% 12.9%;\n  --n: 245 14.3% 15.1%;\n  --nf: 233 12.1% 12.9%;\n  --nc: 251 100% 90%;\n  --b1: 244 13% 21.2%;\n  --b2: 245 14.3% 15.1%;\n  --b3: 233 12.1% 12.9%;\n  --bc: 251 100% 90%;\n  --in: 207 89.8% 53.9%;\n  --su: 174 100% 29%;\n  --wa: 36 100% 50%;\n  --er: 14 100% 57.1%;\n  --border-color: var(--b3);\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --navbar-padding: .5rem;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n}\n  /* h1 {\n    @apply font-bold text-8;\n  }\n  h2 {\n    @apply font-bold text-7;\n  }\n  h3 {\n    @apply font-bold text-6;\n  }\n  h4 {\n    @apply font-semibold text-5;\n  }\n  h5 {\n    @apply text-4.5 font-semibold;\n  } */\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-color: currentColor;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(66 153 225 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  --tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.container {\n  width: 100%;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n@media (min-width: 576px) {\n\n  .container {\n    max-width: 576px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 992px) {\n\n  .container {\n    max-width: 992px;\n  }\n}\n@media (min-width: 1200px) {\n\n  .container {\n    max-width: 1200px;\n  }\n}\n.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n.prose :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n.prose :where(a):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.prose :where(strong):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n.prose :where(ol):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: decimal;\n  padding-left: 1.625em;\n}\n.prose :where(ol[type=\"A\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=\"a\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=\"A\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=\"a\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=\"I\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=\"i\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=\"I\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=\"i\" s]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=\"1\"]):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: decimal;\n}\n.prose :where(ul):not(:where([class~=\"not-prose\"] *)) {\n  list-style-type: disc;\n  padding-left: 1.625em;\n}\n.prose :where(ol > li):not(:where([class~=\"not-prose\"] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n.prose :where(ul > li):not(:where([class~=\"not-prose\"] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n.prose :where(hr):not(:where([class~=\"not-prose\"] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n.prose :where(blockquote):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}\n.prose :where(blockquote p:first-of-type):not(:where([class~=\"not-prose\"] *))::before {\n  content: open-quote;\n}\n.prose :where(blockquote p:last-of-type):not(:where([class~=\"not-prose\"] *))::after {\n  content: close-quote;\n}\n.prose :where(h1):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n.prose :where(h1 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 900;\n}\n.prose :where(h2):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n.prose :where(h2 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 800;\n}\n.prose :where(h3):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n.prose :where(h3 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 700;\n}\n.prose :where(h4):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n.prose :where(h4 strong):not(:where([class~=\"not-prose\"] *)) {\n  font-weight: 700;\n}\n.prose :where(figure > *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(figcaption):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n.prose :where(code):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n.prose :where(code):not(:where([class~=\"not-prose\"] *))::before {\n  content: \"`\";\n}\n.prose :where(code):not(:where([class~=\"not-prose\"] *))::after {\n  content: \"`\";\n}\n.prose :where(a code):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-links);\n}\n.prose :where(pre):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}\n.prose :where(pre code):not(:where([class~=\"not-prose\"] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n.prose :where(pre code):not(:where([class~=\"not-prose\"] *))::before {\n  content: none;\n}\n.prose :where(pre code):not(:where([class~=\"not-prose\"] *))::after {\n  content: none;\n}\n.prose :where(table):not(:where([class~=\"not-prose\"] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n.prose :where(thead):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n.prose :where(thead th):not(:where([class~=\"not-prose\"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody tr):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n.prose :where(tbody tr:last-child):not(:where([class~=\"not-prose\"] *)) {\n  border-bottom-width: 0;\n}\n.prose :where(tbody td):not(:where([class~=\"not-prose\"] *)) {\n  vertical-align: baseline;\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n.prose :where(p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(video):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(figure):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(h2 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.875em;\n}\n.prose :where(h3 code):not(:where([class~=\"not-prose\"] *)) {\n  font-size: 0.9em;\n}\n.prose :where(li):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.prose :where(ol > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(ul > li):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0.375em;\n}\n.prose > :where(ul > li p):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose > :where(ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n}\n.prose > :where(ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.25em;\n}\n.prose > :where(ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 1.25em;\n}\n.prose > :where(ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(hr + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(h2 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(h3 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(h4 + *):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}\n.prose :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}\n.prose :where(tbody td:first-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-left: 0;\n}\n.prose :where(tbody td:last-child):not(:where([class~=\"not-prose\"] *)) {\n  padding-right: 0;\n}\n.prose > :where(:first-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-top: 0;\n}\n.prose > :where(:last-child):not(:where([class~=\"not-prose\"] *)) {\n  margin-bottom: 0;\n}\n.alert>:not([hidden])~:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem*(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem*var(--tw-space-y-reverse));\n}\n.alert {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2) / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n  border-radius: var(--rounded-box, 1rem);\n}\n@media (min-width:768px) {\n\n  .alert>:not([hidden])~:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px*(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px*var(--tw-space-y-reverse));\n  }\n\n  .alert {\n    flex-direction: row;\n  }\n}\n.alert>* {\n  display: flex;\n}\n.avatar {\n  display: inline-flex;\n  position: relative;\n}\n.avatar>div {\n  display: block;\n  overflow: hidden;\n}\n.avatar img {\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  width: 100%;\n}\n.avatar.placeholder>div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn {\n  border-color: hsla(var(--n) / var(--tw-border-opacity, 1));\n  cursor: pointer;\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  border-radius: var(--rounded-btn, .5rem);\n  height: 3rem;\n  font-size: .875rem;\n  line-height: 1em;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  min-height: 3rem;\n  font-weight: 600;\n  text-transform: var(--btn-text-case, uppercase);\n  border-width: var(--border-btn, 1px);\n  -webkit-animation: button-pop var(--animation-btn, .25s) ease-out;\n  animation: button-pop var(--animation-btn, .25s) ease-out;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--n) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc) / var(--tw-text-opacity, 1));\n}\n.btn:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.btn-disabled,.btn[disabled] {\n  pointer-events: none;\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--n) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 0;\n  --tw-text-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n.btn.loading,.btn.loading:hover {\n  pointer-events: none;\n}\n.btn.loading:before {\n  border-radius: 9999px;\n  border-width: 2px;\n  height: 1rem;\n  margin-right: .5rem;\n  width: 1rem;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  content: \"\";\n  border-color: transparent currentColor currentColor transparent;\n}\n@media (prefers-reduced-motion:reduce) {\n\n  .btn.loading:before {\n    -webkit-animation: spin 10s linear infinite;\n    animation: spin 10s linear infinite;\n  }\n}\n@-webkit-keyframes spin {\n\n  0% {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes spin {\n\n  0% {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(1turn);\n  }\n}\n.btn-group>input[type=radio].btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.btn-group>input[type=radio].btn:before {\n  content: attr(data-title);\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  border-radius: var(--rounded-box, 1rem);\n}\n.card:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: var(--padding-card, 2rem);\n}\n.card figure,.card figure>* {\n  width: 100%;\n}\n.card.image-full {\n  display: grid;\n}\n.card.image-full:before {\n  position: relative;\n  content: \"\";\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--n) / var(--tw-bg-opacity, 1));\n  opacity: .75;\n  z-index: 10;\n  border-radius: var(--rounded-box, 1rem);\n}\n.card.image-full:before,.card.image-full>* {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\n.card.image-full>figure img {\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.card.image-full>.card-body {\n  position: relative;\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc) / var(--tw-text-opacity, 1));\n  z-index: 20;\n}\n.checkbox:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.dropdown {\n  display: inline-block;\n  position: relative;\n}\n.dropdown>:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.dropdown .dropdown-content {\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n  z-index: 50;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform-origin: top;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n}\n.dropdown-end .dropdown-content {\n  right: 0;\n}\n.dropdown-left .dropdown-content {\n  top: 0;\n  bottom: auto;\n  right: 100%;\n  transform-origin: right;\n}\n.dropdown-right .dropdown-content {\n  top: 0;\n  bottom: auto;\n  left: 100%;\n  transform-origin: left;\n}\n.dropdown-top .dropdown-content {\n  top: auto;\n  bottom: 100%;\n  transform-origin: bottom;\n}\n.dropdown-end.dropdown-right .dropdown-content {\n  bottom: 0;\n  top: auto;\n}\n.dropdown-end.dropdown-left .dropdown-content {\n  bottom: 0;\n  top: auto;\n}\n.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:not(.dropdown-hover):focus-within .dropdown-content,.dropdown:not(.dropdown-hover):focus .dropdown-content {\n  opacity: 1;\n  visibility: visible;\n}\n.footer {\n  display: grid;\n  place-items: start;\n  width: 100%;\n  grid-auto-flow: row;\n  font-size: .875rem;\n  line-height: 1.25rem;\n  -moz-column-gap: 1rem;\n  column-gap: 1rem;\n  row-gap: 2.5rem;\n}\n.footer>* {\n  display: grid;\n  place-items: start;\n  gap: .5rem;\n}\n@media (min-width:48rem) {\n\n  .footer {\n    grid-auto-flow: column;\n  }\n\n  .footer-center {\n    grid-auto-flow: row dense;\n  }\n}\n.form-control {\n  display: flex;\n  flex-direction: column;\n}\n.label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding: .5rem .25rem;\n}\n.input {\n  flex-shrink: 1;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  height: 3rem;\n  font-size: .875rem;\n  line-height: 2;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 0;\n  border-color: hsla(var(--bc) / var(--tw-border-opacity, 1));\n  border-width: 1px;\n  border-radius: var(--rounded-btn, .5rem);\n}\n.input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsla(var(--bc) / .2);\n}\n.input-group>*,.input-group>.input {\n  border-radius: 0;\n}\n.link {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.menu {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.\\!menu {\n  display: flex !important;\n  flex-direction: column !important;\n  overflow: hidden !important;\n}\n.menu.horizontal {\n  display: inline-flex;\n  flex-direction: row;\n}\n.\\!menu.\\!horizontal {\n  display: inline-flex !important;\n  flex-direction: row !important;\n}\n.menu.horizontal :where(li) {\n  flex-direction: row;\n}\n.\\!menu.\\!horizontal :where(li) {\n  flex-direction: row !important;\n}\n.menu :where(li) {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.\\!menu :where(li) {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: stretch !important;\n}\n.menu :where(li)>a,.menu :where(li)>span {\n  display: flex;\n  align-items: center;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n}\n.\\!menu :where(li)>a,.\\!menu :where(li)>span {\n  display: flex !important;\n  align-items: center !important;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform !important;\n  transition-duration: .2s !important;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1) !important;\n}\n.menu :where(li)>a {\n  cursor: pointer;\n}\n.\\!menu :where(li)>a {\n  cursor: pointer !important;\n}\n.menu :where(li)>a:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.\\!menu :where(li)>a:focus {\n  outline: 2px solid transparent !important;\n  outline-offset: 2px !important;\n}\n.menu :where(li).disabled>a,.menu :where(li).disabled>span {\n  cursor: auto;\n}\n.\\!menu :where(li).\\!disabled>a,.\\!menu :where(li).\\!disabled>span {\n  cursor: auto !important;\n}\n.select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  height: 3rem;\n  font-size: .875rem;\n  line-height: 2;\n  padding-left: 1rem;\n  padding-right: 2.5rem;\n  min-height: 3rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 0;\n  border-color: hsla(var(--bc) / var(--tw-border-opacity, 1));\n  border-width: 1px;\n  font-weight: 600;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  border-radius: var(--rounded-btn, .5rem);\n  background-image: linear-gradient(45deg, transparent 50%, currentColor 0),\n    linear-gradient(135deg, currentColor 50%, transparent 0);\n  background-position: calc(100% - 20px) calc(1px + 50%),\n    calc(100% - 16px) calc(1px + 50%);\n  background-size: 4px 4px,\n    4px 4px;\n  background-repeat: no-repeat;\n}\n.select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsla(var(--bc) / .2);\n}\n.select-disabled,.select[disabled] {\n  pointer-events: none;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2) / var(--tw-border-opacity, 1));\n  cursor: not-allowed;\n  --tw-text-opacity: 0.2;\n}\n.tab {\n  cursor: pointer;\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  height: 2rem;\n  font-size: .875rem;\n  line-height: 2;\n  --tab-padding: 1rem;\n  --tw-text-opacity: 0.5;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n  padding-left: var(--tab-padding, 1rem);\n  padding-right: var(--tab-padding, 1rem);\n}\n.textarea {\n  flex-shrink: 1;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  font-size: .875rem;\n  line-height: 2;\n  padding: .5rem 1rem;\n  min-height: 3rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 0;\n  border-color: hsla(var(--bc) / var(--tw-border-opacity, 1));\n  border-width: 1px;\n  border-radius: var(--rounded-btn, .5rem);\n}\n.textarea:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsla(var(--bc) / .2);\n}\n.toggle:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.avatar-group .avatar {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b1) / var(--tw-border-opacity, 1));\n  border-radius: 9999px;\n  border-width: 4px;\n  overflow: hidden;\n}\n.btn .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));\n  border-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n.btn .badge-outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--b2) / var(--tw-text-opacity, 1));\n}\n.btn-outline.btn-primary .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.btn-outline .badge.outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--nf) / var(--tw-border-opacity, 1));\n}\n.btn-outline.btn-primary .badge-outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--p) / var(--tw-text-opacity, 1));\n}\n.btn-outline:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc) / var(--tw-text-opacity, 1));\n}\n.btn-outline.btn-primary:hover .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pc) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pc) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--p) / var(--tw-text-opacity, 1));\n}\n.btn-outline.btn-primary:hover .badge.outline {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pc) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.btn-outline.btn-secondary:hover .badge.outline {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--sf) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--sc) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--sc) / var(--tw-text-opacity, 1));\n}\n.btn-outline.btn-accent:hover .badge.outline {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--af) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--ac) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--ac) / var(--tw-text-opacity, 1));\n}\n.btn:active:focus,.btn:active:hover {\n  -webkit-animation: none;\n  animation: none;\n  transform: scale( var(--btn-focus-scale, .95) );\n}\n.btn-active,.btn:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--nf) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--nf) / var(--tw-border-opacity, 1));\n}\n.btn:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--nf));\n}\n.btn-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.btn-primary.btn-active,.btn-primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pf) / var(--tw-border-opacity, 1));\n}\n.btn-primary:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));\n}\n.btn.glass.btn-active,.btn.glass:hover {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}\n.btn.glass:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n.btn-ghost {\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 1px;\n  color: currentColor;\n}\n.btn-ghost.btn-active,.btn-ghost:hover {\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--bc) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 0;\n}\n.btn-ghost:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n.btn-outline.btn-primary {\n  --tw-text-opacity: 1;\n  color: hsla(var(--p) / var(--tw-text-opacity, 1));\n}\n.btn-outline.btn-primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pf) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.btn.loading.btn-circle:before,.btn.loading.btn-square:before {\n  margin-right: 0;\n}\n.btn.loading.btn-lg:before,.btn.loading.btn-xl:before {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n.btn.loading.btn-sm:before,.btn.loading.btn-xs:before {\n  height: .75rem;\n  width: .75rem;\n}\n.btn-group>.btn-active,.btn-group>input[type=radio]:checked.btn {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.btn-group>.btn-active:focus-visible,.btn-group>input[type=radio]:checked.btn:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));\n}\n.btn-group>.btn:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n.btn-group>.btn:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n@-webkit-keyframes button-pop {\n\n  0% {\n    transform: scale( var(--btn-focus-scale, .95) );\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes button-pop {\n\n  0% {\n    transform: scale( var(--btn-focus-scale, .95) );\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  to {\n    transform: scale(1);\n  }\n}\n.card:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n.card.bordered {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2) / var(--tw-border-opacity, 1));\n  border-width: 1px;\n}\n.card.compact .card-body {\n  font-size: .875rem;\n  line-height: 1.25rem;\n  padding: 1rem;\n}\n.card.compact .card-title {\n  margin-bottom: .25rem;\n}\n.checkbox {\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  --tw-border-opacity: 0.2;\n  border-color: hsla(var(--bc) / var(--tw-border-opacity, 1));\n  border-width: 1px;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: var(--rounded-btn, .5rem);\n}\n.checkbox:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--bc));\n}\n.checkbox:checked,.checkbox[checked=true] {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--bc) / var(--tw-bg-opacity, 1));\n  background-repeat: no-repeat;\n  -webkit-animation: checkmark var(--animation-input, .2s)  ease-in-out;\n  animation: checkmark var(--animation-input, .2s)  ease-in-out;\n  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 0), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 0), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 0), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 0, hsl(var(--chkfg)) 40%, transparent 0), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 0);\n}\n.checkbox:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--bc) / var(--tw-bg-opacity, 1));\n  border-color: transparent;\n  cursor: not-allowed;\n  opacity: .2;\n}\n@-webkit-keyframes checkmark {\n\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  to {\n    background-position-y: 0;\n  }\n}\n@keyframes checkmark {\n\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  to {\n    background-position-y: 0;\n  }\n}\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-primary {\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));\n}\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.glass {\n  box-shadow: 0 0 0 2px currentColor;\n}\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-ghost {\n  box-shadow: 0 0 0 2px currentColor;\n}\n.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:focus-within .dropdown-content,.dropdown:focus .dropdown-content {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n.label-text {\n  font-size: .875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n.label a:hover {\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n.input-disabled,.input[disabled] {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2) / var(--tw-border-opacity, 1));\n  cursor: not-allowed;\n  --tw-text-opacity: 0.2;\n}\n.input-disabled::-moz-placeholder,.input[disabled]::-moz-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.input-disabled:-ms-input-placeholder,.input[disabled]:-ms-input-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.input-disabled::-moz-placeholder, .input[disabled]::-moz-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.input-disabled:-ms-input-placeholder, .input[disabled]:-ms-input-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.input-disabled::placeholder,.input[disabled]::placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.link:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.link:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n.menu.horizontal li.bordered>a,.menu.horizontal li.bordered>span {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n  border-left-width: 0;\n  border-bottom-width: 4px;\n}\n.\\!menu.\\!horizontal li.\\!bordered>a,.\\!menu.\\!horizontal li.\\!bordered>span {\n  --tw-border-opacity: 1 !important;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1)) !important;\n  border-left-width: 0 !important;\n  border-bottom-width: 4px !important;\n}\n.menu[class*=p-] li a {\n  border-radius: var(--rounded-btn, .5rem);\n}\n.\\!menu[class*=p-] li a {\n  border-radius: var(--rounded-btn, .5rem) !important;\n}\n.menu li>:where(a),.menu li>:where(span) {\n  padding: .75rem 1.25rem;\n  color: currentColor;\n}\n.\\!menu li>:where(a),.\\!menu li>:where(span) {\n  padding: .75rem 1.25rem !important;\n  color: currentColor !important;\n}\n.menu li>:where(a:focus),.menu li>:where(a:hover) {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--bc) / var(--tw-bg-opacity, 1));\n}\n.\\!menu li>:where(a:focus),.\\!menu li>:where(a:hover) {\n  --tw-bg-opacity: 0.1 !important;\n  background-color: hsla(var(--bc) / var(--tw-bg-opacity, 1)) !important;\n}\n.menu li>:where(a.active) {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.\\!menu li>:where(a.\\!active) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity, 1)) !important;\n  --tw-text-opacity: 1 !important;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1)) !important;\n}\n.menu li>:where(a:active) {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf) / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.\\!menu li>:where(a:active) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsla(var(--pf) / var(--tw-bg-opacity, 1)) !important;\n  --tw-text-opacity: 1 !important;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1)) !important;\n}\n.menu li.disabled>a:hover,.menu li.disabled>span:hover {\n  background-color: transparent;\n}\n.\\!menu li.\\!disabled>a:hover,.\\!menu li.\\!disabled>span:hover {\n  background-color: transparent !important;\n}\n.menu li.disabled>a,.menu li.disabled>span {\n  --tw-text-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n.\\!menu li.\\!disabled>a,.\\!menu li.\\!disabled>span {\n  --tw-text-opacity: 0.2 !important;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1)) !important;\n}\n.menu li.bordered a,.menu li.bordered span {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n  border-left-width: 4px;\n}\n.\\!menu li.\\!bordered a,.\\!menu li.\\!bordered span {\n  --tw-border-opacity: 1 !important;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1)) !important;\n  border-left-width: 4px !important;\n}\n.menu li.hover-bordered a {\n  border-color: transparent;\n  border-left-width: 4px;\n}\n.\\!menu li.\\!hover-bordered a {\n  border-color: transparent !important;\n  border-left-width: 4px !important;\n}\n.menu li.hover-bordered a:hover {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n}\n.\\!menu li.\\!hover-bordered a:hover {\n  --tw-border-opacity: 1 !important;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1)) !important;\n}\n.menu ul {\n  padding-left: 1.5rem;\n}\n.\\!menu ul {\n  padding-left: 1.5rem !important;\n}\n.menu.compact li>a,.menu.compact li>span {\n  font-size: .875rem;\n  line-height: 1.25rem;\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n}\n.\\!menu.\\!compact li>a,.\\!menu.\\!compact li>span {\n  font-size: .875rem !important;\n  line-height: 1.25rem !important;\n  padding-top: .5rem !important;\n  padding-bottom: .5rem !important;\n}\n.menu .menu-title>a,.menu .menu-title>span {\n  font-weight: 700;\n  font-size: .75rem;\n  line-height: 1rem;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  --tw-text-opacity: 0.4;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n.\\!menu .\\!menu-title>a,.\\!menu .\\!menu-title>span {\n  font-weight: 700 !important;\n  font-size: .75rem !important;\n  line-height: 1rem !important;\n  padding-top: .25rem !important;\n  padding-bottom: .25rem !important;\n  --tw-text-opacity: 0.4 !important;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1)) !important;\n}\n.mockup-phone .display {\n  overflow: hidden;\n  border-radius: 40px;\n  margin-top: -25px;\n}\n@-webkit-keyframes radiomark {\n\n  0% {\n    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset, var(--focus-shadow);\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset, var(--focus-shadow);\n  }\n\n  to {\n    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset, var(--focus-shadow);\n  }\n}\n@keyframes radiomark {\n\n  0% {\n    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset, var(--focus-shadow);\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset, var(--focus-shadow);\n  }\n\n  to {\n    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset, var(--focus-shadow);\n  }\n}\n.select-bordered {\n  --tw-border-opacity: 0.2;\n}\n.select-disabled::-moz-placeholder,.select[disabled]::-moz-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.select-disabled:-ms-input-placeholder,.select[disabled]:-ms-input-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.select-disabled::-moz-placeholder, .select[disabled]::-moz-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.select-disabled:-ms-input-placeholder, .select[disabled]:-ms-input-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.select-disabled::placeholder,.select[disabled]::placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.tab:hover {\n  --tw-text-opacity: 1;\n}\n.tab.tab-active {\n  border-color: hsla(var(--bc) / var(--tw-border-opacity, 1));\n  --tw-border-opacity: 1;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n.tab:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.tab:focus-visible {\n  box-shadow: inset 0 0 0 2px currentColor;\n}\n.table tr.active:nth-child(2n) td,.table tr.active:nth-child(2n) th,.table tr.active td,.table tr.active th {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b3) / var(--tw-bg-opacity, 1));\n}\n.textarea-bordered {\n  --tw-border-opacity: 0.2;\n}\n.textarea-primary {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n}\n.textarea-primary:focus {\n  box-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));\n}\n.textarea-disabled,.textarea[disabled] {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2) / var(--tw-border-opacity, 1));\n  cursor: not-allowed;\n  --tw-text-opacity: 0.2;\n}\n.textarea-disabled::-moz-placeholder,.textarea[disabled]::-moz-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.textarea-disabled:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.textarea-disabled::-moz-placeholder, .textarea[disabled]::-moz-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.textarea-disabled:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.textarea-disabled::placeholder,.textarea[disabled]::placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc) / var(--tw-placeholder-opacity, 1));\n}\n.toggle {\n  --chkbg: hsla(var(--bc) / .2);\n  --focus-shadow: 0 0 0;\n  --handleoffset: 1.5rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--bc) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 0.2;\n  border-color: hsla(var(--bc) / var(--tw-border-opacity, 1));\n  border-width: 1px;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 3rem;\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  transition-duration: .3s;\n  border-radius: var(--rounded-badge, 1.9rem);\n  transition: background,box-shadow var(--animation-input, .2s) ease-in-out;\n  box-shadow: calc(var(--handleoffset)*-1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset, var(--focus-shadow);\n}\n.toggle:focus-visible {\n  --focus-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--bc));\n}\n.toggle:checked,.toggle[checked=true] {\n  --chkbg: hsl(var(--bc));\n  --tw-bg-opacity: 1;\n  --tw-border-opacity: 1;\n  box-shadow: var(--handleoffset) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset, var(--focus-shadow);\n}\n[dir=rtl] .toggle:checked,[dir=rtl] .toggle[checked=true] {\n  box-shadow: calc(var(--handleoffset)*1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset, var(--focus-shadow);\n}\n.toggle-primary:focus-visible {\n  --focus-shadow: 0 0 0 2px hsl(var(--b1)), 0 0 0 4px hsl(var(--p));\n}\n.toggle-primary:checked,.toggle-primary[checked=true] {\n  --chkbg: hsl(var(--p));\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity, 1));\n  --tw-border-opacity: 0.1;\n  border-color: hsla(var(--p) / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity, 1));\n}\n.toggle:disabled {\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--bc) / var(--tw-bg-opacity, 1));\n  border-color: transparent;\n  cursor: not-allowed;\n}\n.prose {\n  color: inherit;\n}\n.prose :where(a,blockquote,figure figcaption,a code,thead,strong,.lead,h1,h2,h3,h4):not(:where([class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(code):not(:where([class~=not-prose] *)) {\n  background: hsla(var(--bc) / .1);\n  color: hsl(var(--bc));\n  padding: 2px 8px;\n  border-radius: var(--rounded-badge);\n}\n.prose code:after,.prose code:before {\n  content: none;\n}\n.prose pre {\n  background: hsl(var(--n));\n  color: hsl(var(--nc));\n  border-radius: var(--rounded-box);\n}\n.prose pre code {\n  border-radius: none;\n  background: inherit;\n  padding: 0;\n  color: inherit;\n}\n.prose blockquote {\n  border-left-color: hsl(var(--bc) / 40%);\n}\n.prose :where(ul>li,ol>li):not(:where([class~=not-prose] *))::marker {\n  color: hsl(var(--bc) / 40%);\n}\n.prose :where(thead th,tbody td):not(:where([class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(tbody tr,thead):not(:where([class~=not-prose] *)) {\n  border-bottom-color: hsl(var(--bc) / 20%);\n}\n.rounded-box {\n  border-radius: var(--rounded-box, 1rem);\n}\n.rounded-b-box {\n  border-bottom-left-radius: var(--rounded-box, 1rem);\n  border-bottom-right-radius: var(--rounded-box, 1rem);\n}\n.glass,.glass.btn-active,.glass:hover {\n  border: none;\n  -webkit-backdrop-filter: blur(var(--glass-blur, 40px));\n  backdrop-filter: blur(var(--glass-blur, 40px));\n  background-color: transparent;\n  background-image: linear-gradient(135deg, rgb(255 255 255 / var(--glass-opacity, 30%)), transparent),\n      linear-gradient(var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%, transparent 0);\n  box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset, 0 0 0 2px rgba(0, 0, 0, .05);\n  text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));\n}\n.avatar.online:before {\n  content: \"\";\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--su) / var(--tw-bg-opacity, 1));\n  border-radius: 9999px;\n  display: block;\n  position: absolute;\n  z-index: 10;\n  width: 15%;\n  height: 15%;\n  top: 7%;\n  right: 7%;\n  box-shadow: 0 0 0 2px hsl(var(--b1));\n}\n.avatar.offline:before {\n  content: \"\";\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b3) / var(--tw-bg-opacity, 1));\n  border-radius: 9999px;\n  display: block;\n  position: absolute;\n  z-index: 10;\n  width: 15%;\n  height: 15%;\n  top: 7%;\n  right: 7%;\n  box-shadow: 0 0 0 2px hsl(var(--b1));\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.bottom-0 {\n  bottom: 0;\n}\n.top-0 {\n  top: 0;\n}\n.left-0 {\n  left: 0;\n}\n.right-0 {\n  right: 0;\n}\n.z-90 {\n  z-index: 90;\n}\n.z-40 {\n  z-index: 40;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-30 {\n  z-index: 30;\n}\n.m-1 {\n  margin: 0.25rem;\n}\n.m-4 {\n  margin: 1rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.mt-16 {\n  margin-top: 4rem;\n}\n.mt-60 {\n  margin-top: 15rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mr-8 {\n  margin-right: 2rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.-mr-1 {\n  margin-right: -0.25rem;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.mr-4 {\n  margin-right: 1rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mr-5 {\n  margin-right: 1.25rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.inline-grid {\n  display: inline-grid;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-96 {\n  height: 26.2rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-40 {\n  height: 10rem;\n}\n.h-24 {\n  height: 6rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-16 {\n  height: 4rem;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-52 {\n  width: 13rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-76 {\n  width: 19rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-48 {\n  width: 12rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-3\\/12 {\n  width: 25%;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-24 {\n  width: 6rem;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.origin-top {\n  transform-origin: top;\n}\n.scale-0 {\n  --tw-scale-x: 0;\n  --tw-scale-y: 0;\n  transform: var(--tw-transform);\n}\n.transform {\n  transform: var(--tw-transform);\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.resize {\n  resize: both;\n}\n.list-none {\n  list-style-type: none;\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overscroll-contain {\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border-1 {\n  border-width: 1px;\n}\n.border-b-default {\n  border-bottom-width: 1px;\n}\n.border-b-3 {\n  border-bottom-width: 3px;\n}\n.border-b-1 {\n  border-bottom-width: 1px;\n}\n.border-base-200 {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2) / var(--tw-border-opacity));\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(237 242 247 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(203 213 224 / var(--tw-border-opacity));\n}\n.border-b-default {\n  --tw-border-opacity: 1;\n  border-bottom-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.bg-base-200 {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2) / var(--tw-bg-opacity));\n}\n.bg-base-300 {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b3) / var(--tw-bg-opacity));\n}\n.bg-base-100 {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity));\n}\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--s) / var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 55 72 / var(--tw-bg-opacity));\n}\n.bg-orange-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(237 137 54 / var(--tw-bg-opacity));\n}\n.bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(235 248 255 / var(--tw-bg-opacity));\n}\n.fill-current {\n  fill: currentColor;\n}\n.stroke-current {\n  stroke: currentColor;\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-20 {\n  padding: 5rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-3\\.5 {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.pt-6 {\n  padding-top: 1.5rem;\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pr-1 {\n  padding-right: 0.25rem;\n}\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pr-10 {\n  padding-right: 2.5rem;\n}\n.pl-10 {\n  padding-left: 2.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.font-sans {\n  font-family: -apple-system, HankenSans, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Commissioner\", \"Source Sans Pro\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.text-4\\.5 {\n  font-size: 1.15rem;\n}\n.text-4 {\n  font-size: 1rem;\n}\n.text-base {\n  font-size: 1rem;\n}\n.text-7 {\n  font-size: 1.75rem;\n}\n.text-5 {\n  font-size: 1.25rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-normal {\n  font-weight: 400;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.normal-case {\n  text-transform: none;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.text-base-content {\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc) / var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(26 32 44 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-neutral-content {\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc) / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(74 85 104 / var(--tw-text-opacity));\n}\n.text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgb(90 103 216 / var(--tw-text-opacity));\n}\n.text-secondary {\n  --tw-text-opacity: 1;\n  color: hsla(var(--s) / var(--tw-text-opacity));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(245 101 101 / var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(45 55 72 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(160 174 192 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(113 128 150 / var(--tw-text-opacity));\n}\n.underline {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.no-underline {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 10px 10px -5px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline {\n  outline-style: solid;\n}\n.ring {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-primary {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: hsla(var(--p) / var(--tw-ring-opacity));\n}\n.ring-offset-2 {\n  --tw-ring-offset-width: 2px;\n}\n.ring-offset-base-100 {\n  --tw-ring-offset-color: hsl(var(--b1));\n}\n.filter {\n  filter: var(--tw-filter);\n}\n.transition {\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\nbutton:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\nlabel {\n  margin-bottom: 0.25rem;\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.btn-primary {\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity));\n  padding-left: 3rem;\n  padding-right: 3rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--s) / var(--tw-bg-opacity));\n}\n.btn-primary:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\nhtml {\n  font-family: -apple-system, HankenSans, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Commissioner\", \"Source Sans Pro\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.hover\\:border-blue-600:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(49 130 206 / var(--tw-border-opacity));\n}\n.hover\\:bg-secondary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--s) / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(237 242 247 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(235 248 255 / var(--tw-bg-opacity));\n}\n.hover\\:text-primary:hover {\n  --tw-text-opacity: 1;\n  color: hsla(var(--p) / var(--tw-text-opacity));\n}\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(49 130 206 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-800:hover {\n  --tw-text-opacity: 1;\n  color: rgb(45 55 72 / var(--tw-text-opacity));\n}\n.focus\\:bg-gray-100:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(247 250 252 / var(--tw-bg-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.group:hover .group-hover\\:-rotate-180 {\n  --tw-rotate: -180deg;\n  transform: var(--tw-transform);\n}\n.group:hover .group-hover\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: var(--tw-transform);\n}\n.group:hover .group-hover\\:text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(49 130 206 / var(--tw-text-opacity));\n}\n@media (min-width: 576px) {\n\n  .sm\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .sm\\:block {\n    display: block;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:hidden {\n    display: none;\n  }\n\n  .sm\\:w-full {\n    width: 100%;\n  }\n\n  .sm\\:items-center {\n    align-items: center;\n  }\n\n  .sm\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:mr-2 {\n    margin-right: 0.5rem;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:inline {\n    display: inline;\n  }\n\n  .md\\:w-full {\n    width: 100%;\n  }\n\n  .md\\:place-self-center {\n    place-self: center;\n  }\n\n  .md\\:justify-self-end {\n    justify-self: end;\n  }\n}\n@media (min-width: 992px) {\n\n  .lg\\:mx-24 {\n    margin-left: 6rem;\n    margin-right: 6rem;\n  }\n\n  .lg\\:my-16 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n  }\n\n  .lg\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .lg\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0;\n  }\n\n  .lg\\:mt-12 {\n    margin-top: 3rem;\n  }\n\n  .lg\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:h-80 {\n    height: 20rem;\n  }\n\n  .lg\\:h-104 {\n    height: 34rem;\n  }\n\n  .lg\\:w-4\\/12 {\n    width: 33.333333%;\n  }\n\n  .lg\\:w-8\\/12 {\n    width: 66.666667%;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-full {\n    width: 100%;\n  }\n\n  .lg\\:w-6\\/12 {\n    width: 50%;\n  }\n\n  .lg\\:w-64 {\n    width: 16rem;\n  }\n\n  .lg\\:w-10\\/12 {\n    width: 83.333333%;\n  }\n\n  .lg\\:w-auto {\n    width: auto;\n  }\n\n  .lg\\:w-3\\/12 {\n    width: 25%;\n  }\n\n  .lg\\:w-32 {\n    width: 8rem;\n  }\n\n  .lg\\:w-9\\/12 {\n    width: 75%;\n  }\n\n  .lg\\:w-104 {\n    width: 34rem;\n  }\n\n  .lg\\:w-16 {\n    width: 4rem;\n  }\n\n  .lg\\:flex-initial {\n    flex: 0 1 auto;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:items-start {\n    align-items: flex-start;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .lg\\:border-none {\n    border-style: none;\n  }\n\n  .lg\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .lg\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .lg\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .lg\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .lg\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .lg\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .lg\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .lg\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .lg\\:pt-24 {\n    padding-top: 6rem;\n  }\n\n  .lg\\:pr-48 {\n    padding-right: 12rem;\n  }\n\n  .lg\\:text-10 {\n    font-size: 2.5rem;\n  }\n\n  .lg\\:text-6 {\n    font-size: 1.5rem;\n  }\n\n  .lg\\:text-5 {\n    font-size: 1.25rem;\n  }\n\n  .lg\\:text-7 {\n    font-size: 1.75rem;\n  }\n}\n";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 

// --------------------
const $id_c47e9a19 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/root-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_1d6bf11a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/root-component.mjs ($id_1d6bf11a)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  setup () {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp()
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
    if (true && results && results.some(i => i && 'then' in i)) {
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_1__.resolveComponent("App")

  __vite_ssr_import_2__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue/server-renderer/index.js".') })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/app-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// --------------------
const $id_dce2ff42 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/app.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/app-component.mjs ($id_dce2ff42)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0851ff57 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __vite_ssr_import_0__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/pages/runtime/app.vue"]]);
}


const __modules__ = {
 '/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/app/entry': $id_378ba7f5,
 '/node_modules/nuxt3/dist/app/bootstrap.mjs': $id_fef466a9,
 '/node_modules/vue/dist/vue.cjs.js': $id_60f0615f,
 '/node_modules/nuxt3/dist/app/index.mjs': $id_d8c2af0f,
 '/node_modules/nuxt3/dist/app/nuxt.mjs': $id_bf77ef36,
 '/node_modules/hookable/dist/index.mjs': $id_a2c811c4,
 '/node_modules/nuxt3/dist/app/compat/legacy-app.mjs': $id_75047751,
 '/node_modules/unenv/runtime/mock/proxy.mjs': $id_39e12da7,
 '/node_modules/nuxt3/dist/app/composables/index.mjs': $id_42ae3d5d,
 '/node_modules/nuxt3/dist/app/composables/component.mjs': $id_b47c3881,
 '/node_modules/vue-router/dist/vue-router.cjs.js': $id_f9a4a698,
 '/node_modules/nuxt3/dist/app/composables/asyncData.mjs': $id_a2ef143e,
 '/node_modules/nuxt3/dist/app/composables/hydrate.mjs': $id_43a772c2,
 '/node_modules/nuxt3/dist/app/composables/state.mjs': $id_d232db97,
 '/node_modules/nuxt3/dist/app/composables/fetch.mjs': $id_765a0ed7,
 '/node_modules/murmurhash-es/dist/index.mjs': $id_fbf6dac3,
 '/node_modules/nuxt3/dist/app/composables/cookie.mjs': $id_792d64c4,
 '/node_modules/cookie-es/dist/index.mjs': $id_f4975261,
 '/node_modules/h3/dist/index.mjs': $id_57d7ded6,
 '/node_modules/destr/dist/index.mjs': $id_03d15ecd,
 '/node_modules/nuxt3/dist/app/composables/ssr.mjs': $id_4d0dc923,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/css.mjs': $id_e938eca9,
 '/assets/css/tailwind.css': $id_f75548e1,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs': $id_c47e9a19,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/root-component.mjs': $id_1d6bf11a,
 '/node_modules/nuxt3/dist/app/components/nuxt-root.vue': $id_f8564e04,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/app-component.mjs': $id_dce2ff42,
 '/node_modules/nuxt3/dist/pages/runtime/app.vue': $id_0851ff57
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__('/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/app/entry')