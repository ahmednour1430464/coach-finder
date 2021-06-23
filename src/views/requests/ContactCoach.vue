<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid:!RequestValidation.email.isValid}">
        <label for="email">Email</label>
         <p v-if="!RequestValidation.email.isValid">
          {{ RequestValidation.email.errorMsg }}
        </p>
        <input
          type="email"
          id="email"
          @keyup.left="check('email')"
          @keydown.tab="check('email')"
          @input="check('email')"
          @mouseup="check('email')"
          v-model.trim="RequestValidation.email.val"
        />
       
      </div>
      <div class="form-control" :class="{invalid:!RequestValidation.message.isValid}">
        <label for="message">Message</label>
        <p v-if="!RequestValidation.message.isValid">
          {{ RequestValidation.message.errorMsg }}
        </p>
        <textarea
          name="message"
          id="message"
          rows="5"
          @keyup.left="check('message')"
          @keydown.tab="check('message')"
          @input="check('message')"
          @mouseup="check('message')"
          v-model.trim="RequestValidation.message.val"
        ></textarea>
      </div>
      <p v-if="!isValid">ooopse! you need to check your data</p>
      <base-button>Send Message</base-button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { RequestValidation } from "@/lib/Constants";
import { RequestValidationKeys } from "@/lib/Types";
import { RequestActionsTypes, routerEnum } from "@/lib/Enums";
import { IRequest } from "@/lib/Interfaces";

export default defineComponent({
  components: {
    BaseButton,
  },
  props:{
    id:{
      type:String,
      required:true,
    }
  },
  data() {
    return {
      RequestValidation,
      isValid: true,
    };
  },
  created(){
    this.RequestValidation.email.val=this.$store.getters.currentUser.email as string
  },
  methods: {
    submitForm() {
      const data:IRequest = {
        senderId:this.$store.getters.currentUser.id as string,
        receiverId:this.id,
        email: this.RequestValidation.email.val,
        message: this.RequestValidation.message.val,
      };
      //validate
      this.check("email");
      this.check("message");

      if (!this.isValid) {
        return;
      }
      //reset inputs
      this.RequestValidation.email.val=''
      this.RequestValidation.message.val=''

      //store data to request store
      this.$store.dispatch(RequestActionsTypes.SET_NEW_REQUEST,data)
      this.$router.replace(routerEnum.HOME)
    },
    check(name: RequestValidationKeys) {
      if (name === "email") {
        const email = this.RequestValidation[name].val;
        if (!email.match(/^[a-zA-Z0-9\_\-]+@[a-zA-Z]+\.[a-zA-Z]+.$/g)?.includes(email)) {
          this.RequestValidation[name].isValid = false;
          this.isValid = false;
        }else{
          this.clearValidity(name)
        }
      }
      if (name === "message") {
        if ( this.RequestValidation[name].val==='') {
          this.RequestValidation[name].isValid = false;
          this.isValid = false;
        }else{
          this.clearValidity(name)
        }
      }
      this.validate;
    },
    clearValidity(name: RequestValidationKeys) {
      this.RequestValidation[name].isValid = true;
    },
  },
  computed: {
    validate() {
      this.isValid =
        this.RequestValidation.email.isValid &&
        this.RequestValidation.message.isValid;
    },
  },
});
</script>

<style lang="scss" scoped>
.contact-form {
  margin: 1rem 0 0 0;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
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