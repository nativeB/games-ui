<template>
  <div class="home flex-column items-center justify-center">
    <SearchPanel @filterChanged="searchGames" />
    <ResultsPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchPanel from "@/components/SearchPanel.vue";
import ResultsPanel from "@/components/ResultsPanel.vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "Home",
  components: {
    SearchPanel,
    ResultsPanel,
  },
  methods: {
    ...mapActions(["getGames"]),
    searchGames(query: any) {
      this.getGames({ query: { ...query, __sort: "playTime" } });
    },
  },
  mounted() {
    this.getGames({ query: { __limit: 5 } });
  },
});
</script>
