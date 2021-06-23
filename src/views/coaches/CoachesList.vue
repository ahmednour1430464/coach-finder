<template>
  <section>
    <coach-filter :counter="counter" @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button :mode="mode.OUTLINE" @click="loadCoaches"
          >Refresh</base-button
        >
        <base-button v-if="!isCoach" link to="/register" :mode="mode.FLAT"
          >Register as Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :coach="coach"
        />
      </ul>
      <h2 v-else>No Coaches Yet</h2>
    </base-card>
  </section>
</template>


<script lang="ts">
import CoachItem from "@/components/coach/CoachItem.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import CoachFilter from "@/components/coach/CoachFilter.vue";
import { ICoach, IAreaOfExpertise } from "@/lib/Interfaces";
import { ActionsTypes, AreaOfExpertise, Mode, Role } from "@/lib/Enums";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "CoachesList",
  components: {
    CoachItem,
    CoachFilter,
    BaseCard,
    BaseButton,
  },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
      mode: Mode,
      counter: 0,
    };
  },
  computed: {
    filteredCoaches(): Array<ICoach> {
      const coaches = this.$store.getters.coaches.filter((coach: ICoach) => {
        const areas = coach.areas as Array<AreaOfExpertise>;
        if (this.filters.frontend && areas.includes(AreaOfExpertise.FRONTEND)) {
          return true;
        }
        if (this.filters.backend && areas.includes(AreaOfExpertise.BACKEND)) {
          return true;
        }
        if (this.filters.career && areas.includes(AreaOfExpertise.CAREER)) {
          return true;
        }
        return false;
      });
      this.counter = coaches.length;
      return coaches;
    },
    isCoach() {
      return this.$store.getters.currentUser.coach?.id!==undefined;
    },
    hasCoaches(): boolean {
      return this.$store.getters.hasCoaches;
    },
  },
  methods: {
    setFilters(updatedFilters: IAreaOfExpertise<boolean>): void {
      this.filters = updatedFilters;
    },
    loadCoaches() {
      this.$store.dispatch(ActionsTypes.LOAD_ALL_COACHES)
    },
  },
  created(){
    this.loadCoaches()
  }
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
section {
  margin: 0;
  padding: 0;
  ul {
    margin: 0;
    padding: 0;
  }
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
}
</style>