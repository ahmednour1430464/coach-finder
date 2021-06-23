<template>
  <form @submit.prevent="submit">
    <div
      class="form-control"
      :class="{ invalid: !CoachValidation.firstName.isValid }"
    >
      <label for="firstName">First Name</label>
      <p v-if="!CoachValidation.firstName.isValid">
        {{ CoachValidation.firstName.errorMgs }}
      </p>
      <input
        type="text"
        id="firstName"
        @keyup.left="check('firstName')"
        @keydown.tab="check('firstName')"
        @input="check('firstName')"
        @mouseup="check('firstName')"
        v-model.trim="CoachValidation.firstName.val"
      />
    </div>
    <div
      class="form-control"
      :class="{ invalid: !CoachValidation.lastName.isValid }"
    >
      <label for="lastName">Last Name</label>
      <p v-if="!CoachValidation.lastName.isValid">
        {{ CoachValidation.lastName.errorMgs }}
      </p>
      <input
        @keyup.left="check('lastName')"
        @keydown.tab="check('lastName')"
        @input="check('lastName')"
        @mouseup="check('lastName')"
        type="text"
        id="lastName"
        v-model.trim="CoachValidation.lastName.val"
      />
    </div>
    <div
      class="form-control"
      :class="{ invalid: !CoachValidation.description.isValid }"
    >
      <label for="description">Description</label>
      <p v-if="!CoachValidation.description.isValid">
        {{ CoachValidation.description.errorMgs }}
      </p>
      <textarea
        @keyup.left="check('description')"
        @keydown.tab="check('description')"
        @input="check('description')"
        @mouseup="check('description')"
        id="description"
        :rows="3"
        v-model.trim="CoachValidation.description.val"
      ></textarea>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !CoachValidation.rate.isValid }"
    >
      <label for="rate"> Rate</label>
      <p v-if="!CoachValidation.rate.isValid">
        {{ CoachValidation.rate.errorMgs }}
      </p>
      <input
        @keyup.left="check('rate')"
        @keydown.tab="check('rate')"
        @input="check('rate')"
        @mouseup="check('rate')"
        type="number"
        id="rate"
        v-model.trim="CoachValidation.rate.val"
      />
    </div>
    <div
      class="form-control"
      :class="{ invalid: !CoachValidation.areas.isValid }"
    >
      <h2>Area of Expertise</h2>
      <p v-if="!CoachValidation.areas.isValid">
        {{ CoachValidation.areas.errorMgs }}
      </p>
      <input
        type="checkbox"
        name="area"
        id="frontend"
        :value="area.FRONTEND"
        v-model="CoachValidation.areas.val"
        
        @mousedown="check('areas')"
        @change="check('areas')"
      />

      <label for="frontend">FrontEnd</label>
      <input
        type="checkbox"
        name="area"
        id="backend"
        :value="area.BACKEND"
        v-model="CoachValidation.areas.val"
        
        @mousedown="check('areas')"
        @change="check('areas')"
      />

      <label for="backend">Backend</label>
      <input
        type="checkbox"
        name="area"
        id="career"
        :value="area.CAREER"
        v-model="CoachValidation.areas.val"
        
        @mousedown="check('areas')"
        @change="check('areas')"
      />
      <label for="career">Career</label>

      <p v-if="!isValid">ooopse! you need to check your data</p>
    </div>
    <base-button>Register</base-button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { Coach } from "@/lib/Classes";
import { CoachValidation } from "@/lib/Constants";
import { AreaOfExpertise } from "@/lib/Enums";
import { CoachValidationKeys } from "@/lib/Types";
import { ICoach } from "@/lib/Interfaces";
export default defineComponent({
  components: {
    BaseCard,
    BaseButton,
  },
  emits: ["data-submitted"],
  data() {
    return {
      area: AreaOfExpertise,
      CoachValidation,
      isValid: true,
    };
  },
  methods: {
    submit() {
      const {
        firstName,
        lastName,
        description,
        rate,
        areas,
      } = this.CoachValidation;

      this.check("firstName");
      this.check("lastName");
      this.check("description");
      this.check("areas");
      this.check("rate");

      this.validate;

      if (!this.isValid) {
        return;
      }
      const coach:ICoach= {
        firstName: firstName.val,
        lastName: lastName.val,
        description: description.val,
        hourlyRate: Number(rate.val).valueOf(),
        areas: areas.val as Array<AreaOfExpertise>,
      }

      this.$emit("data-submitted", coach);
    },
    check(name: CoachValidationKeys) {
      if (
        name === "firstName" ||
        name === "lastName" ||
        name === "description"
      ) {
        if (this.CoachValidation[name].val === "") {
          this.CoachValidation[name].isValid = false;
          this.isValid = false;
        } else {
          this.clearValidity(name);
        }
      }
      if (name === "rate") {
        if (Number(this.CoachValidation.rate.val) <= 0) {
          this.CoachValidation.rate.isValid = false;
          this.isValid = false;
        } else {
          this.clearValidity(name);
        }
      }
      if (name === "areas") {
        if (
          (this.CoachValidation.areas.val as Array<AreaOfExpertise>).length <= 0
        ) {
          this.CoachValidation.areas.isValid = false;
          this.isValid = false;
        } else {
          this.clearValidity(name);
        }
      }
      this.validate;
    },
    clearValidity(name: CoachValidationKeys) {
      this.CoachValidation[name].isValid = true;
    },
  },
  computed: {
    validate() {
      this.isValid =
        this.CoachValidation.firstName.isValid &&
        this.CoachValidation.lastName.isValid &&
        this.CoachValidation.description.isValid &&
        this.CoachValidation.areas.isValid &&
        this.CoachValidation.rate.isValid;
    },
  },
});
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
label[for="frontend"],
label[for="backend"],
label[for="career"] {
  cursor: pointer;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
  cursor: pointer;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
button {
  margin: 1rem 0;
}
</style>
