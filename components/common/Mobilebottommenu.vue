<template>
  <div
    class="fixed bottom-0 z-40 py-2 flex-row justify-center block w-full bg-white h-15 sm:block md:block lg:hidden shadow-2xl"
  >
    <div class="container">
      <nav class="w-full">
        <ul
          class="flex items-center justify-center px-10 mx-auto pb-1 list-none"
        >
          <nuxt-link :to="item.slug" v-for="item in menuItems" :key="item.id">
            <div class="grid text-secondary mx-3">
              <div class="flex flex-col justify-center items-center">
                <Icon
                  :icon="item.icon.name"
                  :class="item.icon.color"
                  class="fill-current h-10 w-10"
                />
              </div>
            </div>
          </nuxt-link>
          <a href="mailto:ogur.uyanik@gmail.com" target="_blank">
            <Icon
              :icon="`flat-ui:mail`"
              :class="`text-base-content`"
              class="fill-current h-8 w-8"
            />
          </a>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

import Menu from "@/interfaces/Menu";
const menuItems = ref<Array<Menu>>([
  {
    id: 1,
    title: "Home",
    slug: "/",
    icon: {
      name: "flat-color-icons:home",
      h: 8,
      color: "text-red-500",
    },
  },
  {
    id: 2,
    title: "Text To Art",
    slug: "/text-to-art",
    icon: {
      name: "emojione-monotone:artist-palette",
      h: 8,
      color: "text-red-500",
    },
  },
  {
    id: 3,
    title: "Restore Photo",
    slug: "/restore-photo",
    icon: {
      name: "ic:outline-photo-camera-front",
      h: 8,
      color: "text-red-500",
    },
  },
  {
    id: 4,
    title: "Image Colorize",
    slug: "/image-colorize",
    icon: {
      name: "emojione:artist-palette",
      h: 8,
      color: "text-red-500",
    },
  },
  {
    id: 5,
    title: "Grammarly",
    slug: "/grammar-fixer",
    icon: {
      name: "bi:translate",
      h: 8,
      color: "text-red-500",
    },
  },
]);
</script>
