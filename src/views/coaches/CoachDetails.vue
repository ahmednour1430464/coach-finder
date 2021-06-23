<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interest? Reach out now!</h2>
        <base-button link :to="getContact" :mode="mode.FLAT"
          >Contact</base-button
        >
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :title="area"
        :type="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>
<script lang="ts">
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseBadge from "@/components/ui/BaseBadge.vue";
import { AreaOfExpertise, Mode } from "@/lib/Enums";
import { Coach } from "@/lib/Classes";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    BaseCard,
    BaseButton,
    BaseBadge,
  },
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      selectedCoach: Coach,
      mode: Mode,
    };
  },
  created(): void {
    for (const coach of this.$store.getters.coaches) {
      if (this.id == coach.id) {
        this.selectedCoach.prototype = new Coach(coach);
        break;
      }
    }
  },
  computed: {
    fullName(): string {
      const coach = this.selectedCoach.prototype;
      return coach.firstName + " " + coach.lastName;
    },
    rate(): number {
      const coach = this.selectedCoach.prototype;
      return coach.hourlyRate as number;
    },
    areas(): Array<AreaOfExpertise> {
      return this.selectedCoach.prototype.areas as Array<AreaOfExpertise>;
    },
    description(): string {
      return this.selectedCoach.prototype.description;
    },
    getContact(): string {
      if (this.$route.path.includes("contact")) {
        return this.$route.path.replace("/contact", " ").trimEnd();
      }

      return `${this.$route.path}/contact`;
    },
  },
});
</script>