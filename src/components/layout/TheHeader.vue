<template>
  <header>
    <nav>
      <h1><router-link :to="router.HOME">Find a Coach</router-link></h1>
      <ul>
        <li><router-link :to="router.COACHES">All Coaches</router-link></li>
        <li><router-link :to="router.REQUESTS">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { routerEnum } from "@/lib/Enums";
export default defineComponent({
 data(){
   return {
     router:routerEnum,
   }
 }
})
</script>


<style lang="scss" scoped>
$background: #3d008d;
$primary: #f391e3;
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: $background;
  nav {
    display: flex;
    margin: auto;
    width: 90%;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: $primary;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
  }
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid $primary;
}

h1 {
  margin: 0;
  a {
    color: white;
    margin: 0;
  }
  a:active,
  a:hover,
  a.router-link-active {
    border-color: transparent;
  }
}

li {
  margin: 0 0.5rem;
}
</style>