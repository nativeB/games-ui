<template>
  <div class="w-50 mb-4 flex-column justify-center">
    <div class="flex-row justify-center">
      <Input
        @inputChanged="(text) => (query.playTime__gt = text)"
        label="Play time min"
        type="number"
        placeHolder=""
        :min="0"
      />
      <Input
        @inputChanged="(text) => (query.playTime__lt = text)"
        label="Play time max"
        type="number"
        placeHolder=""
        :min="0"
      />
    </div>
    <div class="flex-row justify-center">
      <Input
        @inputChanged="(text) => (query.userId__in = text)"
        class="full"
        label="Unique users"
        type="text"
        placeHolder="Comma separated list of user ids"
      />
    </div>
    <div>
      <button class="futurebutton" @click="cleanAndSearch">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "./Input.vue";

interface IQuery {
  query: {
    playTime__gt?: number;
    playTime__lt?: number;
    userId__in?: string;
  };
  show: boolean;
}
export default defineComponent({
  components: { Input },
  name: "SearchPanel",
  data(): IQuery {
    return {
      show: false,
      query: {
        playTime__gt: 0,
        playTime__lt: 0,
        userId__in: "",
      },
    };
  },
  methods: {
    cleanAndSearch() {
      let query: any = this.query;
      Object.keys(query).map((key: string) => {
        if (!query[key]) {
          delete query[key];
        }
      });
      this.$emit("filterChanged", query);
    },
  },
});
</script>
