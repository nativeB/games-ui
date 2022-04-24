<template>
  <div class="panel full">
    <div class="panel__header">
      <h1 class="panel__title">Results</h1>
    </div>
    <div class="panel__body" v-if="games.length">
      <ResultsItem v-for="(game, index) in games" :key="index" :result="game" />
    </div>
    <div class="panel__body" v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResultsItem from "./ResultsItem.vue";
import { mapState } from "vuex";
export default defineComponent({
  components: { ResultsItem },
  name: "ResultsPanel",
  computed: {
    ...mapState(["games"]),
  },
});
</script>
