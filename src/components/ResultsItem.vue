<template>
  <div>
    <h2 class="heading">{{ result.game }}</h2>
    <div class="flex-row justify-center">
      <p class="m-2">•User Id ({{ result.userId }})</p>
      <p class="m-2">•Play Time ({{ result.playTime }})</p>
    </div>
    <p>{{ result.platforms.join(",") }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultsItem",
  props: {
    result: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
</script>
