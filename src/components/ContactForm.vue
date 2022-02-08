<template>
  <form name="contact">
    <input type="hidden" name="form-name" value="contact" />
    <h2>Neem contact op!</h2>
    <label for="name">Naam:</label>
    <input type="text" name="name" id="name" v-model="contact.name" required />
    <label for="company">Bedrijf:</label>
    <input type="text" name="company" id="company" v-model="contact.company" />
    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      v-model="contact.email"
      required
    />
    <label for="message">Bericht:</label>
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="5"
      v-model="contact.message"
      required
    ></textarea>

    <button
      @click.prevent="sendContact"
      type="submit"
      class="btn btn-primary"
      style="max-width: 45%"
    >
      {{ buttonMsg }}
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        company: "",
        message: "",
      },
      buttonMsg: "Verstuur",
    };
  },
  methods: {
    async sendContact() {
      this.buttonMsg = "Versturen...";
      if (this.contact.name && this.contact.email)
        try {
          await axios({
            method: "post",
            url: "https://api.sendinblue.com/v3/smtp/email",
            data: {
              sender: {
                name: this.contact.name,
                email: this.contact.email,
              },
              to: [
                {
                  email: "eat@ribtasticbrothers.nl",
                  name: "The Ribtastic Brothers",
                },
              ],
              subject: "Een nieuw contact formulier is ingevuld",
              htmlContent: `<html><head></head><body><p>Hoi,</p>Er is een contact aanvraag geplaatst. Hiero kan je zien wat de vraag is:</p><p>${this.contact.message}</p></body></html>`,
            },
            headers: {
              "content-type": "application/json",
              "api-key": `${import.meta.env.PUBLIC_SIB_API_KEY}`,
            },
          });

          await axios({
            method: "post",
            url: "https://api.sendinblue.com/v3/smtp/email",
            data: {
              sender: {
                name: "The Ribtastic Brothers",
                email: "eat@ribtasticbrothers.nl",
              },
              to: [
                {
                  email: this.contact.email,
                  name: this.contact.name,
                },
              ],
              subject: "Dankjewel voor je vraag!",
              htmlContent: `<html><head></head><body><p>Hoi ${this.contact.name},</p>Dankjewel voor je intresse. We hebben de veraag in goede orde ontvangen en komen zo snel mogelijk bij je terug! Je verstuurde vraag is: </p><p>${this.contact.message}</p><p>Groetjes, The Ribttastic Brothers</p></body></html>`,
            },
            headers: {
              "content-type": "application/json",
              "api-key": `${import.meta.env.PUBLIC_SIB_API_KEY}`,
            },
          });
          const msg = "Verstuurd";
          setTimeout((this.buttonMsg = msg), 5000);
        } catch (error) {
          console.log(error);
        }
    },
  },
};
</script>

<style></style>
