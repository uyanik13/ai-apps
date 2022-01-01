
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
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/axios.js ($id_5ddce980)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/layouts.mjs ($id_fe36f759)
// - /layouts/default.vue ($id_7689e89d)
// - /components/common/Header.vue ($id_719597ef)
// - /composables/useBreakPoints.ts ($id_d030ed52)
// - /components/common/header/Megamenu.vue ($id_1c9023c9)
// - /components/DaisyuiThemeSwitcher.vue ($id_3cb4fa0f)
// - /components/common/Mobilebottommenu.vue ($id_fdae4b56)
// - /components/common/Footer.vue ($id_f219ac30)
// - /@vite-plugin-pwa/virtual:pwa-register/vue ($id_42f92f22)
// - /components/ReloadPrompt.vue ($id_9bae4834)
// - /layouts/error.vue ($id_6c552589)
// - /pages/image-colorize.vue ($id_e258c82b)
// - /composables/useRandomString.ts ($id_ebc0b334)
// - /composables/useUploadImage.ts ($id_ecf00ff8)
// - /components/common/Breadcrumb.vue ($id_20f1319f)
// - /components/loading/Restorephoto.vue ($id_965bb096)
// - /pages/index.vue ($id_cca58e97)
// - /components/common/Imageoverlay.vue ($id_c8c6332a)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /pages/text-to-art.vue ($id_37b4c183)
// - /components/loading/Art.vue ($id_ea681d2c)
// - /node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js ($id_24731f5b)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/dist.plugin.3140050b.mjs ($id_90abdda2)
// - /node_modules/nuxt3/dist/app/compat/capi.mjs ($id_7674cc72)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// - /components/MemoryUsageDemo.vue ($id_21bfb2dd)
// - /components/header/HeaderMain.vue ($id_baa49f01)
// - /components/header/HeaderResponsiveMenu.vue ($id_5667496c)
// - /components/icon/home.vue ($id_3385f772)
// - /components/loading/Name.vue ($id_ef189e84)
// - /components/loading/Text.vue ($id_fb5a8295)
// - /components/loading/skeleton-on-load-comment-card.vue ($id_b1d562b7)
// - /components/loading/skeleton-on-load-comments-card.vue ($id_a4a3622a)
// - /components/loading/skeleton-on-load-user-card.vue ($id_5d021a54)
// - /components/common/header/Search.vue ($id_1925ac63)
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
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs ($id_b8547a9d)
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
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
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
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/axios.js ($id_5ddce980)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs ($id_b8547a9d)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/dist.plugin.3140050b.mjs ($id_90abdda2)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// --------------------
const $id_c47e9a19 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/axios.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/dist.plugin.3140050b.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
__vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default,
  __vite_ssr_import_7__.default,
  __vite_ssr_import_8__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/axios.js
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/axios/index.js ($id_9a0dac16)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// --------------------
const $id_5ddce980 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL (baseURL) {
    this.defaults.baseURL = baseURL
  },
  setHeader (name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [ scopes ]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue
      }
      this.defaults.headers[scope][name] = value
    }
  },
  setToken (token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token
    this.setHeader('Authorization', value, scopes)
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config)
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response)
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error))
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error))
  },
  onError(fn) {
    this.onRequestError(fn)
    this.onResponseError(fn)
  },
  create(options) {
    return createAxiosInstance(__vite_ssr_import_2__.default(options, this.defaults))
  }
}

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () { return this[method].apply(this, arguments).then(res => res && res.data) }
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios)
  }
}

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = __vite_ssr_import_1__.default.create(axiosOptions)
  axios.CancelToken = __vite_ssr_import_1__.default.CancelToken
  axios.isCancel = __vite_ssr_import_1__.default.isCancel

  // Extend axios proto
  extendAxiosInstance(axios)

  // Intercept to apply default headers
  axios.onRequest((config) => {
    config.headers = { ...axios.defaults.headers.common, ...config.headers }
  })

  // Setup interceptors
  
  
  setupProgress(axios) 
  

  return axios
}






const setupProgress = (axios) => {
  if (true) {
    return
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => { },
    start: () => { },
    fail: () => { },
    set: () => { }
  }

  const $loading = () => {
    const $nuxt = "undefined" !== 'undefined' && window['$nuxt']
    return ($nuxt && $nuxt.$loading && $nuxt.$loading.set) ? $nuxt.$loading : noopLoading
  }

  let currentRequests = 0

  axios.onRequest(config => {
    if (config && config.progress === false) {
      return
    }

    currentRequests++
  })

  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return
    }

    currentRequests--
    if (currentRequests <= 0) {
      currentRequests = 0
      $loading().finish()
    }
  })

  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return
    }

    currentRequests--

    if (__vite_ssr_import_1__.default.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0
        $loading().finish()
      }
      return
    }

    $loading().fail()
    $loading().finish()
  })

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return
    }
    const progress = ((e.loaded * 100) / (e.total * currentRequests))
    $loading().set(Math.min(100, progress))
  }

  axios.defaults.onUploadProgress = onProgress
  axios.defaults.onDownloadProgress = onProgress
}

__vite_ssr_exports__.default = (ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}
  // baseURL
  const baseURL = process.browser
    ? (runtimeConfig.browserBaseURL || runtimeConfig.browserBaseUrl || runtimeConfig.baseURL || runtimeConfig.baseUrl || 'http://localhost:3000/')
      : (runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/')

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
        "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
}

  const axiosOptions = {
    baseURL,
    headers
  }

  

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate'
  }

  const axios = createAxiosInstance(axiosOptions)

  // Inject axios to the context as $axios
  ctx.$axios = axios
  inject('axios', axios)
}
;
}


// --------------------
// Request: /node_modules/axios/index.js
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/axios.js ($id_5ddce980)
// - /server/Service/ApiService.ts ($id_5c201c47)
// Dependencies: 

// --------------------
const $id_9a0dac16 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/axios/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/axios/index.js".') })


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/axios.js ($id_5ddce980)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/defu/dist/defu.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/defu/dist/defu.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.getAttribute(n) : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    var _a2;
    const key = getTagKey(t);
    if (key) {
      const uncontrolled = head.querySelector(`${t.tagName.toLowerCase()}[${key.name}="${key.value}"]`);
      if (uncontrolled) {
        (_a2 = uncontrolled.parentNode) == null ? void 0 : _a2.removeChild(uncontrolled);
      }
    }
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/meta.config.mjs ($id_e4535413)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      __vite_ssr_import_2__.useMeta(options.head);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/@vue/shared/dist/shared.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/@vue/shared/dist/shared.cjs.js".') })


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_e4535413 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"theme-color","content":"#f69435"},{"name":"format-detection","content":"telephone=no"},{"hid":"description","name":"description","content":"Ai apps with nuxt 3 and python backend"},{"property":"og:site_name","content":"Ogur Uyanik AI Apps"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:url","property":"og:url","content":"https://ai.oguruyanik.com"},{"hid":"og:title","property":"og:title","content":"Ogur Uyanik AI Apps"},{"hid":"og:description","property":"og:description","content":"Ai apps with nuxt 3 and python backend"},{"hid":"og:image","property":"og:image","content":"https://ai.oguruyanik.com/OG-card.png"},{"property":"og:image:width","content":"740"},{"property":"og:image:height","content":"300"},{"name":"twitter:site","content":"@uguruyanikk"},{"name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:url","name":"twitter:url","content":"https://ai.oguruyanik.com"},{"hid":"twitter:title","name":"twitter:title","content":"Ogur Uyanik AI Apps"},{"hid":"twitter:description","name":"twitter:description","content":"Ai apps with nuxt 3 and python backend"},{"hid":"twitter:image","name":"twitter:image","content":"https://ai.oguruyanik.com/OG-card.png"}],"title":"Ogur Uyanik AI Apps","link":[{"rel":"icon","type":"image/x-icon","href":"/logo/favicon.png"},{"rel":"manifest","href":"/manifest.webmanifest"},{"rel":"apple-touch-icon","href":"/logo/logox256.png","sizes":"256x256"},{"rel":"mask-icon","href":"/logo/logox256.png","color":"#ffffff"}],"htmlAttrs":{"data-theme":"light"},"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs ($id_c330c1a0)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/nested-page.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_2__.default);
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory() : __vite_ssr_import_1__.createMemoryHistory();
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (true && is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/nested-page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c268603a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const _sfc_main = {
  name: 'NuxtNestedPage'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_0__.resolveComponent("RouterView")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_0__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        __vite_ssr_import_1__.ssrRenderVNode(_push, __vite_ssr_import_0__.createVNode(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent, _scopeId)
      } else {
        return [
          (__vite_ssr_import_0__.openBlock(), __vite_ssr_import_0__.createBlock(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/nested-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/pages/runtime/nested-page.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /components/common/header/Megamenu.vue ($id_1c9023c9)
// - /components/DaisyuiThemeSwitcher.vue ($id_3cb4fa0f)
// - /components/common/Mobilebottommenu.vue ($id_fdae4b56)
// - /components/common/Header.vue ($id_719597ef)
// - /components/common/Footer.vue ($id_f219ac30)
// - /layouts/default.vue ($id_7689e89d)
// - /components/ReloadPrompt.vue ($id_9bae4834)
// - /layouts/error.vue ($id_6c552589)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /components/common/Breadcrumb.vue ($id_20f1319f)
// - /components/loading/Restorephoto.vue ($id_965bb096)
// - /pages/image-colorize.vue ($id_e258c82b)
// - /components/common/Imageoverlay.vue ($id_c8c6332a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /components/loading/Art.vue ($id_ea681d2c)
// - /pages/text-to-art.vue ($id_37b4c183)
// - /components/MemoryUsageDemo.vue ($id_21bfb2dd)
// - /components/header/HeaderMain.vue ($id_baa49f01)
// - /components/header/HeaderResponsiveMenu.vue ($id_5667496c)
// - /components/loading/Name.vue ($id_ef189e84)
// - /components/loading/Text.vue ($id_fb5a8295)
// - /components/loading/skeleton-on-load-comment-card.vue ($id_b1d562b7)
// - /components/loading/skeleton-on-load-comments-card.vue ($id_a4a3622a)
// - /components/loading/skeleton-on-load-user-card.vue ($id_5d021a54)
// - /components/common/header/Search.vue ($id_1925ac63)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/vue/server-renderer/index.js".') })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /components/common/header/Megamenu.vue ($id_1c9023c9)
// - /components/DaisyuiThemeSwitcher.vue ($id_3cb4fa0f)
// - /components/common/Mobilebottommenu.vue ($id_fdae4b56)
// - /components/common/Header.vue ($id_719597ef)
// - /components/common/Footer.vue ($id_f219ac30)
// - /layouts/default.vue ($id_7689e89d)
// - /components/ReloadPrompt.vue ($id_9bae4834)
// - /layouts/error.vue ($id_6c552589)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /components/common/Breadcrumb.vue ($id_20f1319f)
// - /components/loading/Restorephoto.vue ($id_965bb096)
// - /pages/image-colorize.vue ($id_e258c82b)
// - /components/common/Imageoverlay.vue ($id_c8c6332a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /components/loading/Art.vue ($id_ea681d2c)
// - /pages/text-to-art.vue ($id_37b4c183)
// - /components/MemoryUsageDemo.vue ($id_21bfb2dd)
// - /components/header/HeaderMain.vue ($id_baa49f01)
// - /components/header/HeaderResponsiveMenu.vue ($id_5667496c)
// - /components/icon/home.vue ($id_3385f772)
// - /components/loading/Name.vue ($id_ef189e84)
// - /components/loading/Text.vue ($id_fb5a8295)
// - /components/loading/skeleton-on-load-comment-card.vue ($id_b1d562b7)
// - /components/loading/skeleton-on-load-comments-card.vue ($id_a4a3622a)
// - /components/loading/skeleton-on-load-user-card.vue ($id_5d021a54)
// - /components/common/header/Search.vue ($id_1925ac63)
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
// Request: /node_modules/nuxt3/dist/pages/runtime/page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10628d40 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  name: 'NuxtPage',
  components: { NuxtLayout: __vite_ssr_import_1__.default },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup () {
    // Disable HMR reactivity in production
    const updatedComponentLayout = true ? __vite_ssr_import_0__.ref(null) : null

    const nuxtApp = __vite_ssr_import_2__.useNuxtApp()

    function onSuspensePending (Component) {
      if (true) {
        updatedComponentLayout.value = Component.type.layout || null
      }
      return nuxtApp.callHook('page:start', Component)
    }

    function onSuspenseResolved (Component) {
      return nuxtApp.callHook('page:finish', Component)
    }

    return {
      updatedComponentLayout,
      onSuspensePending,
      onSuspenseResolved
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_3__.resolveComponent("RouterView")
  const _component_NuxtLayout = __vite_ssr_import_3__.resolveComponent("NuxtLayout")

  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_3__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        if (Component) {
          _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLayout, {
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<!-- <keep-alive> -->`)
                __vite_ssr_import_4__.ssrRenderSuspense(_push, {
                  default: () => {
                    __vite_ssr_import_4__.ssrRenderVNode(_push, __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent, _scopeId)
                  },
                  _: 2 /* DYNAMIC */
                })
                _push(`<!-- <keep-alive -->`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        } else {
          _push(`<!---->`)
        }
        _push(`<!-- TODO: Handle 404 placeholder -->`)
      } else {
        return [
          Component
            ? (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(_component_NuxtLayout, {
                key: 0,
                name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
              }, {
                default: __vite_ssr_import_3__.withCtx(() => [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]))
            : __vite_ssr_import_3__.createCommentVNode("v-if", true),
          __vite_ssr_import_3__.createCommentVNode(" TODO: Handle 404 placeholder ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/nuxt3/dist/pages/runtime/page.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/layouts.mjs ($id_fe36f759)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/layouts.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = props.name;
      if (!__vite_ssr_import_1__.default[layout]) {
        if (true && layout && layout !== "default") {
          console.warn(`Invalid layout \`${layout}\` selected.`);
        }
        return context.slots.default();
      }
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default[layout], props, context.slots);
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/default.vue ($id_7689e89d)
// - /layouts/error.vue ($id_6c552589)
// --------------------
const $id_fe36f759 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  "default": __vite_ssr_import_0__.defineAsyncComponent({ suspensible: false, loader: () => __vite_ssr_dynamic_import__('/layouts/default.vue') }),
  "error": __vite_ssr_import_0__.defineAsyncComponent({ suspensible: false, loader: () => __vite_ssr_dynamic_import__('/layouts/error.vue') })
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/layouts.mjs ($id_fe36f759)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/common/Header.vue ($id_719597ef)
// - /components/common/Footer.vue ($id_f219ac30)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// - /components/ReloadPrompt.vue ($id_9bae4834)
// --------------------
const $id_7689e89d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/common/Header.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/common/Footer.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const ClientReloadPrompt = "undefined" !== "undefined" ? __vite_ssr_import_4__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/ReloadPrompt.vue')) : null;
    const __returned__ = { ClientReloadPrompt };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonHeader = __vite_ssr_import_1__.default;
  const _component_CommonFooter = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "flex flex-col bg-base-200" }, _attrs))}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_CommonHeader, null, null, _parent));
  _push(`<div class="flex-1 min-h-screen">`);
  __vite_ssr_import_6__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_CommonFooter, null, null, _parent));
  if ($setup.ClientReloadPrompt) {
    _push(__vite_ssr_import_6__.ssrRenderComponent($setup["ClientReloadPrompt"], null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/layouts/default.vue"]]);
;
}


// --------------------
// Request: /components/common/Header.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useBreakPoints.ts ($id_d030ed52)
// - /components/common/header/Megamenu.vue ($id_1c9023c9)
// - /components/DaisyuiThemeSwitcher.vue ($id_3cb4fa0f)
// - /components/common/Mobilebottommenu.vue ($id_fdae4b56)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/common/Header.vue?vue&type=style&index=0&lang.css ($id_60629529)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_719597ef = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useBreakPoints.ts");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/common/header/Megamenu.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/DaisyuiThemeSwitcher.vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/common/Mobilebottommenu.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const { width, type } = __vite_ssr_import_1__.default();
    const menuItems = __vite_ssr_import_0__.ref([
      {
        id: 1,
        title: "Text To Art",
        slug: "/text-to-art",
        featured: null,
        submenu: [],
        isAdmin: false
      },
      {
        id: 2,
        title: "Restore Photo",
        slug: "/restore-photo",
        featured: null,
        submenu: [],
        isAdmin: false
      },
      {
        id: 3,
        title: "Image Colorize",
        slug: "/image-colorize",
        featured: null,
        submenu: [],
        isAdmin: false
      }
    ]);
    const menuOpen = __vite_ssr_import_0__.ref(false);
    const localePath = (val) => {
      return val;
    };
    const __returned__ = { width, type, menuItems, menuOpen, localePath };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonHeaderMegamenu = __vite_ssr_import_2__.default;
  const _component_DaisyuiThemeSwitcher = __vite_ssr_import_3__.default;
  const _component_CommonMobilebottommenu = __vite_ssr_import_4__.default;
  _push(`<header${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "block bg-white" }, _attrs))}><div id="header" class="w-auto lg:w-full border-b border-gray-200 shadow-xl h-15"><div id="topbar" class="justify-between hidden lg:px-24 py-2 mx-auto bg-secondary sm:block md:block lg:flex"></div><div class="container flex items-center justify-between py-4 mx-auto border-gray-300 border-b-default lg:border-none"><!-- LOGO --><a${__vite_ssr_import_7__.ssrRenderAttr("href", $setup.localePath("/"))}><div id="logo" class="flex w-48 mx-2 lg:mx-8 lg:w-64"><img class="w-12 h-12"${__vite_ssr_import_7__.ssrRenderAttr("src", `/assets/images/logo/favicon.png`)}><p class="mt-2 ml-2 text-7 lg:text-7 font-sans font-bold"> AI Apps </p></div></a><div id="menu" class="flex mx-2 lg:w-10/12 sm:w-full"><ul class="${__vite_ssr_import_7__.ssrRenderClass([$setup.menuOpen ? "block" : "hidden", "items-center flex-grow block w-full mt-8 font-bold tracking-wide lg:flex lg:flex-initial lg:w-auto lg:mt-0"])}"><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.menuItems, (item) => {
    _push(`<li class="mx-6 mb-6 lg:mb-0">`);
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_CommonHeaderMegamenu, { menu: item }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div id="theme-switcher" class="flex mx-2 lg:w-10/12 sm:w-full">`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_DaisyuiThemeSwitcher, null, null, _parent));
  _push(`</div>`);
  if (false) {
    _push(`<div id="language" class="lg:block w-3/12 lg:w-3/12"><div class="group inline-block"><button class="${__vite_ssr_import_7__.ssrRenderClass([$setup.type == "xs" ? `px-3.5` : ``, "outline-none text-white focus:outline-none border lg:px-3 py-2 bg-primary rounded-lg flex items-center lg:w-32"])}"><span class="pr-1 font-semibold flex-1">${_ssrInterpolate($setup.type == "xs" ? _ctx.$i18n.locale : _ctx.getLocale(_ctx.$i18n.locale))}</span><span><svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></span></button><ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top z-90"><!--[-->`);
    __vite_ssr_import_7__.ssrRenderList(_ctx.$i18n.availableLocales, (locale) => {
      _push(`<li class="py-1 rounded-md shadow-xs"><a class="block px-2 lg:px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:bg-gray-100" role="menuitem"><button class="mx-1 lg:mx-2 text-indigo-600">${_ssrInterpolate(locale)}</button></a></li>`);
    });
    _push(`<!--]--></ul></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($setup.type == "xs") {
    _push(`<div>`);
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_CommonMobilebottommenu, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</header>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/common/Header.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/common/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/common/Header.vue"]]);
;
}


// --------------------
// Request: /composables/useBreakPoints.ts
// Parents: 
// - /components/common/Header.vue ($id_719597ef)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_d030ed52 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exports__.default = function() {
  let windowWidth = __vite_ssr_import_0__.ref(null);
  if (false) {
    windowWidth.value = window.innerWidth;
  }
  __vite_ssr_import_0__.onMounted(() => window.addEventListener("resize", onWidthChange));
  __vite_ssr_import_0__.onUnmounted(() => window.removeEventListener("resize", onWidthChange));
  const onWidthChange = () => windowWidth.value = window.innerWidth;
  const type = __vite_ssr_import_0__.computed(() => {
    if (windowWidth.value < 550)
      return "xs";
    if (windowWidth.value >= 550 && windowWidth.value < 1200)
      return "md";
    if (windowWidth.value >= 1200)
      return "lg";
    return null;
  });
  const width = __vite_ssr_import_0__.computed(() => windowWidth.value);
  return { width, type };
}
;
}


// --------------------
// Request: /components/common/header/Megamenu.vue
// Parents: 
// - /components/common/Header.vue ($id_719597ef)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/common/header/Megamenu.vue?vue&type=style&index=0&scoped=true&lang.css ($id_716bb670)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1c9023c9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  props: {
    menu: {
      type: Object,
      required: false,
      default: {},
    },
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    };
  },
  mounted() {
    this.menuItems = document.querySelectorAll(".mega-menu a");
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      this.menuItems[0].focus();
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus();
    },
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_1__.resolveComponent("NuxtLink")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "relative" }, _attrs))} data-v-53d004ec>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: $props.menu.slug,
    class: "py-6 font-bold text-base-content text-4.5 border-white font-sans hover:text-blue-600 border-b-3 hover:border-blue-600"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        if (!$props.menu.icon) {
          _push(`<div data-v-53d004ec${
            _scopeId
          }><p class="truncate" data-v-53d004ec${
            _scopeId
          }>${
            __vite_ssr_import_2__.ssrInterpolate(_ctx.$t($props.menu.title))
          }</p></div>`)
        } else {
          _push(`<div data-v-53d004ec${
            _scopeId
          }><img${
            __vite_ssr_import_2__.ssrRenderAttr("src", $props.menu.icon)
          } class="w-5 h-5" data-v-53d004ec${
            _scopeId
          }></div>`)
        }
      } else {
        return [
          (!$props.menu.icon)
            ? (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("div", { key: 0 }, [
                __vite_ssr_import_1__.createVNode("p", { class: "truncate" }, __vite_ssr_import_1__.toDisplayString(_ctx.$t($props.menu.title)), 1 /* TEXT */)
              ]))
            : (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("div", { key: 1 }, [
                __vite_ssr_import_1__.createVNode("img", {
                  src: $props.menu.icon,
                  class: "w-5 h-5"
                }, null, 8 /* PROPS */, ["src"])
              ]))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="absolute w-full" data-v-53d004ec> </div><div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    style: ($data.isVisible & ($props.menu.submenu.length > 0)) ? null : { display: "none" },
    class: "absolute z-10 mt-6 overflow-hidden bg-white rounded-sm shadow-md"
  }, _attrs))} data-v-53d004ec><div class="flex flex-col lg:flex-row" data-v-53d004ec><ul class="w-full" data-v-53d004ec><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.menu.submenu, (submenu) => {
    _push(`<li class="w-full py-1 border-gray-300 border-b-1" data-v-53d004ec>`)
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
      to: submenu.slug,
      class: "flex mr-4 group text-4 uppercase"
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<div class="flex items-center py-2 pl-4 pr-10 font-normal text-gray-900 font-sans group-hover:text-blue-600 whitespace-nowrap" data-v-53d004ec${_scopeId}>`)
          if (submenu.icon) {
            _push(`<img${
              __vite_ssr_import_2__.ssrRenderAttr("src", submenu.icon)
            } class="w-5 h-5 mr-2" data-v-53d004ec${
              _scopeId
            }>`)
          } else {
            _push(`<!---->`)
          }
          _push(`<span data-v-53d004ec${
            _scopeId
          }>${
            __vite_ssr_import_2__.ssrInterpolate(_ctx.$t(submenu.title))
          }</span></div>`)
        } else {
          return [
            __vite_ssr_import_1__.createVNode("div", { class: "flex items-center py-2 pl-4 pr-10 font-normal text-gray-900 font-sans group-hover:text-blue-600 whitespace-nowrap" }, [
              (submenu.icon)
                ? (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("img", {
                    key: 0,
                    src: submenu.icon,
                    class: "w-5 h-5 mr-2"
                  }, null, 8 /* PROPS */, ["src"]))
                : __vite_ssr_import_1__.createCommentVNode("v-if", true),
              __vite_ssr_import_1__.createVNode("span", null, __vite_ssr_import_1__.toDisplayString(_ctx.$t(submenu.title)), 1 /* TEXT */)
            ])
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</li>`)
  })
  _push(`<!--]--></ul></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/common/header/Megamenu.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/common/header/Megamenu.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-53d004ec"],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/common/header/Megamenu.vue"]]);
}


// --------------------
// Request: /components/common/header/Megamenu.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/common/header/Megamenu.vue ($id_1c9023c9)
// Dependencies: 

// --------------------
const $id_716bb670 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.mega-menu-fade-enter-active[data-v-53d004ec],\n.mega-menu-fade-leave-active[data-v-53d004ec] {\n  transition: all 0.1s ease-in-out;\n}\n.mega-menu-fade-enter[data-v-53d004ec],\n.mega-menu-fade-leave-to[data-v-53d004ec] {\n  opacity: 0;\n  transform: translateY(-12px);\n}\n";
}


// --------------------
// Request: /components/DaisyuiThemeSwitcher.vue
// Parents: 
// - /components/common/Header.vue ($id_719597ef)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// - /components/header/HeaderMain.vue ($id_baa49f01)
// Dependencies: 
// - /node_modules/theme-change/index.js ($id_6978feda)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3cb4fa0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/theme-change/index.js");


const _sfc_main = {
  data() {
    return {
      scrolled: false,
      themes: [
        { id: "light", name: "🌝  light" },
        { id: "dark", name: "🌚  dark" },
        { id: "cupcake", name: "🧁  cupcake" },
        { id: "bumblebee", name: "🐝  bumblebee" },
        { id: "emerald", name: "✳️  Emerald" },
        { id: "corporate", name: "🏢  Corporate" },
        { id: "synthwave", name: "🌃  synthwave" },
        { id: "retro", name: "👴  retro" },
        { id: "cyberpunk", name: "🤖  cyberpunk" },
        { id: "valentine", name: "🌸  valentine" },
        { id: "halloween", name: "🎃  halloween" },
        { id: "garden", name: "🌷  garden" },
        { id: "forest", name: "🌲  forest" },
        { id: "aqua", name: "🐟  aqua" },
        { id: "lofi", name: "👓  lofi" },
        { id: "pastel", name: "🖍  pastel" },
        { id: "fantasy", name: "🧚‍♀️  fantasy" },
        { id: "wireframe", name: "📝  Wireframe" },
        { id: "black", name: "🏴  black" },
        { id: "luxury", name: "💎  luxury" },
        { id: "dracula", name: "🧛‍♂️  dracula" },
      ],
    };
  },
  mounted() {
    __vite_ssr_import_0__.themeChange(false);
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      class: "dropdown dropdown-end",
      title: "Change Theme"
    }, _attrs))
  }><div tabindex="0" class="m-1 normal-case btn-ghost btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current md:mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg><span class="hidden md:inline text-4.5 text-base-content">${
    __vite_ssr_import_2__.ssrInterpolate(_ctx.$t("change-theme"))
  }</span><svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 ml-1 fill-current" viewBox="0 0 1792 1792"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path></svg></div><div class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"><ul class="p-4 menu compact"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.themes, (theme, index) => {
    _push(`<li class="text-4.5"><a tabindex="0"${
      __vite_ssr_import_2__.ssrRenderAttr("data-set-theme", theme.id)
    } data-act-class="active">${
      __vite_ssr_import_2__.ssrInterpolate(theme.name)
    }</a></li>`)
  })
  _push(`<!--]--></ul></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/DaisyuiThemeSwitcher.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/DaisyuiThemeSwitcher.vue"]]);
}


// --------------------
// Request: /node_modules/theme-change/index.js
// Parents: 
// - /components/DaisyuiThemeSwitcher.vue ($id_3cb4fa0f)
// Dependencies: 

// --------------------
const $id_6978feda = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/theme-change/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/theme-change/index.js".') })


// --------------------
// Request: /components/common/Mobilebottommenu.vue
// Parents: 
// - /components/common/Header.vue ($id_719597ef)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@iconify/vue/dist/iconify.mjs ($id_006f91fb)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fdae4b56 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@iconify/vue/dist/iconify.mjs");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const menuItems = __vite_ssr_import_0__.ref([
      {
        id: 1,
        title: "Home",
        slug: "/",
        icon: {
          name: "flat-color-icons:home",
          h: 10,
          color: "text-red-500"
        }
      },
      {
        id: 2,
        title: "Text To Art",
        slug: "/text-to-art",
        icon: {
          name: "emojione-monotone:artist-palette",
          h: 10,
          color: "text-red-500"
        }
      },
      {
        id: 3,
        title: "Restore Photo",
        slug: "/restore-photo",
        icon: {
          name: "ic:outline-photo-camera-front",
          h: 10,
          color: "text-red-500"
        }
      },
      {
        id: 4,
        title: "Image Colorize",
        slug: "/image-colorize",
        icon: {
          name: "emojione:artist-palette",
          h: 10,
          color: "text-red-500"
        }
      }
    ]);
    const __returned__ = { menuItems, Icon: __vite_ssr_import_2__.Icon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_3__.resolveComponent("nuxt-link");
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "fixed bottom-0 z-40 py-2 flex-row justify-center block w-full bg-white h-15 sm:block md:block lg:hidden shadow-2xl" }, _attrs))}><div class="container"><nav class="w-full"><ul class="flex items-center justify-center px-10 mx-auto pb-1 list-none"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.menuItems, (item) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nuxt_link, {
      to: item.slug,
      key: item.id
    }, {
      default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="grid text-secondary mx-5"${_scopeId}><div class="flex flex-col justify-center items-center"${_scopeId}>`);
          _push2(__vite_ssr_import_4__.ssrRenderComponent($setup["Icon"], {
            icon: item.icon.name,
            class: [item.icon.color, "fill-current h-10 w-10"]
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          return [
            __vite_ssr_import_3__.createVNode("div", { class: "grid text-secondary mx-5" }, [
              __vite_ssr_import_3__.createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                __vite_ssr_import_3__.createVNode($setup["Icon"], {
                  icon: item.icon.name,
                  class: [item.icon.color, "fill-current h-10 w-10"]
                }, null, 8, ["icon", "class"])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--><a href="mailto:ogur.uyanik@mgail.com" target="_blank">`);
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Icon"], {
    icon: `flat-ui:mail`,
    class: [`text-base-content`, "fill-current h-10 w-10"]
  }, null, _parent));
  _push(`</a></ul></nav></div></div>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/common/Mobilebottommenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/common/Mobilebottommenu.vue"]]);
;
}


// --------------------
// Request: /node_modules/@iconify/vue/dist/iconify.mjs
// Parents: 
// - /components/common/Mobilebottommenu.vue ($id_fdae4b56)
// - /components/common/Footer.vue ($id_f219ac30)
// Dependencies: 

// --------------------
const $id_006f91fb = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/@iconify/vue/dist/iconify.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/@iconify/vue/dist/iconify.mjs".') })


// --------------------
// Request: /components/common/Header.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/common/Header.vue ($id_719597ef)
// Dependencies: 

// --------------------
const $id_60629529 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n/* since nested groupes are not supported we have to use\n     regular css for the nested dropdowns\n  */\nli > ul {\n  transform: translatex(100%) scale(0);\n}\nli:hover > ul {\n  transform: translatex(101%) scale(1);\n}\nli > button svg {\n  transform: rotate(-90deg);\n}\nli:hover > button svg {\n  transform: rotate(-270deg);\n}\n/* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n.group:hover .group-hover\\:scale-100 {\n  transform: scale(1);\n}\n.group:hover .group-hover\\:-rotate-180 {\n  transform: rotate(180deg);\n}\n.scale-0 {\n  transform: scale(0);\n}\n.min-w-32 {\n  min-width: 8rem;\n}\n";
}


// --------------------
// Request: /components/common/Footer.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@iconify/vue/dist/iconify.mjs ($id_006f91fb)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f219ac30 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@iconify/vue/dist/iconify.mjs");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Icon: __vite_ssr_import_2__.Icon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "items-center p-4 footer bg-primary text-neutral-content" }, _attrs))}><div class="items-center grid-flow-col"><p>Copyright \xA9 2021 - All right reserved</p></div><div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a href="https://github.com/uyanik13" target="_blank">`);
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Icon"], {
    icon: `akar-icons:github-fill`,
    class: [`text-base-content`, "fill-current h-10 w-10"]
  }, null, _parent));
  _push(`</a><a href="mailto:ogur.uyanik@mgail.com" target="_blank">`);
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Icon"], {
    icon: `flat-ui:mail`,
    class: [`text-base-content`, "fill-current h-10 w-10"]
  }, null, _parent));
  _push(`</a></div></footer>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/common/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/common/Footer.vue"]]);
;
}


// --------------------
// Request: /components/ReloadPrompt.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /@vite-plugin-pwa/virtual:pwa-register/vue ($id_42f92f22)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/ReloadPrompt.vue?vue&type=style&index=0&lang.css ($id_899a4ece)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9bae4834 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/@vite-plugin-pwa/virtual:pwa-register/vue");



const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const { offlineReady, needRefresh, updateServiceWorker } = __vite_ssr_import_0__.useRegisterSW({ immediate: true })

const close = async() => {
  offlineReady.value = false
  needRefresh.value = false
}

const __returned__ = { offlineReady, needRefresh, updateServiceWorker, close, useRegisterSW: __vite_ssr_import_0__.useRegisterSW }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.offlineReady || $setup.needRefresh) {
    _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      class: "pwa-toast",
      role: "alert"
    }, _attrs))}><div class="message">`)
    if ($setup.offlineReady) {
      _push(`<span> App ready to work offline </span>`)
    } else {
      _push(`<span> New content available, click on reload button to update. </span>`)
    }
    _push(`</div>`)
    if ($setup.needRefresh) {
      _push(`<button> Reload </button>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<button> Close </button></div>`)
  } else {
    _push(`<!---->`)
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/ReloadPrompt.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ReloadPrompt.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/ReloadPrompt.vue"]]);
}


// --------------------
// Request: /@vite-plugin-pwa/virtual:pwa-register/vue
// Parents: 
// - /components/ReloadPrompt.vue ($id_9bae4834)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_42f92f22 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
// src/client/dev/vue.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

function useRegisterSW(options = {}) {
  const needRefresh = __vite_ssr_import_0__.ref(false);
  const offlineReady = __vite_ssr_import_0__.ref(false);
  const updateServiceWorker = (reloadPage) => {
  };
  return {
    updateServiceWorker,
    offlineReady,
    needRefresh
  };
}

Object.defineProperty(__vite_ssr_exports__, "useRegisterSW", { enumerable: true, configurable: true, get(){ return useRegisterSW }});
;
}


// --------------------
// Request: /components/ReloadPrompt.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/ReloadPrompt.vue ($id_9bae4834)
// Dependencies: 

// --------------------
const $id_899a4ece = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.pwa-toast {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin: 16px;\n  padding: 12px;\n  border: 1px solid #8885;\n  border-radius: 4px;\n  z-index: 100;\n  text-align: left;\n  box-shadow: 3px 4px 5px 0 #8885;\n  background-color: black;\n}\n.pwa-toast .message {\n  color: white;\n  margin-bottom: 8px;\n}\n.pwa-toast button {\n  color: white;\n  border: 1px solid #8885;\n  outline: none;\n  margin-right: 5px;\n  border-radius: 2px;\n  padding: 3px 10px;\n}\n";
}


// --------------------
// Request: /layouts/error.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/layouts.mjs ($id_fe36f759)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /layouts/error.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e23c30c8)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6c552589 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "h-screen" }, _attrs))} data-v-d5ea9138>`)
  if (!!$props.error) {
    _push(`<div class="mt-60 p-20 bg-base-300 prose" data-v-d5ea9138><h3 data-v-d5ea9138> Page not found <div class="btn btn-ghost btn-primary" data-v-d5ea9138> ← Go back </div></h3></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/layouts/error.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/error.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-d5ea9138"],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/layouts/error.vue"]]);
}


// --------------------
// Request: /layouts/error.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /layouts/error.vue ($id_6c552589)
// Dependencies: 

// --------------------
const $id_e23c30c8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\nh1[data-v-d5ea9138] {\n  font-size: 20px;\n}\n";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/image-colorize.vue ($id_e258c82b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /pages/text-to-art.vue ($id_37b4c183)
// --------------------
const $id_c330c1a0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
  {
    "name": "image-colorize",
    "path": "/image-colorize",
    "file": "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/image-colorize.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/image-colorize.vue')
  },
  {
    "name": "index",
    "path": "/",
    "file": "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/index.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    "name": "restore-photo",
    "path": "/restore-photo",
    "file": "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/restore-photo.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/restore-photo.vue')
  },
  {
    "name": "text-to-art",
    "path": "/text-to-art",
    "file": "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/text-to-art.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/text-to-art.vue')
  }
];
}


// --------------------
// Request: /pages/image-colorize.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs ($id_c330c1a0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useRandomString.ts ($id_ebc0b334)
// - /composables/useUploadImage.ts ($id_ecf00ff8)
// - /components/common/Breadcrumb.vue ($id_20f1319f)
// - /components/loading/Restorephoto.vue ($id_965bb096)
// - /server/Service/ApiService.ts ($id_5c201c47)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e258c82b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useRandomString.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useUploadImage.ts");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/common/Breadcrumb.vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/loading/Restorephoto.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/server/Service/ApiService.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const { createAlphanumericString } = __vite_ssr_import_1__.default();
    const {
      selectedImage,
      selectedImageBase64,
      onUploadFiles,
      _imageEncode,
      fixedImage
    } = __vite_ssr_import_2__.default();
    const onLoading = __vite_ssr_import_0__.ref(false);
    const colorizations = __vite_ssr_import_0__.ref([
      { id: 1, name: "12" },
      { id: 2, name: "15" },
      { id: 3, name: "18" },
      { id: 4, name: "20" },
      { id: 5, name: "25" }
    ]);
    const selectedColorization = __vite_ssr_import_0__.ref(12);
    const form = __vite_ssr_import_0__.computed((image) => {
      return {
        requestId: createAlphanumericString(5),
        image: selectedImage.value,
        renderFactor: selectedColorization.value
      };
    });
    const submit = async () => {
      onLoading.value = true;
      if (!selectedImage.value)
        return false;
      const formData = new FormData();
      formData.append("requestId", form.value.requestId);
      formData.append("image", form.value.image);
      formData.append("renderFactor", form.value.renderFactor);
      await __vite_ssr_import_6__.colorizePhoto(formData).then((res) => {
        _imageEncode(res);
        onLoading.value = false;
      });
    };
    const __returned__ = { createAlphanumericString, selectedImage, selectedImageBase64, onUploadFiles, _imageEncode, fixedImage, onLoading, colorizations, selectedColorization, form, submit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonBreadcrumb = __vite_ssr_import_3__.default;
  const _component_LoadingRestorephoto = __vite_ssr_import_4__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "container mx-auto py-4" }, _attrs))}><div class="bg-base-200">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_CommonBreadcrumb, { title: `Image Colorize` }, null, _parent));
  _push(`<div class="flex flex-col lg:flex-row space-y-2 lg:space-x-4"><div class="card lg:w-4/12 max-w-sm shadow-2xl bg-base-100"><div class="card-body"><div class="form-control"><label class="w-full flex flex-col items-center px-4 py-6 bg-base-100 text-base-content rounded-lg shadow-lg tracking-wide uppercase border-1 border-base-200 cursor-pointer hover:bg-blue"><svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"></path></svg><span class="mt-2 text-base leading-normal">Select a file</span><input type="file" accept="image/jpeg, image/png" class="hidden"></label></div><div class="form-control"><label class="label"><span class="label-text">${__vite_ssr_import_8__.ssrInterpolate(_ctx.$t("Colorization Factor"))}</span></label><select class="select select-bordered w-full max-w-xs"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.colorizations, (item) => {
    _push(`<option${__vite_ssr_import_8__.ssrRenderAttr("value", item.name)}>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-control mt-6"><button${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.onLoading) ? " disabled" : ""} class="btn btn-primary"> Submit </button></div></div></div><div class="card lg:w-8/12 shadow-2xl bg-base-100"><div class="p-5 bg-base-200">`);
  if ($setup.selectedImage) {
    _push(`<div class="p-1 avatar flex space-x-4">`);
    if ($setup.selectedImageBase64) {
      _push(`<div class="rounded-box w-1/2 h-full lg:w-1/2 lg:h-80 ring ring-primary ring-offset-base-100"><img class="w-76 h-40"${__vite_ssr_import_8__.ssrRenderAttr("src", $setup.selectedImageBase64)}></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.onLoading || $setup.fixedImage) {
      _push(`<div class="rounded-box w-1/2 h-full lg:w-1/2 lg:h-80 ring ring-primary ring-offset-base-100">`);
      if ($setup.onLoading) {
        _push(`<div class="w-full h-full lg:w-full lg:h-80"><div>`);
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_LoadingRestorephoto, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div>`);
        if ($setup.fixedImage) {
          _push(`<div class="rounded-box lg:w-full lg:h-80 ring ring-primary ring-offset-base-100"><img class="w-76 h-40"${__vite_ssr_import_8__.ssrRenderAttr("src", $setup.fixedImage)}></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="bg-base-300 p-2 rounded-lg"><p>Please Select an Image</p></div>`);
  }
  _push(`</div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/image-colorize.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/image-colorize.vue"]]);
;
}


// --------------------
// Request: /composables/useRandomString.ts
// Parents: 
// - /pages/image-colorize.vue ($id_e258c82b)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /pages/text-to-art.vue ($id_37b4c183)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_ebc0b334 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exports__.default = function() {
  const createAlphanumericString = (length) => {
    return createRandomString("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", length);
  };
  const createRandomString = (characterString, length) => {
    const text = __vite_ssr_import_0__.ref("");
    for (var i = 0; i < length; i++) {
      text.value += characterString.charAt(Math.floor(Math.random() * characterString.length));
    }
    return text.value;
  };
  return {
    createAlphanumericString
  };
}
;
}


// --------------------
// Request: /composables/useUploadImage.ts
// Parents: 
// - /pages/image-colorize.vue ($id_e258c82b)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /pages/text-to-art.vue ($id_37b4c183)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_ecf00ff8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exports__.default = function() {
  const selectedImage = __vite_ssr_import_0__.ref(null);
  const selectedImageBase64 = __vite_ssr_import_0__.ref(null);
  const fixedImage = __vite_ssr_import_0__.ref(null);
  const onUploadFiles = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        selectedImageBase64.value = e.target.result;
      };
      reader.readAsDataURL(input.target.files[0]);
      selectedImage.value = input.target.files[0];
    }
    return true;
  };
  const _imageEncode = (arrayBuffer) => {
    let u8 = new Uint8Array(arrayBuffer);
    let b64encoded = btoa([].reduce.call(u8, function(p, c) {
      return p + String.fromCharCode(c);
    }, ""));
    let mimetype = "image/jpeg";
    fixedImage.value = "data:" + mimetype + ";base64," + b64encoded;
  };
  return {
    selectedImage,
    selectedImageBase64,
    onUploadFiles,
    _imageEncode,
    fixedImage
  };
}
;
}


// --------------------
// Request: /components/common/Breadcrumb.vue
// Parents: 
// - /pages/image-colorize.vue ($id_e258c82b)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /pages/text-to-art.vue ($id_37b4c183)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_20f1319f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "card my-3 shadow-2xl bg-base-100" }, _attrs))
  }><div class="card-body py-3 text-center"><h1 class="font-semibold text-base-content text-5 lg:text-5">${
    __vite_ssr_import_1__.ssrInterpolate(_ctx.$t($props.title))
  }</h1></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/common/Breadcrumb.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/common/Breadcrumb.vue"]]);
}


// --------------------
// Request: /components/loading/Restorephoto.vue
// Parents: 
// - /pages/image-colorize.vue ($id_e258c82b)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_965bb096 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex skeleton-loading-card overflow-hidden bg-white rounded rounded-lg shadow" }, _attrs))}><div class="w-76 h-40 loading lg:h-80 flex items-center justify-center"><div class="bg-orange-500 text-white p-2 rounded-lg"> Its take a 30-90 sec. please wait... </div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading/Restorephoto.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/loading/Restorephoto.vue"]]);
}


// --------------------
// Request: /server/Service/ApiService.ts
// Parents: 
// - /pages/image-colorize.vue ($id_e258c82b)
// - /pages/restore-photo.vue ($id_4ae18a14)
// - /pages/text-to-art.vue ($id_37b4c183)
// Dependencies: 
// - /node_modules/axios/index.js ($id_9a0dac16)
// --------------------
const $id_5c201c47 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const apiClient = __vite_ssr_import_0__.default.create({
  baseURL: "https://cortex.hotpot.ai/",
  withCredentials: false,
  responseType: "arraybuffer",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
function restorePhoto(data) {
  return apiClient.post("/restoration-api-bin", data).then((response) => {
    if (response.status !== 200) {
      throw Error("Looks like there was a problem. Status Code: " + response.status);
    }
    return response.data;
  });
}
Object.defineProperty(__vite_ssr_exports__, "restorePhoto", { enumerable: true, configurable: true, get(){ return restorePhoto }});
function colorizePhoto(data) {
  return apiClient.post("/colorize-api-bin-mjbcrab", data).then((response) => {
    if (response.status !== 200) {
      throw Error("Looks like there was a problem. Status Code: " + response.status);
    }
    return response.data;
  });
}
Object.defineProperty(__vite_ssr_exports__, "colorizePhoto", { enumerable: true, configurable: true, get(){ return colorizePhoto }});
function artMaker(data) {
  return apiClient.post("/art-maker", data).then((response) => {
    if (response.status !== 200) {
      throw Error("Looks like there was a problem. Status Code: " + response.status);
    }
    return response.data;
  });
}
Object.defineProperty(__vite_ssr_exports__, "artMaker", { enumerable: true, configurable: true, get(){ return artMaker }});
;
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs ($id_c330c1a0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/common/Imageoverlay.vue ($id_c8c6332a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/index.vue?vue&type=style&index=0&lang.css ($id_0b423cc4)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/common/Imageoverlay.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __vite_ssr_import_2__.resolveComponent("nuxt-link")
  const _component_CommonImageoverlay = __vite_ssr_import_1__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "lg:flex font-sans" }, _attrs))
  }><div class="pt-6 lg:pt-24 lg:w-8/12 lg:px-24"><div class="px-4 lg:px-6"><h1 class="font-bold text-gray-900 text-7 lg:text-10">${
    __vite_ssr_import_3__.ssrInterpolate(_ctx.$t("h1_text"))
  }</h1><h2 class="mt-4 font-light text-gray-900 text-5 lg:text-6 lg:pr-48">${
    __vite_ssr_import_3__.ssrInterpolate(_ctx.$t("h2_text"))
  }</h2><div class="flex justify-center py-6 lg:justify-start items-center lg:items-start pl-8">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, {
    to: "/restore-photo",
    class: "px-6 lg:px-12 py-2 lg:py-3 mx-8 font-bold text-white transition duration-500 ease-in-out rounded-lg focus:outline-none bg-primary hover:bg-secondary text-4 lg:text-5"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate(_ctx.$t("Get Started"))}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString(_ctx.$t("Get Started")), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div><div class="px-3 lg:w-6/12 lg:mx-24 lg:my-16"><div class="my-3">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_CommonImageoverlay, {
    offset: "0.5",
    before: "/assets/images/ai/before.png",
    beforeLabel: "BEFORE",
    after: "/assets/images/ai/after.png",
    afterLabel: "AFTER"
  }, null, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/index.vue"]]);
}


// --------------------
// Request: /components/common/Imageoverlay.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/common/Imageoverlay.vue?vue&type=style&index=0&lang.css ($id_5515db83)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c8c6332a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  data() {
    return {
      imgOffset: {
        top: 180,
        x: 1040.234375,
        y: 180,
        height: 505,
        width: 506,
        bottom: 685,
        left: 1040.234375,
        right: 1546.234375,
      },
      slideOffset: this.offset,
      sliding: false,
      containerStyle: {},
      overlayStyle: {},
    };
  },
  props: {
    before: {
      type: String,
      required: true,
    },
    beforeLabel: {
      type: String,
    },
    after: {
      type: String,
      required: true,
    },
    afterLabel: {
      type: String,
    },
    offset: {
      type: [String, Number],
      default: 0.5,
      validator: (value) => value > 0 && value <= 1,
    },
    keyboardStep: {
      type: [String, Number],
      default: 0.2,
      validator: (value) => value > 0 && value <= 1,
    },
  },
  methods: {
    setDimensions() {
      const img = this.$refs.image;
      this.imgOffset = img.getBoundingClientRect();
      this.containerStyle = { width: `${this.w}px`, height: `${this.h}px` };
    },
    startSlide(event) {
      this.sliding = true;
      this.moveSlide(event);
      this.overlayStyle = { opacity: 0 };
    },
    handleArrowNavigation(event) {
      return this.moveSlide(event);
    },
    moveSlide(event) {
      if (this.sliding) {
        var x =
          (event.touches ? event.touches[0].pageX : event.pageX) -
          this.imgOffset.left;
        x = x < 0 ? 0 : x > this.w ? this.w : x;
        return (this.slideOffset = x / this.w);
      }
      if (event.key) {
        switch (event.key) {
          case "Left": // IE/Edge key
          case "ArrowLeft":
            this.slideOffset =
              this.floatOffset - this.floatKeyboardStep >= 0
                ? this.floatOffset - this.floatKeyboardStep
                : 0;
            break;
          case "Right": // IE/Edge key
          case "ArrowRight":
            this.slideOffset =
              this.floatOffset + this.floatKeyboardStep <= 1
                ? this.floatOffset + this.floatKeyboardStep
                : 1;
            break;
          default:
            return;
        }
      }
    },
    endSlide() {
      this.sliding = false;
      this.overlayStyle = {};
    },
    resize() {
      this.containerStyle = {};
      this.$nextTick(() => this.setDimensions());
    },
  },
  computed: {
    beforeImgStyle() {
      return { clip: `rect(0, ${this.x}px, ${this.h}px, 0)` };
    },
    handleStyle() {
      const size = 40;
      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `calc(50% - ${size / 2}px)`,
        left: `calc(${this.slideOffset * 100}% - ${size / 2}px)`,
      };
    },
    x() {
      return this.w * this.slideOffset;
    },
    w() {
      return this.imgOffset && this.imgOffset.width > 0
        ? this.imgOffset.width
        : 506;
    },
    h() {
      return this.imgOffset && this.imgOffset.width > 0
        ? this.imgOffset.height
        : 506;
    },
    floatOffset() {
      return parseFloat(this.slideOffset);
    },
    floatKeyboardStep() {
      return parseFloat(this.keyboardStep);
    },
  },
  mounted() {
    document.addEventListener("touchmove", this.moveSlide);
    document.addEventListener("touchend", this.endSlide);
    document.addEventListener("mousemove", this.moveSlide);
    document.addEventListener("mouseup", this.endSlide);
    window.addEventListener("resize", this.resize);
    this.setDimensions();
  },

  beforeDestroy() {
    document.removeEventListener("touchmove", this.moveSlide);
    document.removeEventListener("touchend", this.endSlide);
    document.removeEventListener("mousemove", this.moveSlide);
    document.removeEventListener("mouseup", this.endSlide);
    window.removeEventListener("resize", this.resize);
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      class: "twentytwenty-container",
      style: $data.containerStyle
    }, _attrs))
  }><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", $props.after)
  } alt="after"><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", $props.before)
  } alt="before" style="${
    __vite_ssr_import_2__.ssrRenderStyle($options.beforeImgStyle)
  }"><div class="twentytwenty-overlay" style="${
    __vite_ssr_import_2__.ssrRenderStyle($data.overlayStyle)
  }">`)
  if ($props.beforeLabel) {
    _push(`<div class="twentytwenty-before-label">${__vite_ssr_import_2__.ssrInterpolate($props.beforeLabel)}</div>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.afterLabel) {
    _push(`<div class="twentytwenty-after-label">${__vite_ssr_import_2__.ssrInterpolate($props.afterLabel)}</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div><div class="twentytwenty-handle" style="${__vite_ssr_import_2__.ssrRenderStyle($options.handleStyle)}" tabindex="0"><div class="twentytwenty-arrow-left"></div><div class="twentytwenty-arrow-right"></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/common/Imageoverlay.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/common/Imageoverlay.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/common/Imageoverlay.vue"]]);
}


// --------------------
// Request: /components/common/Imageoverlay.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/common/Imageoverlay.vue ($id_c8c6332a)
// Dependencies: 

// --------------------
const $id_5515db83 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.twentytwenty-container {\n  position: relative;\n  overflow: hidden;\n  box-sizing: content-box;\n}\n.twentytwenty-container img {\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 20;\n}\n.twentytwenty-container .twentytwenty-overlay {\n  z-index: 25;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 0.5s;\n}\n.twentytwenty-container .twentytwenty-overlay .twentytwenty-before-label,\n.twentytwenty-container .twentytwenty-overlay .twentytwenty-after-label {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  font-size: 0.8em;\n  top: calc(50% - 0.4em - 5px);\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.4);\n  color: white;\n}\n.twentytwenty-container .twentytwenty-overlay .twentytwenty-before-label {\n  left: 0;\n}\n.twentytwenty-container .twentytwenty-overlay .twentytwenty-after-label {\n  right: 0;\n}\n.twentytwenty-container:hover > .twentytwenty-overlay {\n  opacity: 1;\n}\n.twentytwenty-container .twentytwenty-handle {\n  cursor: move;\n  z-index: 30;\n  position: absolute;\n  background: none;\n  border: 4px solid white;\n  border-radius: 50px;\n  margin-left: -4px;\n  margin-top: -4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.twentytwenty-container .twentytwenty-handle:active,\n.twentytwenty-container .twentytwenty-handle:focus {\n  outline: 0;\n}\n.twentytwenty-container .twentytwenty-handle:before,\n.twentytwenty-container .twentytwenty-handle:after {\n  content: \"\";\n  border: 2px solid white;\n  height: 9999px;\n  position: absolute;\n  left: calc(50% - 2px);\n}\n.twentytwenty-container .twentytwenty-handle:before {\n  top: 40px;\n}\n.twentytwenty-container .twentytwenty-handle:after {\n  bottom: 40px;\n}\n.twentytwenty-container .twentytwenty-arrow-right,\n.twentytwenty-container .twentytwenty-arrow-left {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n.twentytwenty-container .twentytwenty-arrow-right {\n  bottom: 10px;\n  left: 23px;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid white;\n}\n.twentytwenty-container .twentytwenty-arrow-left {\n  top: 10px;\n  left: 7px;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid white;\n}\n";
}


// --------------------
// Request: /pages/index.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_0b423cc4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".skeleton-loading-card {\n  border-radius: 10px;\n  border: solid 4px #eaeaea;\n}\n.skeleton-loading-info {\n  border-radius: 10px;\n  background-color: #eaeaea;\n}\n.skeleton-loading-order-products-item-thumbnail {\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.skeleton-loading-circular-icon {\n  background-color: #eaeaea;\n  border-radius: 50%;\n  display: inline-block;\n}\n.skeleton-loading-horizontal-seperator{\n  height: 4px;\n  background-color: #eaeaea;\n}\n.loading {\n  -webkit-animation-duration: 2s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n  background-image: linear-gradient(to right, #eeeded 0%, #f1eeee 20%, #fafafa 40%, #eeebeb 100%);\n  background-repeat: no-repeat;\n  position: relative\n}\n@-webkit-keyframes placeHolderShimmer {\n0% {\n    background-position: -468px 0\n}\n100% {\n    background-position: 468px 0\n}\n}\n";
}


// --------------------
// Request: /pages/restore-photo.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs ($id_c330c1a0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useRandomString.ts ($id_ebc0b334)
// - /composables/useUploadImage.ts ($id_ecf00ff8)
// - /components/common/Breadcrumb.vue ($id_20f1319f)
// - /components/loading/Restorephoto.vue ($id_965bb096)
// - /server/Service/ApiService.ts ($id_5c201c47)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4ae18a14 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useRandomString.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useUploadImage.ts");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/common/Breadcrumb.vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/loading/Restorephoto.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/server/Service/ApiService.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const { createAlphanumericString } = __vite_ssr_import_1__.default();
    const {
      selectedImage,
      selectedImageBase64,
      onUploadFiles,
      _imageEncode,
      fixedImage
    } = __vite_ssr_import_2__.default();
    const withScratch = __vite_ssr_import_0__.ref(false);
    const onLoading = __vite_ssr_import_0__.ref(false);
    const form = __vite_ssr_import_0__.computed((image) => {
      return {
        requestId: createAlphanumericString(5),
        image: selectedImage.value,
        withScratch: withScratch.value
      };
    });
    const submit = async () => {
      onLoading.value = true;
      if (!selectedImage.value)
        return false;
      const formData = new FormData();
      formData.append("requestId", form.value.requestId);
      formData.append("image", form.value.image);
      formData.append("withScratch", form.value.withScratch);
      await __vite_ssr_import_6__.restorePhoto(formData).then((res) => {
        _imageEncode(res);
        onLoading.value = false;
      });
    };
    const download = () => {
      const downloadLink = document.createElement("a");
      downloadLink.href = fixedImage.value;
      downloadLink.download = createAlphanumericString(5) + `.png`;
      downloadLink.click();
    };
    const __returned__ = { createAlphanumericString, selectedImage, selectedImageBase64, onUploadFiles, _imageEncode, fixedImage, withScratch, onLoading, form, submit, download };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonBreadcrumb = __vite_ssr_import_3__.default;
  const _component_LoadingRestorephoto = __vite_ssr_import_4__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "container mx-auto py-4" }, _attrs))}><div class="bg-base-200">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_CommonBreadcrumb, { title: `Restore Photo` }, null, _parent));
  _push(`<div class="flex flex-col w-full lg:flex-row space-y-2 lg:space-x-4"><div class="card lg:w-4/12 max-w-sm shadow-2xl bg-base-100"><div class="card-body bg-base-200"><div class="form-control"><label class="w-full flex flex-col items-center px-4 py-16 bg-base-100 text-base-content rounded-lg shadow-lg tracking-wide uppercase border-1 border-base-200 cursor-pointer hover:bg-blue"><svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"></path></svg><span class="mt-2 text-base-content leading-normal">Select an Image</span><input type="file" accept="image/jpeg, image/png" class="hidden"></label></div><div class="p-6 card bordered"><div class="form-control"><label class="cursor-pointer label"><span class="label-text">Has Stratch?</span><input${__vite_ssr_import_8__.ssrIncludeBooleanAttr(Array.isArray($setup.withScratch) ? __vite_ssr_import_8__.ssrLooseContain($setup.withScratch, null) : $setup.withScratch) ? " checked" : ""} type="checkbox" class="toggle toggle-primary"></label></div></div><button${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.onLoading) ? " disabled" : ""} class="btn btn-primary"> Submit </button></div></div><div class="card lg:w-8/12 shadow-2xl bg-base-100"><div class="p-5 bg-base-200">`);
  if ($setup.selectedImage) {
    _push(`<div class="p-1 avatar flex space-x-4">`);
    if ($setup.selectedImageBase64) {
      _push(`<div class="rounded-box w-1/2 h-full lg:w-1/2 lg:h-80 ring ring-primary ring-offset-base-100"><img class="w-76 h-40"${__vite_ssr_import_8__.ssrRenderAttr("src", $setup.selectedImageBase64)}></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.onLoading || $setup.fixedImage) {
      _push(`<div class="rounded-box w-1/2 h-full lg:w-1/2 lg:h-80 ring ring-primary ring-offset-base-100">`);
      if ($setup.onLoading) {
        _push(`<div class="w-full h-full lg:w-full lg:h-80"><div>`);
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_LoadingRestorephoto, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div>`);
        if ($setup.fixedImage) {
          _push(`<div class="rounded-box lg:w-full lg:h-80 ring ring-primary ring-offset-base-100"><img class="w-76 h-40"${__vite_ssr_import_8__.ssrRenderAttr("src", $setup.fixedImage)}></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="bg-base-300 p-2 rounded-lg"><p>Please Select an Image</p></div>`);
  }
  _push(`</div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/restore-photo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/restore-photo.vue"]]);
;
}


// --------------------
// Request: /pages/text-to-art.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs ($id_c330c1a0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useRandomString.ts ($id_ebc0b334)
// - /composables/useUploadImage.ts ($id_ecf00ff8)
// - /components/common/Breadcrumb.vue ($id_20f1319f)
// - /components/loading/Art.vue ($id_ea681d2c)
// - /server/Service/ApiService.ts ($id_5c201c47)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_37b4c183 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useRandomString.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useUploadImage.ts");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/common/Breadcrumb.vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/loading/Art.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/server/Service/ApiService.ts");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const { createAlphanumericString } = __vite_ssr_import_1__.default();
    const styles = __vite_ssr_import_0__.ref([
      {
        id: 1,
        name: "Hotpot Art 1",
        value: "hotpotArt1",
        subStyles: []
      },
      {
        id: 2,
        name: "Hotpot Art 2",
        value: "hotpotArt2",
        subStyles: []
      },
      {
        id: 3,
        name: "Hotpot Art 3",
        value: "hotpotArt3",
        subStyles: []
      },
      {
        id: 4,
        name: "Painting",
        value: "painting",
        subStyles: [
          {
            id: 1,
            name: "Oil painting",
            value: "oil"
          },
          {
            id: 2,
            name: "Paul Cezanne",
            value: "cezanne"
          },
          {
            id: 3,
            name: "Claude Monet",
            value: "monet"
          },
          {
            id: 4,
            name: "Van Gogh",
            value: "vanGogh"
          },
          {
            id: 5,
            name: "Salvador Dali",
            value: "dali"
          },
          {
            id: 6,
            name: "Huang Gongwang",
            value: "huangGongwang"
          },
          {
            id: 7,
            name: "Custom",
            value: "custom"
          }
        ]
      },
      {
        id: 5,
        name: "Watercolor",
        value: "watercolor",
        subStyles: []
      },
      {
        id: 6,
        name: "Portrait",
        value: "portrait",
        subStyles: [
          {
            id: 1,
            name: "Hotpot Portrait 1",
            value: "hotpotPortrait1"
          },
          {
            id: 2,
            name: "Hotpot Portrait 2",
            value: "hotpotPortrait2"
          },
          {
            id: 3,
            name: "Hotpot Portrait 3",
            value: "hotpotPortrait3"
          }
        ]
      },
      {
        id: 7,
        name: "Photorealistic",
        value: "photorealistic",
        subStyles: [
          {
            id: 1,
            name: "Unreal Engine",
            value: "unreal"
          },
          {
            id: 2,
            name: "Volumetric lighting",
            value: "volumetric"
          },
          {
            id: 3,
            name: "Photo taken on an iPhone",
            value: "iphone"
          },
          {
            id: 4,
            name: "Photo taken with Fujifilm Superia",
            value: "fugifilm"
          },
          {
            id: 5,
            name: "Photo taken in high-definition",
            value: "highDef"
          }
        ]
      },
      {
        id: 8,
        name: "Graffiti",
        value: "graffiti",
        subStyles: []
      },
      {
        id: 9,
        name: "Anime",
        value: "anime",
        subStyles: [
          {
            id: 1,
            name: "Beautiful",
            value: "beautiful"
          },
          {
            id: 1,
            name: "Black & White",
            value: "blackWhite"
          },
          {
            id: 1,
            name: "Berserk",
            value: "berserk"
          }
        ]
      },
      {
        id: 10,
        name: "Japanese Art",
        value: "ukiyoe",
        subStyles: []
      },
      {
        id: 11,
        name: "Acrylic Art",
        value: "acrylicArt",
        subStyles: []
      },
      {
        id: 12,
        name: "Pencil Sketch",
        value: "pencilSketch",
        subStyles: []
      },
      {
        id: 13,
        name: "Black &amp; White 3D",
        value: "bw3D",
        subStyles: []
      },
      {
        id: 14,
        name: "Custom",
        value: "custom",
        subStyles: []
      },
      {
        id: 15,
        name: "Pixel Art",
        value: "pixelArt",
        subStyles: []
      }
    ]);
    const resolutions = __vite_ssr_import_0__.ref([
      { id: 1, name: "256x256", value: "256" },
      { id: 2, name: "512x512", value: "512" },
      { id: 3, name: "736x736", value: "736" }
    ]);
    const selectedResolution = __vite_ssr_import_0__.ref(null);
    const selectedStyle = __vite_ssr_import_0__.ref({
      id: 1,
      name: "Hotpot Art 1",
      value: "hotpotArt1",
      subStyles: []
    });
    const selectedSubStyle = __vite_ssr_import_0__.ref(null);
    const outputText = __vite_ssr_import_0__.ref("");
    const { _imageEncode, fixedImage } = __vite_ssr_import_2__.default();
    const onLoading = __vite_ssr_import_0__.ref(false);
    const searchText = __vite_ssr_import_0__.computed(() => selectedSubStyle.value ? selectedSubStyle.value : selectedStyle.value.name);
    const form = __vite_ssr_import_0__.computed(() => {
      return {
        requestId: createAlphanumericString(5),
        outputWidth: selectedResolution.value,
        numIterations: 800,
        waitTime: "premium",
        seedImage: null,
        inputText: setInputText.value
      };
    });
    const setInputText = __vite_ssr_import_0__.computed(() => {
      let type = selectedStyle.value.value;
      let styleModifier = searchText.value ? searchText.value : "";
      let inputText = outputText.value;
      if (type === "hotpotArt1") {
        inputText += " with harmonic colors created by subtle brush strokes trending on Instagram";
      } else if (type === "hotpotArt2") {
        inputText = "Beautiful artistic painting of " + inputText + " with vibrant colors and a happy palette";
      } else if (type === "hotpotArt3") {
        inputText = "Stunning art of " + inputText + " rendered from glass";
      } else if (type === "anime" && styleModifier === "Beautiful") {
        inputText = "Beautiful illustration with vibrant colors of " + inputText + " in the style of Japanese anime";
      } else if (type === "anime" && styleModifier === "Black & White") {
        inputText = "Stunning black & white illustration of " + inputText + " in the style of Japanese manga";
      } else if (type === "anime" && styleModifier === "Berserk") {
        inputText = "Gorgeous illustration of " + inputText + " in the style of the anime genre, Berserk";
      } else if (type === "portrait" && styleModifier === "Hotpot Portrait 1") {
        inputText = `Enchanting and creative portrait of ${inputText}, painted with unique brushstrokes in a distinctive style`;
      } else if (type === "portrait" && styleModifier === "Hotpot Portrait 2") {
        inputText = `Scary portrait of ${inputText}, painted with dark and foreboding colors`;
      } else if (type === "portrait" && styleModifier === "Hotpot Portrait 3") {
        inputText = `Gorgeous portrait of ${inputText}, painted with vivid and harmonious colors`;
      } else if (styleModifier) {
        inputText += " in the style of " + styleModifier;
      }
      return inputText;
    });
    const submit = async () => {
      onLoading.value = true;
      const formData = new FormData();
      formData.append("requestId", form.value.requestId);
      formData.append("outputWidth", form.value.outputWidth);
      formData.append("numIterations", form.value.numIterations);
      formData.append("inputText", form.value.inputText);
      await __vite_ssr_import_6__.artMaker(formData).then((res) => {
        _imageEncode(res);
        onLoading.value = false;
      });
    };
    const __returned__ = { createAlphanumericString, styles, resolutions, selectedResolution, selectedStyle, selectedSubStyle, outputText, _imageEncode, fixedImage, onLoading, searchText, form, setInputText, submit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CommonBreadcrumb = __vite_ssr_import_3__.default;
  const _component_LoadingArt = __vite_ssr_import_4__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "container mx-auto py-4" }, _attrs))}><div class="bg-base-200">`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_CommonBreadcrumb, { title: `Text To Art` }, null, _parent));
  _push(`<div class="flex flex-col lg:flex-row space-y-2 lg:space-x-4"><div class="card lg:w-4/12 max-w-sm shadow-2xl bg-base-100"><div class="card-body"><div class="form-control"><label class="label"><span class="label-text">${__vite_ssr_import_8__.ssrInterpolate(_ctx.$t("Style"))}</span></label><select class="select select-bordered w-full max-w-xs"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.styles, (item) => {
    _push(`<option${__vite_ssr_import_8__.ssrRenderAttr("value", item)}${__vite_ssr_import_8__.ssrIncludeBooleanAttr(item.id == 1 ? _ctx.selected : false) ? " selected" : ""}>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-control"><label class="label"><span class="label-text">${__vite_ssr_import_8__.ssrInterpolate(_ctx.$t("Sub Style"))}</span></label><select${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.selectedStyle.subStyles.length < 1 ? true : false) ? " disabled" : ""} class="select select-bordered w-full max-w-xs"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.selectedStyle.subStyles, (item) => {
    _push(`<option${__vite_ssr_import_8__.ssrRenderAttr("value", item.name)}>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-control"><label class="label"><span class="label-text">${__vite_ssr_import_8__.ssrInterpolate(_ctx.$t("Resolution"))}</span></label><select class="select select-bordered w-full max-w-xs"><!--[-->`);
  __vite_ssr_import_8__.ssrRenderList($setup.resolutions, (item) => {
    _push(`<option${__vite_ssr_import_8__.ssrRenderAttr("value", item.value)}${__vite_ssr_import_8__.ssrIncludeBooleanAttr(item.id == 1 ? _ctx.selected : false) ? " selected" : ""}>${__vite_ssr_import_8__.ssrInterpolate(item.name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-control"><label class="label"><span class="label-text">Output</span></label><textarea class="textarea h-24 textarea-bordered textarea-primary" placeholder="What do you want to see?">${__vite_ssr_import_8__.ssrInterpolate($setup.outputText)}</textarea></div><div class="form-control mt-6"><button${__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.onLoading) ? " disabled" : ""} class="btn btn-primary"> Submit </button></div></div></div><div class="card lg:w-8/12 shadow-2xl bg-base-100"><div class="card-body"><div class="avatar flex space-x-4">`);
  if ($setup.onLoading || $setup.fixedImage) {
    _push(`<div class="rounded-box w-full ring ring-primary ring-offset-base-100 ring-offset-2">`);
    if ($setup.onLoading) {
      _push(__vite_ssr_import_8__.ssrRenderComponent(_component_LoadingArt, null, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($setup.fixedImage) {
      _push(`<div class="rounded-box lg:w-full lg:h-104 ring ring-primary ring-offset-base-100"><img class="w-76 h-40"${__vite_ssr_import_8__.ssrRenderAttr("src", $setup.fixedImage)}></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="bg-base-300 p-2 rounded-lg"><p>Please Select the options</p></div>`);
  }
  _push(`</div></div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/text-to-art.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/pages/text-to-art.vue"]]);
;
}


// --------------------
// Request: /components/loading/Art.vue
// Parents: 
// - /pages/text-to-art.vue ($id_37b4c183)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ea681d2c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex skeleton-loading-card overflow-hidden bg-white rounded rounded-lg shadow" }, _attrs))}><div class="w-full h-40 loading lg:h-104 flex items-center justify-center"><div class="bg-orange-500 text-white p-4 rounded-lg"> Its take a 60-180 sec. please wait... </div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading/Art.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/loading/Art.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js ($id_24731f5b)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.vuei18n.options.mjs ($id_1151c09a)
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs ($id_4b699651)
// --------------------
const $id_b8547a9d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.vuei18n.options.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs");

const isEmpty = (obj) => Object.keys(obj).length === 0;
__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(async (nuxt) => {
  const { vueApp: app } = nuxt;
  const loadedOptions = await __vite_ssr_import_2__.default();
  if (!isEmpty(__vite_ssr_import_3__.default)) {
    loadedOptions.messages = __vite_ssr_import_3__.default;
  }
  const i18n = __vite_ssr_import_0__.createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    ...loadedOptions
  });
  app.use(i18n);
});
;
}


// --------------------
// Request: /node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs ($id_b8547a9d)
// Dependencies: 
// - /node_modules/@intlify/shared/dist/shared.esm-bundler.js ($id_500a2161)
// - /node_modules/@intlify/core-base/dist/core-base.esm-bundler.js ($id_008b81f5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// - /node_modules/@intlify/vue-devtools/dist/vue-devtools.esm-bundler.js ($id_c419997a)
// --------------------
const $id_24731f5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/*!
  * vue-i18n v9.2.0-beta.25
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@intlify/shared/dist/shared.esm-bundler.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@intlify/core-base/dist/core-base.esm-bundler.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/index.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@intlify/vue-devtools/dist/vue-devtools.esm-bundler.js");


/**
 * Vue I18n Version
 *
 * @remarks
 * Semver format. Same format as the package.json `version` field.
 *
 * @VueI18nGeneral
 */
const VERSION = '9.2.0-beta.25';
/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    let needWarn = false;
    if (typeof true !== 'boolean') {
        needWarn = true;
        __vite_ssr_import_0__.getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
    }
    if (typeof true !== 'boolean') {
        needWarn = true;
        __vite_ssr_import_0__.getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
    }
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
        __vite_ssr_import_0__.getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
    if (("development" !== 'production') && needWarn) {
        console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to ` +
            `configure your bundler to explicitly replace feature flag globals ` +
            `with boolean literals to get proper tree-shaking in the final bundle.`);
    }
}

let code$1 = __vite_ssr_import_1__.CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = () => code$1++;
const I18nWarnCodes = {
    FALLBACK_TO_ROOT: code$1,
    NOT_SUPPORTED_PRESERVE: inc$1(),
    NOT_SUPPORTED_FORMATTER: inc$1(),
    NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
    NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
    COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
    NOT_FOUND_PARENT_SCOPE: inc$1(),
    NOT_SUPPORT_MULTI_I18N_INSTANCE: inc$1() // 14
};
const warnMessages = {
    [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
    [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: `Not supported 'preserve'.`,
    [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: `Not supported 'formatter'.`,
    [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: `Not supported 'preserveDirectiveContent'.`,
    [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: `Not supported 'getChoiceIndex'.`,
    [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: `Component name legacy compatible: '{name}' -> 'i18n'`,
    [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
    [I18nWarnCodes.NOT_SUPPORT_MULTI_I18N_INSTANCE]: `Not support multi i18n instance.`
};
function getWarnMessage(code, ...args) {
    return __vite_ssr_import_0__.format(warnMessages[code], ...args);
}

let code = __vite_ssr_import_1__.CompileErrorCodes.__EXTEND_POINT__;
const inc = () => code++;
const I18nErrorCodes = {
    // composer module errors
    UNEXPECTED_RETURN_TYPE: code,
    // legacy module errors
    INVALID_ARGUMENT: inc(),
    // i18n module errors
    MUST_BE_CALL_SETUP_TOP: inc(),
    NOT_INSLALLED: inc(),
    NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
    // directive module errors
    REQUIRED_VALUE: inc(),
    INVALID_VALUE: inc(),
    // vue-devtools errors
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
    NOT_INSLALLED_WITH_PROVIDE: inc(),
    // unexpected error
    UNEXPECTED_ERROR: inc(),
    // not compatible legacy vue-i18n constructor
    NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
    // bridge support vue 2.x only
    BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
    // for enhancement
    __EXTEND_POINT__: inc() // 27
};
function createI18nError(code, ...args) {
    return __vite_ssr_import_1__.createCompileError(code, null, ("development" !== 'production') ? { messages: errorMessages, args } : undefined);
}
const errorMessages = {
    [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: 'Unexpected return type in composer',
    [I18nErrorCodes.INVALID_ARGUMENT]: 'Invalid argument',
    [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: 'Must be called at the top of a `setup` function',
    [I18nErrorCodes.NOT_INSLALLED]: 'Need to install with `app.use` function',
    [I18nErrorCodes.UNEXPECTED_ERROR]: 'Unexpected error',
    [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: 'Not available in legacy mode',
    [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
    [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
    [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
    [I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE]: 'Need to install with `provide` function',
    [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: 'Not compatible legacy VueI18n.',
    [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: 'vue-i18n-bridge support Vue 2.x only'
};

const TransrateVNodeSymbol = 
/* #__PURE__*/ __vite_ssr_import_0__.makeSymbol('__transrateVNode');
const DatetimePartsSymbol = /* #__PURE__*/ __vite_ssr_import_0__.makeSymbol('__datetimeParts');
const NumberPartsSymbol = /* #__PURE__*/ __vite_ssr_import_0__.makeSymbol('__numberParts');
const EnableEmitter = /* #__PURE__*/ __vite_ssr_import_0__.makeSymbol('__enableEmitter');
const DisableEmitter = /* #__PURE__*/ __vite_ssr_import_0__.makeSymbol('__disableEmitter');
const SetPluralRulesSymbol = __vite_ssr_import_0__.makeSymbol('__setPluralRules');
__vite_ssr_import_0__.makeSymbol('__intlifyMeta');
const InejctWithOption = /* #__PURE__*/ __vite_ssr_import_0__.makeSymbol('__injectWithOption');

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Transform flat json in obj to normal json in obj
 */
function handleFlatJson(obj) {
    // check obj
    if (!__vite_ssr_import_0__.isObject(obj)) {
        return obj;
    }
    for (const key in obj) {
        // check key
        if (!__vite_ssr_import_0__.hasOwn(obj, key)) {
            continue;
        }
        // handle for normal json
        if (!key.includes('.')) {
            // recursive process value if value is also a object
            if (__vite_ssr_import_0__.isObject(obj[key])) {
                handleFlatJson(obj[key]);
            }
        }
        // handle for flat json, transform to normal json
        else {
            // go to the last object
            const subKeys = key.split('.');
            const lastIndex = subKeys.length - 1;
            let currentObj = obj;
            for (let i = 0; i < lastIndex; i++) {
                if (!(subKeys[i] in currentObj)) {
                    currentObj[subKeys[i]] = {};
                }
                currentObj = currentObj[subKeys[i]];
            }
            // update last object value, delete old property
            currentObj[subKeys[lastIndex]] = obj[key];
            delete obj[key];
            // recursive process value if value is also a object
            if (__vite_ssr_import_0__.isObject(currentObj[subKeys[lastIndex]])) {
                handleFlatJson(currentObj[subKeys[lastIndex]]);
            }
        }
    }
    return obj;
}
function getLocaleMessages(locale, options) {
    const { messages, __i18n, messageResolver, flatJson } = options;
    // prettier-ignore
    const ret = __vite_ssr_import_0__.isPlainObject(messages)
        ? messages
        : __vite_ssr_import_0__.isArray(__i18n)
            ? {}
            : { [locale]: {} };
    // merge locale messages of i18n custom block
    if (__vite_ssr_import_0__.isArray(__i18n)) {
        __i18n.forEach(custom => {
            if ('locale' in custom && 'resource' in custom) {
                const { locale, resource } = custom;
                if (locale) {
                    ret[locale] = ret[locale] || {};
                    deepCopy(resource, ret[locale]);
                }
                else {
                    deepCopy(resource, ret);
                }
            }
            else {
                __vite_ssr_import_0__.isString(custom) && deepCopy(JSON.parse(custom), ret);
            }
        });
    }
    // handle messages for flat json
    if (messageResolver == null && flatJson) {
        for (const key in ret) {
            if (__vite_ssr_import_0__.hasOwn(ret, key)) {
                handleFlatJson(ret[key]);
            }
        }
    }
    return ret;
}
const isNotObjectOrIsArray = (val) => !__vite_ssr_import_0__.isObject(val) || __vite_ssr_import_0__.isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function deepCopy(src, des) {
    // src and des should both be objects, and non of then can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
    for (const key in src) {
        if (__vite_ssr_import_0__.hasOwn(src, key)) {
            if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not a object, or
                // src[key] or des[key] is a array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both object, merge them
                deepCopy(src[key], des[key]);
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComponentOptions(instance) {
    return instance.type ;
}
function adjustI18nResources(global, options, componentOptions // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    let messages = __vite_ssr_import_0__.isObject(options.messages) ? options.messages : {};
    if ('__i18nGlobal' in componentOptions) {
        messages = getLocaleMessages(global.locale.value, {
            messages,
            __i18n: componentOptions.__i18nGlobal
        });
    }
    // merge locale messages
    const locales = Object.keys(messages);
    if (locales.length) {
        locales.forEach(locale => {
            global.mergeLocaleMessage(locale, messages[locale]);
        });
    }
    {
        // merge datetime formats
        if (__vite_ssr_import_0__.isObject(options.datetimeFormats)) {
            const locales = Object.keys(options.datetimeFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
                });
            }
        }
        // merge number formats
        if (__vite_ssr_import_0__.isObject(options.numberFormats)) {
            const locales = Object.keys(options.numberFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeNumberFormat(locale, options.numberFormats[locale]);
                });
            }
        }
    }
}
function createTextNode(key) {
    return __vite_ssr_import_2__.createVNode(__vite_ssr_import_2__.Text, null, key, 0)
        ;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
// extend VNode interface
const DEVTOOLS_META = '__INTLIFY_META__';
let composerID = 0;
function defineCoreMissingHandler(missing) {
    return ((ctx, locale, key, type) => {
        return missing(locale, key, __vite_ssr_import_2__.getCurrentInstance() || undefined, type);
    });
}
// for Intlify DevTools
const getMetaInfo =  () => {
    const instance = __vite_ssr_import_2__.getCurrentInstance();
    let meta = null; // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META])
        ? { [DEVTOOLS_META]: meta } // eslint-disable-line @typescript-eslint/no-explicit-any
        : null;
};
/**
 * Create composer interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createComposer(options = {}, VueI18nLegacy) {
    const { __root } = options;
    const _isGlobal = __root === undefined;
    let _inheritLocale = __vite_ssr_import_0__.isBoolean(options.inheritLocale)
        ? options.inheritLocale
        : true;
    const _locale = __vite_ssr_import_2__.ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.locale.value
        : __vite_ssr_import_0__.isString(options.locale)
            ? options.locale
            : __vite_ssr_import_1__.DEFAULT_LOCALE);
    const _fallbackLocale = __vite_ssr_import_2__.ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.fallbackLocale.value
        : __vite_ssr_import_0__.isString(options.fallbackLocale) ||
            __vite_ssr_import_0__.isArray(options.fallbackLocale) ||
            __vite_ssr_import_0__.isPlainObject(options.fallbackLocale) ||
            options.fallbackLocale === false
            ? options.fallbackLocale
            : _locale.value);
    const _messages = __vite_ssr_import_2__.ref(getLocaleMessages(_locale.value, options));
    // prettier-ignore
    const _datetimeFormats = __vite_ssr_import_2__.ref(__vite_ssr_import_0__.isPlainObject(options.datetimeFormats)
            ? options.datetimeFormats
            : { [_locale.value]: {} })
        ;
    // prettier-ignore
    const _numberFormats = __vite_ssr_import_2__.ref(__vite_ssr_import_0__.isPlainObject(options.numberFormats)
            ? options.numberFormats
            : { [_locale.value]: {} })
        ;
    // warning suppress options
    // prettier-ignore
    let _missingWarn = __root
        ? __root.missingWarn
        : __vite_ssr_import_0__.isBoolean(options.missingWarn) || __vite_ssr_import_0__.isRegExp(options.missingWarn)
            ? options.missingWarn
            : true;
    // prettier-ignore
    let _fallbackWarn = __root
        ? __root.fallbackWarn
        : __vite_ssr_import_0__.isBoolean(options.fallbackWarn) || __vite_ssr_import_0__.isRegExp(options.fallbackWarn)
            ? options.fallbackWarn
            : true;
    // prettier-ignore
    let _fallbackRoot = __root
        ? __root.fallbackRoot
        : __vite_ssr_import_0__.isBoolean(options.fallbackRoot)
            ? options.fallbackRoot
            : true;
    // configure fall back to root
    let _fallbackFormat = !!options.fallbackFormat;
    // runtime missing
    let _missing = __vite_ssr_import_0__.isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = __vite_ssr_import_0__.isFunction(options.missing)
        ? defineCoreMissingHandler(options.missing)
        : null;
    // postTranslation handler
    let _postTranslation = __vite_ssr_import_0__.isFunction(options.postTranslation)
        ? options.postTranslation
        : null;
    let _warnHtmlMessage = __vite_ssr_import_0__.isBoolean(options.warnHtmlMessage)
        ? options.warnHtmlMessage
        : true;
    let _escapeParameter = !!options.escapeParameter;
    // custom linked modifiers
    // prettier-ignore
    const _modifiers = __root
        ? __root.modifiers
        : __vite_ssr_import_0__.isPlainObject(options.modifiers)
            ? options.modifiers
            : {};
    // pluralRules
    let _pluralRules = options.pluralRules || (__root && __root.pluralRules);
    // runtime context
    // eslint-disable-next-line prefer-const
    let _context;
    function getCoreContext() {
        const ctxOptions = {
            version: VERSION,
            locale: _locale.value,
            fallbackLocale: _fallbackLocale.value,
            messages: _messages.value,
            modifiers: _modifiers,
            pluralRules: _pluralRules,
            missing: _runtimeMissing === null ? undefined : _runtimeMissing,
            missingWarn: _missingWarn,
            fallbackWarn: _fallbackWarn,
            fallbackFormat: _fallbackFormat,
            unresolving: true,
            postTranslation: _postTranslation === null ? undefined : _postTranslation,
            warnHtmlMessage: _warnHtmlMessage,
            escapeParameter: _escapeParameter,
            messageResolver: options.messageResolver,
            __meta: { framework: 'vue' }
        };
        {
            ctxOptions.datetimeFormats = _datetimeFormats.value;
            ctxOptions.numberFormats = _numberFormats.value;
            ctxOptions.__datetimeFormatters = __vite_ssr_import_0__.isPlainObject(_context)
                ? _context.__datetimeFormatters
                : undefined;
            ctxOptions.__numberFormatters = __vite_ssr_import_0__.isPlainObject(_context)
                ? _context.__numberFormatters
                : undefined;
        }
        if (("development" !== 'production')) {
            ctxOptions.__v_emitter = __vite_ssr_import_0__.isPlainObject(_context)
                ? _context.__v_emitter
                : undefined;
        }
        return __vite_ssr_import_1__.createCoreContext(ctxOptions);
    }
    _context = getCoreContext();
    __vite_ssr_import_1__.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    // track reactivity
    function trackReactivityValues() {
        return [
                _locale.value,
                _fallbackLocale.value,
                _messages.value,
                _datetimeFormats.value,
                _numberFormats.value
            ]
            ;
    }
    // locale
    const locale = __vite_ssr_import_2__.computed({
        get: () => _locale.value,
        set: val => {
            _locale.value = val;
            _context.locale = _locale.value;
        }
    });
    // fallbackLocale
    const fallbackLocale = __vite_ssr_import_2__.computed({
        get: () => _fallbackLocale.value,
        set: val => {
            _fallbackLocale.value = val;
            _context.fallbackLocale = _fallbackLocale.value;
            __vite_ssr_import_1__.updateFallbackLocale(_context, _locale.value, val);
        }
    });
    // messages
    const messages = __vite_ssr_import_2__.computed(() => _messages.value);
    // datetimeFormats
    const datetimeFormats = /* #__PURE__*/ __vite_ssr_import_2__.computed(() => _datetimeFormats.value);
    // numberFormats
    const numberFormats = /* #__PURE__*/ __vite_ssr_import_2__.computed(() => _numberFormats.value);
    // getPostTranslationHandler
    function getPostTranslationHandler() {
        return __vite_ssr_import_0__.isFunction(_postTranslation) ? _postTranslation : null;
    }
    // setPostTranslationHandler
    function setPostTranslationHandler(handler) {
        _postTranslation = handler;
        _context.postTranslation = handler;
    }
    // getMissingHandler
    function getMissingHandler() {
        return _missing;
    }
    // setMissingHandler
    function setMissingHandler(handler) {
        if (handler !== null) {
            _runtimeMissing = defineCoreMissingHandler(handler);
        }
        _missing = handler;
        _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg // eslint-disable-line @typescript-eslint/no-explicit-any
    ) {
        return type !== 'translate' || !arg.resolvedMessage;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
        trackReactivityValues(); // track reactive dependency
        // NOTE: experimental !!
        let ret;
        if (("development" !== 'production') || __INTLIFY_PROD_DEVTOOLS__) {
            try {
                __vite_ssr_import_1__.setAdditionalMeta(getMetaInfo());
                ret = fn(_context);
            }
            finally {
                __vite_ssr_import_1__.setAdditionalMeta(null);
            }
        }
        else {
            ret = fn(_context);
        }
        if (__vite_ssr_import_0__.isNumber(ret) && ret === __vite_ssr_import_1__.NOT_REOSLVED) {
            const [key, arg2] = argumentParser();
            if (("development" !== 'production') &&
                __root &&
                __vite_ssr_import_0__.isString(key) &&
                isResolvedTranslateMessage(warnType, arg2)) {
                if (_fallbackRoot &&
                    (__vite_ssr_import_1__.isTranslateFallbackWarn(_fallbackWarn, key) ||
                        __vite_ssr_import_1__.isTranslateMissingWarn(_missingWarn, key))) {
                    __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
                        key,
                        type: warnType
                    }));
                }
                // for vue-devtools timeline event
                if (("development" !== 'production')) {
                    const { __v_emitter: emitter } = _context;
                    if (emitter && _fallbackRoot) {
                        emitter.emit("fallback" /* FALBACK */, {
                            type: warnType,
                            key,
                            to: 'global',
                            groupId: `${warnType}:${key}`
                        });
                    }
                }
            }
            return __root && _fallbackRoot
                ? fallbackSuccess(__root)
                : fallbackFail(key);
        }
        else if (successCondition(ret)) {
            return ret;
        }
        else {
            /* istanbul ignore next */
            throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
        }
    }
    // t
    function t(...args) {
        return wrapWithDeps(context => Reflect.apply(__vite_ssr_import_1__.translate, null, [context, ...args]), () => __vite_ssr_import_1__.parseTranslateArgs(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => __vite_ssr_import_0__.isString(val));
    }
    // rt
    function rt(...args) {
        const [arg1, arg2, arg3] = args;
        if (arg3 && !__vite_ssr_import_0__.isObject(arg3)) {
            throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        return t(...[arg1, arg2, __vite_ssr_import_0__.assign({ resolvedMessage: true }, arg3 || {})]);
    }
    // d
    function d(...args) {
        return wrapWithDeps(context => Reflect.apply(__vite_ssr_import_1__.datetime, null, [context, ...args]), () => __vite_ssr_import_1__.parseDateTimeArgs(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => __vite_ssr_import_1__.MISSING_RESOLVE_VALUE, val => __vite_ssr_import_0__.isString(val));
    }
    // n
    function n(...args) {
        return wrapWithDeps(context => Reflect.apply(__vite_ssr_import_1__.number, null, [context, ...args]), () => __vite_ssr_import_1__.parseNumberArgs(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => __vite_ssr_import_1__.MISSING_RESOLVE_VALUE, val => __vite_ssr_import_0__.isString(val));
    }
    // for custom processor
    function normalize(values) {
        return values.map(val => (__vite_ssr_import_0__.isString(val) ? createTextNode(val) : val));
    }
    const interpolate = (val) => val;
    const processor = {
        normalize,
        interpolate,
        type: 'vnode'
    };
    // transrateVNode, using for `i18n-t` component
    function transrateVNode(...args) {
        return wrapWithDeps(context => {
            let ret;
            const _context = context;
            try {
                _context.processor = processor;
                ret = Reflect.apply(__vite_ssr_import_1__.translate, null, [_context, ...args]);
            }
            finally {
                _context.processor = null;
            }
            return ret;
        }, () => __vite_ssr_import_1__.parseTranslateArgs(...args), 'translate', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[TransrateVNodeSymbol](...args), key => [createTextNode(key)], val => __vite_ssr_import_0__.isArray(val));
    }
    // numberParts, using for `i18n-n` component
    function numberParts(...args) {
        return wrapWithDeps(context => Reflect.apply(__vite_ssr_import_1__.number, null, [context, ...args]), () => __vite_ssr_import_1__.parseNumberArgs(...args), 'number format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[NumberPartsSymbol](...args), () => [], val => __vite_ssr_import_0__.isString(val) || __vite_ssr_import_0__.isArray(val));
    }
    // datetimeParts, using for `i18n-d` component
    function datetimeParts(...args) {
        return wrapWithDeps(context => Reflect.apply(__vite_ssr_import_1__.datetime, null, [context, ...args]), () => __vite_ssr_import_1__.parseDateTimeArgs(...args), 'datetime format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[DatetimePartsSymbol](...args), () => [], val => __vite_ssr_import_0__.isString(val) || __vite_ssr_import_0__.isArray(val));
    }
    function setPluralRules(rules) {
        _pluralRules = rules;
        _context.pluralRules = _pluralRules;
    }
    // te
    function te(key, locale) {
        const targetLocale = __vite_ssr_import_0__.isString(locale) ? locale : _locale.value;
        const message = getLocaleMessage(targetLocale);
        return _context.messageResolver(message, key) !== null;
    }
    function resolveMessages(key) {
        let messages = null;
        const locales = __vite_ssr_import_1__.fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
        for (let i = 0; i < locales.length; i++) {
            const targetLocaleMessages = _messages.value[locales[i]] || {};
            const messageValue = _context.messageResolver(targetLocaleMessages, key);
            if (messageValue != null) {
                messages = messageValue;
                break;
            }
        }
        return messages;
    }
    // tm
    function tm(key) {
        const messages = resolveMessages(key);
        // prettier-ignore
        return messages != null
            ? messages
            : __root
                ? __root.tm(key) || {}
                : {};
    }
    // getLocaleMessage
    function getLocaleMessage(locale) {
        return (_messages.value[locale] || {});
    }
    // setLocaleMessage
    function setLocaleMessage(locale, message) {
        _messages.value[locale] = message;
        _context.messages = _messages.value;
    }
    // mergeLocaleMessage
    function mergeLocaleMessage(locale, message) {
        _messages.value[locale] = _messages.value[locale] || {};
        deepCopy(message, _messages.value[locale]);
        _context.messages = _messages.value;
    }
    // getDateTimeFormat
    function getDateTimeFormat(locale) {
        return _datetimeFormats.value[locale] || {};
    }
    // setDateTimeFormat
    function setDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = format;
        _context.datetimeFormats = _datetimeFormats.value;
        __vite_ssr_import_1__.clearDateTimeFormat(_context, locale, format);
    }
    // mergeDateTimeFormat
    function mergeDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = __vite_ssr_import_0__.assign(_datetimeFormats.value[locale] || {}, format);
        _context.datetimeFormats = _datetimeFormats.value;
        __vite_ssr_import_1__.clearDateTimeFormat(_context, locale, format);
    }
    // getNumberFormat
    function getNumberFormat(locale) {
        return _numberFormats.value[locale] || {};
    }
    // setNumberFormat
    function setNumberFormat(locale, format) {
        _numberFormats.value[locale] = format;
        _context.numberFormats = _numberFormats.value;
        __vite_ssr_import_1__.clearNumberFormat(_context, locale, format);
    }
    // mergeNumberFormat
    function mergeNumberFormat(locale, format) {
        _numberFormats.value[locale] = __vite_ssr_import_0__.assign(_numberFormats.value[locale] || {}, format);
        _context.numberFormats = _numberFormats.value;
        __vite_ssr_import_1__.clearNumberFormat(_context, locale, format);
    }
    // for debug
    composerID++;
    // watch root locale & fallbackLocale
    if (__root) {
        __vite_ssr_import_2__.watch(__root.locale, (val) => {
            if (_inheritLocale) {
                _locale.value = val;
                _context.locale = val;
                __vite_ssr_import_1__.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
        __vite_ssr_import_2__.watch(__root.fallbackLocale, (val) => {
            if (_inheritLocale) {
                _fallbackLocale.value = val;
                _context.fallbackLocale = val;
                __vite_ssr_import_1__.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
    }
    // define basic composition API!
    const composer = {
        id: composerID,
        locale,
        fallbackLocale,
        get inheritLocale() {
            return _inheritLocale;
        },
        set inheritLocale(val) {
            _inheritLocale = val;
            if (val && __root) {
                _locale.value = __root.locale.value;
                _fallbackLocale.value = __root.fallbackLocale.value;
                __vite_ssr_import_1__.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        },
        get availableLocales() {
            return Object.keys(_messages.value).sort();
        },
        messages,
        get modifiers() {
            return _modifiers;
        },
        get pluralRules() {
            return _pluralRules || {};
        },
        get isGlobal() {
            return _isGlobal;
        },
        get missingWarn() {
            return _missingWarn;
        },
        set missingWarn(val) {
            _missingWarn = val;
            _context.missingWarn = _missingWarn;
        },
        get fallbackWarn() {
            return _fallbackWarn;
        },
        set fallbackWarn(val) {
            _fallbackWarn = val;
            _context.fallbackWarn = _fallbackWarn;
        },
        get fallbackRoot() {
            return _fallbackRoot;
        },
        set fallbackRoot(val) {
            _fallbackRoot = val;
        },
        get fallbackFormat() {
            return _fallbackFormat;
        },
        set fallbackFormat(val) {
            _fallbackFormat = val;
            _context.fallbackFormat = _fallbackFormat;
        },
        get warnHtmlMessage() {
            return _warnHtmlMessage;
        },
        set warnHtmlMessage(val) {
            _warnHtmlMessage = val;
            _context.warnHtmlMessage = val;
        },
        get escapeParameter() {
            return _escapeParameter;
        },
        set escapeParameter(val) {
            _escapeParameter = val;
            _context.escapeParameter = val;
        },
        t,
        getLocaleMessage,
        setLocaleMessage,
        mergeLocaleMessage,
        getPostTranslationHandler,
        setPostTranslationHandler,
        getMissingHandler,
        setMissingHandler,
        [SetPluralRulesSymbol]: setPluralRules
    };
    {
        composer.datetimeFormats = datetimeFormats;
        composer.numberFormats = numberFormats;
        composer.rt = rt;
        composer.te = te;
        composer.tm = tm;
        composer.d = d;
        composer.n = n;
        composer.getDateTimeFormat = getDateTimeFormat;
        composer.setDateTimeFormat = setDateTimeFormat;
        composer.mergeDateTimeFormat = mergeDateTimeFormat;
        composer.getNumberFormat = getNumberFormat;
        composer.setNumberFormat = setNumberFormat;
        composer.mergeNumberFormat = mergeNumberFormat;
        composer[InejctWithOption] = options.__injectWithOption;
        composer[TransrateVNodeSymbol] = transrateVNode;
        composer[DatetimePartsSymbol] = datetimeParts;
        composer[NumberPartsSymbol] = numberParts;
    }
    // for vue-devtools timeline event
    if (("development" !== 'production')) {
        composer[EnableEmitter] = (emitter) => {
            _context.__v_emitter = emitter;
        };
        composer[DisableEmitter] = () => {
            _context.__v_emitter = undefined;
        };
    }
    return composer;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Convert to I18n Composer Options from VueI18n Options
 *
 * @internal
 */
function convertComposerOptions(options) {
    const locale = __vite_ssr_import_0__.isString(options.locale) ? options.locale : __vite_ssr_import_1__.DEFAULT_LOCALE;
    const fallbackLocale = __vite_ssr_import_0__.isString(options.fallbackLocale) ||
        __vite_ssr_import_0__.isArray(options.fallbackLocale) ||
        __vite_ssr_import_0__.isPlainObject(options.fallbackLocale) ||
        options.fallbackLocale === false
        ? options.fallbackLocale
        : locale;
    const missing = __vite_ssr_import_0__.isFunction(options.missing) ? options.missing : undefined;
    const missingWarn = __vite_ssr_import_0__.isBoolean(options.silentTranslationWarn) ||
        __vite_ssr_import_0__.isRegExp(options.silentTranslationWarn)
        ? !options.silentTranslationWarn
        : true;
    const fallbackWarn = __vite_ssr_import_0__.isBoolean(options.silentFallbackWarn) ||
        __vite_ssr_import_0__.isRegExp(options.silentFallbackWarn)
        ? !options.silentFallbackWarn
        : true;
    const fallbackRoot = __vite_ssr_import_0__.isBoolean(options.fallbackRoot)
        ? options.fallbackRoot
        : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = __vite_ssr_import_0__.isPlainObject(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = __vite_ssr_import_0__.isFunction(options.postTranslation)
        ? options.postTranslation
        : undefined;
    const warnHtmlMessage = __vite_ssr_import_0__.isString(options.warnHtmlInMessage)
        ? options.warnHtmlInMessage !== 'off'
        : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = __vite_ssr_import_0__.isBoolean(options.sync) ? options.sync : true;
    if (("development" !== 'production') && options.formatter) {
        __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
    }
    if (("development" !== 'production') && options.preserveDirectiveContent) {
        __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
    }
    let messages = options.messages;
    if (__vite_ssr_import_0__.isPlainObject(options.sharedMessages)) {
        const sharedMessages = options.sharedMessages;
        const locales = Object.keys(sharedMessages);
        messages = locales.reduce((messages, locale) => {
            const message = messages[locale] || (messages[locale] = {});
            __vite_ssr_import_0__.assign(message, sharedMessages[locale]);
            return messages;
        }, (messages || {}));
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
        locale,
        fallbackLocale,
        messages,
        flatJson,
        datetimeFormats,
        numberFormats,
        missing,
        missingWarn,
        fallbackWarn,
        fallbackRoot,
        fallbackFormat,
        modifiers,
        pluralRules: pluralizationRules,
        postTranslation,
        warnHtmlMessage,
        escapeParameter,
        messageResolver: options.messageResolver,
        inheritLocale,
        __i18n,
        __root,
        __injectWithOption
    };
}
/**
 * create VueI18n interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createVueI18n(options = {}, VueI18nLegacy) {
    {
        const composer = createComposer(convertComposerOptions(options));
        // defines VueI18n
        const vueI18n = {
            // id
            id: composer.id,
            // locale
            get locale() {
                return composer.locale.value;
            },
            set locale(val) {
                composer.locale.value = val;
            },
            // fallbackLocale
            get fallbackLocale() {
                return composer.fallbackLocale.value;
            },
            set fallbackLocale(val) {
                composer.fallbackLocale.value = val;
            },
            // messages
            get messages() {
                return composer.messages.value;
            },
            // datetimeFormats
            get datetimeFormats() {
                return composer.datetimeFormats.value;
            },
            // numberFormats
            get numberFormats() {
                return composer.numberFormats.value;
            },
            // availableLocales
            get availableLocales() {
                return composer.availableLocales;
            },
            // formatter
            get formatter() {
                ("development" !== 'production') && __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
                // dummy
                return {
                    interpolate() {
                        return [];
                    }
                };
            },
            set formatter(val) {
                ("development" !== 'production') && __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
            },
            // missing
            get missing() {
                return composer.getMissingHandler();
            },
            set missing(handler) {
                composer.setMissingHandler(handler);
            },
            // silentTranslationWarn
            get silentTranslationWarn() {
                return __vite_ssr_import_0__.isBoolean(composer.missingWarn)
                    ? !composer.missingWarn
                    : composer.missingWarn;
            },
            set silentTranslationWarn(val) {
                composer.missingWarn = __vite_ssr_import_0__.isBoolean(val) ? !val : val;
            },
            // silentFallbackWarn
            get silentFallbackWarn() {
                return __vite_ssr_import_0__.isBoolean(composer.fallbackWarn)
                    ? !composer.fallbackWarn
                    : composer.fallbackWarn;
            },
            set silentFallbackWarn(val) {
                composer.fallbackWarn = __vite_ssr_import_0__.isBoolean(val) ? !val : val;
            },
            // modifiers
            get modifiers() {
                return composer.modifiers;
            },
            // formatFallbackMessages
            get formatFallbackMessages() {
                return composer.fallbackFormat;
            },
            set formatFallbackMessages(val) {
                composer.fallbackFormat = val;
            },
            // postTranslation
            get postTranslation() {
                return composer.getPostTranslationHandler();
            },
            set postTranslation(handler) {
                composer.setPostTranslationHandler(handler);
            },
            // sync
            get sync() {
                return composer.inheritLocale;
            },
            set sync(val) {
                composer.inheritLocale = val;
            },
            // warnInHtmlMessage
            get warnHtmlInMessage() {
                return composer.warnHtmlMessage ? 'warn' : 'off';
            },
            set warnHtmlInMessage(val) {
                composer.warnHtmlMessage = val !== 'off';
            },
            // escapeParameterHtml
            get escapeParameterHtml() {
                return composer.escapeParameter;
            },
            set escapeParameterHtml(val) {
                composer.escapeParameter = val;
            },
            // preserveDirectiveContent
            get preserveDirectiveContent() {
                ("development" !== 'production') &&
                    __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
                return true;
            },
            set preserveDirectiveContent(val) {
                ("development" !== 'production') &&
                    __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
            },
            // pluralizationRules
            get pluralizationRules() {
                return composer.pluralRules || {};
            },
            // for internal
            __composer: composer,
            // t
            t(...args) {
                const [arg1, arg2, arg3] = args;
                const options = {};
                let list = null;
                let named = null;
                if (!__vite_ssr_import_0__.isString(arg1)) {
                    throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
                }
                const key = arg1;
                if (__vite_ssr_import_0__.isString(arg2)) {
                    options.locale = arg2;
                }
                else if (__vite_ssr_import_0__.isArray(arg2)) {
                    list = arg2;
                }
                else if (__vite_ssr_import_0__.isPlainObject(arg2)) {
                    named = arg2;
                }
                if (__vite_ssr_import_0__.isArray(arg3)) {
                    list = arg3;
                }
                else if (__vite_ssr_import_0__.isPlainObject(arg3)) {
                    named = arg3;
                }
                // return composer.t(key, (list || named || {}) as any, options)
                return Reflect.apply(composer.t, composer, [
                    key,
                    (list || named || {}),
                    options
                ]);
            },
            rt(...args) {
                return Reflect.apply(composer.rt, composer, [...args]);
            },
            // tc
            tc(...args) {
                const [arg1, arg2, arg3] = args;
                const options = { plural: 1 };
                let list = null;
                let named = null;
                if (!__vite_ssr_import_0__.isString(arg1)) {
                    throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
                }
                const key = arg1;
                if (__vite_ssr_import_0__.isString(arg2)) {
                    options.locale = arg2;
                }
                else if (__vite_ssr_import_0__.isNumber(arg2)) {
                    options.plural = arg2;
                }
                else if (__vite_ssr_import_0__.isArray(arg2)) {
                    list = arg2;
                }
                else if (__vite_ssr_import_0__.isPlainObject(arg2)) {
                    named = arg2;
                }
                if (__vite_ssr_import_0__.isString(arg3)) {
                    options.locale = arg3;
                }
                else if (__vite_ssr_import_0__.isArray(arg3)) {
                    list = arg3;
                }
                else if (__vite_ssr_import_0__.isPlainObject(arg3)) {
                    named = arg3;
                }
                // return composer.t(key, (list || named || {}) as any, options)
                return Reflect.apply(composer.t, composer, [
                    key,
                    (list || named || {}),
                    options
                ]);
            },
            // te
            te(key, locale) {
                return composer.te(key, locale);
            },
            // tm
            tm(key) {
                return composer.tm(key);
            },
            // getLocaleMessage
            getLocaleMessage(locale) {
                return composer.getLocaleMessage(locale);
            },
            // setLocaleMessage
            setLocaleMessage(locale, message) {
                composer.setLocaleMessage(locale, message);
            },
            // mergeLocaleMessage
            mergeLocaleMessage(locale, message) {
                composer.mergeLocaleMessage(locale, message);
            },
            // d
            d(...args) {
                return Reflect.apply(composer.d, composer, [...args]);
            },
            // getDateTimeFormat
            getDateTimeFormat(locale) {
                return composer.getDateTimeFormat(locale);
            },
            // setDateTimeFormat
            setDateTimeFormat(locale, format) {
                composer.setDateTimeFormat(locale, format);
            },
            // mergeDateTimeFormat
            mergeDateTimeFormat(locale, format) {
                composer.mergeDateTimeFormat(locale, format);
            },
            // n
            n(...args) {
                return Reflect.apply(composer.n, composer, [...args]);
            },
            // getNumberFormat
            getNumberFormat(locale) {
                return composer.getNumberFormat(locale);
            },
            // setNumberFormat
            setNumberFormat(locale, format) {
                composer.setNumberFormat(locale, format);
            },
            // mergeNumberFormat
            mergeNumberFormat(locale, format) {
                composer.mergeNumberFormat(locale, format);
            },
            // getChoiceIndex
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            getChoiceIndex(choice, choicesLength) {
                ("development" !== 'production') &&
                    __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX));
                return -1;
            },
            // for internal
            __onComponentInstanceCreated(target) {
                const { componentInstanceCreatedListener } = options;
                if (componentInstanceCreatedListener) {
                    componentInstanceCreatedListener(target, vueI18n);
                }
            }
        };
        // for vue-devtools timeline event
        if (("development" !== 'production')) {
            vueI18n.__enableEmitter = (emitter) => {
                const __composer = composer;
                __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
            };
            vueI18n.__disableEmitter = () => {
                const __composer = composer;
                __composer[DisableEmitter] && __composer[DisableEmitter]();
            };
        }
        return vueI18n;
    }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const baseFormatProps = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        validator: (val /* ComponetI18nScope */) => val === 'parent' || val === 'global',
        default: 'parent' /* ComponetI18nScope */
    },
    i18n: {
        type: Object
    }
};

function getInterpolateArg(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
{ slots }, // SetupContext,
keys) {
    if (keys.length === 1 && keys[0] === 'default') {
        // default slot with list
        const ret = slots.default ? slots.default() : [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ret.reduce((slot, current) => {
            return (slot = [
                ...slot,
                ...(__vite_ssr_import_0__.isArray(current.children) ? current.children : [current])
            ]);
        }, []);
    }
    else {
        // named slots
        return keys.reduce((arg, key) => {
            const slot = slots[key];
            if (slot) {
                arg[key] = slot();
            }
            return arg;
        }, {});
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFragmentableTag(tag) {
    return __vite_ssr_import_2__.Fragment ;
}

/**
 * Translation Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [TranslationProps](component#translationprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Component Interpolation](../guide/advanced/component)
 *
 * @example
 * ```html
 * <div id="app">
 *   <!-- ... -->
 *   <i18n path="term" tag="label" for="tos">
 *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
 *   </i18n>
 *   <!-- ... -->
 * </div>
 * ```
 * ```js
 * import { createApp } from 'vue'
 * import { createI18n } from 'vue-i18n'
 *
 * const messages = {
 *   en: {
 *     tos: 'Term of Service',
 *     term: 'I accept xxx {0}.'
 *   },
 *   ja: {
 *     tos: '利用規約',
 *     term: '私は xxx の{0}に同意します。'
 *   }
 * }
 *
 * const i18n = createI18n({
 *   locale: 'en',
 *   messages
 * })
 *
 * const app = createApp({
 *   data: {
 *     url: '/term'
 *   }
 * }).use(i18n).mount('#app')
 * ```
 *
 * @VueI18nComponent
 */
const Translation =  /* defineComponent */ {
    /* eslint-disable */
    name: 'i18n-t',
    props: __vite_ssr_import_0__.assign({
        keypath: {
            type: String,
            required: true
        },
        plural: {
            type: [Number, String],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validator: (val) => __vite_ssr_import_0__.isNumber(val) || !isNaN(val)
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const { slots, attrs } = context;
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        const i18n = props.i18n ||
            useI18n({
                useScope: props.scope,
                __useComponent: true
            });
        const keys = Object.keys(slots).filter(key => key !== '_');
        return () => {
            const options = {};
            if (props.locale) {
                options.locale = props.locale;
            }
            if (props.plural !== undefined) {
                options.plural = __vite_ssr_import_0__.isString(props.plural) ? +props.plural : props.plural;
            }
            const arg = getInterpolateArg(context, keys);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
            const assignedAttrs = __vite_ssr_import_0__.assign({}, attrs);
            const tag = __vite_ssr_import_0__.isString(props.tag) || __vite_ssr_import_0__.isObject(props.tag)
                ? props.tag
                : getFragmentableTag();
            return __vite_ssr_import_2__.h(tag, assignedAttrs, children);
        };
    }
};

function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
        const options = { part: true };
        let overrides = {};
        if (props.locale) {
            options.locale = props.locale;
        }
        if (__vite_ssr_import_0__.isString(props.format)) {
            options.key = props.format;
        }
        else if (__vite_ssr_import_0__.isObject(props.format)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (__vite_ssr_import_0__.isString(props.format.key)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options.key = props.format.key;
            }
            // Filter out number format options only
            overrides = Object.keys(props.format).reduce((options, prop) => {
                return slotKeys.includes(prop)
                    ? __vite_ssr_import_0__.assign({}, options, { [prop]: props.format[prop] }) // eslint-disable-line @typescript-eslint/no-explicit-any
                    : options;
            }, {});
        }
        const parts = partFormatter(...[props.value, options, overrides]);
        let children = [options.key];
        if (__vite_ssr_import_0__.isArray(parts)) {
            children = parts.map((part, index) => {
                const slot = slots[part.type];
                return slot
                    ? slot({ [part.type]: part.value, index, parts })
                    : [part.value];
            });
        }
        else if (__vite_ssr_import_0__.isString(parts)) {
            children = [parts];
        }
        const assignedAttrs = __vite_ssr_import_0__.assign({}, attrs);
        const tag = __vite_ssr_import_0__.isString(props.tag) || __vite_ssr_import_0__.isObject(props.tag)
            ? props.tag
            : getFragmentableTag();
        return __vite_ssr_import_2__.h(tag, assignedAttrs, children);
    };
}

const NUMBER_FORMAT_KEYS = [
    'localeMatcher',
    'style',
    'unit',
    'unitDisplay',
    'currency',
    'currencyDisplay',
    'useGrouping',
    'numberingSystem',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    'notation',
    'formatMatcher'
];
/**
 * Number Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
 *
 * @VueI18nComponent
 */
const NumberFormat =  /* defineComponent */ {
    /* eslint-disable */
    name: 'i18n-n',
    props: __vite_ssr_import_0__.assign({
        value: {
            type: Number,
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({ useScope: 'parent', __useComponent: true });
        return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[NumberPartsSymbol](...args));
    }
};

const DATETIME_FORMAT_KEYS = [
    'dateStyle',
    'timeStyle',
    'fractionalSecondDigits',
    'calendar',
    'dayPeriod',
    'numberingSystem',
    'localeMatcher',
    'timeZone',
    'hour12',
    'hourCycle',
    'formatMatcher',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName'
];
/**
 * Datetime Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
 *
 * @VueI18nComponent
 */
const DatetimeFormat =  /*defineComponent */ {
    /* eslint-disable */
    name: 'i18n-d',
    props: __vite_ssr_import_0__.assign({
        value: {
            type: [Number, Date],
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({ useScope: 'parent', __useComponent: true });
        return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[DatetimePartsSymbol](...args));
    }
};

function getComposer$2(i18n, instance) {
    const i18nInternal = i18n;
    if (i18n.mode === 'composition') {
        return (i18nInternal.__getInstance(instance) || i18n.global);
    }
    else {
        const vueI18n = i18nInternal.__getInstance(instance);
        return vueI18n != null
            ? vueI18n.__composer
            : i18n.global.__composer;
    }
}
function vTDirective(i18n) {
    const bind = (el, { instance, value, modifiers }) => {
        /* istanbul ignore if */
        if (!instance || !instance.$) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        const composer = getComposer$2(i18n, instance.$);
        if (("development" !== 'production') && modifiers.preserve) {
            __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));
        }
        const parsedValue = parseValue(value);
        // el.textContent = composer.t(...makeParams(parsedValue))
        el.textContent = Reflect.apply(composer.t, composer, [
            ...makeParams(parsedValue)
        ]);
    };
    return {
        beforeMount: bind,
        beforeUpdate: bind
    };
}
function parseValue(value) {
    if (__vite_ssr_import_0__.isString(value)) {
        return { path: value };
    }
    else if (__vite_ssr_import_0__.isPlainObject(value)) {
        if (!('path' in value)) {
            throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');
        }
        return value;
    }
    else {
        throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
}
function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (__vite_ssr_import_0__.isString(locale)) {
        options.locale = locale;
    }
    if (__vite_ssr_import_0__.isNumber(choice)) {
        options.plural = choice;
    }
    if (__vite_ssr_import_0__.isNumber(plural)) {
        options.plural = plural;
    }
    return [path, named, options];
}

function apply(app, i18n, ...options) {
    const pluginOptions = __vite_ssr_import_0__.isPlainObject(options[0])
        ? options[0]
        : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = __vite_ssr_import_0__.isBoolean(pluginOptions.globalInstall)
        ? pluginOptions.globalInstall
        : true;
    if (("development" !== 'production') && globalInstall && useI18nComponentName) {
        __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
            name: Translation.name
        }));
    }
    if (globalInstall) {
        // install components
        app.component(!useI18nComponentName ? Translation.name : 'i18n', Translation);
        app.component(NumberFormat.name, NumberFormat);
        app.component(DatetimeFormat.name, DatetimeFormat);
    }
    // install directive
    {
        app.directive('t', vTDirective(i18n));
    }
}

const VUE_I18N_COMPONENT_TYPES = 'vue-i18n: composer properties';
let devtoolsApi;
async function enableDevTools(app, i18n) {
    return new Promise((resolve, reject) => {
        try {
            __vite_ssr_import_3__.setupDevtoolsPlugin({
                id: "vue-devtools-plugin-vue-i18n" /* PLUGIN */,
                label: __vite_ssr_import_4__.VueDevToolsLabels["vue-devtools-plugin-vue-i18n" /* PLUGIN */],
                packageName: 'vue-i18n',
                homepage: 'https://vue-i18n.intlify.dev',
                logo: 'https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png',
                componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
                app
            }, api => {
                devtoolsApi = api;
                api.on.visitComponentTree(({ componentInstance, treeNode }) => {
                    updateComponentTreeTags(componentInstance, treeNode, i18n);
                });
                api.on.inspectComponent(({ componentInstance, instanceData }) => {
                    if (componentInstance.vnode.el &&
                        componentInstance.vnode.el.__VUE_I18N__ &&
                        instanceData) {
                        if (i18n.mode === 'legacy') {
                            // ignore global scope on legacy mode
                            if (componentInstance.vnode.el.__VUE_I18N__ !==
                                i18n.global.__composer) {
                                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                            }
                        }
                        else {
                            inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                        }
                    }
                });
                api.addInspector({
                    id: "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */,
                    label: __vite_ssr_import_4__.VueDevToolsLabels["vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */],
                    icon: 'language',
                    treeFilterPlaceholder: __vite_ssr_import_4__.VueDevToolsPlaceholders["vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */]
                });
                api.on.getInspectorTree(payload => {
                    if (payload.app === app &&
                        payload.inspectorId === "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */) {
                        registerScope(payload, i18n);
                    }
                });
                const roots = new Map();
                api.on.getInspectorState(async (payload) => {
                    if (payload.app === app &&
                        payload.inspectorId === "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */) {
                        api.unhighlightElement();
                        inspectScope(payload, i18n);
                        if (payload.nodeId === 'global') {
                            if (!roots.has(payload.app)) {
                                const [root] = await api.getComponentInstances(payload.app);
                                roots.set(payload.app, root);
                            }
                            api.highlightElement(roots.get(payload.app));
                        }
                        else {
                            const instance = getComponentInstance(payload.nodeId, i18n);
                            instance && api.highlightElement(instance);
                        }
                    }
                });
                api.on.editInspectorState(payload => {
                    if (payload.app === app &&
                        payload.inspectorId === "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */) {
                        editScope(payload, i18n);
                    }
                });
                api.addTimelineLayer({
                    id: "vue-i18n-timeline" /* TIMELINE */,
                    label: __vite_ssr_import_4__.VueDevToolsLabels["vue-i18n-timeline" /* TIMELINE */],
                    color: __vite_ssr_import_4__.VueDevToolsTimelineColors["vue-i18n-timeline" /* TIMELINE */]
                });
                resolve(true);
            });
        }
        catch (e) {
            console.error(e);
            reject(false);
        }
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getI18nScopeLable(instance) {
    return (instance.type.name ||
        instance.type.displayName ||
        instance.type.__file ||
        'Anonymous');
}
function updateComponentTreeTags(instance, // eslint-disable-line @typescript-eslint/no-explicit-any
treeNode, i18n) {
    // prettier-ignore
    const global = i18n.mode === 'composition'
        ? i18n.global
        : i18n.global.__composer;
    if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
        // add custom tags local scope only
        if (instance.vnode.el.__VUE_I18N__ !== global) {
            const tag = {
                label: `i18n (${getI18nScopeLable(instance)} Scope)`,
                textColor: 0x000000,
                backgroundColor: 0xffcd19
            };
            treeNode.tags.push(tag);
        }
    }
}
function inspectComposer(instanceData, composer) {
    const type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
        type,
        key: 'locale',
        editable: true,
        value: composer.locale.value
    });
    instanceData.state.push({
        type,
        key: 'availableLocales',
        editable: false,
        value: composer.availableLocales
    });
    instanceData.state.push({
        type,
        key: 'fallbackLocale',
        editable: true,
        value: composer.fallbackLocale.value
    });
    instanceData.state.push({
        type,
        key: 'inheritLocale',
        editable: true,
        value: composer.inheritLocale
    });
    instanceData.state.push({
        type,
        key: 'messages',
        editable: false,
        value: getLocaleMessageValue(composer.messages.value)
    });
    {
        instanceData.state.push({
            type,
            key: 'datetimeFormats',
            editable: false,
            value: composer.datetimeFormats.value
        });
        instanceData.state.push({
            type,
            key: 'numberFormats',
            editable: false,
            value: composer.numberFormats.value
        });
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getLocaleMessageValue(messages) {
    const value = {};
    Object.keys(messages).forEach((key) => {
        const v = messages[key];
        if (__vite_ssr_import_0__.isFunction(v) && 'source' in v) {
            value[key] = getMessageFunctionDetails(v);
        }
        else if (__vite_ssr_import_0__.isObject(v)) {
            value[key] = getLocaleMessageValue(v);
        }
        else {
            value[key] = v;
        }
    });
    return value;
}
const ESC = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;'
};
function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
    return ESC[a] || a;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMessageFunctionDetails(func) {
    const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
    return {
        _custom: {
            type: 'function',
            display: `<span>ƒ</span> ${argString}`
        }
    };
}
function registerScope(payload, i18n) {
    payload.rootNodes.push({
        id: 'global',
        label: 'Global Scope'
    });
    // prettier-ignore
    const global = i18n.mode === 'composition'
        ? i18n.global
        : i18n.global.__composer;
    for (const [keyInstance, instance] of i18n.__instances) {
        // prettier-ignore
        const composer = i18n.mode === 'composition'
            ? instance
            : instance.__composer;
        if (global === composer) {
            continue;
        }
        payload.rootNodes.push({
            id: composer.id.toString(),
            label: `${getI18nScopeLable(keyInstance)} Scope`
        });
    }
}
function getComponentInstance(nodeId, i18n) {
    let instance = null;
    if (nodeId !== 'global') {
        for (const [component, composer] of i18n.__instances.entries()) {
            if (composer.id.toString() === nodeId) {
                instance = component;
                break;
            }
        }
    }
    return instance;
}
function getComposer$1(nodeId, i18n) {
    if (nodeId === 'global') {
        return i18n.mode === 'composition'
            ? i18n.global
            : i18n.global.__composer;
    }
    else {
        const instance = Array.from(i18n.__instances.values()).find(item => item.id.toString() === nodeId);
        if (instance) {
            return i18n.mode === 'composition'
                ? instance
                : instance.__composer;
        }
        else {
            return null;
        }
    }
}
function inspectScope(payload, i18n
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    const composer = getComposer$1(payload.nodeId, i18n);
    if (composer) {
        // TODO:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        payload.state = makeScopeInspectState(composer);
    }
    return null;
}
function makeScopeInspectState(composer) {
    const state = {};
    const localeType = 'Locale related info';
    const localeStates = [
        {
            type: localeType,
            key: 'locale',
            editable: true,
            value: composer.locale.value
        },
        {
            type: localeType,
            key: 'fallbackLocale',
            editable: true,
            value: composer.fallbackLocale.value
        },
        {
            type: localeType,
            key: 'availableLocales',
            editable: false,
            value: composer.availableLocales
        },
        {
            type: localeType,
            key: 'inheritLocale',
            editable: true,
            value: composer.inheritLocale
        }
    ];
    state[localeType] = localeStates;
    const localeMessagesType = 'Locale messages info';
    const localeMessagesStates = [
        {
            type: localeMessagesType,
            key: 'messages',
            editable: false,
            value: getLocaleMessageValue(composer.messages.value)
        }
    ];
    state[localeMessagesType] = localeMessagesStates;
    {
        const datetimeFormatsType = 'Datetime formats info';
        const datetimeFormatsStates = [
            {
                type: datetimeFormatsType,
                key: 'datetimeFormats',
                editable: false,
                value: composer.datetimeFormats.value
            }
        ];
        state[datetimeFormatsType] = datetimeFormatsStates;
        const numberFormatsType = 'Datetime formats info';
        const numberFormatsStates = [
            {
                type: numberFormatsType,
                key: 'numberFormats',
                editable: false,
                value: composer.numberFormats.value
            }
        ];
        state[numberFormatsType] = numberFormatsStates;
    }
    return state;
}
function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
        let groupId;
        if (payload && 'groupId' in payload) {
            groupId = payload.groupId;
            delete payload.groupId;
        }
        devtoolsApi.addTimelineEvent({
            layerId: "vue-i18n-timeline" /* TIMELINE */,
            event: {
                title: event,
                groupId,
                time: Date.now(),
                meta: {},
                data: payload || {},
                logType: event === "compile-error" /* COMPILE_ERROR */
                    ? 'error'
                    : event === "fallback" /* FALBACK */ ||
                        event === "missing" /* MISSING */
                        ? 'warning'
                        : 'default'
            }
        });
    }
}
function editScope(payload, i18n) {
    const composer = getComposer$1(payload.nodeId, i18n);
    if (composer) {
        const [field] = payload.path;
        if (field === 'locale' && __vite_ssr_import_0__.isString(payload.state.value)) {
            composer.locale.value = payload.state.value;
        }
        else if (field === 'fallbackLocale' &&
            (__vite_ssr_import_0__.isString(payload.state.value) ||
                __vite_ssr_import_0__.isArray(payload.state.value) ||
                __vite_ssr_import_0__.isObject(payload.state.value))) {
            composer.fallbackLocale.value = payload.state.value;
        }
        else if (field === 'inheritLocale' && __vite_ssr_import_0__.isBoolean(payload.state.value)) {
            composer.inheritLocale = payload.state.value;
        }
    }
}

/**
 * Supports compatibility for legacy vue-i18n APIs
 * This mixin is used when we use vue-i18n@v9.x or later
 */
function defineMixin(vuei18n, composer, i18n) {
    return {
        beforeCreate() {
            const instance = __vite_ssr_import_2__.getCurrentInstance();
            /* istanbul ignore if */
            if (!instance) {
                throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
            }
            const options = this.$options;
            if (options.i18n) {
                const optionsI18n = options.i18n;
                if (options.__i18n) {
                    optionsI18n.__i18n = options.__i18n;
                }
                optionsI18n.__root = composer;
                if (this === this.$root) {
                    this.$i18n = mergeToRoot(vuei18n, optionsI18n);
                }
                else {
                    optionsI18n.__injectWithOption = true;
                    this.$i18n = createVueI18n(optionsI18n);
                }
            }
            else if (options.__i18n) {
                if (this === this.$root) {
                    this.$i18n = mergeToRoot(vuei18n, options);
                }
                else {
                    this.$i18n = createVueI18n({
                        __i18n: options.__i18n,
                        __injectWithOption: true,
                        __root: composer
                    });
                }
            }
            else {
                // set global
                this.$i18n = vuei18n;
            }
            if (options.__i18nGlobal) {
                adjustI18nResources(composer, options, options);
            }
            vuei18n.__onComponentInstanceCreated(this.$i18n);
            i18n.__setInstance(instance, this.$i18n);
            // defines vue-i18n legacy APIs
            this.$t = (...args) => this.$i18n.t(...args);
            this.$rt = (...args) => this.$i18n.rt(...args);
            this.$tc = (...args) => this.$i18n.tc(...args);
            this.$te = (key, locale) => this.$i18n.te(key, locale);
            this.$d = (...args) => this.$i18n.d(...args);
            this.$n = (...args) => this.$i18n.n(...args);
            this.$tm = (key) => this.$i18n.tm(key);
        },
        mounted() {
            /* istanbul ignore if */
            if ((("development" !== 'production') || false) && !false) {
                this.$el.__VUE_I18N__ = this.$i18n.__composer;
                const emitter = (this.__v_emitter =
                    __vite_ssr_import_0__.createEmitter());
                const _vueI18n = this.$i18n;
                _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
                emitter.on('*', addTimelineEvent);
            }
        },
        unmounted() {
            const instance = __vite_ssr_import_2__.getCurrentInstance();
            /* istanbul ignore if */
            if (!instance) {
                throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
            }
            __vite_ssr_import_2__.nextTick(() => {
                /* istanbul ignore if */
                if ((("development" !== 'production') || false) && !false) {
                    if (this.__v_emitter) {
                        this.__v_emitter.off('*', addTimelineEvent);
                        delete this.__v_emitter;
                    }
                    const _vueI18n = this.$i18n;
                    _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
                    delete this.$el.__VUE_I18N__;
                }
                delete this.$t;
                delete this.$rt;
                delete this.$tc;
                delete this.$te;
                delete this.$d;
                delete this.$n;
                delete this.$tm;
                i18n.__deleteInstance(instance);
                delete this.$i18n;
            });
        }
    };
}
function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn =
        options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn =
        options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages =
        options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml =
        options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages = getLocaleMessages(root.locale, {
        messages: options.messages,
        __i18n: options.__i18n
    });
    Object.keys(messages).forEach(locale => root.mergeLocaleMessage(locale, messages[locale]));
    if (options.datetimeFormats) {
        Object.keys(options.datetimeFormats).forEach(locale => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
        Object.keys(options.numberFormats).forEach(locale => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
}

/**
 * Injection key for {@link useI18n}
 *
 * @remarks
 * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
 * Specify the i18n instance created by {@link createI18n} together with `provide` function.
 *
 * @VueI18nGeneral
 */
const I18nInjectionKey = 
/* #__PURE__*/ __vite_ssr_import_0__.makeSymbol('global-vue-i18n');
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function createI18n(options = {}, VueI18nLegacy) {
    // prettier-ignore
    const __legacyMode = true && __vite_ssr_import_0__.isBoolean(options.legacy)
            ? options.legacy
            : true;
    // prettier-ignore
    const __globalInjection =  !!options.globalInjection
        ;
    const __instances = new Map();
    const __global = createGlobal(options, __legacyMode);
    const symbol = __vite_ssr_import_0__.makeSymbol(("development" !== 'production') ? 'vue-i18n' : '');
    function __getInstance(component) {
        return __instances.get(component) || null;
    }
    function __setInstance(component, instance) {
        __instances.set(component, instance);
    }
    function __deleteInstance(component) {
        __instances.delete(component);
    }
    {
        const i18n = {
            // mode
            get mode() {
                return true && __legacyMode
                    ? 'legacy'
                    : 'composition';
            },
            // install plugin
            async install(app, ...options) {
                if ((("development" !== 'production') || false) &&
                    !false) {
                    app.__VUE_I18N__ = i18n;
                }
                // setup global provider
                app.__VUE_I18N_SYMBOL__ = symbol;
                app.provide(app.__VUE_I18N_SYMBOL__, i18n);
                // global method and properties injection for Composition API
                if (!__legacyMode && __globalInjection) {
                    injectGlobalFields(app, i18n.global);
                }
                // install built-in components and directive
                if (true) {
                    apply(app, i18n, ...options);
                }
                // setup mixin for Legacy API
                if (true && __legacyMode) {
                    app.mixin(defineMixin(__global, __global.__composer, i18n));
                }
                // setup vue-devtools plugin
                if ((("development" !== 'production') || false) && !false) {
                    const ret = await enableDevTools(app, i18n);
                    if (!ret) {
                        throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
                    }
                    const emitter = __vite_ssr_import_0__.createEmitter();
                    if (__legacyMode) {
                        const _vueI18n = __global;
                        _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
                    }
                    else {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const _composer = __global;
                        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
                    }
                    emitter.on('*', addTimelineEvent);
                }
            },
            // global accessor
            get global() {
                return __global;
            },
            // @internal
            __instances,
            // @internal
            __getInstance,
            // @internal
            __setInstance,
            // @internal
            __deleteInstance
        };
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useI18n(options = {}) {
    const instance = __vite_ssr_import_2__.getCurrentInstance();
    if (instance == null) {
        throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
    }
    if (!instance.isCE &&
        instance.appContext.app != null &&
        !instance.appContext.app.__VUE_I18N_SYMBOL__) {
        throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
    }
    const i18n = getI18nInstance(instance);
    const global = getGlobalComposer(i18n);
    const componentOptions = getComponentOptions(instance);
    const scope = getScope(options, componentOptions);
    if (scope === 'global') {
        adjustI18nResources(global, options, componentOptions);
        return global;
    }
    if (scope === 'parent') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let composer = getComposer(i18n, instance, options.__useComponent);
        if (composer == null) {
            if (("development" !== 'production')) {
                __vite_ssr_import_0__.warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
            }
            composer = global;
        }
        return composer;
    }
    // scope 'local' case
    if (i18n.mode === 'legacy') {
        throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
    }
    const i18nInternal = i18n;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
        const composerOptions = __vite_ssr_import_0__.assign({}, options);
        if ('__i18n' in componentOptions) {
            composerOptions.__i18n = componentOptions.__i18n;
        }
        if (global) {
            composerOptions.__root = global;
        }
        composer = createComposer(composerOptions);
        setupLifeCycle(i18nInternal, instance, composer);
        i18nInternal.__setInstance(instance, composer);
    }
    return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    {
        return true && legacyMode
            ? createVueI18n(options)
            : createComposer(options);
    }
}
function getI18nInstance(instance) {
    {
        const i18n = __vite_ssr_import_2__.inject(!instance.isCE
            ? instance.appContext.app.__VUE_I18N_SYMBOL__
            : I18nInjectionKey);
        /* istanbul ignore if */
        if (!i18n) {
            throw createI18nError(!instance.isCE
                ? I18nErrorCodes.UNEXPECTED_ERROR
                : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
        }
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getScope(options, componentOptions) {
    // prettier-ignore
    return __vite_ssr_import_0__.isEmptyObject(options)
        ? ('__i18n' in componentOptions)
            ? 'local'
            : 'global'
        : !options.useScope
            ? 'local'
            : options.useScope;
}
function getGlobalComposer(i18n) {
    // prettier-ignore
    return i18n.mode === 'composition'
            ? i18n.global
            : i18n.global.__composer
        ;
}
function getComposer(i18n, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
        const i18nInternal = i18n;
        if (i18n.mode === 'composition') {
            composer = i18nInternal.__getInstance(current);
        }
        else {
            if (true) {
                const vueI18n = i18nInternal.__getInstance(current);
                if (vueI18n != null) {
                    composer = vueI18n
                        .__composer;
                    if (useComponent &&
                        composer &&
                        !composer[InejctWithOption] // eslint-disable-line @typescript-eslint/no-explicit-any
                    ) {
                        composer = null;
                    }
                }
            }
        }
        if (composer != null) {
            break;
        }
        if (root === current) {
            break;
        }
        current = current.parent;
    }
    return composer;
}
function setupLifeCycle(i18n, target, composer) {
    let emitter = null;
    {
        __vite_ssr_import_2__.onMounted(() => {
            // inject composer instance to DOM for intlify-devtools
            if ((("development" !== 'production') || false) &&
                !false &&
                target.vnode.el) {
                target.vnode.el.__VUE_I18N__ = composer;
                emitter = __vite_ssr_import_0__.createEmitter();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const _composer = composer;
                _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
                emitter.on('*', addTimelineEvent);
            }
        }, target);
        __vite_ssr_import_2__.onUnmounted(() => {
            // remove composer instance from DOM for intlify-devtools
            if ((("development" !== 'production') || false) &&
                !false &&
                target.vnode.el &&
                target.vnode.el.__VUE_I18N__) {
                emitter && emitter.off('*', addTimelineEvent);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const _composer = composer;
                _composer[DisableEmitter] && _composer[DisableEmitter]();
                delete target.vnode.el.__VUE_I18N__;
            }
            i18n.__deleteInstance(target);
        }, target);
    }
}
const globalExportProps = [
    'locale',
    'fallbackLocale',
    'availableLocales'
];
const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm'] ;
function injectGlobalFields(app, composer) {
    const i18n = Object.create(null);
    globalExportProps.forEach(prop => {
        const desc = Object.getOwnPropertyDescriptor(composer, prop);
        if (!desc) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        const wrap = __vite_ssr_import_2__.isRef(desc.value) // check computed props
            ? {
                get() {
                    return desc.value.value;
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                set(val) {
                    desc.value.value = val;
                }
            }
            : {
                get() {
                    return desc.get && desc.get();
                }
            };
        Object.defineProperty(i18n, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n;
    globalExportMethods.forEach(method => {
        const desc = Object.getOwnPropertyDescriptor(composer, method);
        if (!desc || !desc.value) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
}

// register message compiler at vue-i18n
__vite_ssr_import_1__.registerMessageCompiler(__vite_ssr_import_1__.compileToFunction);
// register message resolver at vue-i18n
__vite_ssr_import_1__.registerMessageResolver(__vite_ssr_import_1__.resolveValue);
// register fallback locale at vue-i18n
__vite_ssr_import_1__.registerLocaleFallbacker(__vite_ssr_import_1__.fallbackWithLocaleChain);
{
    initFeatureFlags();
}
// NOTE: experimental !!
if (("development" !== 'production') || __INTLIFY_PROD_DEVTOOLS__) {
    const target = __vite_ssr_import_0__.getGlobalThis();
    target.__INTLIFY__ = true;
    __vite_ssr_import_1__.setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
if (("development" !== 'production')) ;


Object.defineProperty(__vite_ssr_exports__, "DatetimeFormat", { enumerable: true, configurable: true, get(){ return DatetimeFormat }});
Object.defineProperty(__vite_ssr_exports__, "I18nInjectionKey", { enumerable: true, configurable: true, get(){ return I18nInjectionKey }});
Object.defineProperty(__vite_ssr_exports__, "NumberFormat", { enumerable: true, configurable: true, get(){ return NumberFormat }});
Object.defineProperty(__vite_ssr_exports__, "Translation", { enumerable: true, configurable: true, get(){ return Translation }});
Object.defineProperty(__vite_ssr_exports__, "VERSION", { enumerable: true, configurable: true, get(){ return VERSION }});
Object.defineProperty(__vite_ssr_exports__, "createI18n", { enumerable: true, configurable: true, get(){ return createI18n }});
Object.defineProperty(__vite_ssr_exports__, "useI18n", { enumerable: true, configurable: true, get(){ return useI18n }});
Object.defineProperty(__vite_ssr_exports__, "vTDirective", { enumerable: true, configurable: true, get(){ return vTDirective }});
;
}


// --------------------
// Request: /node_modules/@intlify/shared/dist/shared.esm-bundler.js
// Parents: 
// - /node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js ($id_24731f5b)
// - /node_modules/@intlify/core-base/dist/core-base.esm-bundler.js ($id_008b81f5)
// - /node_modules/@intlify/message-compiler/dist/message-compiler.esm-bundler.js ($id_de1d486a)
// Dependencies: 

// --------------------
const $id_500a2161 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/*!
  * shared v9.2.0-beta.25
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const inBrowser = "undefined" !== 'undefined';
let mark;
let measure;
if (("development" !== 'production')) {
    const perf = inBrowser && window.performance;
    if (perf &&
        perf.mark &&
        perf.measure &&
        perf.clearMarks &&
        perf.clearMeasures) {
        mark = (tag) => perf.mark(tag);
        measure = (name, startTag, endTag) => {
            perf.measure(name, startTag, endTag);
            perf.clearMarks(startTag);
            perf.clearMarks(endTag);
        };
    }
}
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
/* eslint-disable */
function format(message, ...args) {
    if (args.length === 1 && isObject(args[0])) {
        args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
        args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
        return args.hasOwnProperty(identifier) ? args[identifier] : '';
    });
}
const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
    .replace(/\u0027/g, '\\u0027');
const isNumber = (val) => typeof val === 'number' && isFinite(val);
const isDate = (val) => toTypeString(val) === '[object Date]';
const isRegExp = (val) => toTypeString(val) === '[object RegExp]';
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
function warn(msg, err) {
    if (typeof console !== 'undefined') {
        console.warn(`[intlify] ` + msg);
        /* istanbul ignore if */
        if (err) {
            console.warn(err.stack);
        }
    }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
    // prettier-ignore
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : "undefined" !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};
function escapeHtml(rawText) {
    return rawText
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isBoolean = (val) => typeof val === 'boolean';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => // eslint-disable-line
 val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
// for converting list and named values to displayed strings.
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isArray(val) || (isPlainObject(val) && val.toString === objectToString)
            ? JSON.stringify(val, null, 2)
            : String(val);
};
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(3 - String(line).length)}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * Event emitter, forked from the below:
 * - original repository url: https://github.com/developit/mitt
 * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
 * - author: Jason Miller (https://github.com/developit)
 * - license: MIT
 */
/**
 * Create a event emitter
 *
 * @returns An event emitter
 */
function createEmitter() {
    const events = new Map();
    const emitter = {
        events,
        on(event, handler) {
            const handlers = events.get(event);
            const added = handlers && handlers.push(handler);
            if (!added) {
                events.set(event, [handler]);
            }
        },
        off(event, handler) {
            const handlers = events.get(event);
            if (handlers) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1);
            }
        },
        emit(event, payload) {
            (events.get(event) || [])
                .slice()
                .map(handler => handler(payload));
            (events.get('*') || [])
                .slice()
                .map(handler => handler(event, payload));
        }
    };
    return emitter;
}


Object.defineProperty(__vite_ssr_exports__, "assign", { enumerable: true, configurable: true, get(){ return assign }});
Object.defineProperty(__vite_ssr_exports__, "createEmitter", { enumerable: true, configurable: true, get(){ return createEmitter }});
Object.defineProperty(__vite_ssr_exports__, "escapeHtml", { enumerable: true, configurable: true, get(){ return escapeHtml }});
Object.defineProperty(__vite_ssr_exports__, "format", { enumerable: true, configurable: true, get(){ return format }});
Object.defineProperty(__vite_ssr_exports__, "friendlyJSONstringify", { enumerable: true, configurable: true, get(){ return friendlyJSONstringify }});
Object.defineProperty(__vite_ssr_exports__, "generateCodeFrame", { enumerable: true, configurable: true, get(){ return generateCodeFrame }});
Object.defineProperty(__vite_ssr_exports__, "generateFormatCacheKey", { enumerable: true, configurable: true, get(){ return generateFormatCacheKey }});
Object.defineProperty(__vite_ssr_exports__, "getGlobalThis", { enumerable: true, configurable: true, get(){ return getGlobalThis }});
Object.defineProperty(__vite_ssr_exports__, "hasOwn", { enumerable: true, configurable: true, get(){ return hasOwn }});
Object.defineProperty(__vite_ssr_exports__, "inBrowser", { enumerable: true, configurable: true, get(){ return inBrowser }});
Object.defineProperty(__vite_ssr_exports__, "isArray", { enumerable: true, configurable: true, get(){ return isArray }});
Object.defineProperty(__vite_ssr_exports__, "isBoolean", { enumerable: true, configurable: true, get(){ return isBoolean }});
Object.defineProperty(__vite_ssr_exports__, "isDate", { enumerable: true, configurable: true, get(){ return isDate }});
Object.defineProperty(__vite_ssr_exports__, "isEmptyObject", { enumerable: true, configurable: true, get(){ return isEmptyObject }});
Object.defineProperty(__vite_ssr_exports__, "isFunction", { enumerable: true, configurable: true, get(){ return isFunction }});
Object.defineProperty(__vite_ssr_exports__, "isNumber", { enumerable: true, configurable: true, get(){ return isNumber }});
Object.defineProperty(__vite_ssr_exports__, "isObject", { enumerable: true, configurable: true, get(){ return isObject }});
Object.defineProperty(__vite_ssr_exports__, "isPlainObject", { enumerable: true, configurable: true, get(){ return isPlainObject }});
Object.defineProperty(__vite_ssr_exports__, "isPromise", { enumerable: true, configurable: true, get(){ return isPromise }});
Object.defineProperty(__vite_ssr_exports__, "isRegExp", { enumerable: true, configurable: true, get(){ return isRegExp }});
Object.defineProperty(__vite_ssr_exports__, "isString", { enumerable: true, configurable: true, get(){ return isString }});
Object.defineProperty(__vite_ssr_exports__, "isSymbol", { enumerable: true, configurable: true, get(){ return isSymbol }});
Object.defineProperty(__vite_ssr_exports__, "makeSymbol", { enumerable: true, configurable: true, get(){ return makeSymbol }});
Object.defineProperty(__vite_ssr_exports__, "mark", { enumerable: true, configurable: true, get(){ return mark }});
Object.defineProperty(__vite_ssr_exports__, "measure", { enumerable: true, configurable: true, get(){ return measure }});
Object.defineProperty(__vite_ssr_exports__, "objectToString", { enumerable: true, configurable: true, get(){ return objectToString }});
Object.defineProperty(__vite_ssr_exports__, "toDisplayString", { enumerable: true, configurable: true, get(){ return toDisplayString }});
Object.defineProperty(__vite_ssr_exports__, "toTypeString", { enumerable: true, configurable: true, get(){ return toTypeString }});
Object.defineProperty(__vite_ssr_exports__, "warn", { enumerable: true, configurable: true, get(){ return warn }});
;
}


// --------------------
// Request: /node_modules/@intlify/core-base/dist/core-base.esm-bundler.js
// Parents: 
// - /node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js ($id_24731f5b)
// Dependencies: 
// - /node_modules/@intlify/shared/dist/shared.esm-bundler.js ($id_500a2161)
// - /node_modules/@intlify/message-compiler/dist/message-compiler.esm-bundler.js ($id_de1d486a)
// - /node_modules/@intlify/devtools-if/dist/devtools-if.esm-bundler.js ($id_3642ffb5)
// --------------------
const $id_008b81f5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/*!
  * core-base v9.2.0-beta.25
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@intlify/shared/dist/shared.esm-bundler.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@intlify/message-compiler/dist/message-compiler.esm-bundler.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@intlify/message-compiler/dist/message-compiler.esm-bundler.js");

Object.defineProperty(__vite_ssr_exports__, "CompileErrorCodes", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.CompileErrorCodes }});
Object.defineProperty(__vite_ssr_exports__, "createCompileError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.createCompileError }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@intlify/devtools-if/dist/devtools-if.esm-bundler.js");


const pathStateMachine =  [];
pathStateMachine[0 /* BEFORE_PATH */] = {
    ["w" /* WORKSPACE */]: [0 /* BEFORE_PATH */],
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */]
};
pathStateMachine[1 /* IN_PATH */] = {
    ["w" /* WORKSPACE */]: [1 /* IN_PATH */],
    ["." /* DOT */]: [2 /* BEFORE_IDENT */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */]
};
pathStateMachine[2 /* BEFORE_IDENT */] = {
    ["w" /* WORKSPACE */]: [2 /* BEFORE_IDENT */],
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["0" /* ZERO */]: [3 /* IN_IDENT */, 0 /* APPEND */]
};
pathStateMachine[3 /* IN_IDENT */] = {
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["0" /* ZERO */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["w" /* WORKSPACE */]: [1 /* IN_PATH */, 1 /* PUSH */],
    ["." /* DOT */]: [2 /* BEFORE_IDENT */, 1 /* PUSH */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */, 1 /* PUSH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */, 1 /* PUSH */]
};
pathStateMachine[4 /* IN_SUB_PATH */] = {
    ["'" /* SINGLE_QUOTE */]: [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */],
    ["\"" /* DOUBLE_QUOTE */]: [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */],
    ["[" /* LEFT_BRACKET */]: [
        4 /* IN_SUB_PATH */,
        2 /* INC_SUB_PATH_DEPTH */
    ],
    ["]" /* RIGHT_BRACKET */]: [1 /* IN_PATH */, 3 /* PUSH_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */]
};
pathStateMachine[5 /* IN_SINGLE_QUOTE */] = {
    ["'" /* SINGLE_QUOTE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */]
};
pathStateMachine[6 /* IN_DOUBLE_QUOTE */] = {
    ["\"" /* DOUBLE_QUOTE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */]
};
/**
 * Check if an expression is a literal value.
 */
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
    return literalValueRE.test(exp);
}
/**
 * Strip quotes from a string
 */
function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}
/**
 * Determine the type of a character in a keypath.
 */
function getPathCharType(ch) {
    if (ch === undefined || ch === null) {
        return "o" /* END_OF_FAIL */;
    }
    const code = ch.charCodeAt(0);
    switch (code) {
        case 0x5b: // [
        case 0x5d: // ]
        case 0x2e: // .
        case 0x22: // "
        case 0x27: // '
            return ch;
        case 0x5f: // _
        case 0x24: // $
        case 0x2d: // -
            return "i" /* IDENT */;
        case 0x09: // Tab (HT)
        case 0x0a: // Newline (LF)
        case 0x0d: // Return (CR)
        case 0xa0: // No-break space (NBSP)
        case 0xfeff: // Byte Order Mark (BOM)
        case 0x2028: // Line Separator (LS)
        case 0x2029: // Paragraph Separator (PS)
            return "w" /* WORKSPACE */;
    }
    return "i" /* IDENT */;
}
/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */
function formatSubPath(path) {
    const trimmed = path.trim();
    // invalid leading 0
    if (path.charAt(0) === '0' && isNaN(parseInt(path))) {
        return false;
    }
    return isLiteral(trimmed)
        ? stripQuotes(trimmed)
        : "*" /* ASTARISK */ + trimmed;
}
/**
 * Parse a string path into an array of segments
 */
function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0 /* BEFORE_PATH */;
    let subPathDepth = 0;
    let c;
    let key; // eslint-disable-line
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[0 /* APPEND */] = () => {
        if (key === undefined) {
            key = newChar;
        }
        else {
            key += newChar;
        }
    };
    actions[1 /* PUSH */] = () => {
        if (key !== undefined) {
            keys.push(key);
            key = undefined;
        }
    };
    actions[2 /* INC_SUB_PATH_DEPTH */] = () => {
        actions[0 /* APPEND */]();
        subPathDepth++;
    };
    actions[3 /* PUSH_SUB_PATH */] = () => {
        if (subPathDepth > 0) {
            subPathDepth--;
            mode = 4 /* IN_SUB_PATH */;
            actions[0 /* APPEND */]();
        }
        else {
            subPathDepth = 0;
            if (key === undefined) {
                return false;
            }
            key = formatSubPath(key);
            if (key === false) {
                return false;
            }
            else {
                actions[1 /* PUSH */]();
            }
        }
    };
    function maybeUnescapeQuote() {
        const nextChar = path[index + 1];
        if ((mode === 5 /* IN_SINGLE_QUOTE */ &&
            nextChar === "'" /* SINGLE_QUOTE */) ||
            (mode === 6 /* IN_DOUBLE_QUOTE */ &&
                nextChar === "\"" /* DOUBLE_QUOTE */)) {
            index++;
            newChar = '\\' + nextChar;
            actions[0 /* APPEND */]();
            return true;
        }
    }
    while (mode !== null) {
        index++;
        c = path[index];
        if (c === '\\' && maybeUnescapeQuote()) {
            continue;
        }
        type = getPathCharType(c);
        typeMap = pathStateMachine[mode];
        transition = typeMap[type] || typeMap["l" /* ELSE */] || 8 /* ERROR */;
        // check parse error
        if (transition === 8 /* ERROR */) {
            return;
        }
        mode = transition[0];
        if (transition[1] !== undefined) {
            action = actions[transition[1]];
            if (action) {
                newChar = c;
                if (action() === false) {
                    return;
                }
            }
        }
        // check parse finish
        if (mode === 7 /* AFTER_PATH */) {
            return keys;
        }
    }
}
// path token cache
const cache = new Map();
/**
 * key-value message resolver
 *
 * @remarks
 * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveWithKeyValue(obj, path) {
    return __vite_ssr_import_0__.isObject(obj) ? obj[path] : null;
}
/**
 * message resolver
 *
 * @remarks
 * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveValue(obj, path) {
    // check object
    if (!__vite_ssr_import_0__.isObject(obj)) {
        return null;
    }
    // parse path
    let hit = cache.get(path);
    if (!hit) {
        hit = parse(path);
        if (hit) {
            cache.set(path, hit);
        }
    }
    // check hit
    if (!hit) {
        return null;
    }
    // resolve path value
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
        const val = last[hit[i]];
        if (val === undefined) {
            return null;
        }
        last = val;
        i++;
    }
    return last;
}

const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => ''; // eslint-disable-line
const DEFAULT_MESSAGE_DATA_TYPE = 'text';
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? '' : values.join('');
const DEFAULT_INTERPOLATE = __vite_ssr_import_0__.toDisplayString;
function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
        // prettier-ignore
        return choice
            ? choice > 1
                ? 1
                : 0
            : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
    // prettier-ignore
    const index = __vite_ssr_import_0__.isNumber(options.pluralIndex)
        ? options.pluralIndex
        : -1;
    // prettier-ignore
    return options.named && (__vite_ssr_import_0__.isNumber(options.named.count) || __vite_ssr_import_0__.isNumber(options.named.n))
        ? __vite_ssr_import_0__.isNumber(options.named.count)
            ? options.named.count
            : __vite_ssr_import_0__.isNumber(options.named.n)
                ? options.named.n
                : index
        : index;
}
function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
        props.count = pluralIndex;
    }
    if (!props.n) {
        props.n = pluralIndex;
    }
}
function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = __vite_ssr_import_0__.isObject(options.pluralRules) &&
        __vite_ssr_import_0__.isString(locale) &&
        __vite_ssr_import_0__.isFunction(options.pluralRules[locale])
        ? options.pluralRules[locale]
        : pluralDefault;
    const orgPluralRule = __vite_ssr_import_0__.isObject(options.pluralRules) &&
        __vite_ssr_import_0__.isString(locale) &&
        __vite_ssr_import_0__.isFunction(options.pluralRules[locale])
        ? pluralDefault
        : undefined;
    const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    const _list = options.list || [];
    const list = (index) => _list[index];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _named = options.named || {};
    __vite_ssr_import_0__.isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    // TODO: need to design resolve message function?
    function message(key) {
        // prettier-ignore
        const msg = __vite_ssr_import_0__.isFunction(options.messages)
            ? options.messages(key)
            : __vite_ssr_import_0__.isObject(options.messages)
                ? options.messages[key]
                : false;
        return !msg
            ? options.parent
                ? options.parent.message(key) // resolve from parent messages
                : DEFAULT_MESSAGE
            : msg;
    }
    const _modifier = (name) => options.modifiers
        ? options.modifiers[name]
        : DEFAULT_MODIFIER;
    const normalize = __vite_ssr_import_0__.isPlainObject(options.processor) && __vite_ssr_import_0__.isFunction(options.processor.normalize)
        ? options.processor.normalize
        : DEFAULT_NORMALIZE;
    const interpolate = __vite_ssr_import_0__.isPlainObject(options.processor) &&
        __vite_ssr_import_0__.isFunction(options.processor.interpolate)
        ? options.processor.interpolate
        : DEFAULT_INTERPOLATE;
    const type = __vite_ssr_import_0__.isPlainObject(options.processor) && __vite_ssr_import_0__.isString(options.processor.type)
        ? options.processor.type
        : DEFAULT_MESSAGE_DATA_TYPE;
    const ctx = {
        ["list" /* LIST */]: list,
        ["named" /* NAMED */]: named,
        ["plural" /* PLURAL */]: plural,
        ["linked" /* LINKED */]: (key, modifier) => {
            // TODO: should check `key`
            const msg = message(key)(ctx);
            return __vite_ssr_import_0__.isString(modifier) ? _modifier(modifier)(msg) : msg;
        },
        ["message" /* MESSAGE */]: message,
        ["type" /* TYPE */]: type,
        ["interpolate" /* INTERPOLATE */]: interpolate,
        ["normalize" /* NORMALIZE */]: normalize
    };
    return ctx;
}

let devtools = null;
function setDevToolsHook(hook) {
    devtools = hook;
}
function getDevToolsHook() {
    return devtools;
}
function initI18nDevTools(i18n, version, meta) {
    // TODO: queue if devtools is undefined
    devtools &&
        devtools.emit(__vite_ssr_import_2__.IntlifyDevToolsHooks.I18nInit, {
            timestamp: Date.now(),
            i18n,
            version,
            meta
        });
}
const translateDevTools = /* #__PURE__*/ createDevToolsHook(__vite_ssr_import_2__.IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
}

const CoreWarnCodes = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
};
/** @internal */
const warnMessages = {
    [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
    [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`
};
function getWarnMessage(code, ...args) {
    return __vite_ssr_import_0__.format(warnMessages[code], ...args);
}

/**
 * Fallback with simple implemenation
 *
 * @remarks
 * A fallback locale function implemented with a simple fallback algorithm.
 *
 * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nGeneral
 */
function fallbackWithSimple(ctx, fallback, start // eslint-disable-line @typescript-eslint/no-unused-vars
) {
    // prettier-ignore
    return [...new Set([
            start,
            ...(__vite_ssr_import_0__.isArray(fallback)
                ? fallback
                : __vite_ssr_import_0__.isObject(fallback)
                    ? Object.keys(fallback)
                    : __vite_ssr_import_0__.isString(fallback)
                        ? [fallback]
                        : [start])
        ])];
}
/**
 * Fallback with locale chain
 *
 * @remarks
 * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
 *
 * @VueI18nGeneral
 */
function fallbackWithLocaleChain(ctx, fallback, start) {
    const startLocale = __vite_ssr_import_0__.isString(start) ? start : DEFAULT_LOCALE;
    const context = ctx;
    if (!context.__localeChainCache) {
        context.__localeChainCache = new Map();
    }
    let chain = context.__localeChainCache.get(startLocale);
    if (!chain) {
        chain = [];
        // first block defined by start
        let block = [start];
        // while any intervening block found
        while (__vite_ssr_import_0__.isArray(block)) {
            block = appendBlockToChain(chain, block, fallback);
        }
        // prettier-ignore
        // last block defined by default
        const defaults = __vite_ssr_import_0__.isArray(fallback) || !__vite_ssr_import_0__.isPlainObject(fallback)
            ? fallback
            : fallback['default']
                ? fallback['default']
                : null;
        // convert defaults to array
        block = __vite_ssr_import_0__.isString(defaults) ? [defaults] : defaults;
        if (__vite_ssr_import_0__.isArray(block)) {
            appendBlockToChain(chain, block, false);
        }
        context.__localeChainCache.set(startLocale, chain);
    }
    return chain;
}
function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && __vite_ssr_import_0__.isBoolean(follow); i++) {
        const locale = block[i];
        if (__vite_ssr_import_0__.isString(locale)) {
            follow = appendLocaleToChain(chain, block[i], blocks);
        }
    }
    return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split('-');
    do {
        const target = tokens.join('-');
        follow = appendItemToChain(chain, target, blocks);
        tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
}
function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
        follow = true;
        if (target) {
            follow = target[target.length - 1] !== '!';
            const locale = target.replace(/!/g, '');
            chain.push(locale);
            if ((__vite_ssr_import_0__.isArray(blocks) || __vite_ssr_import_0__.isPlainObject(blocks)) &&
                blocks[locale] // eslint-disable-line @typescript-eslint/no-explicit-any
            ) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                follow = blocks[locale];
            }
        }
    }
    return follow;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Intlify core-base version
 * @internal
 */
const VERSION = '9.2.0-beta.25';
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = 'en-US';
const MISSING_RESOLVE_VALUE = '';
function getDefaultLinkedModifiers() {
    return {
        upper: (val) => (__vite_ssr_import_0__.isString(val) ? val.toUpperCase() : val),
        lower: (val) => (__vite_ssr_import_0__.isString(val) ? val.toLowerCase() : val),
        // prettier-ignore
        capitalize: (val) => (__vite_ssr_import_0__.isString(val)
            ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}`
            : val)
    };
}
let _compiler;
function registerMessageCompiler(compiler) {
    _compiler = compiler;
}
let _resolver;
/**
 * Register the message resolver
 *
 * @param resolver - A {@link MessageResolver} function
 *
 * @VueI18nGeneral
 */
function registerMessageResolver(resolver) {
    _resolver = resolver;
}
let _fallbacker;
/**
 * Register the locale fallbacker
 *
 * @param fallbacker - A {@link LocaleFallbacker} function
 *
 * @VueI18nGeneral
 */
function registerLocaleFallbacker(fallbacker) {
    _fallbacker = fallbacker;
}
// Additional Meta for Intlify DevTools
let _additionalMeta = null;
const setAdditionalMeta =  (meta) => {
    _additionalMeta = meta;
};
const getAdditionalMeta =  () => _additionalMeta;
// ID for CoreContext
let _cid = 0;
function createCoreContext(options = {}) {
    // setup options
    const version = __vite_ssr_import_0__.isString(options.version) ? options.version : VERSION;
    const locale = __vite_ssr_import_0__.isString(options.locale) ? options.locale : DEFAULT_LOCALE;
    const fallbackLocale = __vite_ssr_import_0__.isArray(options.fallbackLocale) ||
        __vite_ssr_import_0__.isPlainObject(options.fallbackLocale) ||
        __vite_ssr_import_0__.isString(options.fallbackLocale) ||
        options.fallbackLocale === false
        ? options.fallbackLocale
        : locale;
    const messages = __vite_ssr_import_0__.isPlainObject(options.messages)
        ? options.messages
        : { [locale]: {} };
    const datetimeFormats = __vite_ssr_import_0__.isPlainObject(options.datetimeFormats)
            ? options.datetimeFormats
            : { [locale]: {} }
        ;
    const numberFormats = __vite_ssr_import_0__.isPlainObject(options.numberFormats)
            ? options.numberFormats
            : { [locale]: {} }
        ;
    const modifiers = __vite_ssr_import_0__.assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = __vite_ssr_import_0__.isFunction(options.missing) ? options.missing : null;
    const missingWarn = __vite_ssr_import_0__.isBoolean(options.missingWarn) || __vite_ssr_import_0__.isRegExp(options.missingWarn)
        ? options.missingWarn
        : true;
    const fallbackWarn = __vite_ssr_import_0__.isBoolean(options.fallbackWarn) || __vite_ssr_import_0__.isRegExp(options.fallbackWarn)
        ? options.fallbackWarn
        : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = __vite_ssr_import_0__.isFunction(options.postTranslation)
        ? options.postTranslation
        : null;
    const processor = __vite_ssr_import_0__.isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = __vite_ssr_import_0__.isBoolean(options.warnHtmlMessage)
        ? options.warnHtmlMessage
        : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = __vite_ssr_import_0__.isFunction(options.messageCompiler)
        ? options.messageCompiler
        : _compiler;
    const messageResolver = __vite_ssr_import_0__.isFunction(options.messageResolver)
        ? options.messageResolver
        : _resolver || resolveWithKeyValue;
    const localeFallbacker = __vite_ssr_import_0__.isFunction(options.localeFallbacker)
        ? options.localeFallbacker
        : _fallbacker || fallbackWithSimple;
    const onWarn = __vite_ssr_import_0__.isFunction(options.onWarn) ? options.onWarn : __vite_ssr_import_0__.warn;
    // setup internal options
    const internalOptions = options;
    const __datetimeFormatters = __vite_ssr_import_0__.isObject(internalOptions.__datetimeFormatters)
            ? internalOptions.__datetimeFormatters
            : new Map()
        ;
    const __numberFormatters = __vite_ssr_import_0__.isObject(internalOptions.__numberFormatters)
            ? internalOptions.__numberFormatters
            : new Map()
        ;
    const __meta = __vite_ssr_import_0__.isObject(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
        version,
        cid: _cid,
        locale,
        fallbackLocale,
        messages,
        modifiers,
        pluralRules,
        missing,
        missingWarn,
        fallbackWarn,
        fallbackFormat,
        unresolving,
        postTranslation,
        processor,
        warnHtmlMessage,
        escapeParameter,
        messageCompiler,
        messageResolver,
        localeFallbacker,
        onWarn,
        __meta
    };
    {
        context.datetimeFormats = datetimeFormats;
        context.numberFormats = numberFormats;
        context.__datetimeFormatters = __datetimeFormatters;
        context.__numberFormatters = __numberFormatters;
    }
    // for vue-devtools timeline event
    if (("development" !== 'production')) {
        context.__v_emitter =
            internalOptions.__v_emitter != null
                ? internalOptions.__v_emitter
                : undefined;
    }
    // NOTE: experimental !!
    if (("development" !== 'production') || __INTLIFY_PROD_DEVTOOLS__) {
        initI18nDevTools(context, version, __meta);
    }
    return context;
}
/** @internal */
function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
/** @internal */
function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
}
/** @internal */
function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    // for vue-devtools timeline event
    if (("development" !== 'production')) {
        const emitter = context.__v_emitter;
        if (emitter) {
            emitter.emit("missing" /* MISSING */, {
                locale,
                key,
                type,
                groupId: `${type}:${key}`
            });
        }
    }
    if (missing !== null) {
        const ret = missing(context, locale, key, type);
        return __vite_ssr_import_0__.isString(ret) ? ret : key;
    }
    else {
        if (("development" !== 'production') && isTranslateMissingWarn(missingWarn, key)) {
            onWarn(getWarnMessage(CoreWarnCodes.NOT_FOUND_KEY, { key, locale }));
        }
        return key;
    }
}
/** @internal */
function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = new Map();
    ctx.localeFallbacker(ctx, fallback, locale);
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
const WARN_MESSAGE = `Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`;
function checkHtmlMessage(source, options) {
    const warnHtmlMessage = __vite_ssr_import_0__.isBoolean(options.warnHtmlMessage)
        ? options.warnHtmlMessage
        : true;
    if (warnHtmlMessage && RE_HTML_TAG.test(source)) {
        __vite_ssr_import_0__.warn(__vite_ssr_import_0__.format(WARN_MESSAGE, { source }));
    }
}
const defaultOnCacheKey = (source) => source;
let compileCache = Object.create(null);
function clearCompileCache() {
    compileCache = Object.create(null);
}
function compileToFunction(source, options = {}) {
    {
        // check HTML message
        ("development" !== 'production') && checkHtmlMessage(source, options);
        // check caches
        const onCacheKey = options.onCacheKey || defaultOnCacheKey;
        const key = onCacheKey(source);
        const cached = compileCache[key];
        if (cached) {
            return cached;
        }
        // compile error detecting
        let occurred = false;
        const onError = options.onError || __vite_ssr_import_1__.defaultOnError;
        options.onError = (err) => {
            occurred = true;
            onError(err);
        };
        // compile
        const { code } = __vite_ssr_import_1__.baseCompile(source, options);
        // evaluate function
        const msg = new Function(`return ${code}`)();
        // if occurred compile error, don't cache
        return !occurred ? (compileCache[key] = msg) : msg;
    }
}

let code = __vite_ssr_import_1__.CompileErrorCodes.__EXTEND_POINT__;
const inc = () => code++;
const CoreErrorCodes = {
    INVALID_ARGUMENT: code,
    INVALID_DATE_ARGUMENT: inc(),
    INVALID_ISO_DATE_ARGUMENT: inc(),
    __EXTEND_POINT__: inc() // 18
};
function createCoreError(code) {
    return __vite_ssr_import_1__.createCompileError(code, null, ("development" !== 'production') ? { messages: errorMessages } : undefined);
}
/** @internal */
const errorMessages = {
    [CoreErrorCodes.INVALID_ARGUMENT]: 'Invalid arguments',
    [CoreErrorCodes.INVALID_DATE_ARGUMENT]: 'The date provided is an invalid Date object.' +
        'Make sure your Date represents a valid date.',
    [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: 'The argument provided is not a valid ISO date string'
};

const NOOP_MESSAGE_FUNCTION = () => '';
const isMessageFunction = (val) => __vite_ssr_import_0__.isFunction(val);
// implementation of `translate` function
function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = __vite_ssr_import_0__.isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    const fallbackWarn = __vite_ssr_import_0__.isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const escapeParameter = __vite_ssr_import_0__.isBoolean(options.escapeParameter)
        ? options.escapeParameter
        : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    // prettier-ignore
    const defaultMsgOrKey = __vite_ssr_import_0__.isString(options.default) || __vite_ssr_import_0__.isBoolean(options.default) // default by function option
        ? !__vite_ssr_import_0__.isBoolean(options.default)
            ? options.default
            : key
        : fallbackFormat // default by `fallbackFormat` option
            ? (!messageCompiler ? () => key : key)
            : '';
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== '';
    const locale = __vite_ssr_import_0__.isString(options.locale) ? options.locale : context.locale;
    // escape params
    escapeParameter && escapeParams(options);
    // resolve message format
    // eslint-disable-next-line prefer-const
    let [formatScope, targetLocale, message] = !resolvedMessage
        ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn)
        : [
            key,
            locale,
            messages[locale] || {}
        ];
    // NOTE:
    //  Fix to work around `ssrTransfrom` bug in Vite.
    //  https://github.com/vitejs/vite/issues/4306
    //  To get around this, use temporary variables.
    //  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
    let format = formatScope;
    // if you use default message, set it as message format!
    let cacheBaseKey = key;
    if (!resolvedMessage &&
        !(__vite_ssr_import_0__.isString(format) || isMessageFunction(format))) {
        if (enableDefaultMsg) {
            format = defaultMsgOrKey;
            cacheBaseKey = format;
        }
    }
    // checking message format and target locale
    if (!resolvedMessage &&
        (!(__vite_ssr_import_0__.isString(format) || isMessageFunction(format)) ||
            !__vite_ssr_import_0__.isString(targetLocale))) {
        return unresolving ? NOT_REOSLVED : key;
    }
    if (("development" !== 'production') && __vite_ssr_import_0__.isString(format) && context.messageCompiler == null) {
        __vite_ssr_import_0__.warn(`The message format compilation is not supported in this build. ` +
            `Because message compiler isn't included. ` +
            `You need to pre-compilation all message format. ` +
            `So translate function return '${key}'.`);
        return key;
    }
    // setup compile error detecting
    let occurred = false;
    const errorDetector = () => {
        occurred = true;
    };
    // compile message format
    const msg = !isMessageFunction(format)
        ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector)
        : format;
    // if occurred compile error, return the message format
    if (occurred) {
        return format;
    }
    // evaluate message with context
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    // if use post translation option, proceed it with handler
    const ret = postTranslation ? postTranslation(messaged) : messaged;
    // NOTE: experimental !!
    if (("development" !== 'production') || __INTLIFY_PROD_DEVTOOLS__) {
        // prettier-ignore
        const payloads = {
            timestamp: Date.now(),
            key: __vite_ssr_import_0__.isString(key)
                ? key
                : isMessageFunction(format)
                    ? format.key
                    : '',
            locale: targetLocale || (isMessageFunction(format)
                ? format.locale
                : ''),
            format: __vite_ssr_import_0__.isString(format)
                ? format
                : isMessageFunction(format)
                    ? format.source
                    : '',
            message: ret
        };
        payloads.meta = __vite_ssr_import_0__.assign({}, context.__meta, getAdditionalMeta() || {});
        translateDevTools(payloads);
    }
    return ret;
}
function escapeParams(options) {
    if (__vite_ssr_import_0__.isArray(options.list)) {
        options.list = options.list.map(item => __vite_ssr_import_0__.isString(item) ? __vite_ssr_import_0__.escapeHtml(item) : item);
    }
    else if (__vite_ssr_import_0__.isObject(options.named)) {
        Object.keys(options.named).forEach(key => {
            if (__vite_ssr_import_0__.isString(options.named[key])) {
                options.named[key] = __vite_ssr_import_0__.escapeHtml(options.named[key]);
            }
        });
    }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages, onWarn, messageResolver: resolveValue, localeFallbacker } = context;
    const locales = localeFallbacker(context, fallbackLocale, locale); // eslint-disable-line @typescript-eslint/no-explicit-any
    let message = {};
    let targetLocale;
    let format = null;
    let from = locale;
    let to = null;
    const type = 'translate';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = to = locales[i];
        if (("development" !== 'production') &&
            locale !== targetLocale &&
            isTranslateFallbackWarn(fallbackWarn, key)) {
            onWarn(getWarnMessage(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
                key,
                target: targetLocale
            }));
        }
        // for vue-devtools timeline event
        if (("development" !== 'production') && locale !== targetLocale) {
            const emitter = context.__v_emitter;
            if (emitter) {
                emitter.emit("fallback" /* FALBACK */, {
                    type,
                    key,
                    from,
                    to,
                    groupId: `${type}:${key}`
                });
            }
        }
        message =
            messages[targetLocale] || {};
        // for vue-devtools timeline event
        let start = null;
        let startTag;
        let endTag;
        if (("development" !== 'production') && __vite_ssr_import_0__.inBrowser) {
            start = window.performance.now();
            startTag = 'intlify-message-resolve-start';
            endTag = 'intlify-message-resolve-end';
            __vite_ssr_import_0__.mark && __vite_ssr_import_0__.mark(startTag);
        }
        if ((format = resolveValue(message, key)) === null) {
            // if null, resolve with object key path
            format = message[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
        }
        // for vue-devtools timeline event
        if (("development" !== 'production') && __vite_ssr_import_0__.inBrowser) {
            const end = window.performance.now();
            const emitter = context.__v_emitter;
            if (emitter && start && format) {
                emitter.emit("message-resolve" /* MESSAGE_RESOLVE */, {
                    type: "message-resolve" /* MESSAGE_RESOLVE */,
                    key,
                    message: format,
                    time: end - start,
                    groupId: `${type}:${key}`
                });
            }
            if (startTag && endTag && __vite_ssr_import_0__.mark && __vite_ssr_import_0__.measure) {
                __vite_ssr_import_0__.mark(endTag);
                __vite_ssr_import_0__.measure('intlify message resolve', startTag, endTag);
            }
        }
        if (__vite_ssr_import_0__.isString(format) || __vite_ssr_import_0__.isFunction(format))
            break;
        const missingRet = handleMissing(context, // eslint-disable-line @typescript-eslint/no-explicit-any
        key, targetLocale, missingWarn, type);
        if (missingRet !== key) {
            format = missingRet;
        }
        from = to;
    }
    return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format)) {
        const msg = format;
        msg.locale = msg.locale || targetLocale;
        msg.key = msg.key || key;
        return msg;
    }
    // for vue-devtools timeline event
    let start = null;
    let startTag;
    let endTag;
    if (("development" !== 'production') && __vite_ssr_import_0__.inBrowser) {
        start = window.performance.now();
        startTag = 'intlify-message-compilation-start';
        endTag = 'intlify-message-compilation-end';
        __vite_ssr_import_0__.mark && __vite_ssr_import_0__.mark(startTag);
    }
    const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
    // for vue-devtools timeline event
    if (("development" !== 'production') && __vite_ssr_import_0__.inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start) {
            emitter.emit("message-compilation" /* MESSAGE_COMPILATION */, {
                type: "message-compilation" /* MESSAGE_COMPILATION */,
                message: format,
                time: end - start,
                groupId: `${'translate'}:${key}`
            });
        }
        if (startTag && endTag && __vite_ssr_import_0__.mark && __vite_ssr_import_0__.measure) {
            __vite_ssr_import_0__.mark(endTag);
            __vite_ssr_import_0__.measure('intlify message compilation', startTag, endTag);
        }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format;
    return msg;
}
function evaluateMessage(context, msg, msgCtx) {
    // for vue-devtools timeline event
    let start = null;
    let startTag;
    let endTag;
    if (("development" !== 'production') && __vite_ssr_import_0__.inBrowser) {
        start = window.performance.now();
        startTag = 'intlify-message-evaluation-start';
        endTag = 'intlify-message-evaluation-end';
        __vite_ssr_import_0__.mark && __vite_ssr_import_0__.mark(startTag);
    }
    const messaged = msg(msgCtx);
    // for vue-devtools timeline event
    if (("development" !== 'production') && __vite_ssr_import_0__.inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start) {
            emitter.emit("message-evaluation" /* MESSAGE_EVALUATION */, {
                type: "message-evaluation" /* MESSAGE_EVALUATION */,
                value: messaged,
                time: end - start,
                groupId: `${'translate'}:${msg.key}`
            });
        }
        if (startTag && endTag && __vite_ssr_import_0__.mark && __vite_ssr_import_0__.measure) {
            __vite_ssr_import_0__.mark(endTag);
            __vite_ssr_import_0__.measure('intlify message evaluation', startTag, endTag);
        }
    }
    return messaged;
}
/** @internal */
function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!__vite_ssr_import_0__.isString(arg1) && !__vite_ssr_import_0__.isNumber(arg1) && !isMessageFunction(arg1)) {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    // prettier-ignore
    const key = __vite_ssr_import_0__.isNumber(arg1)
        ? String(arg1)
        : isMessageFunction(arg1)
            ? arg1
            : arg1;
    if (__vite_ssr_import_0__.isNumber(arg2)) {
        options.plural = arg2;
    }
    else if (__vite_ssr_import_0__.isString(arg2)) {
        options.default = arg2;
    }
    else if (__vite_ssr_import_0__.isPlainObject(arg2) && !__vite_ssr_import_0__.isEmptyObject(arg2)) {
        options.named = arg2;
    }
    else if (__vite_ssr_import_0__.isArray(arg2)) {
        options.list = arg2;
    }
    if (__vite_ssr_import_0__.isNumber(arg3)) {
        options.plural = arg3;
    }
    else if (__vite_ssr_import_0__.isString(arg3)) {
        options.default = arg3;
    }
    else if (__vite_ssr_import_0__.isPlainObject(arg3)) {
        __vite_ssr_import_0__.assign(options, arg3);
    }
    return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
        warnHtmlMessage,
        onError: (err) => {
            errorDetector && errorDetector(err);
            if (("development" !== 'production')) {
                const message = `Message compilation error: ${err.message}`;
                const codeFrame = err.location &&
                    __vite_ssr_import_0__.generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
                const emitter = context.__v_emitter;
                if (emitter) {
                    emitter.emit("compile-error" /* COMPILE_ERROR */, {
                        message: source,
                        error: err.message,
                        start: err.location && err.location.start.offset,
                        end: err.location && err.location.end.offset,
                        groupId: `${'translate'}:${key}`
                    });
                }
                console.error(codeFrame ? `${message}\n${codeFrame}` : message);
            }
            else {
                throw err;
            }
        },
        onCacheKey: (source) => __vite_ssr_import_0__.generateFormatCacheKey(locale, key, source)
    };
}
function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules, messageResolver: resolveValue } = context;
    const resolveMessage = (key) => {
        const val = resolveValue(message, key);
        if (__vite_ssr_import_0__.isString(val)) {
            let occurred = false;
            const errorDetector = () => {
                occurred = true;
            };
            const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
            return !occurred
                ? msg
                : NOOP_MESSAGE_FUNCTION;
        }
        else if (isMessageFunction(val)) {
            return val;
        }
        else {
            // TODO: should be implemented warning message
            return NOOP_MESSAGE_FUNCTION;
        }
    };
    const ctxOptions = {
        locale,
        modifiers,
        pluralRules,
        messages: resolveMessage
    };
    if (context.processor) {
        ctxOptions.processor = context.processor;
    }
    if (options.list) {
        ctxOptions.list = options.list;
    }
    if (options.named) {
        ctxOptions.named = options.named;
    }
    if (__vite_ssr_import_0__.isNumber(options.plural)) {
        ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
}

const intlDefined = typeof Intl !== 'undefined';
const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
    numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
};

// implementation of `datetime` function
function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __datetimeFormatters } = context;
    if (("development" !== 'production') && !Availabilities.dateTimeFormat) {
        onWarn(getWarnMessage(CoreWarnCodes.CANNOT_FORMAT_DATE));
        return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = __vite_ssr_import_0__.isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    const fallbackWarn = __vite_ssr_import_0__.isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const part = !!options.part;
    const locale = __vite_ssr_import_0__.isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!__vite_ssr_import_0__.isString(key) || key === '') {
        return new Intl.DateTimeFormat(locale).format(value);
    }
    // resolve format
    let datetimeFormat = {};
    let targetLocale;
    let format = null;
    let from = locale;
    let to = null;
    const type = 'datetime format';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = to = locales[i];
        if (("development" !== 'production') &&
            locale !== targetLocale &&
            isTranslateFallbackWarn(fallbackWarn, key)) {
            onWarn(getWarnMessage(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
                key,
                target: targetLocale
            }));
        }
        // for vue-devtools timeline event
        if (("development" !== 'production') && locale !== targetLocale) {
            const emitter = context.__v_emitter;
            if (emitter) {
                emitter.emit("fallback" /* FALBACK */, {
                    type,
                    key,
                    from,
                    to,
                    groupId: `${type}:${key}`
                });
            }
        }
        datetimeFormat =
            datetimeFormats[targetLocale] || {};
        format = datetimeFormat[key];
        if (__vite_ssr_import_0__.isPlainObject(format))
            break;
        handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
        from = to;
    }
    // checking format and target locale
    if (!__vite_ssr_import_0__.isPlainObject(format) || !__vite_ssr_import_0__.isString(targetLocale)) {
        return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!__vite_ssr_import_0__.isEmptyObject(overrides)) {
        id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat(targetLocale, __vite_ssr_import_0__.assign({}, format, overrides));
        __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    let value;
    if (__vite_ssr_import_0__.isString(arg1)) {
        // Only allow ISO strings - other date formats are often supported,
        // but may cause different results in different browsers.
        const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!matches) {
            throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
        }
        // Some browsers can not parse the iso datetime separated by space,
        // this is a compromise solution by replace the 'T'/' ' with 'T'
        const dateTime = matches[3]
            ? matches[3].trim().startsWith('T')
                ? `${matches[1].trim()}${matches[3].trim()}`
                : `${matches[1].trim()}T${matches[3].trim()}`
            : matches[1].trim();
        value = new Date(dateTime);
        try {
            // This will fail if the date is not valid
            value.toISOString();
        }
        catch (e) {
            throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
        }
    }
    else if (__vite_ssr_import_0__.isDate(arg1)) {
        if (isNaN(arg1.getTime())) {
            throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
        }
        value = arg1;
    }
    else if (__vite_ssr_import_0__.isNumber(arg1)) {
        value = arg1;
    }
    else {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    if (__vite_ssr_import_0__.isString(arg2)) {
        options.key = arg2;
    }
    else if (__vite_ssr_import_0__.isPlainObject(arg2)) {
        options = arg2;
    }
    if (__vite_ssr_import_0__.isString(arg3)) {
        options.locale = arg3;
    }
    else if (__vite_ssr_import_0__.isPlainObject(arg3)) {
        overrides = arg3;
    }
    if (__vite_ssr_import_0__.isPlainObject(arg4)) {
        overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
}
/** @internal */
function clearDateTimeFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
        const id = `${locale}__${key}`;
        if (!context.__datetimeFormatters.has(id)) {
            continue;
        }
        context.__datetimeFormatters.delete(id);
    }
}

// implementation of `number` function
function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __numberFormatters } = context;
    if (("development" !== 'production') && !Availabilities.numberFormat) {
        onWarn(getWarnMessage(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
        return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = __vite_ssr_import_0__.isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    const fallbackWarn = __vite_ssr_import_0__.isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const part = !!options.part;
    const locale = __vite_ssr_import_0__.isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!__vite_ssr_import_0__.isString(key) || key === '') {
        return new Intl.NumberFormat(locale).format(value);
    }
    // resolve format
    let numberFormat = {};
    let targetLocale;
    let format = null;
    let from = locale;
    let to = null;
    const type = 'number format';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = to = locales[i];
        if (("development" !== 'production') &&
            locale !== targetLocale &&
            isTranslateFallbackWarn(fallbackWarn, key)) {
            onWarn(getWarnMessage(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
                key,
                target: targetLocale
            }));
        }
        // for vue-devtools timeline event
        if (("development" !== 'production') && locale !== targetLocale) {
            const emitter = context.__v_emitter;
            if (emitter) {
                emitter.emit("fallback" /* FALBACK */, {
                    type,
                    key,
                    from,
                    to,
                    groupId: `${type}:${key}`
                });
            }
        }
        numberFormat =
            numberFormats[targetLocale] || {};
        format = numberFormat[key];
        if (__vite_ssr_import_0__.isPlainObject(format))
            break;
        handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
        from = to;
    }
    // checking format and target locale
    if (!__vite_ssr_import_0__.isPlainObject(format) || !__vite_ssr_import_0__.isString(targetLocale)) {
        return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!__vite_ssr_import_0__.isEmptyObject(overrides)) {
        id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
        formatter = new Intl.NumberFormat(targetLocale, __vite_ssr_import_0__.assign({}, format, overrides));
        __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    if (!__vite_ssr_import_0__.isNumber(arg1)) {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const value = arg1;
    if (__vite_ssr_import_0__.isString(arg2)) {
        options.key = arg2;
    }
    else if (__vite_ssr_import_0__.isPlainObject(arg2)) {
        options = arg2;
    }
    if (__vite_ssr_import_0__.isString(arg3)) {
        options.locale = arg3;
    }
    else if (__vite_ssr_import_0__.isPlainObject(arg3)) {
        overrides = arg3;
    }
    if (__vite_ssr_import_0__.isPlainObject(arg4)) {
        overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
}
/** @internal */
function clearNumberFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
        const id = `${locale}__${key}`;
        if (!context.__numberFormatters.has(id)) {
            continue;
        }
        context.__numberFormatters.delete(id);
    }
}

// TODO: we could not exports for Node native ES Moudles yet...
{
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
        __vite_ssr_import_0__.getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
}


Object.defineProperty(__vite_ssr_exports__, "CoreErrorCodes", { enumerable: true, configurable: true, get(){ return CoreErrorCodes }});
Object.defineProperty(__vite_ssr_exports__, "CoreWarnCodes", { enumerable: true, configurable: true, get(){ return CoreWarnCodes }});
Object.defineProperty(__vite_ssr_exports__, "DEFAULT_LOCALE", { enumerable: true, configurable: true, get(){ return DEFAULT_LOCALE }});
Object.defineProperty(__vite_ssr_exports__, "DEFAULT_MESSAGE_DATA_TYPE", { enumerable: true, configurable: true, get(){ return DEFAULT_MESSAGE_DATA_TYPE }});
Object.defineProperty(__vite_ssr_exports__, "MISSING_RESOLVE_VALUE", { enumerable: true, configurable: true, get(){ return MISSING_RESOLVE_VALUE }});
Object.defineProperty(__vite_ssr_exports__, "NOT_REOSLVED", { enumerable: true, configurable: true, get(){ return NOT_REOSLVED }});
Object.defineProperty(__vite_ssr_exports__, "VERSION", { enumerable: true, configurable: true, get(){ return VERSION }});
Object.defineProperty(__vite_ssr_exports__, "clearCompileCache", { enumerable: true, configurable: true, get(){ return clearCompileCache }});
Object.defineProperty(__vite_ssr_exports__, "clearDateTimeFormat", { enumerable: true, configurable: true, get(){ return clearDateTimeFormat }});
Object.defineProperty(__vite_ssr_exports__, "clearNumberFormat", { enumerable: true, configurable: true, get(){ return clearNumberFormat }});
Object.defineProperty(__vite_ssr_exports__, "compileToFunction", { enumerable: true, configurable: true, get(){ return compileToFunction }});
Object.defineProperty(__vite_ssr_exports__, "createCoreContext", { enumerable: true, configurable: true, get(){ return createCoreContext }});
Object.defineProperty(__vite_ssr_exports__, "createCoreError", { enumerable: true, configurable: true, get(){ return createCoreError }});
Object.defineProperty(__vite_ssr_exports__, "createMessageContext", { enumerable: true, configurable: true, get(){ return createMessageContext }});
Object.defineProperty(__vite_ssr_exports__, "datetime", { enumerable: true, configurable: true, get(){ return datetime }});
Object.defineProperty(__vite_ssr_exports__, "fallbackWithLocaleChain", { enumerable: true, configurable: true, get(){ return fallbackWithLocaleChain }});
Object.defineProperty(__vite_ssr_exports__, "fallbackWithSimple", { enumerable: true, configurable: true, get(){ return fallbackWithSimple }});
Object.defineProperty(__vite_ssr_exports__, "getAdditionalMeta", { enumerable: true, configurable: true, get(){ return getAdditionalMeta }});
Object.defineProperty(__vite_ssr_exports__, "getDevToolsHook", { enumerable: true, configurable: true, get(){ return getDevToolsHook }});
Object.defineProperty(__vite_ssr_exports__, "getWarnMessage", { enumerable: true, configurable: true, get(){ return getWarnMessage }});
Object.defineProperty(__vite_ssr_exports__, "handleMissing", { enumerable: true, configurable: true, get(){ return handleMissing }});
Object.defineProperty(__vite_ssr_exports__, "initI18nDevTools", { enumerable: true, configurable: true, get(){ return initI18nDevTools }});
Object.defineProperty(__vite_ssr_exports__, "isMessageFunction", { enumerable: true, configurable: true, get(){ return isMessageFunction }});
Object.defineProperty(__vite_ssr_exports__, "isTranslateFallbackWarn", { enumerable: true, configurable: true, get(){ return isTranslateFallbackWarn }});
Object.defineProperty(__vite_ssr_exports__, "isTranslateMissingWarn", { enumerable: true, configurable: true, get(){ return isTranslateMissingWarn }});
Object.defineProperty(__vite_ssr_exports__, "number", { enumerable: true, configurable: true, get(){ return number }});
Object.defineProperty(__vite_ssr_exports__, "parse", { enumerable: true, configurable: true, get(){ return parse }});
Object.defineProperty(__vite_ssr_exports__, "parseDateTimeArgs", { enumerable: true, configurable: true, get(){ return parseDateTimeArgs }});
Object.defineProperty(__vite_ssr_exports__, "parseNumberArgs", { enumerable: true, configurable: true, get(){ return parseNumberArgs }});
Object.defineProperty(__vite_ssr_exports__, "parseTranslateArgs", { enumerable: true, configurable: true, get(){ return parseTranslateArgs }});
Object.defineProperty(__vite_ssr_exports__, "registerLocaleFallbacker", { enumerable: true, configurable: true, get(){ return registerLocaleFallbacker }});
Object.defineProperty(__vite_ssr_exports__, "registerMessageCompiler", { enumerable: true, configurable: true, get(){ return registerMessageCompiler }});
Object.defineProperty(__vite_ssr_exports__, "registerMessageResolver", { enumerable: true, configurable: true, get(){ return registerMessageResolver }});
Object.defineProperty(__vite_ssr_exports__, "resolveValue", { enumerable: true, configurable: true, get(){ return resolveValue }});
Object.defineProperty(__vite_ssr_exports__, "resolveWithKeyValue", { enumerable: true, configurable: true, get(){ return resolveWithKeyValue }});
Object.defineProperty(__vite_ssr_exports__, "setAdditionalMeta", { enumerable: true, configurable: true, get(){ return setAdditionalMeta }});
Object.defineProperty(__vite_ssr_exports__, "setDevToolsHook", { enumerable: true, configurable: true, get(){ return setDevToolsHook }});
Object.defineProperty(__vite_ssr_exports__, "translate", { enumerable: true, configurable: true, get(){ return translate }});
Object.defineProperty(__vite_ssr_exports__, "translateDevTools", { enumerable: true, configurable: true, get(){ return translateDevTools }});
Object.defineProperty(__vite_ssr_exports__, "updateFallbackLocale", { enumerable: true, configurable: true, get(){ return updateFallbackLocale }});
;
}


// --------------------
// Request: /node_modules/@intlify/message-compiler/dist/message-compiler.esm-bundler.js
// Parents: 
// - /node_modules/@intlify/core-base/dist/core-base.esm-bundler.js ($id_008b81f5)
// Dependencies: 
// - /node_modules/@intlify/shared/dist/shared.esm-bundler.js ($id_500a2161)
// --------------------
const $id_de1d486a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/*!
  * message-compiler v9.2.0-beta.25
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@intlify/shared/dist/shared.esm-bundler.js");


const CompileErrorCodes = {
    // tokenizer error codes
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    // parser error codes
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    // Special value for higher-order compilers to pick up the last code
    // to avoid collision of error codes. This should always be kept as the last
    // item.
    __EXTEND_POINT__: 15
};
/** @internal */
const errorMessages = {
    // tokenizer error messages
    [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
    [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
    [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
    [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
    [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
    [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
    [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
    [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
    [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
    [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
    // parser error messages
    [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
    [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
    [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`
};
function createCompileError(code, loc, options = {}) {
    const { domain, messages, args } = options;
    const msg = ("development" !== 'production')
        ? __vite_ssr_import_0__.format((messages || errorMessages)[code] || '', ...(args || []))
        : code;
    const error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
        error.location = loc;
    }
    error.domain = domain;
    return error;
}
/** @internal */
function defaultOnError(error) {
    throw error;
}

const LocationStub = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 }
};
function createPosition(line, column, offset) {
    return { line, column, offset };
}
function createLocation(start, end, source) {
    const loc = { start, end };
    if (source != null) {
        loc.source = source;
    }
    return loc;
}

const CHAR_SP = ' ';
const CHAR_CR = '\r';
const CHAR_LF = '\n';
const CHAR_LS = String.fromCharCode(0x2028);
const CHAR_PS = String.fromCharCode(0x2029);
function createScanner(str) {
    const _buf = str;
    let _index = 0;
    let _line = 1;
    let _column = 1;
    let _peekOffset = 0;
    const isCRLF = (index) => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
    const isLF = (index) => _buf[index] === CHAR_LF;
    const isPS = (index) => _buf[index] === CHAR_PS;
    const isLS = (index) => _buf[index] === CHAR_LS;
    const isLineEnd = (index) => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
    const index = () => _index;
    const line = () => _line;
    const column = () => _column;
    const peekOffset = () => _peekOffset;
    const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
    const currentChar = () => charAt(_index);
    const currentPeek = () => charAt(_index + _peekOffset);
    function next() {
        _peekOffset = 0;
        if (isLineEnd(_index)) {
            _line++;
            _column = 0;
        }
        if (isCRLF(_index)) {
            _index++;
        }
        _index++;
        _column++;
        return _buf[_index];
    }
    function peek() {
        if (isCRLF(_index + _peekOffset)) {
            _peekOffset++;
        }
        _peekOffset++;
        return _buf[_index + _peekOffset];
    }
    function reset() {
        _index = 0;
        _line = 1;
        _column = 1;
        _peekOffset = 0;
    }
    function resetPeek(offset = 0) {
        _peekOffset = offset;
    }
    function skipToPeek() {
        const target = _index + _peekOffset;
        // eslint-disable-next-line no-unmodified-loop-condition
        while (target !== _index) {
            next();
        }
        _peekOffset = 0;
    }
    return {
        index,
        line,
        column,
        peekOffset,
        charAt,
        currentChar,
        currentPeek,
        next,
        peek,
        reset,
        resetPeek,
        skipToPeek
    };
}

const EOF = undefined;
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$1 = 'tokenizer';
function createTokenizer(source, options = {}) {
    const location = options.location !== false;
    const _scnr = createScanner(source);
    const currentOffset = () => _scnr.index();
    const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
    const _initLoc = currentPosition();
    const _initOffset = currentOffset();
    const _context = {
        currentType: 14 /* EOF */,
        offset: _initOffset,
        startLoc: _initLoc,
        endLoc: _initLoc,
        lastType: 14 /* EOF */,
        lastOffset: _initOffset,
        lastStartLoc: _initLoc,
        lastEndLoc: _initLoc,
        braceNest: 0,
        inLinked: false,
        text: ''
    };
    const context = () => _context;
    const { onError } = options;
    function emitError(code, pos, offset, ...args) {
        const ctx = context();
        pos.column += offset;
        pos.offset += offset;
        if (onError) {
            const loc = createLocation(ctx.startLoc, pos);
            const err = createCompileError(code, loc, {
                domain: ERROR_DOMAIN$1,
                args
            });
            onError(err);
        }
    }
    function getToken(context, type, value) {
        context.endLoc = currentPosition();
        context.currentType = type;
        const token = { type };
        if (location) {
            token.loc = createLocation(context.startLoc, context.endLoc);
        }
        if (value != null) {
            token.value = value;
        }
        return token;
    }
    const getEndToken = (context) => getToken(context, 14 /* EOF */);
    function eat(scnr, ch) {
        if (scnr.currentChar() === ch) {
            scnr.next();
            return ch;
        }
        else {
            emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
            return '';
        }
    }
    function peekSpaces(scnr) {
        let buf = '';
        while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
            buf += scnr.currentPeek();
            scnr.peek();
        }
        return buf;
    }
    function skipSpaces(scnr) {
        const buf = peekSpaces(scnr);
        scnr.skipToPeek();
        return buf;
    }
    function isIdentifierStart(ch) {
        if (ch === EOF) {
            return false;
        }
        const cc = ch.charCodeAt(0);
        return ((cc >= 97 && cc <= 122) || // a-z
            (cc >= 65 && cc <= 90) || // A-Z
            cc === 95 // _
        );
    }
    function isNumberStart(ch) {
        if (ch === EOF) {
            return false;
        }
        const cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57; // 0-9
    }
    function isNamedIdentifierStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 2 /* BraceLeft */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = isIdentifierStart(scnr.currentPeek());
        scnr.resetPeek();
        return ret;
    }
    function isListIdentifierStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 2 /* BraceLeft */) {
            return false;
        }
        peekSpaces(scnr);
        const ch = scnr.currentPeek() === '-' ? scnr.peek() : scnr.currentPeek();
        const ret = isNumberStart(ch);
        scnr.resetPeek();
        return ret;
    }
    function isLiteralStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 2 /* BraceLeft */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === LITERAL_DELIMITER;
        scnr.resetPeek();
        return ret;
    }
    function isLinkedDotStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 8 /* LinkedAlias */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === "." /* LinkedDot */;
        scnr.resetPeek();
        return ret;
    }
    function isLinkedModifierStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 9 /* LinkedDot */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = isIdentifierStart(scnr.currentPeek());
        scnr.resetPeek();
        return ret;
    }
    function isLinkedDelimiterStart(scnr, context) {
        const { currentType } = context;
        if (!(currentType === 8 /* LinkedAlias */ ||
            currentType === 12 /* LinkedModifier */)) {
            return false;
        }
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === ":" /* LinkedDelimiter */;
        scnr.resetPeek();
        return ret;
    }
    function isLinkedReferStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 10 /* LinkedDelimiter */) {
            return false;
        }
        const fn = () => {
            const ch = scnr.currentPeek();
            if (ch === "{" /* BraceLeft */) {
                return isIdentifierStart(scnr.peek());
            }
            else if (ch === "@" /* LinkedAlias */ ||
                ch === "%" /* Modulo */ ||
                ch === "|" /* Pipe */ ||
                ch === ":" /* LinkedDelimiter */ ||
                ch === "." /* LinkedDot */ ||
                ch === CHAR_SP ||
                !ch) {
                return false;
            }
            else if (ch === CHAR_LF) {
                scnr.peek();
                return fn();
            }
            else {
                // other characters
                return isIdentifierStart(ch);
            }
        };
        const ret = fn();
        scnr.resetPeek();
        return ret;
    }
    function isPluralStart(scnr) {
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === "|" /* Pipe */;
        scnr.resetPeek();
        return ret;
    }
    function isTextStart(scnr, reset = true) {
        const fn = (hasSpace = false, prev = '', detectModulo = false) => {
            const ch = scnr.currentPeek();
            if (ch === "{" /* BraceLeft */) {
                return prev === "%" /* Modulo */ ? false : hasSpace;
            }
            else if (ch === "@" /* LinkedAlias */ || !ch) {
                return prev === "%" /* Modulo */ ? true : hasSpace;
            }
            else if (ch === "%" /* Modulo */) {
                scnr.peek();
                return fn(hasSpace, "%" /* Modulo */, true);
            }
            else if (ch === "|" /* Pipe */) {
                return prev === "%" /* Modulo */ || detectModulo
                    ? true
                    : !(prev === CHAR_SP || prev === CHAR_LF);
            }
            else if (ch === CHAR_SP) {
                scnr.peek();
                return fn(true, CHAR_SP, detectModulo);
            }
            else if (ch === CHAR_LF) {
                scnr.peek();
                return fn(true, CHAR_LF, detectModulo);
            }
            else {
                return true;
            }
        };
        const ret = fn();
        reset && scnr.resetPeek();
        return ret;
    }
    function takeChar(scnr, fn) {
        const ch = scnr.currentChar();
        if (ch === EOF) {
            return EOF;
        }
        if (fn(ch)) {
            scnr.next();
            return ch;
        }
        return null;
    }
    function takeIdentifierChar(scnr) {
        const closure = (ch) => {
            const cc = ch.charCodeAt(0);
            return ((cc >= 97 && cc <= 122) || // a-z
                (cc >= 65 && cc <= 90) || // A-Z
                (cc >= 48 && cc <= 57) || // 0-9
                cc === 95 || // _
                cc === 36 // $
            );
        };
        return takeChar(scnr, closure);
    }
    function takeDigit(scnr) {
        const closure = (ch) => {
            const cc = ch.charCodeAt(0);
            return cc >= 48 && cc <= 57; // 0-9
        };
        return takeChar(scnr, closure);
    }
    function takeHexDigit(scnr) {
        const closure = (ch) => {
            const cc = ch.charCodeAt(0);
            return ((cc >= 48 && cc <= 57) || // 0-9
                (cc >= 65 && cc <= 70) || // A-F
                (cc >= 97 && cc <= 102)); // a-f
        };
        return takeChar(scnr, closure);
    }
    function getDigits(scnr) {
        let ch = '';
        let num = '';
        while ((ch = takeDigit(scnr))) {
            num += ch;
        }
        return num;
    }
    function readText(scnr) {
        let buf = '';
        while (true) {
            const ch = scnr.currentChar();
            if (ch === "{" /* BraceLeft */ ||
                ch === "}" /* BraceRight */ ||
                ch === "@" /* LinkedAlias */ ||
                ch === "|" /* Pipe */ ||
                !ch) {
                break;
            }
            else if (ch === "%" /* Modulo */) {
                if (isTextStart(scnr)) {
                    buf += ch;
                    scnr.next();
                }
                else {
                    break;
                }
            }
            else if (ch === CHAR_SP || ch === CHAR_LF) {
                if (isTextStart(scnr)) {
                    buf += ch;
                    scnr.next();
                }
                else if (isPluralStart(scnr)) {
                    break;
                }
                else {
                    buf += ch;
                    scnr.next();
                }
            }
            else {
                buf += ch;
                scnr.next();
            }
        }
        return buf;
    }
    function readNamedIdentifier(scnr) {
        skipSpaces(scnr);
        let ch = '';
        let name = '';
        while ((ch = takeIdentifierChar(scnr))) {
            name += ch;
        }
        if (scnr.currentChar() === EOF) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        return name;
    }
    function readListIdentifier(scnr) {
        skipSpaces(scnr);
        let value = '';
        if (scnr.currentChar() === '-') {
            scnr.next();
            value += `-${getDigits(scnr)}`;
        }
        else {
            value += getDigits(scnr);
        }
        if (scnr.currentChar() === EOF) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        return value;
    }
    function readLiteral(scnr) {
        skipSpaces(scnr);
        eat(scnr, `\'`);
        let ch = '';
        let literal = '';
        const fn = (x) => x !== LITERAL_DELIMITER && x !== CHAR_LF;
        while ((ch = takeChar(scnr, fn))) {
            if (ch === '\\') {
                literal += readEscapeSequence(scnr);
            }
            else {
                literal += ch;
            }
        }
        const current = scnr.currentChar();
        if (current === CHAR_LF || current === EOF) {
            emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
            // TODO: Is it correct really?
            if (current === CHAR_LF) {
                scnr.next();
                eat(scnr, `\'`);
            }
            return literal;
        }
        eat(scnr, `\'`);
        return literal;
    }
    function readEscapeSequence(scnr) {
        const ch = scnr.currentChar();
        switch (ch) {
            case '\\':
            case `\'`:
                scnr.next();
                return `\\${ch}`;
            case 'u':
                return readUnicodeEscapeSequence(scnr, ch, 4);
            case 'U':
                return readUnicodeEscapeSequence(scnr, ch, 6);
            default:
                emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
                return '';
        }
    }
    function readUnicodeEscapeSequence(scnr, unicode, digits) {
        eat(scnr, unicode);
        let sequence = '';
        for (let i = 0; i < digits; i++) {
            const ch = takeHexDigit(scnr);
            if (!ch) {
                emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
                break;
            }
            sequence += ch;
        }
        return `\\${unicode}${sequence}`;
    }
    function readInvalidIdentifier(scnr) {
        skipSpaces(scnr);
        let ch = '';
        let identifiers = '';
        const closure = (ch) => ch !== "{" /* BraceLeft */ &&
            ch !== "}" /* BraceRight */ &&
            ch !== CHAR_SP &&
            ch !== CHAR_LF;
        while ((ch = takeChar(scnr, closure))) {
            identifiers += ch;
        }
        return identifiers;
    }
    function readLinkedModifier(scnr) {
        let ch = '';
        let name = '';
        while ((ch = takeIdentifierChar(scnr))) {
            name += ch;
        }
        return name;
    }
    function readLinkedRefer(scnr) {
        const fn = (detect = false, buf) => {
            const ch = scnr.currentChar();
            if (ch === "{" /* BraceLeft */ ||
                ch === "%" /* Modulo */ ||
                ch === "@" /* LinkedAlias */ ||
                ch === "|" /* Pipe */ ||
                !ch) {
                return buf;
            }
            else if (ch === CHAR_SP) {
                return buf;
            }
            else if (ch === CHAR_LF) {
                buf += ch;
                scnr.next();
                return fn(detect, buf);
            }
            else {
                buf += ch;
                scnr.next();
                return fn(true, buf);
            }
        };
        return fn(false, '');
    }
    function readPlural(scnr) {
        skipSpaces(scnr);
        const plural = eat(scnr, "|" /* Pipe */);
        skipSpaces(scnr);
        return plural;
    }
    // TODO: We need refactoring of token parsing ...
    function readTokenInPlaceholder(scnr, context) {
        let token = null;
        const ch = scnr.currentChar();
        switch (ch) {
            case "{" /* BraceLeft */:
                if (context.braceNest >= 1) {
                    emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
                }
                scnr.next();
                token = getToken(context, 2 /* BraceLeft */, "{" /* BraceLeft */);
                skipSpaces(scnr);
                context.braceNest++;
                return token;
            case "}" /* BraceRight */:
                if (context.braceNest > 0 &&
                    context.currentType === 2 /* BraceLeft */) {
                    emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
                }
                scnr.next();
                token = getToken(context, 3 /* BraceRight */, "}" /* BraceRight */);
                context.braceNest--;
                context.braceNest > 0 && skipSpaces(scnr);
                if (context.inLinked && context.braceNest === 0) {
                    context.inLinked = false;
                }
                return token;
            case "@" /* LinkedAlias */:
                if (context.braceNest > 0) {
                    emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                }
                token = readTokenInLinked(scnr, context) || getEndToken(context);
                context.braceNest = 0;
                return token;
            default:
                let validNamedIdentifier = true;
                let validListIdentifier = true;
                let validLiteral = true;
                if (isPluralStart(scnr)) {
                    if (context.braceNest > 0) {
                        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                    }
                    token = getToken(context, 1 /* Pipe */, readPlural(scnr));
                    // reset
                    context.braceNest = 0;
                    context.inLinked = false;
                    return token;
                }
                if (context.braceNest > 0 &&
                    (context.currentType === 5 /* Named */ ||
                        context.currentType === 6 /* List */ ||
                        context.currentType === 7 /* Literal */)) {
                    emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                    context.braceNest = 0;
                    return readToken(scnr, context);
                }
                if ((validNamedIdentifier = isNamedIdentifierStart(scnr, context))) {
                    token = getToken(context, 5 /* Named */, readNamedIdentifier(scnr));
                    skipSpaces(scnr);
                    return token;
                }
                if ((validListIdentifier = isListIdentifierStart(scnr, context))) {
                    token = getToken(context, 6 /* List */, readListIdentifier(scnr));
                    skipSpaces(scnr);
                    return token;
                }
                if ((validLiteral = isLiteralStart(scnr, context))) {
                    token = getToken(context, 7 /* Literal */, readLiteral(scnr));
                    skipSpaces(scnr);
                    return token;
                }
                if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
                    // TODO: we should be re-designed invalid cases, when we will extend message syntax near the future ...
                    token = getToken(context, 13 /* InvalidPlace */, readInvalidIdentifier(scnr));
                    emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
                    skipSpaces(scnr);
                    return token;
                }
                break;
        }
        return token;
    }
    // TODO: We need refactoring of token parsing ...
    function readTokenInLinked(scnr, context) {
        const { currentType } = context;
        let token = null;
        const ch = scnr.currentChar();
        if ((currentType === 8 /* LinkedAlias */ ||
            currentType === 9 /* LinkedDot */ ||
            currentType === 12 /* LinkedModifier */ ||
            currentType === 10 /* LinkedDelimiter */) &&
            (ch === CHAR_LF || ch === CHAR_SP)) {
            emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        switch (ch) {
            case "@" /* LinkedAlias */:
                scnr.next();
                token = getToken(context, 8 /* LinkedAlias */, "@" /* LinkedAlias */);
                context.inLinked = true;
                return token;
            case "." /* LinkedDot */:
                skipSpaces(scnr);
                scnr.next();
                return getToken(context, 9 /* LinkedDot */, "." /* LinkedDot */);
            case ":" /* LinkedDelimiter */:
                skipSpaces(scnr);
                scnr.next();
                return getToken(context, 10 /* LinkedDelimiter */, ":" /* LinkedDelimiter */);
            default:
                if (isPluralStart(scnr)) {
                    token = getToken(context, 1 /* Pipe */, readPlural(scnr));
                    // reset
                    context.braceNest = 0;
                    context.inLinked = false;
                    return token;
                }
                if (isLinkedDotStart(scnr, context) ||
                    isLinkedDelimiterStart(scnr, context)) {
                    skipSpaces(scnr);
                    return readTokenInLinked(scnr, context);
                }
                if (isLinkedModifierStart(scnr, context)) {
                    skipSpaces(scnr);
                    return getToken(context, 12 /* LinkedModifier */, readLinkedModifier(scnr));
                }
                if (isLinkedReferStart(scnr, context)) {
                    skipSpaces(scnr);
                    if (ch === "{" /* BraceLeft */) {
                        // scan the placeholder
                        return readTokenInPlaceholder(scnr, context) || token;
                    }
                    else {
                        return getToken(context, 11 /* LinkedKey */, readLinkedRefer(scnr));
                    }
                }
                if (currentType === 8 /* LinkedAlias */) {
                    emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
                }
                context.braceNest = 0;
                context.inLinked = false;
                return readToken(scnr, context);
        }
    }
    // TODO: We need refactoring of token parsing ...
    function readToken(scnr, context) {
        let token = { type: 14 /* EOF */ };
        if (context.braceNest > 0) {
            return readTokenInPlaceholder(scnr, context) || getEndToken(context);
        }
        if (context.inLinked) {
            return readTokenInLinked(scnr, context) || getEndToken(context);
        }
        const ch = scnr.currentChar();
        switch (ch) {
            case "{" /* BraceLeft */:
                return readTokenInPlaceholder(scnr, context) || getEndToken(context);
            case "}" /* BraceRight */:
                emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
                scnr.next();
                return getToken(context, 3 /* BraceRight */, "}" /* BraceRight */);
            case "@" /* LinkedAlias */:
                return readTokenInLinked(scnr, context) || getEndToken(context);
            default:
                if (isPluralStart(scnr)) {
                    token = getToken(context, 1 /* Pipe */, readPlural(scnr));
                    // reset
                    context.braceNest = 0;
                    context.inLinked = false;
                    return token;
                }
                if (isTextStart(scnr)) {
                    return getToken(context, 0 /* Text */, readText(scnr));
                }
                if (ch === "%" /* Modulo */) {
                    scnr.next();
                    return getToken(context, 4 /* Modulo */, "%" /* Modulo */);
                }
                break;
        }
        return token;
    }
    function nextToken() {
        const { currentType, offset, startLoc, endLoc } = _context;
        _context.lastType = currentType;
        _context.lastOffset = offset;
        _context.lastStartLoc = startLoc;
        _context.lastEndLoc = endLoc;
        _context.offset = currentOffset();
        _context.startLoc = currentPosition();
        if (_scnr.currentChar() === EOF) {
            return getToken(_context, 14 /* EOF */);
        }
        return readToken(_scnr, _context);
    }
    return {
        nextToken,
        currentOffset,
        currentPosition,
        context
    };
}

const ERROR_DOMAIN = 'parser';
// Backslash backslash, backslash quote, uHHHH, UHHHHHH.
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
    switch (match) {
        case `\\\\`:
            return `\\`;
        case `\\\'`:
            return `\'`;
        default: {
            const codePoint = parseInt(codePoint4 || codePoint6, 16);
            if (codePoint <= 0xd7ff || codePoint >= 0xe000) {
                return String.fromCodePoint(codePoint);
            }
            // invalid ...
            // Replace them with U+FFFD REPLACEMENT CHARACTER.
            return '�';
        }
    }
}
function createParser(options = {}) {
    const location = options.location !== false;
    const { onError } = options;
    function emitError(tokenzer, code, start, offset, ...args) {
        const end = tokenzer.currentPosition();
        end.offset += offset;
        end.column += offset;
        if (onError) {
            const loc = createLocation(start, end);
            const err = createCompileError(code, loc, {
                domain: ERROR_DOMAIN,
                args
            });
            onError(err);
        }
    }
    function startNode(type, offset, loc) {
        const node = {
            type,
            start: offset,
            end: offset
        };
        if (location) {
            node.loc = { start: loc, end: loc };
        }
        return node;
    }
    function endNode(node, offset, pos, type) {
        node.end = offset;
        if (type) {
            node.type = type;
        }
        if (location && node.loc) {
            node.loc.end = pos;
        }
    }
    function parseText(tokenizer, value) {
        const context = tokenizer.context();
        const node = startNode(3 /* Text */, context.offset, context.startLoc);
        node.value = value;
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseList(tokenizer, index) {
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
        const node = startNode(5 /* List */, offset, loc);
        node.index = parseInt(index, 10);
        tokenizer.nextToken(); // skip brach right
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseNamed(tokenizer, key) {
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
        const node = startNode(4 /* Named */, offset, loc);
        node.key = key;
        tokenizer.nextToken(); // skip brach right
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseLiteral(tokenizer, value) {
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
        const node = startNode(9 /* Literal */, offset, loc);
        node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
        tokenizer.nextToken(); // skip brach right
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseLinkedModifier(tokenizer) {
        const token = tokenizer.nextToken();
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get linked dot loc
        const node = startNode(8 /* LinkedModifier */, offset, loc);
        if (token.type !== 12 /* LinkedModifier */) {
            // empty modifier
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
            node.value = '';
            endNode(node, offset, loc);
            return {
                nextConsumeToken: token,
                node
            };
        }
        // check token
        if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        node.value = token.value || '';
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return {
            node
        };
    }
    function parseLinkedKey(tokenizer, value) {
        const context = tokenizer.context();
        const node = startNode(7 /* LinkedKey */, context.offset, context.startLoc);
        node.value = value;
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseLinked(tokenizer) {
        const context = tokenizer.context();
        const linkedNode = startNode(6 /* Linked */, context.offset, context.startLoc);
        let token = tokenizer.nextToken();
        if (token.type === 9 /* LinkedDot */) {
            const parsed = parseLinkedModifier(tokenizer);
            linkedNode.modifier = parsed.node;
            token = parsed.nextConsumeToken || tokenizer.nextToken();
        }
        // asset check token
        if (token.type !== 10 /* LinkedDelimiter */) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        token = tokenizer.nextToken();
        // skip brace left
        if (token.type === 2 /* BraceLeft */) {
            token = tokenizer.nextToken();
        }
        switch (token.type) {
            case 11 /* LinkedKey */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseLinkedKey(tokenizer, token.value || '');
                break;
            case 5 /* Named */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseNamed(tokenizer, token.value || '');
                break;
            case 6 /* List */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseList(tokenizer, token.value || '');
                break;
            case 7 /* Literal */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseLiteral(tokenizer, token.value || '');
                break;
            default:
                // empty key
                emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
                const nextContext = tokenizer.context();
                const emptyLinkedKeyNode = startNode(7 /* LinkedKey */, nextContext.offset, nextContext.startLoc);
                emptyLinkedKeyNode.value = '';
                endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
                linkedNode.key = emptyLinkedKeyNode;
                endNode(linkedNode, nextContext.offset, nextContext.startLoc);
                return {
                    nextConsumeToken: token,
                    node: linkedNode
                };
        }
        endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
        return {
            node: linkedNode
        };
    }
    function parseMessage(tokenizer) {
        const context = tokenizer.context();
        const startOffset = context.currentType === 1 /* Pipe */
            ? tokenizer.currentOffset()
            : context.offset;
        const startLoc = context.currentType === 1 /* Pipe */
            ? context.endLoc
            : context.startLoc;
        const node = startNode(2 /* Message */, startOffset, startLoc);
        node.items = [];
        let nextToken = null;
        do {
            const token = nextToken || tokenizer.nextToken();
            nextToken = null;
            switch (token.type) {
                case 0 /* Text */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseText(tokenizer, token.value || ''));
                    break;
                case 6 /* List */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseList(tokenizer, token.value || ''));
                    break;
                case 5 /* Named */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseNamed(tokenizer, token.value || ''));
                    break;
                case 7 /* Literal */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseLiteral(tokenizer, token.value || ''));
                    break;
                case 8 /* LinkedAlias */:
                    const parsed = parseLinked(tokenizer);
                    node.items.push(parsed.node);
                    nextToken = parsed.nextConsumeToken || null;
                    break;
            }
        } while (context.currentType !== 14 /* EOF */ &&
            context.currentType !== 1 /* Pipe */);
        // adjust message node loc
        const endOffset = context.currentType === 1 /* Pipe */
            ? context.lastOffset
            : tokenizer.currentOffset();
        const endLoc = context.currentType === 1 /* Pipe */
            ? context.lastEndLoc
            : tokenizer.currentPosition();
        endNode(node, endOffset, endLoc);
        return node;
    }
    function parsePlural(tokenizer, offset, loc, msgNode) {
        const context = tokenizer.context();
        let hasEmptyMessage = msgNode.items.length === 0;
        const node = startNode(1 /* Plural */, offset, loc);
        node.cases = [];
        node.cases.push(msgNode);
        do {
            const msg = parseMessage(tokenizer);
            if (!hasEmptyMessage) {
                hasEmptyMessage = msg.items.length === 0;
            }
            node.cases.push(msg);
        } while (context.currentType !== 14 /* EOF */);
        if (hasEmptyMessage) {
            emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
        }
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseResource(tokenizer) {
        const context = tokenizer.context();
        const { offset, startLoc } = context;
        const msgNode = parseMessage(tokenizer);
        if (context.currentType === 14 /* EOF */) {
            return msgNode;
        }
        else {
            return parsePlural(tokenizer, offset, startLoc, msgNode);
        }
    }
    function parse(source) {
        const tokenizer = createTokenizer(source, __vite_ssr_import_0__.assign({}, options));
        const context = tokenizer.context();
        const node = startNode(0 /* Resource */, context.offset, context.startLoc);
        if (location && node.loc) {
            node.loc.source = source;
        }
        node.body = parseResource(tokenizer);
        // assert whether achieved to EOF
        if (context.currentType !== 14 /* EOF */) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || '');
        }
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    return { parse };
}
function getTokenCaption(token) {
    if (token.type === 14 /* EOF */) {
        return 'EOF';
    }
    const name = (token.value || '').replace(/\r?\n/gu, '\\n');
    return name.length > 10 ? name.slice(0, 9) + '…' : name;
}

function createTransformer(ast, options = {} // eslint-disable-line
) {
    const _context = {
        ast,
        helpers: new Set()
    };
    const context = () => _context;
    const helper = (name) => {
        _context.helpers.add(name);
        return name;
    };
    return { context, helper };
}
function traverseNodes(nodes, transformer) {
    for (let i = 0; i < nodes.length; i++) {
        traverseNode(nodes[i], transformer);
    }
}
function traverseNode(node, transformer) {
    // TODO: if we need pre-hook of transform, should be implemented to here
    switch (node.type) {
        case 1 /* Plural */:
            traverseNodes(node.cases, transformer);
            transformer.helper("plural" /* PLURAL */);
            break;
        case 2 /* Message */:
            traverseNodes(node.items, transformer);
            break;
        case 6 /* Linked */:
            const linked = node;
            traverseNode(linked.key, transformer);
            transformer.helper("linked" /* LINKED */);
            break;
        case 5 /* List */:
            transformer.helper("interpolate" /* INTERPOLATE */);
            transformer.helper("list" /* LIST */);
            break;
        case 4 /* Named */:
            transformer.helper("interpolate" /* INTERPOLATE */);
            transformer.helper("named" /* NAMED */);
            break;
    }
    // TODO: if we need post-hook of transform, should be implemented to here
}
// transform AST
function transform(ast, options = {} // eslint-disable-line
) {
    const transformer = createTransformer(ast);
    transformer.helper("normalize" /* NORMALIZE */);
    // traverse
    ast.body && traverseNode(ast.body, transformer);
    // set meta information
    const context = transformer.context();
    ast.helpers = Array.from(context.helpers);
}

function createCodeGenerator(ast, options) {
    const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
    const _context = {
        source: ast.loc.source,
        filename,
        code: '',
        column: 1,
        line: 1,
        offset: 0,
        map: undefined,
        breakLineCode,
        needIndent: _needIndent,
        indentLevel: 0
    };
    const context = () => _context;
    function push(code, node) {
        _context.code += code;
    }
    function _newline(n, withBreakLine = true) {
        const _breakLineCode = withBreakLine ? breakLineCode : '';
        push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
    }
    function indent(withNewLine = true) {
        const level = ++_context.indentLevel;
        withNewLine && _newline(level);
    }
    function deindent(withNewLine = true) {
        const level = --_context.indentLevel;
        withNewLine && _newline(level);
    }
    function newline() {
        _newline(_context.indentLevel);
    }
    const helper = (key) => `_${key}`;
    const needIndent = () => _context.needIndent;
    return {
        context,
        push,
        indent,
        deindent,
        newline,
        helper,
        needIndent
    };
}
function generateLinkedNode(generator, node) {
    const { helper } = generator;
    generator.push(`${helper("linked" /* LINKED */)}(`);
    generateNode(generator, node.key);
    if (node.modifier) {
        generator.push(`, `);
        generateNode(generator, node.modifier);
    }
    generator.push(`)`);
}
function generateMessageNode(generator, node) {
    const { helper, needIndent } = generator;
    generator.push(`${helper("normalize" /* NORMALIZE */)}([`);
    generator.indent(needIndent());
    const length = node.items.length;
    for (let i = 0; i < length; i++) {
        generateNode(generator, node.items[i]);
        if (i === length - 1) {
            break;
        }
        generator.push(', ');
    }
    generator.deindent(needIndent());
    generator.push('])');
}
function generatePluralNode(generator, node) {
    const { helper, needIndent } = generator;
    if (node.cases.length > 1) {
        generator.push(`${helper("plural" /* PLURAL */)}([`);
        generator.indent(needIndent());
        const length = node.cases.length;
        for (let i = 0; i < length; i++) {
            generateNode(generator, node.cases[i]);
            if (i === length - 1) {
                break;
            }
            generator.push(', ');
        }
        generator.deindent(needIndent());
        generator.push(`])`);
    }
}
function generateResource(generator, node) {
    if (node.body) {
        generateNode(generator, node.body);
    }
    else {
        generator.push('null');
    }
}
function generateNode(generator, node) {
    const { helper } = generator;
    switch (node.type) {
        case 0 /* Resource */:
            generateResource(generator, node);
            break;
        case 1 /* Plural */:
            generatePluralNode(generator, node);
            break;
        case 2 /* Message */:
            generateMessageNode(generator, node);
            break;
        case 6 /* Linked */:
            generateLinkedNode(generator, node);
            break;
        case 8 /* LinkedModifier */:
            generator.push(JSON.stringify(node.value), node);
            break;
        case 7 /* LinkedKey */:
            generator.push(JSON.stringify(node.value), node);
            break;
        case 5 /* List */:
            generator.push(`${helper("interpolate" /* INTERPOLATE */)}(${helper("list" /* LIST */)}(${node.index}))`, node);
            break;
        case 4 /* Named */:
            generator.push(`${helper("interpolate" /* INTERPOLATE */)}(${helper("named" /* NAMED */)}(${JSON.stringify(node.key)}))`, node);
            break;
        case 9 /* Literal */:
            generator.push(JSON.stringify(node.value), node);
            break;
        case 3 /* Text */:
            generator.push(JSON.stringify(node.value), node);
            break;
        default:
            if (("development" !== 'production')) {
                throw new Error(`unhandled codegen node type: ${node.type}`);
            }
    }
}
// generate code from AST
const generate = (ast, options = {} // eslint-disable-line
) => {
    const mode = __vite_ssr_import_0__.isString(options.mode) ? options.mode : 'normal';
    const filename = __vite_ssr_import_0__.isString(options.filename)
        ? options.filename
        : 'message.intl';
    const sourceMap = !!options.sourceMap;
    // prettier-ignore
    const breakLineCode = options.breakLineCode != null
        ? options.breakLineCode
        : mode === 'arrow'
            ? ';'
            : '\n';
    const needIndent = options.needIndent ? options.needIndent : mode !== 'arrow';
    const helpers = ast.helpers || [];
    const generator = createCodeGenerator(ast, {
        mode,
        filename,
        sourceMap,
        breakLineCode,
        needIndent
    });
    generator.push(mode === 'normal' ? `function __msg__ (ctx) {` : `(ctx) => {`);
    generator.indent(needIndent);
    if (helpers.length > 0) {
        generator.push(`const { ${helpers.map(s => `${s}: _${s}`).join(', ')} } = ctx`);
        generator.newline();
    }
    generator.push(`return `);
    generateNode(generator, ast);
    generator.deindent(needIndent);
    generator.push(`}`);
    const { code, map } = generator.context();
    return {
        ast,
        code,
        map: map ? map.toJSON() : undefined // eslint-disable-line @typescript-eslint/no-explicit-any
    };
};

function baseCompile(source, options = {}) {
    const assignedOptions = __vite_ssr_import_0__.assign({}, options);
    // parse source codes
    const parser = createParser(assignedOptions);
    const ast = parser.parse(source);
    // transform ASTs
    transform(ast, assignedOptions);
    // generate javascript codes
    return generate(ast, assignedOptions);
}


Object.defineProperty(__vite_ssr_exports__, "CompileErrorCodes", { enumerable: true, configurable: true, get(){ return CompileErrorCodes }});
Object.defineProperty(__vite_ssr_exports__, "ERROR_DOMAIN", { enumerable: true, configurable: true, get(){ return ERROR_DOMAIN }});
Object.defineProperty(__vite_ssr_exports__, "LocationStub", { enumerable: true, configurable: true, get(){ return LocationStub }});
Object.defineProperty(__vite_ssr_exports__, "baseCompile", { enumerable: true, configurable: true, get(){ return baseCompile }});
Object.defineProperty(__vite_ssr_exports__, "createCompileError", { enumerable: true, configurable: true, get(){ return createCompileError }});
Object.defineProperty(__vite_ssr_exports__, "createLocation", { enumerable: true, configurable: true, get(){ return createLocation }});
Object.defineProperty(__vite_ssr_exports__, "createParser", { enumerable: true, configurable: true, get(){ return createParser }});
Object.defineProperty(__vite_ssr_exports__, "createPosition", { enumerable: true, configurable: true, get(){ return createPosition }});
Object.defineProperty(__vite_ssr_exports__, "defaultOnError", { enumerable: true, configurable: true, get(){ return defaultOnError }});
Object.defineProperty(__vite_ssr_exports__, "errorMessages", { enumerable: true, configurable: true, get(){ return errorMessages }});
;
}


// --------------------
// Request: /node_modules/@intlify/devtools-if/dist/devtools-if.esm-bundler.js
// Parents: 
// - /node_modules/@intlify/core-base/dist/core-base.esm-bundler.js ($id_008b81f5)
// Dependencies: 

// --------------------
const $id_3642ffb5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/*!
  * devtools-if v9.2.0-beta.25
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks =  {
    I18nInit: 'i18n:init',
    FunctionTranslate: 'function:translate'
};


Object.defineProperty(__vite_ssr_exports__, "IntlifyDevToolsHooks", { enumerable: true, configurable: true, get(){ return IntlifyDevToolsHooks }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/index.js
// Parents: 
// - /node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js ($id_24731f5b)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/env.js ($id_304a908e)
// - /node_modules/@vue/devtools-api/lib/esm/const.js ($id_8e00d2d1)
// - /node_modules/@vue/devtools-api/lib/esm/proxy.js ($id_c00b31f5)
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// - /node_modules/@vue/devtools-api/lib/esm/plugin.js ($id_674cbbbf)
// --------------------
const $id_24b1ff15 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/env.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/const.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/proxy.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/index.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/plugin.js");
__vite_ssr_exportAll__(__vite_ssr_import_4__);
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = __vite_ssr_import_0__.getTarget();
    const hook = __vite_ssr_import_0__.getDevtoolsGlobalHook();
    const enableProxy = __vite_ssr_import_0__.isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(__vite_ssr_import_1__.HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new __vite_ssr_import_2__.ApiProxy(pluginDescriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            setupFn(proxy.proxiedTarget);
    }
}
Object.defineProperty(__vite_ssr_exports__, "setupDevtoolsPlugin", { enumerable: true, configurable: true, get(){ return setupDevtoolsPlugin }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/env.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 

// --------------------
const $id_304a908e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
Object.defineProperty(__vite_ssr_exports__, "getDevtoolsGlobalHook", { enumerable: true, configurable: true, get(){ return getDevtoolsGlobalHook }});
function getTarget() {
    // @ts-ignore
    return ("undefined" !== 'undefined' && "undefined" !== 'undefined')
        ? window
        : typeof global !== 'undefined'
            ? global
            : {};
}
Object.defineProperty(__vite_ssr_exports__, "getTarget", { enumerable: true, configurable: true, get(){ return getTarget }});
const isProxyAvailable = typeof Proxy === 'function';
Object.defineProperty(__vite_ssr_exports__, "isProxyAvailable", { enumerable: true, configurable: true, get(){ return isProxyAvailable }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/const.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// - /node_modules/@vue/devtools-api/lib/esm/proxy.js ($id_c00b31f5)
// Dependencies: 

// --------------------
const $id_8e00d2d1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const HOOK_SETUP = 'devtools-plugin:setup';
Object.defineProperty(__vite_ssr_exports__, "HOOK_SETUP", { enumerable: true, configurable: true, get(){ return HOOK_SETUP }});
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';
Object.defineProperty(__vite_ssr_exports__, "HOOK_PLUGIN_SETTINGS_SET", { enumerable: true, configurable: true, get(){ return HOOK_PLUGIN_SETTINGS_SET }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/proxy.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/const.js ($id_8e00d2d1)
// --------------------
const $id_c00b31f5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/const.js");

class ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
        };
        if (hook) {
            hook.on(__vite_ssr_import_0__.HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                if (pluginId === this.plugin.id) {
                    this.fallbacks.setSettings(value);
                }
            });
        }
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}
Object.defineProperty(__vite_ssr_exports__, "ApiProxy", { enumerable: true, configurable: true, get(){ return ApiProxy }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/index.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/api/api.js ($id_92fae9b0)
// - /node_modules/@vue/devtools-api/lib/esm/api/app.js ($id_b65c5853)
// - /node_modules/@vue/devtools-api/lib/esm/api/component.js ($id_614015ea)
// - /node_modules/@vue/devtools-api/lib/esm/api/context.js ($id_2baadcfd)
// - /node_modules/@vue/devtools-api/lib/esm/api/hooks.js ($id_3aa5d48c)
// - /node_modules/@vue/devtools-api/lib/esm/api/util.js ($id_03011152)
// --------------------
const $id_550ae022 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/api.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/app.js");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/component.js");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/context.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/hooks.js");
__vite_ssr_exportAll__(__vite_ssr_import_4__);
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/util.js");
__vite_ssr_exportAll__(__vite_ssr_import_5__);
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/api.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_92fae9b0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/app.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_b65c5853 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/component.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_614015ea = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/context.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_2baadcfd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/hooks.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_3aa5d48c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/util.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_03011152 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/plugin.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 

// --------------------
const $id_674cbbbf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@intlify/vue-devtools/dist/vue-devtools.esm-bundler.js
// Parents: 
// - /node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js ($id_24731f5b)
// Dependencies: 

// --------------------
const $id_c419997a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/*!
  * vue-devtools v9.2.0-beta.25
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const VueDevToolsLabels = {
    ["vue-devtools-plugin-vue-i18n" /* PLUGIN */]: 'Vue I18n devtools',
    ["vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */]: 'I18n Resources',
    ["vue-i18n-timeline" /* TIMELINE */]: 'Vue I18n'
};
const VueDevToolsPlaceholders = {
    ["vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */]: 'Search for scopes ...'
};
const VueDevToolsTimelineColors = {
    ["vue-i18n-timeline" /* TIMELINE */]: 0xffcd19
};


Object.defineProperty(__vite_ssr_exports__, "VueDevToolsLabels", { enumerable: true, configurable: true, get(){ return VueDevToolsLabels }});
Object.defineProperty(__vite_ssr_exports__, "VueDevToolsPlaceholders", { enumerable: true, configurable: true, get(){ return VueDevToolsPlaceholders }});
Object.defineProperty(__vite_ssr_exports__, "VueDevToolsTimelineColors", { enumerable: true, configurable: true, get(){ return VueDevToolsTimelineColors }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.vuei18n.options.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs ($id_b8547a9d)
// Dependencies: 

// --------------------
const $id_1151c09a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
// 'vueI18n' option loading ...
__vite_ssr_exports__.default = () => Promise.resolve({"defaultSFCLang":"json"});
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs ($id_b8547a9d)
// Dependencies: 
// - /locales/de.json ($id_a701a9b7)
// - /locales/en.json ($id_f04686dd)
// - /locales/fr.json ($id_0fa04411)
// - /locales/ku.json ($id_60c5a609)
// - /locales/tr.json ($id_7b4ae5b9)
// --------------------
const $id_4b699651 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/locales/de.json");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/locales/en.json");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/locales/fr.json");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/locales/ku.json");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/locales/tr.json");

__vite_ssr_exports__.default = { "de":__vite_ssr_import_0__.default,"en":__vite_ssr_import_1__.default,"fr":__vite_ssr_import_2__.default,"ku":__vite_ssr_import_3__.default,"tr":__vite_ssr_import_4__.default }
;
}


// --------------------
// Request: /locales/de.json
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs ($id_4b699651)
// Dependencies: 

// --------------------
const $id_a701a9b7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {
  "Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Heim"])};fn.source="Heim";return fn;})(),
  "Contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kontakt"])};fn.source="Kontakt";return fn;})(),
  "Login Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anmeldung erfolgreich"])};fn.source="Anmeldung erfolgreich";return fn;})(),
  "Logout Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Abmelden erfolgreich"])};fn.source="Abmelden erfolgreich";return fn;})(),
  "Contact Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kontaktseite"])};fn.source="Kontaktseite";return fn;})(),
  "Home Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Startseite"])};fn.source="Startseite";return fn;})(),
  "Login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anmeldung"])};fn.source="Anmeldung";return fn;})(),
  "Logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ausloggen"])};fn.source="Ausloggen";return fn;})(),
  "Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name"])};fn.source="Name";return fn;})(),
  "Email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email"])};fn.source="Email";return fn;})(),
  "Password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Passwort"])};fn.source="Passwort";return fn;})(),
  "Phone": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Telefon"])};fn.source="Telefon";return fn;})(),
  "About Us": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Über uns"])};fn.source="Über uns";return fn;})(),
  "Lorem Ipsum": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Der Schmerz selbst ist ein großer Schmerz, er hat im Laufe der Jahre gelitten, aber es ist Zeit, den Schmerz zu beneiden, und der Schmerz ist aufregend, er war aufregend, aber er war kompliziert. beim"])};fn.source="Der Schmerz selbst ist ein großer Schmerz, er hat im Laufe der Jahre gelitten, aber es ist Zeit, den Schmerz zu beneiden, und der Schmerz ist aufregend, er war aufregend, aber er war kompliziert. beim";return fn;})(),
  "Please enter credentials for login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bitte geben Sie die Zugangsdaten für die Anmeldung ein"])};fn.source="Bitte geben Sie die Zugangsdaten für die Anmeldung ein";return fn;})(),
  "Contact Form": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kontakt Formular"])};fn.source="Kontakt Formular";return fn;})(),
  "Send": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Senden"])};fn.source="Senden";return fn;})(),
  "Country": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Land"])};fn.source="Land";return fn;})(),
  "Description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Beschreibung"])};fn.source="Beschreibung";return fn;})(),
  "Add": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hinzufügen"])};fn.source="Hinzufügen";return fn;})(),
  "Done": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fertig"])};fn.source="Fertig";return fn;})(),
  "Active": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aktiv"])};fn.source="Aktiv";return fn;})(),
  "Deactive": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Deaktiviert"])};fn.source="Deaktiviert";return fn;})(),
  "Online": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Online"])};fn.source="Online";return fn;})(),
  "Offline": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Offline"])};fn.source="Offline";return fn;})(),
  "Remove": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Entfernen"])};fn.source="Entfernen";return fn;})(),
  "Add a new comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Neuen Kommentar hinzufügen"])};fn.source="Neuen Kommentar hinzufügen";return fn;})(),
  "Type Your Comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Geben Sie Ihren Kommentar ein"])};fn.source="Geben Sie Ihren Kommentar ein";return fn;})(),
  "Comments": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bemerkungen"])};fn.source="Bemerkungen";return fn;})(),
  "Replies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Antworten"])};fn.source="Antworten";return fn;})(),
  "Comment Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kommentar erfolgreich"])};fn.source="Kommentar erfolgreich";return fn;})(),
  "Kurdish Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kurdische Namen"])};fn.source="Kurdische Namen";return fn;})(),
  "Search a name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Einen Namen suchen"])};fn.source="Einen Namen suchen";return fn;})(),
  "No results for ": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Keine Ergebnisse für"])};fn.source="Keine Ergebnisse für";return fn;})(),
  "Find a kurdish name for your baby": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Finden Sie einen kurdischen Namen für Ihr Baby"])};fn.source="Finden Sie einen kurdischen Namen für Ihr Baby";return fn;})(),
  "On the world's first & largest kurdish name platform": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Auf der weltweit ersten & größten kurdischen Namensplattform"])};fn.source="Auf der weltweit ersten & größten kurdischen Namensplattform";return fn;})(),
  "Explore": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Entdecken"])};fn.source="Entdecken";return fn;})(),
  "Suggest": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Empfehlen"])};fn.source="Empfehlen";return fn;})(),
  "You may love this name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Du magst diesen Namen vielleicht"])};fn.source="Du magst diesen Namen vielleicht";return fn;})(),
  "WHO SUGGESTED MOST NAMES": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["WER HAT DIE MEISTEN NAMEN VORGESCHLAGEN"])};fn.source="WER HAT DIE MEISTEN NAMEN VORGESCHLAGEN";return fn;})(),
  "Daily Kurdish Names for your Babies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tägliche kurdische Namen für Ihre Babys"])};fn.source="Tägliche kurdische Namen für Ihre Babys";return fn;})(),
  "Search a Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Einen Namen suchen"])};fn.source="Einen Namen suchen";return fn;})(),
  "Suggest A Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Schlagen Sie einen Namen vor"])};fn.source="Schlagen Sie einen Namen vor";return fn;})(),
  "Rankings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ranglisten"])};fn.source="Ranglisten";return fn;})(),
  "My Profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mein Profil"])};fn.source="Mein Profil";return fn;})(),
  "My Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Meine Vorschläge"])};fn.source="Meine Vorschläge";return fn;})(),
  "My Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Meine Favoriten"])};fn.source="Meine Favoriten";return fn;})(),
  "Suggest a Kurdish Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Schlagen Sie einen kurdischen Namen vor"])};fn.source="Schlagen Sie einen kurdischen Namen vor";return fn;})(),
  "Meaning": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bedeutung"])};fn.source="Bedeutung";return fn;})(),
  "Gender": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Geschlecht"])};fn.source="Geschlecht";return fn;})(),
  "Boy": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Junge"])};fn.source="Junge";return fn;})(),
  "Girl": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mädchen"])};fn.source="Mädchen";return fn;})(),
  "Girl Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mädchenname"])};fn.source="Mädchenname";return fn;})(),
  "Boy Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Jungenname"])};fn.source="Jungenname";return fn;})(),
  "Top Rated Users": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Benutzer mit den höchsten Bewertungen"])};fn.source="Benutzer mit den höchsten Bewertungen";return fn;})(),
  "100 users with the most name suggestions and their ratings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["100 Nutzer mit den meisten Namensvorschlägen und deren Bewertungen"])};fn.source="100 Nutzer mit den meisten Namensvorschlägen und deren Bewertungen";return fn;})(),
  "or sign up": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["oder melde dich an"])};fn.source="oder melde dich an";return fn;})(),
  "or sign in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["oder melde dich an"])};fn.source="oder melde dich an";return fn;})(),
  "Forgot Password?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Passwort vergessen?"])};fn.source="Passwort vergessen?";return fn;})(),
  "or login with email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["oder melden Sie sich mit E-Mail an"])};fn.source="oder melden Sie sich mit E-Mail an";return fn;})(),
  "Sign in with Google": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anmeldung mit Google"])};fn.source="Anmeldung mit Google";return fn;})(),
  "Name removed from favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name aus Favoriten entfernt"])};fn.source="Name aus Favoriten entfernt";return fn;})(),
  "Name added to favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name zu Favoriten hinzugefügt"])};fn.source="Name zu Favoriten hinzugefügt";return fn;})(),
  "Update Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Erfolgreich aktualisieren"])};fn.source="Erfolgreich aktualisieren";return fn;})(),
  "Change Image": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bild ändern"])};fn.source="Bild ändern";return fn;})(),
  "Image Uploaded": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bild hochgeladen"])};fn.source="Bild hochgeladen";return fn;})(),
  "Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Favoriten"])};fn.source="Favoriten";return fn;})(),
  "Account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Konto"])};fn.source="Konto";return fn;})(),
  "Change Banner": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Banner wechseln"])};fn.source="Banner wechseln";return fn;})(),
  "Accepted": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Akzeptiert"])};fn.source="Akzeptiert";return fn;})(),
  "Waiting": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Warten"])};fn.source="Warten";return fn;})(),
  "Rejected": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Abgelehnt"])};fn.source="Abgelehnt";return fn;})(),
  "Quick Links": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Schnelllinks"])};fn.source="Schnelllinks";return fn;})(),
  "Enter your email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Geben sie ihre E-Mail Adresse ein"])};fn.source="Geben sie ihre E-Mail Adresse ein";return fn;})(),
  "Subscribe": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Abonnieren"])};fn.source="Abonnieren";return fn;})(),
  "Subscribe Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Erfolgreich abonnieren"])};fn.source="Erfolgreich abonnieren";return fn;})(),
  "about_text": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kurdische Namenswebsite wurde 2021 erstellt. Zu diesem Zweck wurde sie auch erstellt:"])};fn.source="Kurdische Namenswebsite wurde 2021 erstellt. Zu diesem Zweck wurde sie auch erstellt:";return fn;})(),
  "Suggested Name Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vorgeschlagene Namensanzahl"])};fn.source="Vorgeschlagene Namensanzahl";return fn;})(),
  "Star Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sterneanzahl"])};fn.source="Sterneanzahl";return fn;})(),
  "Mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bedeuten"])};fn.source="Bedeuten";return fn;})(),
  "Status": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Status"])};fn.source="Status";return fn;})(),
  "Date": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Datum"])};fn.source="Datum";return fn;})(),
  "Action": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aktion"])};fn.source="Aktion";return fn;})(),
  "Accept": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Akzeptieren"])};fn.source="Akzeptieren";return fn;})(),
  "Reject": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ablehnen"])};fn.source="Ablehnen";return fn;})(),
  "Go Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nach Hause gehen"])};fn.source="Nach Hause gehen";return fn;})(),
  "Oops. This page has gone missing.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hoppla. Diese Seite ist verschwunden."])};fn.source="Hoppla. Diese Seite ist verschwunden.";return fn;})(),
  "You may have mistyped the address or the page may have moved.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Möglicherweise haben Sie sich bei der Adresse vertippt oder die Seite ist umgezogen."])};fn.source="Möglicherweise haben Sie sich bei der Adresse vertippt oder die Seite ist umgezogen.";return fn;})(),
  "Oops. You have no permission to see this page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hoppla. Sie haben keine Berechtigung, diese Seite zu sehen"])};fn.source="Hoppla. Sie haben keine Berechtigung, diese Seite zu sehen";return fn;})(),
  "Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anregungen"])};fn.source="Anregungen";return fn;})(),
  "Star given to name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Stern wird dem Namen gegeben"])};fn.source="Stern wird dem Namen gegeben";return fn;})(),
  "Star removed from Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Stern aus Name entfernt"])};fn.source="Stern aus Name entfernt";return fn;})(),
  "Add a name mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Einen Namen hinzufügen bedeutet"])};fn.source="Einen Namen hinzufügen bedeutet";return fn;})(),
  "This name what does it mean?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dieser Name, was bedeutet er?"])};fn.source="Dieser Name, was bedeutet er?";return fn;})(),
  "Mean Suggest Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bedeutet Erfolgreich vorschlagen"])};fn.source="Bedeutet Erfolgreich vorschlagen";return fn;})(),
  "Please type only current language!": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bitte nur aktuelle Sprache eingeben!"])};fn.source="Bitte nur aktuelle Sprache eingeben!";return fn;})(),
  "meta": {
    "home": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Auf der weltweit ersten & größten kurdischen Namensplattform - Kurdish Names"])};fn.source="Auf der weltweit ersten & größten kurdischen Namensplattform - Kurdish Names";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sie können unter Tausenden von kurdischen Namen den Namen wählen, der für Ihr Baby geeignet ist. Kurdischer Name Es werden Ihnen die am besten geeigneten Namen angezeigt"])};fn.source="Sie können unter Tausenden von kurdischen Namen den Namen wählen, der für Ihr Baby geeignet ist. Kurdischer Name Es werden Ihnen die am besten geeigneten Namen angezeigt";return fn;})()
    },
    "suggest": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sie können einen kurdischen Namen vorschlagen, wenn dieser im System nicht vorhanden ist - Kurdish Names"])};fn.source="Sie können einen kurdischen Namen vorschlagen, wenn dieser im System nicht vorhanden ist - Kurdish Names";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wenn du einen kurdischen Namen vorschlägst, wird dein Rang steigen"])};fn.source="Wenn du einen kurdischen Namen vorschlägst, wird dein Rang steigen";return fn;})()
    },
    "ranking": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wer hat die meisten kurdischen Namen für die Community vorgeschlagen - Kurdish Names"])};fn.source="Wer hat die meisten kurdischen Namen für die Community vorgeschlagen - Kurdish Names";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Die Benutzer, die die meisten kurdischen Namen für die Community vorgeschlagen haben, werden aufgelistet."])};fn.source="Die Benutzer, die die meisten kurdischen Namen für die Community vorgeschlagen haben, werden aufgelistet.";return fn;})()
    }
  },
  "Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Folgen"])};fn.source="Folgen";return fn;})(),
  "Un Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un Folgen"])};fn.source="Un Folgen";return fn;})(),
  "User Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Benutzer folgte"])};fn.source="Benutzer folgte";return fn;})(),
  "User Un Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Benutzer nicht gefolgt"])};fn.source="Benutzer nicht gefolgt";return fn;})(),
  "Chat": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chat"])};fn.source="Chat";return fn;})(),
  "Please log in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bitte loggen Sie sich ein"])};fn.source="Bitte loggen Sie sich ein";return fn;})(),
  "Followers": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anhänger"])};fn.source="Anhänger";return fn;})(),
  "Following": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Folge"])};fn.source="Folge";return fn;})(),
  "Start A Conversation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Eine Konversation beginnen"])};fn.source="Eine Konversation beginnen";return fn;})(),
  "Active Conversations": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aktive Gespräche"])};fn.source="Aktive Gespräche";return fn;})(),
  "Total Suggested Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Insgesamt vorgeschlagene Namen"])};fn.source="Insgesamt vorgeschlagene Namen";return fn;})(),
  "Total Stars": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gesamtzahl der Sterne"])};fn.source="Gesamtzahl der Sterne";return fn;})(),
  "Last Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nachname"])};fn.source="Nachname";return fn;})(),
  "User Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nutzername"])};fn.source="Nutzername";return fn;})(),
  "Email or Username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email or Username"])};fn.source="Email or Username";return fn;})()
};
}


// --------------------
// Request: /locales/en.json
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs ($id_4b699651)
// Dependencies: 

// --------------------
const $id_f04686dd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {
  "Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home"])};fn.source="Home";return fn;})(),
  "h1_text": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Restore, sharpen, and repair pictures with AI."])};fn.source="Restore, sharpen, and repair pictures with AI.";return fn;})(),
  "h2_text": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["On the latest research to automatically remove scratches, sharpen colors, and enhance faces, transforming damaged photos into cherished memories. Our free service repairs both color photos and black & white ones."])};fn.source="On the latest research to automatically remove scratches, sharpen colors, and enhance faces, transforming damaged photos into cherished memories. Our free service repairs both color photos and black & white ones.";return fn;})(),
  "Get Started": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Get Started"])};fn.source="Get Started";return fn;})(),
  "Text To Art": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Text To Art"])};fn.source="Text To Art";return fn;})(),
  "Restore Photo": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Restore Photo"])};fn.source="Restore Photo";return fn;})(),
  "Image Colorize": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Image Colorize"])};fn.source="Image Colorize";return fn;})(),
  "change-theme": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Change Theme"])};fn.source="Change Theme";return fn;})(),
  "Contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact"])};fn.source="Contact";return fn;})(),
  "Contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact"])};fn.source="Contact";return fn;})(),
  "Login Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Login Successfull"])};fn.source="Login Successfull";return fn;})(),
  "Logout Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Logout Successfull"])};fn.source="Logout Successfull";return fn;})(),
  "Contact Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact Page"])};fn.source="Contact Page";return fn;})(),
  "Home Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Home Page"])};fn.source="Home Page";return fn;})(),
  "Login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Login"])};fn.source="Login";return fn;})(),
  "Logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Logout"])};fn.source="Logout";return fn;})(),
  "Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name"])};fn.source="Name";return fn;})(),
  "Email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email"])};fn.source="Email";return fn;})(),
  "Password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Password"])};fn.source="Password";return fn;})(),
  "Phone": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Phone"])};fn.source="Phone";return fn;})(),
  "About Us": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["About Us"])};fn.source="About Us";return fn;})(),
  "Lorem Ipsum": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at "])};fn.source="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at ";return fn;})(),
  "Please enter credentials for login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Please enter credentials for login"])};fn.source="Please enter credentials for login";return fn;})(),
  "Contact Form": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact Form"])};fn.source="Contact Form";return fn;})(),
  "Send": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Send"])};fn.source="Send";return fn;})(),
  "Country": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Country"])};fn.source="Country";return fn;})(),
  "Description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Description"])};fn.source="Description";return fn;})(),
  "Add": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Add"])};fn.source="Add";return fn;})(),
  "Done": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Done"])};fn.source="Done";return fn;})(),
  "Active": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Active"])};fn.source="Active";return fn;})(),
  "Deactive": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Deactive"])};fn.source="Deactive";return fn;})(),
  "Online": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Online"])};fn.source="Online";return fn;})(),
  "Offline": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Offline"])};fn.source="Offline";return fn;})(),
  "Remove": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Remove"])};fn.source="Remove";return fn;})(),
  "Add a new comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Add a new comment"])};fn.source="Add a new comment";return fn;})(),
  "Type Your Comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Type Your Comment"])};fn.source="Type Your Comment";return fn;})(),
  "Comments": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Comments"])};fn.source="Comments";return fn;})(),
  "Replies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Replies"])};fn.source="Replies";return fn;})(),
  "Comment Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Comment Successfull"])};fn.source="Comment Successfull";return fn;})(),
  "Kurdish Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kurdish Names"])};fn.source="Kurdish Names";return fn;})(),
  "Search a name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Search a name"])};fn.source="Search a name";return fn;})(),
  "No results for ": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["No results for "])};fn.source="No results for ";return fn;})(),
  "Find a kurdish name for your baby": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Find a kurdish name for your baby"])};fn.source="Find a kurdish name for your baby";return fn;})(),
  "On the world's first & largest kurdish name platform": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["On the world's first & largest kurdish name platform"])};fn.source="On the world's first & largest kurdish name platform";return fn;})(),
  "Explore": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Explore"])};fn.source="Explore";return fn;})(),
  "Suggest": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggest"])};fn.source="Suggest";return fn;})(),
  "You may love this name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["You may love this name"])};fn.source="You may love this name";return fn;})(),
  "WHO SUGGESTED MOST NAMES": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["WHO SUGGESTED MOST NAMES"])};fn.source="WHO SUGGESTED MOST NAMES";return fn;})(),
  "Daily Kurdish Names for your Babies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Daily Kurdish Names for your Babies"])};fn.source="Daily Kurdish Names for your Babies";return fn;})(),
  "Search a Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Search a Name"])};fn.source="Search a Name";return fn;})(),
  "Suggest A Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggest A Name"])};fn.source="Suggest A Name";return fn;})(),
  "Rankings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rankings"])};fn.source="Rankings";return fn;})(),
  "My Profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["My Profile"])};fn.source="My Profile";return fn;})(),
  "My Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["My Suggestions"])};fn.source="My Suggestions";return fn;})(),
  "My Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["My Favorites"])};fn.source="My Favorites";return fn;})(),
  "Suggest a Kurdish Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggest a Kurdish Name"])};fn.source="Suggest a Kurdish Name";return fn;})(),
  "Meaning": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Meaning"])};fn.source="Meaning";return fn;})(),
  "Gender": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gender"])};fn.source="Gender";return fn;})(),
  "Boy": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Boy"])};fn.source="Boy";return fn;})(),
  "Girl": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Girl"])};fn.source="Girl";return fn;})(),
  "Girl Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Girl Name"])};fn.source="Girl Name";return fn;})(),
  "Boy Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Boy Name"])};fn.source="Boy Name";return fn;})(),
  "Top Rated Users": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Top Rated Users"])};fn.source="Top Rated Users";return fn;})(),
  "100 users with the most name suggestions and their ratings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["100 users with the most name suggestions and their ratings"])};fn.source="100 users with the most name suggestions and their ratings";return fn;})(),
  "or sign up": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["or sign up"])};fn.source="or sign up";return fn;})(),
  "or sign in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["or sign in"])};fn.source="or sign in";return fn;})(),
  "Forgot Password?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Forgot Password?"])};fn.source="Forgot Password?";return fn;})(),
  "or login with email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["or login with email"])};fn.source="or login with email";return fn;})(),
  "Sign in with Google": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sign in with Google"])};fn.source="Sign in with Google";return fn;})(),
  "Name removed from favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name removed from favorites"])};fn.source="Name removed from favorites";return fn;})(),
  "Name added to favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name added to favorites"])};fn.source="Name added to favorites";return fn;})(),
  "Update Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Update Succesfull"])};fn.source="Update Succesfull";return fn;})(),
  "Change Image": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Change Image"])};fn.source="Change Image";return fn;})(),
  "Image Uploaded": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Image Uploaded"])};fn.source="Image Uploaded";return fn;})(),
  "Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Favorites"])};fn.source="Favorites";return fn;})(),
  "Account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Account"])};fn.source="Account";return fn;})(),
  "Change Banner": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Change Banner"])};fn.source="Change Banner";return fn;})(),
  "Accepted": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepted"])};fn.source="Accepted";return fn;})(),
  "Waiting": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Waiting"])};fn.source="Waiting";return fn;})(),
  "Rejected": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rejected"])};fn.source="Rejected";return fn;})(),
  "Quick Links": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Quick Links"])};fn.source="Quick Links";return fn;})(),
  "Enter your email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Enter your email"])};fn.source="Enter your email";return fn;})(),
  "Subscribe": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Subscribe"])};fn.source="Subscribe";return fn;})(),
  "Subscribe Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Subscribe Succesfull"])};fn.source="Subscribe Succesfull";return fn;})(),
  "about_text": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kurdish Name website created in 2021. Also its been created for this purpose:"])};fn.source="Kurdish Name website created in 2021. Also its been created for this purpose:";return fn;})(),
  "Suggested Name Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggested Name Count"])};fn.source="Suggested Name Count";return fn;})(),
  "Star Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Star Count"])};fn.source="Star Count";return fn;})(),
  "Mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mean"])};fn.source="Mean";return fn;})(),
  "Status": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Status"])};fn.source="Status";return fn;})(),
  "Date": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Date"])};fn.source="Date";return fn;})(),
  "Action": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Action"])};fn.source="Action";return fn;})(),
  "Accept": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accept"])};fn.source="Accept";return fn;})(),
  "Reject": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Reject"])};fn.source="Reject";return fn;})(),
  "Go Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Go Home"])};fn.source="Go Home";return fn;})(),
  "Oops. This page has gone missing.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oops. This page has gone missing."])};fn.source="Oops. This page has gone missing.";return fn;})(),
  "You may have mistyped the address or the page may have moved.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["You may have mistyped the address or the page may have moved."])};fn.source="You may have mistyped the address or the page may have moved.";return fn;})(),
  "Oops. You have no permission to see this page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oops. You have no permission to see this page"])};fn.source="Oops. You have no permission to see this page";return fn;})(),
  "Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggestions"])};fn.source="Suggestions";return fn;})(),
  "Star given to name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Star given to name"])};fn.source="Star given to name";return fn;})(),
  "Star removed from Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Star removed from Name"])};fn.source="Star removed from Name";return fn;})(),
  "Add a name mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Add a name mean"])};fn.source="Add a name mean";return fn;})(),
  "This name what does it mean?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["What does it mean this name?"])};fn.source="What does it mean this name?";return fn;})(),
  "Mean Suggest Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mean Suggest Successfull"])};fn.source="Mean Suggest Successfull";return fn;})(),
  "Please type only current language!": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Please type only current language!"])};fn.source="Please type only current language!";return fn;})(),
  "meta": {
    "home": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["On the world's first & largest kurdish name platform - Kurdish Names"])};fn.source="On the world's first & largest kurdish name platform - Kurdish Names";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["You can choose the name that is suitable for your baby among thousands of Kurdish names. Kurdish name It will show you the most suitable names"])};fn.source="You can choose the name that is suitable for your baby among thousands of Kurdish names. Kurdish name It will show you the most suitable names";return fn;})()
    },
    "suggest": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["You can suggest a Kurdish name if there isn't exist in the system - Kurdish Names"])};fn.source="You can suggest a Kurdish name if there isn't exist in the system - Kurdish Names";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["when you suggest a kurdish name your rank will increase"])};fn.source="when you suggest a kurdish name your rank will increase";return fn;})()
    },
    "ranking": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Who suggested most Kurdish names in for the community - Kurdish Names"])};fn.source="Who suggested most Kurdish names in for the community - Kurdish Names";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["The users who suggested the most Kurdish names for the community are listed."])};fn.source="The users who suggested the most Kurdish names for the community are listed.";return fn;})()
    }
  },
  "Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Follow"])};fn.source="Follow";return fn;})(),
  "Un Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un Follow"])};fn.source="Un Follow";return fn;})(),
  "User Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User Followed"])};fn.source="User Followed";return fn;})(),
  "User Un Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User Un Followed"])};fn.source="User Un Followed";return fn;})(),
  "Chat": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chat"])};fn.source="Chat";return fn;})(),
  "Please log in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Please log in"])};fn.source="Please log in";return fn;})(),
  "Followers": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Followers"])};fn.source="Followers";return fn;})(),
  "Following": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Following"])};fn.source="Following";return fn;})(),
  "Start A Conversation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Start A Conversation"])};fn.source="Start A Conversation";return fn;})(),
  "Active Conversations": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Active Conversations"])};fn.source="Active Conversations";return fn;})(),
  "Total Suggested Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Total Suggested Names"])};fn.source="Total Suggested Names";return fn;})(),
  "Total Stars": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Total Stars"])};fn.source="Total Stars";return fn;})(),
  "Last Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Last Name"])};fn.source="Last Name";return fn;})(),
  "User Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["User Name"])};fn.source="User Name";return fn;})(),
  "Email or Username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email or Username"])};fn.source="Email or Username";return fn;})()
};
}


// --------------------
// Request: /locales/fr.json
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs ($id_4b699651)
// Dependencies: 

// --------------------
const $id_0fa04411 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {
  "Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accueil"])};fn.source="Accueil";return fn;})(),
  "Contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Contact"])};fn.source="Contact";return fn;})(),
  "Login Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connexion réussie"])};fn.source="Connexion réussie";return fn;})(),
  "Logout Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Déconnexion réussie"])};fn.source="Déconnexion réussie";return fn;})(),
  "Contact Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Page de contact"])};fn.source="Page de contact";return fn;})(),
  "Home Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Page d'accueil"])};fn.source="Page d'accueil";return fn;})(),
  "Login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connexion"])};fn.source="Connexion";return fn;})(),
  "Logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Se déconnecter"])};fn.source="Se déconnecter";return fn;})(),
  "Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom"])};fn.source="Nom";return fn;})(),
  "Email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["E-mail"])};fn.source="E-mail";return fn;})(),
  "Password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe"])};fn.source="Mot de passe";return fn;})(),
  "Phone": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Téléphoner"])};fn.source="Téléphoner";return fn;})(),
  "About Us": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["À propos de nous"])};fn.source="À propos de nous";return fn;})(),
  "Lorem Ipsum": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["La douleur elle-même est beaucoup de douleur, elle a été triste au fil des ans, mais il est temps d'envier la douleur et la douleur est excitante, c'était excitant, mais c'était compliqué. à"])};fn.source="La douleur elle-même est beaucoup de douleur, elle a été triste au fil des ans, mais il est temps d'envier la douleur et la douleur est excitante, c'était excitant, mais c'était compliqué. à";return fn;})(),
  "Please enter credentials for login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Veuillez saisir vos identifiants pour vous connecter"])};fn.source="Veuillez saisir vos identifiants pour vous connecter";return fn;})(),
  "Contact Form": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Formulaire de contact"])};fn.source="Formulaire de contact";return fn;})(),
  "Send": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Envoyer"])};fn.source="Envoyer";return fn;})(),
  "Country": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pays"])};fn.source="Pays";return fn;})(),
  "Description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["La description"])};fn.source="La description";return fn;})(),
  "Add": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ajouter"])};fn.source="Ajouter";return fn;})(),
  "Done": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fait"])};fn.source="Fait";return fn;})(),
  "Active": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["actif"])};fn.source="actif";return fn;})(),
  "Deactive": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Désactivé"])};fn.source="Désactivé";return fn;})(),
  "Online": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["En ligne"])};fn.source="En ligne";return fn;})(),
  "Offline": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hors ligne"])};fn.source="Hors ligne";return fn;})(),
  "Remove": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Supprimer"])};fn.source="Supprimer";return fn;})(),
  "Add a new comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ajouter un nouveau commentaire"])};fn.source="Ajouter un nouveau commentaire";return fn;})(),
  "Type Your Comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tapez votre commentaire"])};fn.source="Tapez votre commentaire";return fn;})(),
  "Comments": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["commentaires"])};fn.source="commentaires";return fn;})(),
  "Replies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["réponses"])};fn.source="réponses";return fn;})(),
  "Comment Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Commentaire réussi"])};fn.source="Commentaire réussi";return fn;})(),
  "Kurdish Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Noms kurdes"])};fn.source="Noms kurdes";return fn;})(),
  "Search a name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rechercher un nom"])};fn.source="Rechercher un nom";return fn;})(),
  "No results for ": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aucun résultat pour"])};fn.source="Aucun résultat pour";return fn;})(),
  "Find a kurdish name for your baby": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Trouvez un prénom kurde pour votre bébé"])};fn.source="Trouvez un prénom kurde pour votre bébé";return fn;})(),
  "On the world's first & largest kurdish name platform": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sur la première et la plus grande plateforme de noms kurdes au monde"])};fn.source="Sur la première et la plus grande plateforme de noms kurdes au monde";return fn;})(),
  "Explore": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Explorer"])};fn.source="Explorer";return fn;})(),
  "Suggest": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggérer"])};fn.source="Suggérer";return fn;})(),
  "You may love this name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous pouvez aimer ce nom"])};fn.source="Vous pouvez aimer ce nom";return fn;})(),
  "WHO SUGGESTED MOST NAMES": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["QUI A SUGGÉRÉ LA PLUPART DES NOMS"])};fn.source="QUI A SUGGÉRÉ LA PLUPART DES NOMS";return fn;})(),
  "Daily Kurdish Names for your Babies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Noms kurdes quotidiens pour vos bébés"])};fn.source="Noms kurdes quotidiens pour vos bébés";return fn;})(),
  "Search a Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rechercher un nom"])};fn.source="Rechercher un nom";return fn;})(),
  "Suggest A Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggérer un nom"])};fn.source="Suggérer un nom";return fn;})(),
  "Rankings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Classements"])};fn.source="Classements";return fn;})(),
  "My Profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mon profil"])};fn.source="Mon profil";return fn;})(),
  "My Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mes suggestions"])};fn.source="Mes suggestions";return fn;})(),
  "My Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mes favoris"])};fn.source="Mes favoris";return fn;})(),
  "Suggest a Kurdish Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggérer un nom kurde"])};fn.source="Suggérer un nom kurde";return fn;})(),
  "Meaning": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sens"])};fn.source="Sens";return fn;})(),
  "Gender": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Le genre"])};fn.source="Le genre";return fn;})(),
  "Boy": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Garçon"])};fn.source="Garçon";return fn;})(),
  "Girl": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fille"])};fn.source="Fille";return fn;})(),
  "Girl Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom de la fille"])};fn.source="Nom de la fille";return fn;})(),
  "Boy Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom du garçon"])};fn.source="Nom du garçon";return fn;})(),
  "Top Rated Users": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilisateurs les mieux notés"])};fn.source="Utilisateurs les mieux notés";return fn;})(),
  "100 users with the most name suggestions and their ratings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["100 utilisateurs avec le plus de suggestions de noms et leurs notes"])};fn.source="100 utilisateurs avec le plus de suggestions de noms et leurs notes";return fn;})(),
  "or sign up": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ou inscrivez-vous"])};fn.source="ou inscrivez-vous";return fn;})(),
  "or sign in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ou connectez-vous"])};fn.source="ou connectez-vous";return fn;})(),
  "Forgot Password?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mot de passe oublié?"])};fn.source="Mot de passe oublié?";return fn;})(),
  "or login with email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ou connectez-vous par e-mail"])};fn.source="ou connectez-vous par e-mail";return fn;})(),
  "Sign in with Google": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Connectez-vous avec Google"])};fn.source="Connectez-vous avec Google";return fn;})(),
  "Name removed from favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom supprimé des favoris"])};fn.source="Nom supprimé des favoris";return fn;})(),
  "Name added to favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom ajouté aux favoris"])};fn.source="Nom ajouté aux favoris";return fn;})(),
  "Update Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mise à jour réussie"])};fn.source="Mise à jour réussie";return fn;})(),
  "Change Image": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Changer l'image"])};fn.source="Changer l'image";return fn;})(),
  "Image Uploaded": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Image téléchargée"])};fn.source="Image téléchargée";return fn;})(),
  "Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Favoris"])};fn.source="Favoris";return fn;})(),
  "Account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Compte"])};fn.source="Compte";return fn;})(),
  "Change Banner": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Changer de bannière"])};fn.source="Changer de bannière";return fn;})(),
  "Accepted": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepté"])};fn.source="Accepté";return fn;})(),
  "Waiting": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["En attendant"])};fn.source="En attendant";return fn;})(),
  "Rejected": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rejeté"])};fn.source="Rejeté";return fn;})(),
  "Quick Links": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Liens rapides"])};fn.source="Liens rapides";return fn;})(),
  "Enter your email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Entrer votre Email"])};fn.source="Entrer votre Email";return fn;})(),
  "Subscribe": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["S'abonner"])};fn.source="S'abonner";return fn;})(),
  "Subscribe Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Inscription réussie"])};fn.source="Inscription réussie";return fn;})(),
  "about_text": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Site Web du nom kurde créé en 2021. Il a également été créé à cet effet :"])};fn.source="Site Web du nom kurde créé en 2021. Il a également été créé à cet effet :";return fn;})(),
  "Suggested Name Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nombre de noms suggérés"])};fn.source="Nombre de noms suggérés";return fn;})(),
  "Star Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nombre d'étoiles"])};fn.source="Nombre d'étoiles";return fn;})(),
  "Mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Moyenne"])};fn.source="Moyenne";return fn;})(),
  "Status": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Statut"])};fn.source="Statut";return fn;})(),
  "Date": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Date"])};fn.source="Date";return fn;})(),
  "Action": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["action"])};fn.source="action";return fn;})(),
  "Accept": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["J'accepte"])};fn.source="J'accepte";return fn;})(),
  "Reject": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rejeter"])};fn.source="Rejeter";return fn;})(),
  "Go Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rentrer chez soi"])};fn.source="Rentrer chez soi";return fn;})(),
  "Oops. This page has gone missing.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oups. Cette page a disparu."])};fn.source="Oups. Cette page a disparu.";return fn;})(),
  "You may have mistyped the address or the page may have moved.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous avez peut-être mal tapé l'adresse ou la page a peut-être bougé."])};fn.source="Vous avez peut-être mal tapé l'adresse ou la page a peut-être bougé.";return fn;})(),
  "Oops. You have no permission to see this page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oups. Vous n'avez pas la permission de voir cette page"])};fn.source="Oups. Vous n'avez pas la permission de voir cette page";return fn;})(),
  "Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suggestions"])};fn.source="Suggestions";return fn;})(),
  "Star given to name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Étoile donnée au nom"])};fn.source="Étoile donnée au nom";return fn;})(),
  "Star removed from Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Étoile supprimée du nom"])};fn.source="Étoile supprimée du nom";return fn;})(),
  "Add a name mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ajouter un nom signifie"])};fn.source="Ajouter un nom signifie";return fn;})(),
  "This name what does it mean?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ce nom qu'est-ce que ça veut dire ?"])};fn.source="Ce nom qu'est-ce que ça veut dire ?";return fn;})(),
  "Mean Suggest Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Moyenne Suggérer avec succès"])};fn.source="Moyenne Suggérer avec succès";return fn;})(),
  "Please type only current language!": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Veuillez saisir uniquement la langue actuelle !"])};fn.source="Veuillez saisir uniquement la langue actuelle !";return fn;})(),
  "meta": {
    "home": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sur la première et la plus grande plateforme de noms kurdes au monde - Noms kurdes "])};fn.source="Sur la première et la plus grande plateforme de noms kurdes au monde - Noms kurdes ";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous pouvez choisir le prénom qui convient à votre bébé parmi des milliers de prénoms kurdes. Nom kurde Il vous montrera les noms les plus appropriés"])};fn.source="Vous pouvez choisir le prénom qui convient à votre bébé parmi des milliers de prénoms kurdes. Nom kurde Il vous montrera les noms les plus appropriés";return fn;})()
    },
    "suggest": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous pouvez suggérer un nom kurde s'il n'en existe pas dans le système - Noms kurdes"])};fn.source="Vous pouvez suggérer un nom kurde s'il n'en existe pas dans le système - Noms kurdes";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lorsque vous suggérez un nom kurde, votre rang augmentera"])};fn.source="Lorsque vous suggérez un nom kurde, votre rang augmentera";return fn;})()
    },
    "ranking": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Qui a suggéré la plupart des noms kurdes pour la communauté - Noms kurdes"])};fn.source="Qui a suggéré la plupart des noms kurdes pour la communauté - Noms kurdes";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Les utilisateurs qui ont suggéré le plus de noms kurdes pour la communauté sont répertoriés."])};fn.source="Les utilisateurs qui ont suggéré le plus de noms kurdes pour la communauté sont répertoriés.";return fn;})()
    }
  },
  "Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suivre"])};fn.source="Suivre";return fn;})(),
  "Un Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un suivi"])};fn.source="Un suivi";return fn;})(),
  "User Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilisateur suivi"])};fn.source="Utilisateur suivi";return fn;})(),
  "User Un Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilisateur non suivi"])};fn.source="Utilisateur non suivi";return fn;})(),
  "Chat": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chat"])};fn.source="Chat";return fn;})(),
  "Please log in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Veuillez vous connecter"])};fn.source="Veuillez vous connecter";return fn;})(),
  "Followers": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suiveurs"])};fn.source="Suiveurs";return fn;})(),
  "Following": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suivant"])};fn.source="Suivant";return fn;})(),
  "Start A Conversation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Commencer une conversation"])};fn.source="Commencer une conversation";return fn;})(),
  "Active Conversations": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Conversations actives"])};fn.source="Conversations actives";return fn;})(),
  "Total Suggested Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nombre total de noms suggérés"])};fn.source="Nombre total de noms suggérés";return fn;})(),
  "Total Stars": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nombre total d'étoiles"])};fn.source="Nombre total d'étoiles";return fn;})(),
  "Last Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom de famille"])};fn.source="Nom de famille";return fn;})(),
  "User Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom d'utilisateur"])};fn.source="Nom d'utilisateur";return fn;})(),
  "Email or Username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email or Username"])};fn.source="Email or Username";return fn;})()
};
}


// --------------------
// Request: /locales/ku.json
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs ($id_4b699651)
// Dependencies: 

// --------------------
const $id_60c5a609 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {
  "Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Xane"])};fn.source="Xane";return fn;})(),
  "Contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Têkelî"])};fn.source="Têkelî";return fn;})(),
  "Login Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Têkeve Serkeftin"])};fn.source="Têkeve Serkeftin";return fn;})(),
  "Logout Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Derketin Serkeftî"])};fn.source="Derketin Serkeftî";return fn;})(),
  "Contact Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rûpelê Têkilî"])};fn.source="Rûpelê Têkilî";return fn;})(),
  "Home Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rûpela Malê"])};fn.source="Rûpela Malê";return fn;})(),
  "Login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Login"])};fn.source="Login";return fn;})(),
  "Logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Derkeve"])};fn.source="Derkeve";return fn;})(),
  "Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nav"])};fn.source="Nav";return fn;})(),
  "Email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email"])};fn.source="Email";return fn;})(),
  "Password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Şîfre"])};fn.source="Şîfre";return fn;})(),
  "Phone": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Telefon"])};fn.source="Telefon";return fn;})(),
  "About Us": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Der haqe me"])};fn.source="Der haqe me";return fn;})(),
  "Lorem Ipsum": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Êş bi xwe jî gelek êş e, bi salan e ku dişewite, lê dem e ku meriv ji êşê çavnebar bike û êş heyecan e, heyecan bû, lê tevlihev bû. ba"])};fn.source="Êş bi xwe jî gelek êş e, bi salan e ku dişewite, lê dem e ku meriv ji êşê çavnebar bike û êş heyecan e, heyecan bû, lê tevlihev bû. ba";return fn;})(),
  "Please enter credentials for login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ji kerema xwe ji bo têketinê pêbaweriyan binivîse"])};fn.source="Ji kerema xwe ji bo têketinê pêbaweriyan binivîse";return fn;})(),
  "Contact Form": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Forma Têkilî"])};fn.source="Forma Têkilî";return fn;})(),
  "Send": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Şandin"])};fn.source="Şandin";return fn;})(),
  "Country": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Welat"])};fn.source="Welat";return fn;})(),
  "Description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ravekirin"])};fn.source="Ravekirin";return fn;})(),
  "Add": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lêzêdekirin"])};fn.source="Lêzêdekirin";return fn;})(),
  "Done": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kirin"])};fn.source="Kirin";return fn;})(),
  "Active": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Jîr"])};fn.source="Jîr";return fn;})(),
  "Deactive": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Neçalak"])};fn.source="Neçalak";return fn;})(),
  "Online": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Online"])};fn.source="Online";return fn;})(),
  "Offline": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Offline"])};fn.source="Offline";return fn;})(),
  "Remove": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rakirin"])};fn.source="Rakirin";return fn;})(),
  "Add a new comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Şîroveye nû lê zêde bike"])};fn.source="Şîroveye nû lê zêde bike";return fn;})(),
  "Type Your Comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Şîroveya xwe binivîse"])};fn.source="Şîroveya xwe binivîse";return fn;})(),
  "Comments": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Şîrove"])};fn.source="Şîrove";return fn;})(),
  "Replies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tepisandin"])};fn.source="Tepisandin";return fn;})(),
  "Comment Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Şîrove Serkeftin"])};fn.source="Şîrove Serkeftin";return fn;})(),
  "Kurdish Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navên Kurdî"])};fn.source="Navên Kurdî";return fn;})(),
  "Search a name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navekî bigerin"])};fn.source="Navekî bigerin";return fn;})(),
  "No results for ": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tu encam ji bo"])};fn.source="Tu encam ji bo";return fn;})(),
  "Find a kurdish name for your baby": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ji zaroka xwe re navekî kurdî bibînin"])};fn.source="Ji zaroka xwe re navekî kurdî bibînin";return fn;})(),
  "On the world's first & largest kurdish name platform": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Li ser yekem û mezintirîn platforma navên kurdî ya cîhanê"])};fn.source="Li ser yekem û mezintirîn platforma navên kurdî ya cîhanê";return fn;})(),
  "Explore": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Keşf bike"])};fn.source="Keşf bike";return fn;})(),
  "Suggest": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pêşniyar bikin"])};fn.source="Pêşniyar bikin";return fn;})(),
  "You may love this name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hûn dikarin ji vî navî hez bikin"])};fn.source="Hûn dikarin ji vî navî hez bikin";return fn;})(),
  "WHO SUGGESTED MOST NAMES": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["KÊ PIRÎ NAV PÊŞNÎŞANDIN"])};fn.source="KÊ PIRÎ NAV PÊŞNÎŞANDIN";return fn;})(),
  "Daily Kurdish Names for your Babies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navên Kurdî yên Rojane Ji bo Zarokên We"])};fn.source="Navên Kurdî yên Rojane Ji bo Zarokên We";return fn;})(),
  "Search a Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Li Navekî Bigerin"])};fn.source="Li Navekî Bigerin";return fn;})(),
  "Suggest A Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navekî pêşniyar bikin"])};fn.source="Navekî pêşniyar bikin";return fn;})(),
  "Rankings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rêzkirin"])};fn.source="Rêzkirin";return fn;})(),
  "My Profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Profîla min"])};fn.source="Profîla min";return fn;})(),
  "My Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pêşniyarên min"])};fn.source="Pêşniyarên min";return fn;})(),
  "My Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dilxwazî ya min"])};fn.source="Dilxwazî ya min";return fn;})(),
  "Suggest a Kurdish Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pêşniyara Navekî Kurdî bikin"])};fn.source="Pêşniyara Navekî Kurdî bikin";return fn;})(),
  "Meaning": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mane"])};fn.source="Mane";return fn;})(),
  "Gender": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zayendî"])};fn.source="Zayendî";return fn;})(),
  "Boy": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Xort"])};fn.source="Xort";return fn;})(),
  "Girl": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Keç"])};fn.source="Keç";return fn;})(),
  "Girl Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navê keçikê"])};fn.source="Navê keçikê";return fn;})(),
  "Boy Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navê Kurê"])};fn.source="Navê Kurê";return fn;})(),
  "Top Rated Users": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bikarhênerên Top Rated"])};fn.source="Bikarhênerên Top Rated";return fn;})(),
  "100 users with the most name suggestions and their ratings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["100 bikarhênerên ku herî zêde pêşniyarên nav û nirxandinên wan hene"])};fn.source="100 bikarhênerên ku herî zêde pêşniyarên nav û nirxandinên wan hene";return fn;})(),
  "or sign up": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["an qeyd bikin"])};fn.source="an qeyd bikin";return fn;})(),
  "or sign in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["an jî têkevinê"])};fn.source="an jî têkevinê";return fn;})(),
  "Forgot Password?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Şîfre ji bîr kir?"])};fn.source="Şîfre ji bîr kir?";return fn;})(),
  "or login with email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["an jî bi e-nameyê têketinê"])};fn.source="an jî bi e-nameyê têketinê";return fn;})(),
  "Sign in with Google": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bi Google re têkevin"])};fn.source="Bi Google re têkevin";return fn;})(),
  "Name removed from favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nav ji dilxwaziyan hat derxistin"])};fn.source="Nav ji dilxwaziyan hat derxistin";return fn;})(),
  "Name added to favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nav li dilxwaziyan hat zêdekirin"])};fn.source="Nav li dilxwaziyan hat zêdekirin";return fn;})(),
  "Update Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nûvekirina Serkeftî"])};fn.source="Nûvekirina Serkeftî";return fn;})(),
  "Change Image": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wêne biguherînin"])};fn.source="Wêne biguherînin";return fn;})(),
  "Image Uploaded": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wêne hat barkirin"])};fn.source="Wêne hat barkirin";return fn;})(),
  "Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dilxwazi"])};fn.source="Dilxwazi";return fn;})(),
  "Account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hesab"])};fn.source="Hesab";return fn;})(),
  "Change Banner": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Change Banner"])};fn.source="Change Banner";return fn;})(),
  "Accepted": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Qebûl kirin"])};fn.source="Qebûl kirin";return fn;})(),
  "Waiting": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Li benda"])};fn.source="Li benda";return fn;})(),
  "Rejected": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Redkirin"])};fn.source="Redkirin";return fn;})(),
  "Quick Links": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Girêdanên Zû"])};fn.source="Girêdanên Zû";return fn;})(),
  "Enter your email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["E-nameya xwe binivîse"])};fn.source="E-nameya xwe binivîse";return fn;})(),
  "Subscribe": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Subscribe"])};fn.source="Subscribe";return fn;})(),
  "Subscribe Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aboneyê Serkeftî"])};fn.source="Aboneyê Serkeftî";return fn;})(),
  "about_text": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Malpera Navê Kurdî di sala 2021an de hatiye çêkirin û ji bo vê jî hatiye çêkirin:"])};fn.source="Malpera Navê Kurdî di sala 2021an de hatiye çêkirin û ji bo vê jî hatiye çêkirin:";return fn;})(),
  "Suggested Name Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hejmara Navên Pêşniyarkirî"])};fn.source="Hejmara Navên Pêşniyarkirî";return fn;})(),
  "Star Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Star Count"])};fn.source="Star Count";return fn;})(),
  "Mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dilxerab"])};fn.source="Dilxerab";return fn;})(),
  "Status": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cî"])};fn.source="Cî";return fn;})(),
  "Date": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rojek"])};fn.source="Rojek";return fn;})(),
  "Action": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çalakî"])};fn.source="Çalakî";return fn;})(),
  "Accept": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Baweranîn"])};fn.source="Baweranîn";return fn;})(),
  "Reject": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Refzkirin"])};fn.source="Refzkirin";return fn;})(),
  "Go Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Here malê"])};fn.source="Here malê";return fn;})(),
  "Oops. This page has gone missing.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oops. Ev rûpel winda bûye."])};fn.source="Oops. Ev rûpel winda bûye.";return fn;})(),
  "You may have mistyped the address or the page may have moved.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dibe ku we navnîşan bi xeletî nivîsandibe an jî rûpel were bar kirin."])};fn.source="Dibe ku we navnîşan bi xeletî nivîsandibe an jî rûpel were bar kirin.";return fn;})(),
  "Oops. You have no permission to see this page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Oops. Destûra we tune ku hûn vê rûpelê bibînin"])};fn.source="Oops. Destûra we tune ku hûn vê rûpelê bibînin";return fn;})(),
  "Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pêşniyarên"])};fn.source="Pêşniyarên";return fn;})(),
  "Star given to name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Stêrk bi navê"])};fn.source="Stêrk bi navê";return fn;})(),
  "Star removed from Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Stêrk ji Navê hate rakirin"])};fn.source="Stêrk ji Navê hate rakirin";return fn;})(),
  "Add a name mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wateya navekî zêde bikin"])};fn.source="Wateya navekî zêde bikin";return fn;})(),
  "This name what does it mean?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ev nav tê çi wateyê?"])};fn.source="Ev nav tê çi wateyê?";return fn;})(),
  "Mean Suggest Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wateya Pêşniyara Serkeftî"])};fn.source="Wateya Pêşniyara Serkeftî";return fn;})(),
  "Please type only current language!": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ji kerema xwe tenê zimanê heyî binivîse!"])};fn.source="Ji kerema xwe tenê zimanê heyî binivîse!";return fn;})(),
  "meta": {
    "home": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Li ser yekem û mezintirîn platforma navên kurdî ya cîhanê - Navên Kurdî"])};fn.source="Li ser yekem û mezintirîn platforma navên kurdî ya cîhanê - Navên Kurdî";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hûn dikarin di nav bi hezaran navên kurdî de navekî ku ji bo zaroka xwe gunca be hilbijêrin. Navê Kurdî Ew ê navên herî guncaw nîşanî we bide"])};fn.source="Hûn dikarin di nav bi hezaran navên kurdî de navekî ku ji bo zaroka xwe gunca be hilbijêrin. Navê Kurdî Ew ê navên herî guncaw nîşanî we bide";return fn;})()
    },
    "suggest": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Heger di sîstemê de tune be hûn dikarin navekî kurdî pêşniyar bikin - Navên Kurdî"])};fn.source="Heger di sîstemê de tune be hûn dikarin navekî kurdî pêşniyar bikin - Navên Kurdî";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dema ku hûn navekî kurdî pêşniyar bikin dê pileya we zêde bibe"])};fn.source="Dema ku hûn navekî kurdî pêşniyar bikin dê pileya we zêde bibe";return fn;})()
    },
    "ranking": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kê piraniya navên kurdî ji bo civakê pêşniyar kiriye - Navên kurdî"])};fn.source="Kê piraniya navên kurdî ji bo civakê pêşniyar kiriye - Navên kurdî";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bikarhênerên ku herî zêde navên kurdî ji civakê re pêşniyar kirine hatine rêzkirin."])};fn.source="Bikarhênerên ku herî zêde navên kurdî ji civakê re pêşniyar kirine hatine rêzkirin.";return fn;})()
    }
  },
  "Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pêketin"])};fn.source="Pêketin";return fn;})(),
  "Un Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Un Follow"])};fn.source="Un Follow";return fn;})(),
  "User Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bikarhêner şopandin"])};fn.source="Bikarhêner şopandin";return fn;})(),
  "User Un Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bikarhêner Un Followed"])};fn.source="Bikarhêner Un Followed";return fn;})(),
  "Please log in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ji kerema xwe têkevinê"])};fn.source="Ji kerema xwe têkevinê";return fn;})(),
  "Chat": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chat"])};fn.source="Chat";return fn;})(),
  "Followers": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Followers"])};fn.source="Followers";return fn;})(),
  "Following": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pêketînî"])};fn.source="Pêketînî";return fn;})(),
  "Start A Conversation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Danûstandinek dest pê bikin"])};fn.source="Danûstandinek dest pê bikin";return fn;})(),
  "Active Conversations": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gotûbêjên Çalak"])};fn.source="Gotûbêjên Çalak";return fn;})(),
  "Total Suggested Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tevahiya Navên Pêşniyarkirî"])};fn.source="Tevahiya Navên Pêşniyarkirî";return fn;})(),
  "Total Stars": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Total Stars"])};fn.source="Total Stars";return fn;})(),
  "Last Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Paşnav"])};fn.source="Paşnav";return fn;})(),
  "User Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navê bikarhêner"])};fn.source="Navê bikarhêner";return fn;})(),
  "Email or Username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Email yan Navê bikarhêner"])};fn.source="Email yan Navê bikarhêner";return fn;})()
};
}


// --------------------
// Request: /locales/tr.json
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs ($id_4b699651)
// Dependencies: 

// --------------------
const $id_7b4ae5b9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {
  "Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anasayfa"])};fn.source="Anasayfa";return fn;})(),
  "Contact": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İletişim"])};fn.source="İletişim";return fn;})(),
  "Login Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giriş Başarılı"])};fn.source="Giriş Başarılı";return fn;})(),
  "Logout Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çıkış Başarılı"])};fn.source="Çıkış Başarılı";return fn;})(),
  "Contact Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İletişim sayfası"])};fn.source="İletişim sayfası";return fn;})(),
  "Home Page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ana Sayfa"])};fn.source="Ana Sayfa";return fn;})(),
  "Login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Giriş yapmak"])};fn.source="Giriş yapmak";return fn;})(),
  "Logout": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çıkış Yap"])};fn.source="Çıkış Yap";return fn;})(),
  "Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsim"])};fn.source="İsim";return fn;})(),
  "Email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["E-posta"])};fn.source="E-posta";return fn;})(),
  "Password": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parola"])};fn.source="Parola";return fn;})(),
  "Phone": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Telefon"])};fn.source="Telefon";return fn;})(),
  "About Us": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hakkımızda"])};fn.source="Hakkımızda";return fn;})(),
  "Lorem Ipsum": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acının kendisi çok acıdır, yıllardır üzdü ama acıyı kıskanmanın zamanı geldi ve acı heyecan verici, heyecan vericiydi ama karmaşıktı. de"])};fn.source="Acının kendisi çok acıdır, yıllardır üzdü ama acıyı kıskanmanın zamanı geldi ve acı heyecan verici, heyecan vericiydi ama karmaşıktı. de";return fn;})(),
  "Please enter credentials for login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lütfen oturum açmak için oturum bilgilerini girin"])};fn.source="Lütfen oturum açmak için oturum bilgilerini girin";return fn;})(),
  "Contact Form": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İletişim Formu"])};fn.source="İletişim Formu";return fn;})(),
  "Send": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gönder"])};fn.source="Gönder";return fn;})(),
  "Country": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ülke"])};fn.source="Ülke";return fn;})(),
  "Description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Açıklama"])};fn.source="Açıklama";return fn;})(),
  "Add": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ekle"])};fn.source="Ekle";return fn;})(),
  "Done": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tamamlandı"])};fn.source="Tamamlandı";return fn;})(),
  "Active": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aktif"])};fn.source="Aktif";return fn;})(),
  "Deactive": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Devre dışı"])};fn.source="Devre dışı";return fn;})(),
  "Online": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çevrimiçi"])};fn.source="Çevrimiçi";return fn;})(),
  "Offline": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çevrimdışı"])};fn.source="Çevrimdışı";return fn;})(),
  "Remove": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kaldır"])};fn.source="Kaldır";return fn;})(),
  "Add a new comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yeni bir yorum ekle"])};fn.source="Yeni bir yorum ekle";return fn;})(),
  "Type Your Comment": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yorumunuzu Yazın"])};fn.source="Yorumunuzu Yazın";return fn;})(),
  "Comments": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yorumlar"])};fn.source="Yorumlar";return fn;})(),
  "Replies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cevaplar"])};fn.source="Cevaplar";return fn;})(),
  "Comment Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yorum Başarılı"])};fn.source="Yorum Başarılı";return fn;})(),
  "Kurdish Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kürtçe İsimler"])};fn.source="Kürtçe İsimler";return fn;})(),
  "Search a name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsim ara"])};fn.source="İsim ara";return fn;})(),
  "No results for ": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bunun için sonuç yok: "])};fn.source="Bunun için sonuç yok: ";return fn;})(),
  "Find a kurdish name for your baby": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bebeğinize Kürtçe bir isim bulun"])};fn.source="Bebeğinize Kürtçe bir isim bulun";return fn;})(),
  "On the world's first & largest kurdish name platform": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dünyanın ilk ve en büyük kürt isim platformu"])};fn.source="Dünyanın ilk ve en büyük kürt isim platformu";return fn;})(),
  "Explore": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Keşfet"])};fn.source="Keşfet";return fn;})(),
  "Suggest": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Öner"])};fn.source="Öner";return fn;})(),
  "You may love this name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bu ismi sevebilirsin"])};fn.source="Bu ismi sevebilirsin";return fn;})(),
  "WHO SUGGESTED MOST NAMES": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["EN ÇOK İSİM ÖNERENLER"])};fn.source="EN ÇOK İSİM ÖNERENLER";return fn;})(),
  "Daily Kurdish Names for your Babies": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bebekleriniz İçin Günlük Kürtçe İsimler"])};fn.source="Bebekleriniz İçin Günlük Kürtçe İsimler";return fn;})(),
  "Search a Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsim Ara"])};fn.source="İsim Ara";return fn;})(),
  "Suggest A Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsim Öner"])};fn.source="İsim Öner";return fn;})(),
  "Rankings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sıralamalar"])};fn.source="Sıralamalar";return fn;})(),
  "My Profile": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Benim profilim"])};fn.source="Benim profilim";return fn;})(),
  "My Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Benim önerilerim"])};fn.source="Benim önerilerim";return fn;})(),
  "My Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Favorilerim"])};fn.source="Favorilerim";return fn;})(),
  "Suggest a Kurdish Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kürtçe İsim Öner"])};fn.source="Kürtçe İsim Öner";return fn;})(),
  "Meaning": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anlam"])};fn.source="Anlam";return fn;})(),
  "Gender": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cinsiyet"])};fn.source="Cinsiyet";return fn;})(),
  "Boy": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Erkek"])};fn.source="Erkek";return fn;})(),
  "Girl": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kız"])};fn.source="Kız";return fn;})(),
  "Girl Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kız Adı"])};fn.source="Kız Adı";return fn;})(),
  "Boy Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Erkek adı"])};fn.source="Erkek adı";return fn;})(),
  "Top Rated Users": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["En Çok Oy Alan Kullanıcılar"])};fn.source="En Çok Oy Alan Kullanıcılar";return fn;})(),
  "100 users with the most name suggestions and their ratings": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["En çok isim öneren 100 kullanıcı ve puanları"])};fn.source="En çok isim öneren 100 kullanıcı ve puanları";return fn;})(),
  "or sign up": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["veya kaydol"])};fn.source="veya kaydol";return fn;})(),
  "or sign in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["veya giriş yap"])};fn.source="veya giriş yap";return fn;})(),
  "Forgot Password?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parolanızı mı unuttunuz?"])};fn.source="Parolanızı mı unuttunuz?";return fn;})(),
  "or login with email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["veya e-posta ile giriş yapın"])};fn.source="veya e-posta ile giriş yapın";return fn;})(),
  "Sign in with Google": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Google ile giriş yap"])};fn.source="Google ile giriş yap";return fn;})(),
  "Name removed from favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsim favorilerden kaldırıldı"])};fn.source="İsim favorilerden kaldırıldı";return fn;})(),
  "Name added to favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsim favorilere eklendi"])};fn.source="İsim favorilere eklendi";return fn;})(),
  "Update Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Güncelleme Başarılı"])};fn.source="Güncelleme Başarılı";return fn;})(),
  "Change Image": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Resmi değiştir"])};fn.source="Resmi değiştir";return fn;})(),
  "Image Uploaded": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Resim Yüklendi"])};fn.source="Resim Yüklendi";return fn;})(),
  "Favorites": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Favoriler"])};fn.source="Favoriler";return fn;})(),
  "Account": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hesap"])};fn.source="Hesap";return fn;})(),
  "Change Banner": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Banner'i Değiştir"])};fn.source="Banner'i Değiştir";return fn;})(),
  "Accepted": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kabul edildi"])};fn.source="Kabul edildi";return fn;})(),
  "Waiting": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bekliyor"])};fn.source="Bekliyor";return fn;})(),
  "Rejected": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Reddedildi"])};fn.source="Reddedildi";return fn;})(),
  "Quick Links": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hızlı Linkler"])};fn.source="Hızlı Linkler";return fn;})(),
  "Enter your email": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["E-postanızı giriniz"])};fn.source="E-postanızı giriniz";return fn;})(),
  "Subscribe": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Abone"])};fn.source="Abone";return fn;})(),
  "Subscribe Succesfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Abone Olma Başarılı"])};fn.source="Abone Olma Başarılı";return fn;})(),
  "about_text": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kürtçe isimler web sitesi 2021 yılında oluşturulmuştur. Ayrıca bu amaçla oluşturulmuştur:"])};fn.source="Kürtçe isimler web sitesi 2021 yılında oluşturulmuştur. Ayrıca bu amaçla oluşturulmuştur:";return fn;})(),
  "Suggested Name Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Önerilen Ad Sayısı"])};fn.source="Önerilen Ad Sayısı";return fn;})(),
  "Star Count": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yıldız Sayısı"])};fn.source="Yıldız Sayısı";return fn;})(),
  "Mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anlam"])};fn.source="Anlam";return fn;})(),
  "Status": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Durum"])};fn.source="Durum";return fn;})(),
  "Date": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tarih"])};fn.source="Tarih";return fn;})(),
  "Action": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Eylem"])};fn.source="Eylem";return fn;})(),
  "Accept": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kabul"])};fn.source="Kabul";return fn;})(),
  "Reject": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ret"])};fn.source="Ret";return fn;})(),
  "Go Home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anasayfaya git"])};fn.source="Anasayfaya git";return fn;})(),
  "Oops. This page has gone missing.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hata. Bu sayfa kayboldu."])};fn.source="Hata. Bu sayfa kayboldu.";return fn;})(),
  "You may have mistyped the address or the page may have moved.": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Adresi yanlış yazmış olabilirsiniz veya sayfa taşınmış olabilir."])};fn.source="Adresi yanlış yazmış olabilirsiniz veya sayfa taşınmış olabilir.";return fn;})(),
  "Oops. You have no permission to see this page": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hata. Bu sayfayı görme izniniz yok"])};fn.source="Hata. Bu sayfayı görme izniniz yok";return fn;})(),
  "Suggestions": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Öneriler"])};fn.source="Öneriler";return fn;})(),
  "Star given to name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsme yıldız verildi"])};fn.source="İsme yıldız verildi";return fn;})(),
  "Star removed from Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsimden yıldız kaldırıldı"])};fn.source="İsimden yıldız kaldırıldı";return fn;})(),
  "Add a name mean": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bir anlam ekleyin "])};fn.source="Bir anlam ekleyin ";return fn;})(),
  "This name what does it mean?": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bu isim ne anlama geliyor?"])};fn.source="Bu isim ne anlama geliyor?";return fn;})(),
  "Mean Suggest Successfull": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Öneri Başarılı"])};fn.source="Öneri Başarılı";return fn;})(),
  "Please type only current language!": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lütfen yalnızca geçerli dili yazın!"])};fn.source="Lütfen yalnızca geçerli dili yazın!";return fn;})(),
  "meta": {
    "home": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dünyanın ilk ve en büyük Kürtçe isim platformu - Kürtçe İsimler"])};fn.source="Dünyanın ilk ve en büyük Kürtçe isim platformu - Kürtçe İsimler";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Binlerce Kürtçe isim arasından bebeğinize uygun olan ismi seçebilirsiniz. Kürtçe isim Size en uygun isimleri gösterecektir."])};fn.source="Binlerce Kürtçe isim arasından bebeğinize uygun olan ismi seçebilirsiniz. Kürtçe isim Size en uygun isimleri gösterecektir.";return fn;})()
    },
    "suggest": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sistemde yoksa Kürtçe isim önerebilirsiniz - Kürtçe İsimler"])};fn.source="Sistemde yoksa Kürtçe isim önerebilirsiniz - Kürtçe İsimler";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kürtçe bir isim önerdiğinde rütben yükselir"])};fn.source="Kürtçe bir isim önerdiğinde rütben yükselir";return fn;})()
    },
    "ranking": {
      "title": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Topluluk için en çok Kürtçe isimler önerenler - Kürtçe İsimler"])};fn.source="Topluluk için en çok Kürtçe isimler önerenler - Kürtçe İsimler";return fn;})(),
      "description": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Topluluğa en çok Kürtçe isim öneren kullanıcılar listelenmiştir."])};fn.source="Topluluğa en çok Kürtçe isim öneren kullanıcılar listelenmiştir.";return fn;})()
    }
  },
  "Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Takip et"])};fn.source="Takip et";return fn;})(),
  "Un Follow": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Takipten Çık"])};fn.source="Takipten Çık";return fn;})(),
  "User Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kullanıcı Takip Edildi"])};fn.source="Kullanıcı Takip Edildi";return fn;})(),
  "User Un Followed": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kullanıcı Takipten Çıktı"])};fn.source="Kullanıcı Takipten Çıktı";return fn;})(),
  "Chat": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Chat"])};fn.source="Chat";return fn;})(),
  "Please log in": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lütfen giriş yapın"])};fn.source="Lütfen giriş yapın";return fn;})(),
  "Followers": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Takipçiler"])};fn.source="Takipçiler";return fn;})(),
  "Following": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Takip Ettikleri"])};fn.source="Takip Ettikleri";return fn;})(),
  "Start A Conversation": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Konuşma Başlat"])};fn.source="Konuşma Başlat";return fn;})(),
  "Active Conversations": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aktif Konuşmalar"])};fn.source="Aktif Konuşmalar";return fn;})(),
  "Total Suggested Names": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Toplam Önerilen İsimler"])};fn.source="Toplam Önerilen İsimler";return fn;})(),
  "Total Stars": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Toplam Yıldız"])};fn.source="Toplam Yıldız";return fn;})(),
  "Last Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Soyadı"])};fn.source="Soyadı";return fn;})(),
  "User Name": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kullanıcı adı"])};fn.source="Kullanıcı adı";return fn;})(),
  "Email or Username": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["E-posta veya kullanıcı adı"])};fn.source="E-posta veya kullanıcı adı";return fn;})()
};
}


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/dist.plugin.3140050b.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/compat/vue-demi.mjs ($id_132eda61)
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_90abdda2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


if (__vite_ssr_import_1__.isVue2) {
  __vite_ssr_import_1__.install();
  const Vue = "default" in __vite_ssr_import_1__.Vue2 ? __vite_ssr_import_1__.Vue2.default : __vite_ssr_import_1__.Vue2;
  Vue.use(__vite_ssr_import_2__.PiniaVuePlugin);
}
const PiniaNuxtPlugin = (context, inject) => {
  const pinia = __vite_ssr_import_2__.createPinia();
  if (__vite_ssr_import_1__.isVue2) {
    context.app.pinia = pinia;
  } else {
    context.vueApp.use(pinia);
  }
  inject("pinia", pinia);
  context.pinia = pinia;
  __vite_ssr_import_2__.setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  if (true) {
    if (__vite_ssr_import_1__.isVue2) {
      context.beforeNuxtRender(({ nuxtState }) => {
        nuxtState.pinia = pinia.state.value;
      });
    } else {
      context.nuxtState.pinia = pinia.state.value;
    }
  } else if (context.nuxtState && context.nuxtState.pinia) {
    pinia.state.value = context.nuxtState.pinia;
  }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return PiniaNuxtPlugin }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/dist.plugin.3140050b.mjs ($id_90abdda2)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/compat/capi.mjs ($id_7674cc72)
// --------------------
const $id_132eda61 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/vue-demi.mjs ($id_132eda61)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_7674cc72 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/pinia/dist/pinia.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/dist.plugin.3140050b.mjs ($id_90abdda2)
// Dependencies: 

// --------------------
const $id_b1920624 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/pinia/dist/pinia.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/pinia/dist/pinia.mjs".') })


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/ohmyfetch/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/ohmyfetch/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugins/server.mjs ($id_c47e9a19)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/DaisyuiThemeSwitcher.vue ($id_3cb4fa0f)
// - /components/MemoryUsageDemo.vue ($id_21bfb2dd)
// - /components/ReloadPrompt.vue ($id_9bae4834)
// - /components/common/Breadcrumb.vue ($id_20f1319f)
// - /components/common/Footer.vue ($id_f219ac30)
// - /components/common/Header.vue ($id_719597ef)
// - /components/common/Imageoverlay.vue ($id_c8c6332a)
// - /components/common/Mobilebottommenu.vue ($id_fdae4b56)
// - /components/header/HeaderMain.vue ($id_baa49f01)
// - /components/header/HeaderResponsiveMenu.vue ($id_5667496c)
// - /components/icon/home.vue ($id_3385f772)
// - /components/loading/Art.vue ($id_ea681d2c)
// - /components/loading/Name.vue ($id_ef189e84)
// - /components/loading/Restorephoto.vue ($id_965bb096)
// - /components/loading/Text.vue ($id_fb5a8295)
// - /components/loading/skeleton-on-load-comment-card.vue ($id_b1d562b7)
// - /components/loading/skeleton-on-load-comments-card.vue ($id_a4a3622a)
// - /components/loading/skeleton-on-load-user-card.vue ($id_5d021a54)
// - /components/common/header/Megamenu.vue ($id_1c9023c9)
// - /components/common/header/Search.vue ($id_1925ac63)
// --------------------
const $id_c0614bb5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  'DaisyuiThemeSwitcher': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/DaisyuiThemeSwitcher.vue').then(c => c.default || c)),
  'MemoryUsageDemo': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/MemoryUsageDemo.vue').then(c => c.default || c)),
  'ReloadPrompt': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/ReloadPrompt.vue').then(c => c.default || c)),
  'CommonBreadcrumb': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/common/Breadcrumb.vue').then(c => c.default || c)),
  'CommonFooter': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/common/Footer.vue').then(c => c.default || c)),
  'CommonHeader': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/common/Header.vue').then(c => c.default || c)),
  'CommonImageoverlay': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/common/Imageoverlay.vue').then(c => c.default || c)),
  'CommonMobilebottommenu': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/common/Mobilebottommenu.vue').then(c => c.default || c)),
  'HeaderMain': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/header/HeaderMain.vue').then(c => c.default || c)),
  'HeaderResponsiveMenu': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/header/HeaderResponsiveMenu.vue').then(c => c.default || c)),
  'IconHome': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/icon/home.vue').then(c => c.default || c)),
  'LoadingArt': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading/Art.vue').then(c => c.default || c)),
  'LoadingName': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading/Name.vue').then(c => c.default || c)),
  'LoadingRestorephoto': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading/Restorephoto.vue').then(c => c.default || c)),
  'LoadingText': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading/Text.vue').then(c => c.default || c)),
  'LoadingSkeletonOnLoadCommentCard': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading/skeleton-on-load-comment-card.vue').then(c => c.default || c)),
  'LoadingSkeletonOnLoadCommentsCard': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading/skeleton-on-load-comments-card.vue').then(c => c.default || c)),
  'LoadingSkeletonOnLoadUserCard': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/loading/skeleton-on-load-user-card.vue').then(c => c.default || c)),
  'CommonHeaderMegamenu': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/common/header/Megamenu.vue').then(c => c.default || c)),
  'CommonHeaderSearch': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/common/header/Search.vue').then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /components/MemoryUsageDemo.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vueuse/core/index.mjs ($id_e8934cdc)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_21bfb2dd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vueuse/core/index.mjs");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const size = (v) => {
      const kb = v / 1024 / 1024;
      return `${kb.toFixed(2)} MB`;
    };
    const { isSupported, memory } = __vite_ssr_import_2__.useMemory();
    const __returned__ = { size, isSupported, memory };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.isSupported && $setup.memory) {
    _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "inline-grid grid-cols-2 gap-x-4 gap-y-2" }, _attrs))}>`);
    if ($setup.memory) {
      _push(`<!--[--><div opacity="50"> Used </div><div>${__vite_ssr_import_4__.ssrInterpolate($setup.size($setup.memory.usedJSHeapSize))}</div><div opacity="50"> Allocated </div><div>${__vite_ssr_import_4__.ssrInterpolate($setup.size($setup.memory.totalJSHeapSize))}</div><div opacity="50"> Limit </div><div>${__vite_ssr_import_4__.ssrInterpolate($setup.size($setup.memory.jsHeapSizeLimit))}</div><!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}> Your browser does not support performance memory API </div>`);
  }
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/MemoryUsageDemo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/MemoryUsageDemo.vue"]]);
;
}


// --------------------
// Request: /node_modules/@vueuse/core/index.mjs
// Parents: 
// - /components/MemoryUsageDemo.vue ($id_21bfb2dd)
// Dependencies: 

// --------------------
const $id_e8934cdc = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/@vueuse/core/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/node_modules/@vueuse/core/index.mjs".') })


// --------------------
// Request: /components/header/HeaderMain.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/DaisyuiThemeSwitcher.vue ($id_3cb4fa0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/header/HeaderMain.vue?vue&type=style&index=0&scoped=true&lang.css ($id_5bc42b1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_baa49f01 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/DaisyuiThemeSwitcher.vue");

const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const menu = [
  { title: 'about', path: '/about'}
]

const __returned__ = { menu }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Script = __vite_ssr_import_2__.resolveComponent("Script")
  const _component_Title = __vite_ssr_import_2__.resolveComponent("Title")
  const _component_nuxt_link = __vite_ssr_import_2__.resolveComponent("nuxt-link")
  const _component_Logo = __vite_ssr_import_2__.resolveComponent("Logo")
  const _component_switch_locale = __vite_ssr_import_2__.resolveComponent("switch-locale")
  const _component_daisyui_theme_switcher = __vite_ssr_import_1__.default

  _push(`<!--[-->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Script, { src: "https://buttons.github.io/buttons.js" }, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title, null, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Top nuxt 3 - Template `)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(" Top nuxt 3 - Template ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<header class="flex relative items-center" data-v-9c5039c6>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, {
    class: "hidden sm:block flex",
    to: "/"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Logo, { class: "mx-3 mt-1" }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_2__.createVNode(_component_Logo, { class: "mx-3 mt-1" })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!-- menu--><div class="hidden sm:flex sm:mx-auto sm:items-center sm:space-x-6" data-v-9c5039c6><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.menu, (item) => {
    _push(`<div data-v-9c5039c6>`)
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, {
      class: "menu-link font-bold text-sm hover:text-primary",
      to: item.path
    }, {
      default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${__vite_ssr_import_3__.ssrInterpolate(_ctx.$t(item.title))}`)
        } else {
          return [
            __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString(_ctx.$t(item.title)), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</div>`)
  })
  _push(`<!--]--></div><!--    <header-responsive-menu ref="menu" class="relative">--><!--      <div class="p-6">--><!--        <NuxtLink to="/" @click.native="\$refs.menu.close">--><!--          <Logo class="mx-3 mt-1" />--><!--        </NuxtLink>--><!--        <div class="mt-10">--><!--          <div v-for="item in menu" :key="item.path" class="mt-3">--><!--            <nuxt-link class="menu-link text-sm" :to="item.path" @click.native="\$refs.menu.close" @click="\$refs.menu.close()">--><!--              {{item.title}}--><!--            </nuxt-link>--><!--          </div>--><!--        </div>--><!--      </div>--><!--    </header-responsive-menu>--><!-- Place this tag where you want the button to render. -->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_switch_locale, { class: "ml-auto" }, null, _parent))
  _push(`<div class="ml-auto" data-v-9c5039c6><a class="github-button" href="https://github.com/ctwhome/top-nuxt3" data-size="large" data-show-count="true" aria-label="Star ctwhome/top-nuxt3 on GitHub" target="_blank" data-v-9c5039c6> Star </a>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_daisyui_theme_switcher, { class: "ml-auto" }, null, _parent))
  _push(`</div><!--    <user-login-button class="mt-2 pr-4" />--></header><!--]-->`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/header/HeaderMain.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/header/HeaderMain.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-9c5039c6"],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/header/HeaderMain.vue"]]);
}


// --------------------
// Request: /components/header/HeaderMain.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/header/HeaderMain.vue ($id_baa49f01)
// Dependencies: 

// --------------------
const $id_5bc42b1c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.menu-link.active[data-v-9c5039c6] {\n    -webkit-text-decoration-line: underline;\n            text-decoration-line: underline\n}\n";
}


// --------------------
// Request: /components/header/HeaderResponsiveMenu.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/header/HeaderResponsiveMenu.vue?vue&type=style&index=0&lang.css ($id_59abc59a)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5667496c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
  data () { return { isOpen: false } },
  methods: {
    close () { this.isOpen = false }
  }

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "fixed top-0 left-0 z-10" }, _attrs))}><!--Open button--><div class="sm:hidden mt-4 ml-4"><!-- Trigger--><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></div>`)
  if ($data.isOpen) {
    _push(`<div${
      __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "fixed top-0 z-10" }, _attrs))
    }><!-- Outside layer --><div class="fixed top-0 w-screen h-screen bg-gray-800 bg-opacity-70 z-10"></div><!-- menu content --><div class="fixed top-0 relative top-0 max-w-sm h-screen bg-base-100 shadow-2xl z-20" style="${
      __vite_ssr_import_1__.ssrRenderStyle({"min-width":"340px"})
    }"><!--Close button--><div class="absolute right-0 m-4 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div><div class="overflow-auto overscroll-contain bg-base-200 h-full">`)
    __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
    _push(`</div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/header/HeaderResponsiveMenu.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/header/HeaderResponsiveMenu.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/header/HeaderResponsiveMenu.vue"]]);
}


// --------------------
// Request: /components/header/HeaderResponsiveMenu.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/header/HeaderResponsiveMenu.vue ($id_5667496c)
// Dependencies: 

// --------------------
const $id_59abc59a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.menu-enter,\n.menu-leave-to {\n  visibility: hidden;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  /*transform: translate3d(-100%, 0, 0);*/\n}\n.menu-enter-active,\n.menu-leave-active {\n  transition: all 0.3s;\n}\n";
}


// --------------------
// Request: /components/icon/home.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3385f772 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_0__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icon/home.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_1__.default(_sfc_main, [['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/icon/home.vue"]]);
}


// --------------------
// Request: /components/loading/Name.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ef189e84 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "z-40" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList(1, (m) => {
    _push(`<div id="name-card-loading" class="flex items-center skeleton-loading-card justify-between mx-auto mb-2 bg-white rounded rounded-lg shadow-lg lg:w-9/12 lg:mt-12"><div class="my-3 overflow-hidden border-gray-200"><div class="px-3 pt-2 pb-3 text-center"><div class="flex flex-row items-center justify-between"><a class="flex items-start text-black no-underline"><div class="grid"><div class="block skeleton-loading-order-products-item-thumbnail loading w-24 h-24 rounded-full"></div></div><div class="grid mx-3 my-2"><div class="skeleton-loading-info loading h-5 w-32 my-2"></div><div class="skeleton-loading-info loading h-5 w-32 my-2"></div></div></a></div></div></div><div class="mx-2"><div class="block skeleton-loading-order-products-item-thumbnail loading w-8 h-8 rounded-full my-2"></div><div class="block skeleton-loading-order-products-item-thumbnail loading w-8 h-8 rounded-full my-2"></div></div></div>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading/Name.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/loading/Name.vue"]]);
}


// --------------------
// Request: /components/loading/Text.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fb5a8295 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[-->`)
  __vite_ssr_import_0__.ssrRenderList(1, (m) => {
    _push(`<div id="name-card-loading" class="flex items-center skeleton-loading-card justify-between ml-4 mr-8 mb-2 bg-white rounded rounded-lg shadow-lg w-full lg:mt-6"><div class="px-1 pt-2 pb-3 text-center"><div class="flex flex-row items-center justify-between 2"><a class="flex items-start text-black no-underline"><div class="grid mx-3 my-2"><div class="skeleton-loading-info loading h-5 w-64 lg:w-full my-2"></div><div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2"></div><div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2"></div><div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2"></div><div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2"></div><div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2"></div><div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2"></div></div></a></div></div></div>`)
  })
  _push(`<!--]-->`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading/Text.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/loading/Text.vue"]]);
}


// --------------------
// Request: /components/loading/skeleton-on-load-comment-card.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b1d562b7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex flex-wrap items-center justify-start p-2 mx-auto mt-6 mb-4 bg-white rounded-lg shadow-lg lg:w-9/12 skeleton-loading-card z-40" }, _attrs))}><h2 class="px-4 pt-3 pb-2 text-lg text-gray-800"><div class="skeleton-loading-info loading h-4 w-48 my-2"></div></h2><div class="w-full px-3 mt-2 mb-2 md:w-full"><div class="skeleton-loading-info loading h-12 w-full my-2"></div></div><div class="flex items-start justify-end w-full px-3 md:w-full"><div class="-mr-1"><div class="skeleton-loading-info loading h-8 w-24 my-2"></div></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading/skeleton-on-load-comment-card.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/loading/skeleton-on-load-comment-card.vue"]]);
}


// --------------------
// Request: /components/loading/skeleton-on-load-comments-card.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a4a3622a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex items-center justify-between max-w-lg px-4 mt-12 mb-4 bg-white rounded rounded-lg shadow-lg skeleton-loading-card z-40" }, _attrs))}><div class="max-w-screen-sm pb-2 mx-4 my-5"><div class="skeleton-loading-info loading h-4 w-48 my-2"></div><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList(2, (m) => {
    _push(`<div class="flex items-start justify-start my-2"><div class="flex-shrink-0"><div class="block skeleton-loading-order-products-item-thumbnail loading w-24 h-24 rounded-full"></div></div><div class="flex-1 px-2 leading-relaxed border rounded-lg sm:px-3"><div class="skeleton-loading-info loading h-5 w-64 my-2"></div><div class="skeleton-loading-info loading h-5 w-64 my-2"></div><div class="skeleton-loading-info loading h-5 w-32 my-2"></div></div></div>`)
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading/skeleton-on-load-comments-card.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/loading/skeleton-on-load-comments-card.vue"]]);
}


// --------------------
// Request: /components/loading/skeleton-on-load-user-card.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5d021a54 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "skeleton-loading-card my-3 overflow-hidden bg-white rounded rounded-lg shadow" }, _attrs))}><div class="object-cover w-full h-96 skeleton-loading-order-products-item-thumbnail loading"></div><div class="px-3 pt-2 pb-3 text-center"><div class="flex flex-row items-center justify-between"><div class="flex items-start justify-center text-black no-underline"><div class="block skeleton-loading-order-products-item-thumbnail loading w-16 h-16 rounded-full"></div><div class="grid ml-2"><div class="skeleton-loading-info loading h-4 w-64 my-2"></div><div class="skeleton-loading-info loading h-4 w-32 my-2"></div></div></div></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/loading/skeleton-on-load-user-card.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/loading/skeleton-on-load-user-card.vue"]]);
}


// --------------------
// Request: /components/common/header/Search.vue
// Parents: 
// - /@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs ($id_c0614bb5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/common/header/Search.vue?vue&type=style&index=0&scoped=true&lang.css ($id_1f619cd2)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1925ac63 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  components: {},
  data() {
    return {
      query: "",
      searchResultsVisible: false,
      searchResults: [],
      highlightedIndex: 0,
    };
  },
  computed: {
    // onSearchFocus: function () {
    //   return this.$store.state.setting.onSearchFocus;
    // },
  },
  watch: {
    // whenever question changes, this function will run
    // onSearchFocus: function (newVal) {
    //   this.$refs.search.focus();
    // },
  },
  created() {},
  methods: {
    reset() {
      this.query = "";
      this.highlightedIndex = 0;
    },
    softReset() {
      this.searchResultsVisible = true;
      this.highlightedIndex = 0;
    },
    focusSearch(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
    performSearch() {
      if (this.query.length < 2) return false;
      this.$axios
        .get(`/api/search-name/${this.query.toLowerCase()}`)
        .then((response) => {
          this.searchResults = response.data.filter((item) =>
            item.name.toLowerCase().includes(this.query.toLowerCase())
          );
        });
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1;
        this.scrollIntoView();
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1;
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: "nearest",
      });
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.slug;
      }
    },
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_1__.resolveComponent("nuxt-link")

  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "relative" }, _attrs))
  } data-v-07d899be><div class="relative w-full" data-v-07d899be><input${
    __vite_ssr_import_2__.ssrRenderAttr("value", $data.query)
  } type="text"${
    __vite_ssr_import_2__.ssrRenderAttr("placeholder", _ctx.$t('Search a name'))
  } class="z-30 w-full lg:px-10 py-3 lg:py-4 pl-10 text-sm border-gray-400 rounded-lg border-1 focus:outline-none focus:ring-1 focus:indigo-500" data-v-07d899be><div class="absolute top-0 ml-3" data-v-07d899be><svg fill="currentColor" class="w-5 h-5 text-gray-500 mt-4" viewBox="0 0 24 24" width="24" height="24" data-v-07d899be><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" data-v-07d899be></path></svg></div>`)
  if ($data.query.length > 0) {
    _push(`<div class="absolute top-0 right-0 mr-5 text-gray-600 cursor-pointer text-5 hover:text-gray-800" style="${__vite_ssr_import_2__.ssrRenderStyle({"top":"2px"})}" data-v-07d899be> × </div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
  if ($data.query.length > 0 && $data.searchResultsVisible) {
    _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      class: "absolute left-0 right-0 z-10 mt-2 mb-4 overflow-hidden overflow-y-auto text-left normal-case bg-white border rounded-lg shadow w-108",
      style: {"max-height":"32rem"}
    }, _attrs))} data-v-07d899be><div class="flex flex-col" data-v-07d899be><!--[-->`)
    __vite_ssr_import_2__.ssrRenderList($data.searchResults, (item, index) => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
        key: index,
        to: _ctx.localePath({ name: 'name-slug', params: { slug: item.slug } }),
        class: ["p-4 text-xl border-b border-gray-400 cursor-pointer hover:bg-blue-100", { 'bg-blue-100': index === $data.highlightedIndex }]
      }, {
        default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
          if (_push) {
            _push(`${
              __vite_ssr_import_2__.ssrInterpolate(item.title)
            } <div class="flex" data-v-07d899be${
              _scopeId
            }>`)
            if (item.image) {
              _push(`<img class="w-16 lg:w-16 h-16 mx-1 rounded-full"${
                __vite_ssr_import_2__.ssrRenderAttr("src", item.image)
              } data-v-07d899be${
                _scopeId
              }>`)
            } else {
              _push(`<img class="w-24 h-16 mx-1 rounded-full"${
                __vite_ssr_import_2__.ssrRenderAttr("src", `~/assets/images/baby-images/boy/e-11.jpg`)
              } data-v-07d899be${
                _scopeId
              }>`)
            }
            _push(`<div class="grid" data-v-07d899be${
              _scopeId
            }><span class="mx-1 my-1 text-sm font-normal" data-v-07d899be${
              _scopeId
            }>${
              __vite_ssr_import_2__.ssrInterpolate(item.name)
            }</span><span class="flex mx-2" data-v-07d899be${
              _scopeId
            }><p class="mx-1 text-sm text-gray-800" data-v-07d899be${
              _scopeId
            }>${
              __vite_ssr_import_2__.ssrInterpolate(item.mean[_ctx.$i18n.locale])
            }</p></span></div></div>`)
          } else {
            return [
              __vite_ssr_import_1__.createTextVNode(__vite_ssr_import_1__.toDisplayString(item.title) + " ", 1 /* TEXT */),
              __vite_ssr_import_1__.createVNode("div", { class: "flex" }, [
                (item.image)
                  ? (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("img", {
                      key: 0,
                      class: "w-16 lg:w-16 h-16 mx-1 rounded-full",
                      src: item.image
                    }, null, 8 /* PROPS */, ["src"]))
                  : (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("img", {
                      key: 1,
                      class: "w-24 h-16 mx-1 rounded-full",
                      src: `~/assets/images/baby-images/boy/e-11.jpg`
                    }, null, 8 /* PROPS */, ["src"])),
                __vite_ssr_import_1__.createVNode("div", { class: "grid" }, [
                  __vite_ssr_import_1__.createVNode("span", { class: "mx-1 my-1 text-sm font-normal" }, __vite_ssr_import_1__.toDisplayString(item.name), 1 /* TEXT */),
                  __vite_ssr_import_1__.createVNode("span", { class: "flex mx-2" }, [
                    __vite_ssr_import_1__.createVNode("p", { class: "mx-1 text-sm text-gray-800" }, __vite_ssr_import_1__.toDisplayString(item.mean[_ctx.$i18n.locale]), 1 /* TEXT */)
                  ])
                ])
              ])
            ]
          }
        }),
        _: 2 /* DYNAMIC */
      }, _parent))
    })
    _push(`<!--]-->`)
    if ($data.searchResults.length === 0) {
      _push(`<div class="w-full p-4 font-normal border-b shadow-lg cursor-pointer" data-v-07d899be><p class="my-0" data-v-07d899be>${
        __vite_ssr_import_2__.ssrInterpolate(_ctx.$t("No results for "))
      }&#39;<strong data-v-07d899be>${
        __vite_ssr_import_2__.ssrInterpolate($data.query)
      }</strong>&#39; </p></div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/common/header/Search.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/common/header/Search.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-07d899be"],['__file',"/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/components/common/header/Search.vue"]]);
}


// --------------------
// Request: /components/common/header/Search.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/common/header/Search.vue ($id_1925ac63)
// Dependencies: 

// --------------------
const $id_1f619cd2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.fade-enter-active[data-v-07d899be],\n.fade-leave-active[data-v-07d899be] {\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-07d899be],\n.fade-leave-to[data-v-07d899be] {\n  opacity: 0;\n}\n";
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
 '/node_modules/nuxt3/dist/app/plugins/preload.server.mjs': $id_b9f3c557,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/axios.js': $id_5ddce980,
 '/node_modules/axios/index.js': $id_9a0dac16,
 '/node_modules/defu/dist/defu.mjs': $id_d7afab65,
 '/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs': $id_cbe5172d,
 '/node_modules/@vueuse/head/dist/index.mjs': $id_c032264e,
 '/node_modules/nuxt3/dist/meta/runtime/plugin.mjs': $id_9fd5f35e,
 '/node_modules/nuxt3/dist/meta/runtime/components.mjs': $id_94744df3,
 '/node_modules/nuxt3/dist/meta/runtime/composables.mjs': $id_ca9295be,
 '/node_modules/@vue/shared/dist/shared.cjs.js': $id_852b06a2,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/meta.config.mjs': $id_e4535413,
 '/node_modules/nuxt3/dist/pages/runtime/router.mjs': $id_a4d6cb5b,
 '/node_modules/nuxt3/dist/pages/runtime/nested-page.vue': $id_c268603a,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/node_modules/nuxt3/dist/pages/runtime/page.vue': $id_10628d40,
 '/node_modules/nuxt3/dist/pages/runtime/layout.mjs': $id_9b68c93f,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/layouts.mjs': $id_fe36f759,
 '/layouts/default.vue': $id_7689e89d,
 '/components/common/Header.vue': $id_719597ef,
 '/composables/useBreakPoints.ts': $id_d030ed52,
 '/components/common/header/Megamenu.vue': $id_1c9023c9,
 '/components/common/header/Megamenu.vue?vue&type=style&index=0&scoped=true&lang.css': $id_716bb670,
 '/components/DaisyuiThemeSwitcher.vue': $id_3cb4fa0f,
 '/node_modules/theme-change/index.js': $id_6978feda,
 '/components/common/Mobilebottommenu.vue': $id_fdae4b56,
 '/node_modules/@iconify/vue/dist/iconify.mjs': $id_006f91fb,
 '/components/common/Header.vue?vue&type=style&index=0&lang.css': $id_60629529,
 '/components/common/Footer.vue': $id_f219ac30,
 '/components/ReloadPrompt.vue': $id_9bae4834,
 '/@vite-plugin-pwa/virtual:pwa-register/vue': $id_42f92f22,
 '/components/ReloadPrompt.vue?vue&type=style&index=0&lang.css': $id_899a4ece,
 '/layouts/error.vue': $id_6c552589,
 '/layouts/error.vue?vue&type=style&index=0&scoped=true&lang.css': $id_e23c30c8,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/routes.mjs': $id_c330c1a0,
 '/pages/image-colorize.vue': $id_e258c82b,
 '/composables/useRandomString.ts': $id_ebc0b334,
 '/composables/useUploadImage.ts': $id_ecf00ff8,
 '/components/common/Breadcrumb.vue': $id_20f1319f,
 '/components/loading/Restorephoto.vue': $id_965bb096,
 '/server/Service/ApiService.ts': $id_5c201c47,
 '/pages/index.vue': $id_cca58e97,
 '/components/common/Imageoverlay.vue': $id_c8c6332a,
 '/components/common/Imageoverlay.vue?vue&type=style&index=0&lang.css': $id_5515db83,
 '/pages/index.vue?vue&type=style&index=0&lang.css': $id_0b423cc4,
 '/pages/restore-photo.vue': $id_4ae18a14,
 '/pages/text-to-art.vue': $id_37b4c183,
 '/components/loading/Art.vue': $id_ea681d2c,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/plugin.mjs': $id_b8547a9d,
 '/node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js': $id_24731f5b,
 '/node_modules/@intlify/shared/dist/shared.esm-bundler.js': $id_500a2161,
 '/node_modules/@intlify/core-base/dist/core-base.esm-bundler.js': $id_008b81f5,
 '/node_modules/@intlify/message-compiler/dist/message-compiler.esm-bundler.js': $id_de1d486a,
 '/node_modules/@intlify/devtools-if/dist/devtools-if.esm-bundler.js': $id_3642ffb5,
 '/node_modules/@vue/devtools-api/lib/esm/index.js': $id_24b1ff15,
 '/node_modules/@vue/devtools-api/lib/esm/env.js': $id_304a908e,
 '/node_modules/@vue/devtools-api/lib/esm/const.js': $id_8e00d2d1,
 '/node_modules/@vue/devtools-api/lib/esm/proxy.js': $id_c00b31f5,
 '/node_modules/@vue/devtools-api/lib/esm/api/index.js': $id_550ae022,
 '/node_modules/@vue/devtools-api/lib/esm/api/api.js': $id_92fae9b0,
 '/node_modules/@vue/devtools-api/lib/esm/api/app.js': $id_b65c5853,
 '/node_modules/@vue/devtools-api/lib/esm/api/component.js': $id_614015ea,
 '/node_modules/@vue/devtools-api/lib/esm/api/context.js': $id_2baadcfd,
 '/node_modules/@vue/devtools-api/lib/esm/api/hooks.js': $id_3aa5d48c,
 '/node_modules/@vue/devtools-api/lib/esm/api/util.js': $id_03011152,
 '/node_modules/@vue/devtools-api/lib/esm/plugin.js': $id_674cbbbf,
 '/node_modules/@intlify/vue-devtools/dist/vue-devtools.esm-bundler.js': $id_c419997a,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.vuei18n.options.mjs': $id_1151c09a,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/intlify.locales.mjs': $id_4b699651,
 '/locales/de.json': $id_a701a9b7,
 '/locales/en.json': $id_f04686dd,
 '/locales/fr.json': $id_0fa04411,
 '/locales/ku.json': $id_60c5a609,
 '/locales/tr.json': $id_7b4ae5b9,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/dist.plugin.3140050b.mjs': $id_90abdda2,
 '/node_modules/nuxt3/dist/app/compat/vue-demi.mjs': $id_132eda61,
 '/node_modules/nuxt3/dist/app/compat/capi.mjs': $id_7674cc72,
 '/node_modules/pinia/dist/pinia.mjs': $id_b1920624,
 '/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs': $id_7b587af2,
 '/node_modules/ohmyfetch/dist/index.mjs': $id_780217c4,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/components.mjs': $id_c0614bb5,
 '/components/MemoryUsageDemo.vue': $id_21bfb2dd,
 '/node_modules/@vueuse/core/index.mjs': $id_e8934cdc,
 '/components/header/HeaderMain.vue': $id_baa49f01,
 '/components/header/HeaderMain.vue?vue&type=style&index=0&scoped=true&lang.css': $id_5bc42b1c,
 '/components/header/HeaderResponsiveMenu.vue': $id_5667496c,
 '/components/header/HeaderResponsiveMenu.vue?vue&type=style&index=0&lang.css': $id_59abc59a,
 '/components/icon/home.vue': $id_3385f772,
 '/components/loading/Name.vue': $id_ef189e84,
 '/components/loading/Text.vue': $id_fb5a8295,
 '/components/loading/skeleton-on-load-comment-card.vue': $id_b1d562b7,
 '/components/loading/skeleton-on-load-comments-card.vue': $id_a4a3622a,
 '/components/loading/skeleton-on-load-user-card.vue': $id_5d021a54,
 '/components/common/header/Search.vue': $id_1925ac63,
 '/components/common/header/Search.vue?vue&type=style&index=0&scoped=true&lang.css': $id_1f619cd2,
 '/@id/__x00__virtual:/Users/ogur.uyanik/Desktop/PROJECTS/top-nuxt3/nuxt-build/root-component.mjs': $id_1d6bf11a,
 '/node_modules/nuxt3/dist/app/components/nuxt-root.vue': $id_f8564e04,
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