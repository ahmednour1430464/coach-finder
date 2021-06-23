<template>
  <div>login</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUser } from "@/lib/Interfaces";
import { UserActionTypes } from "@/lib/Enums";
export default defineComponent({
  name: "login",
  created() {
    const email = prompt("please use email to get into this app");
    const user:IUser={

      email:<string>email,
    }
    this.$store.dispatch(UserActionTypes.SET_USER, user);
  },
});
</script>


