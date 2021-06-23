<template>
  <section>
    <base-card>
      <header>
        <h2>Register as a Coach</h2>
      </header>
      <coach-form @data-submitted="setNewCoach" />
    </base-card>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CoachForm from "@/components/coach/CoachForm.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import { ActionsTypes, routerEnum } from "@/lib/Enums";
import { ICoach } from "@/lib/Interfaces";
export default defineComponent({
  name: "CoachRegistration",
  components: {
    CoachForm,
    BaseCard,
  },
  methods: {
    setNewCoach(coach: ICoach) {
      this.$store.dispatch(ActionsTypes.SET_NEW_COACH, coach);
      this.$router.replace(routerEnum.COACHES);
    },
  },
});
</script>
