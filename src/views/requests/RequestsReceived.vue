<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :email="request.email"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet.</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import RequestItem from "@/components/requests/RequestItem.vue";
import { RequestActionsTypes } from "@/lib/Enums";
import { IRequest } from "@/lib/Interfaces";
export default defineComponent({
  name: "RequestsReceived",
  components: {
    BaseCard,
    RequestItem,
  },
  created(){
     this.$store.dispatch(
      RequestActionsTypes.LOAD_RECEIVED_REQUESTS,
      this.$store.getters.currentUser.id as string
    );
  },
  computed: {
    hasRequests(): boolean {
      return this.$store.getters.hasRequests &&this.$store.getters.currentUser.id!==undefined;
    },
    receivedRequests():Array<IRequest> {
      return this.$store.getters.requests;
    },
  },
});
</script>
<style lang="scss" scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>