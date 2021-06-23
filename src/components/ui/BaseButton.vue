<template>
  <router-link v-if="link" :to="to" :class="mode">
    <slot></slot>
  </router-link>
  <button v-else :class="mode">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Mode } from "@/lib/Enums";
import { defineComponent, PropType } from "@vue/runtime-core";
export default defineComponent({
  props: {
    link: {
      type: Boolean,
      require: true,
      default: false,
    },
    to: {
      type: String,
      require: true,
      default: "/",
    },
    mode: {
      type: String as PropType<Mode>,
      require: true,
      default: Mode.FLAT,
    },
  },
});
</script>

<style lang="scss" scoped>
$background: #3a0061;
$active: #270041;
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: $background;
  border: 1px solid $background;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: $active;
  border-color: $active;
}

.flat {
  border: none;
}

.outline {
  background-color: transparent;
  border-color: $active;
  color: $active;
}

.flat:hover,
.flat:active {
  background-color: $active;
}
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>