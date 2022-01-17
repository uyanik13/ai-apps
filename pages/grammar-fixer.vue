<script setup lang="ts">
import { grammarFixer } from "~~/server/Service/ApiService";
const accents = ref([
  { id: 1, name: "American", value: "American" },
  { id: 2, name: "UK", value: "UK" },
]);
const selectedAccent = ref("American");
const text = ref("I can't find my keys. Did you see them anywhere");
const outputText = ref(null);

const onLoading = ref(false);

const submit = async () => {
  onLoading.value = true;
  const data = {
    prompt:
      `Original: ` +
      text.value +
      ` .\nStandard ${selectedAccent.value} English: `,
    // prompt:
    //   "Original: I can't find my keys. Did you see them anywhere.  \\nStandard American English: \n\n",
    max_tokens: 500,
    temperature: 0.72,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    best_of: 1,
    echo: true,
    logprobs: 0,
    stop: ["\\n"],
    stream: false,
  };

  await grammarFixer(data).then((res) => {
    outputText.value = res.choices[0].text;
    onLoading.value = false;
  });
};
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="bg-base-200">
      <CommonBreadcrumb :title="`Grammar Fixer`" />
      <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-4">
        <div class="card lg:w-4/12 max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ $t("English") }}</span>
              </label>
              <select
                v-model="selectedAccent"
                class="select select-bordered w-full max-w-xs"
              >
                <option
                  v-for="item in accents"
                  :key="item.id"
                  :value="item.value"
                  :selected="item.id == 1 ? selected : false"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Output</span>
              </label>
              <textarea
                v-model="text"
                class="textarea h-24 textarea-bordered textarea-primary"
                max="500"
                placeholder="What do you want to see?"
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button
                :disabled="onLoading"
                class="btn btn-primary"
                @click="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="card lg:w-8/12 shadow-2xl bg-base-100">
          <div class="card-body">
            <textarea
              v-model="outputText"
              class="textarea h-72 textarea-bordered textarea-primary"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
