<template>
<div class="page">
  <div class="container">
    <div class="content">
      <template v-if="showResult">
        <template v-if="success">
          <h2 v-scrollanimation >{{ $t('contact.successHeader') }}</h2>
          <p v-scrollanimation >{{ $t('contact.successMessage') }}</p>
        </template>
        <template v-else>
          <h2 v-scrollanimation >{{ $t('contact.errorHeader') }}</h2>
          <p v-scrollanimation >{{ $t('contact.errorMessage') }}</p>
        </template>
      </template>
    <template v-else>
      <h2 v-scrollanimation >{{ $t("contact.header") }}</h2>
      <p v-scrollanimation  v-html="$t('contact.paragraph')"></p>
      <form v-scrollanimation  id="contact-form" @submit="sendMail">
        <div class="fields">
          <div class="field half">
            <label for="name">{{ $t("contact.name") }}</label>
            <input required type="text" v-model="name" id="name" />
          </div>
          <div class="field half">
            <label for="email">{{ $t("contact.email") }}</label>
            <input required type="email" v-model="email" id="email" />
          </div>
          <div class="field">
            <label for="message">{{ $t("contact.message") }}</label>
            <textarea required v-model="message" id="message" rows="4"></textarea>
          </div>
        </div>
        <input type="submit" class="btn primary" />
        <input type="reset" class="btn lowkey"/>
      </form>
    </template>

    <div class="background"/>

    </div>
  </div>
</div>
</template>

<script>
const axios = require('axios');
export default {
  name: "ContactPage",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showResult: false,
      success: false,
    }
  },
  methods: {
    async sendMail(e) {
      e.preventDefault();
      let body = {
        email: this.email,
        name: this.name,
        message: this.message,
      };

      const response = await axios.request({
            method: 'POST',
            url: 'https://jencoding.com/api/mail',
            data: body
          }
      );

      if (response.data.success) {
        this.showResult = true;
        this.success    = true;
      } else {
        this.showResult = true;
        this.success    = false;
        console.log(response.data)
      }
    }
  }
}

</script>

<style scoped>
  .container .background {
    background-image: url('~@/assets/floral_pattern.webp');
    background-position: 10% center;

  }

  @media only screen and (min-width: 560px) {
    form .field.half {
      width: calc(50% - 10px);
      display: inline-block;
    }

    form .field.half:nth-child(2) {
      margin-left: 20px;
    }
  }
  form {
    position: relative;
  }
  label {
    display: block;
    font-size: 1.2pc;
  }

  textarea {
    max-height: 200px;
  }

  input[type=text], input[type=email], select, textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid var(--font-color);
    border-radius: 4px;
    box-sizing: border-box;
    background: rgba(0,0,0,0.2);
    color: var(--font-color);
    font-size: 16px;
    font-family: var(--paragraph-font-family);
  }

  /* Change the white to any color */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active
  {
    background-color: transparent !important;
    -webkit-box-shadow: 0 0 0 30px rgba(0,0,0,0.2) inset !important;
    -webkit-text-fill-color: var(--font-color) !important;
  }

</style>
