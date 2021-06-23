<template>
  <the-header></the-header>
  <router-view />
</template>

<script lang="ts">
import TheHeader from "@/components/layout/TheHeader.vue";
import { defineComponent } from "@vue/runtime-core";
import { UserActionTypes } from "./lib/Enums";
import { IUser } from "./lib/Interfaces";
export default defineComponent({
  components: {
    TheHeader,
  },
});
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
</style>
