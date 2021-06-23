<template>
  <base-card>
    <header>
      <h2>Find Your Coach</h2>
      <h3>{{counter}}</h3>
    </header>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilters" />
      <label for="frontend">FrontEnd</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilters" />
      <label for="backend">BackEnd</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilters" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script lang="ts">
import BaseCard from "@/components/ui/BaseCard.vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "CoachFilter",
  components: {
    BaseCard,
  },
  emits: ["change-filter"],
  props:{
    counter:{
      type:Number,
      required:true,
      default:0
    }
  },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilters(event: Event): void {
      const inputId = (<HTMLInputElement>event.target).id;
      const isActive = (<HTMLInputElement>event.target).checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2,
  h3 {
    margin: 0 1rem;
  }
}
.filter-option {
  margin: 0 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
  cursor: pointer;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>