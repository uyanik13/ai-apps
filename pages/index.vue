<template>
  <div class="lg:flex font-sans">
    <div class="pt-6 lg:pt-24 lg:w-8/12 lg:px-24">
      <div class="px-4 lg:px-6">
        <h1 class="font-bold text-gray-900 text-7 lg:text-10">
          {{ $t("h1_text") }}
        </h1>
        <h2 class="mt-4 font-light text-gray-900 text-5 lg:text-6 lg:pr-48">
          {{ $t("h2_text") }}
        </h2>
        <div
          class="
            flex
            justify-center
            py-6
            lg:justify-start
            items-center
            lg:items-start
            pl-8
          "
        >
          <nuxt-link
            to="/restore-photo"
            class="
              px-6
              lg:px-12
              py-2
              lg:py-3
              mx-8
              font-bold
              text-white
              transition
              duration-500
              ease-in-out
              rounded-lg
              focus:outline-none
              bg-primary
              hover:bg-secondary
              text-4
              lg:text-5
            "
          >
            {{ $t("Get Started") }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="px-3 lg:w-6/12 lg:mx-24 lg:my-16">
      <div class="my-3">
        <CommonImageoverlay
          offset="0.5"
          before="/ai/before.png"
          beforeLabel="BEFORE"
          after="/ai/after.png"
          afterLabel="AFTER"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style>
@import "@/assets/css/skeleton.css";
</style>
