<template>
  <div class="checkbox-container">
    <label class="checkbox">
      <input
        @input="(event) => $emit('update:checked', event.target.checked)"
        type="checkbox"
        :checked="checked"
        id="checkbox"
      />
      <span></span>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Checkbox",
  props: {
    checked: {
      type: Boolean,
    },
  },
  emits: ["update:checked"],
  computed: {
    value: {
      get() {
        return this.checked;
      },
      set(value: boolean) {
        this.$emit("update:checked", value);
      },
    },
  },
});
</script>
<style scoped lang="scss">
.checkbox-container {
  height: 50px;
}
.checkbox {
  cursor: pointer;
  position: relative;
}
.checkbox > input {
  height: 40px;
  width: 40px;
  position: absolute;
  left: -25px;
  top: 0rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border-radius: 25px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #363636;
  cursor: pointer;
}
.checkbox > input:checked {
  background-color: #363636
}
.checkbox > input:checked + span::before {
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  font-size: 2.4em;
  content: "";
  text-align: center;
  color: white;
  position: absolute;
  left: -15px;
  top: 8px;
}
.checkbox > input:active {
  border: 2px solid #34495e;
}
.checkbox-container:hover {
  transform: scale(0.9);
}
</style>
