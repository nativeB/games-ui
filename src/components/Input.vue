<template>
  <div class="p_input p_input--text">
    <label class="required" for="example1">{{ label }}</label>
    <input
      @input="inputChanged"
      :type="type"
      :name="id"
      :id="id"
      :min="min"
      :max="max"
      :placeholder="placeHolder"
    />
    <span class="p_input__help">{{ help }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    label: {
      type: String,
      default: "Enter Text",
    },
    type: {
      type: String,
      default: "text",
    },

    id: {
      type: String,
      default: "input",
    },
    placeHolder: {
      type: String,
      default: "enter text here",
    },
    help: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  methods: {
    inputChanged(event: any) {
      this.$emit("inputChanged", event.target.value);
    },
  },
});
</script>
