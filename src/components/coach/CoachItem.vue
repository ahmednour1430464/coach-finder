<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :title="area" :type="area">
      </base-badge>
    </div>
    <div class="actions">
      <base-button link :to="getContactLink" :mode="mode.OUTLINE">Contact</base-button>
      <base-button link :to="getCoachDetails" :mode="mode.FLAT">View Details</base-button>
    </div>
  </li>
</template>

<script lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue"
import BaseBadge from "@/components/ui/BaseBadge.vue"
import { ICoach } from "@/lib/Interfaces";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { defineComponent, PropType } from '@vue/runtime-core';
import { AreaOfExpertise, Mode } from "@/lib/Enums";
export default defineComponent( {
  components:{
    BaseBadge,
    BaseButton
  },
  data(){
    return{
      mode:Mode
    } 
  },
  props: {
    coach: {
      type:Object as PropType<ICoach>,
    },
  },
  computed: {
    fullName(): string {
      const coach = this.coach as ICoach;
      return coach.firstName + " " + coach.lastName;
    },
    hourlyRate(): number {
      const coach = this.coach as ICoach;
      return coach.hourlyRate as number;
    },
    areas(): Array<string> {
      const coach = this.coach as ICoach;
      return coach.areas as Array<AreaOfExpertise>;
    },
    getContactLink(): string {
      const coach = this.coach as ICoach;
      const link = `${this.$route.path}/${coach.id}/contact`;
      return link;
    },
    getCoachDetails(): string {
      const coach = this.coach as ICoach;
      const link = `${this.$route.path}/${coach.id}`;
      return link;
    },
  },
});
</script>

<style lang="scss" scoped>
li {
  border: 1px solid;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
}
h4,
h3 {
  padding: 0;
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>