<template>
  <form class="formCatering">
    <div class="formCatering__First">
      <h2>Vraag een offerte op</h2>
      <label for="option">Gewenst pakket:</label>
      <select name="option" id="option" v-model="contact_option">
        <option value="just-meat">Just meat</option>
        <option value="happy-grillin" selected>Happy Grillin</option>
        <option value="all-in">All-In</option>
        <option value="custom">Catering op Maat</option>
      </select>
      <label for="date">Gewenste datum:</label>
      <input type="date" name="date" id="date" v-model="contact_date" />
      <label for="people">Aantal personen:</label>
      <input
        type="number"
        name="people"
        id="people"
        min="1"
        v-model.number="contact_people"
      />
      <button type="button" class="btn btn-primary" @click="next()">
        Aanvragen
      </button>
    </div>
    <div :class="step !== 2 ? '' : 'show'" class="formCatering__Second">
      <h4>Vul de laatste info in en we komen zo snel mogelijk bij je terug!</h4>
      <label for="name">Naam:</label>
      <input type="text" name="name" id="name" v-model="contact_name" />
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" v-model="contact_email" />
      <label for="email">Telefoonnummer:</label>
      <input type="text" name="phone" id="phone" v-model="contact_phone" />
      <label for="company">Bedrijf:</label>
      <input
        type="text"
        name="company"
        id="company"
        v-model="contact_company"
      />
      <button class="btn btn-line" @click.prevent="prev()">Terug</button>
      <button class="btn btn-primary" @click.prevent="submit()">
        Versturen
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      step: 1,
      contact_option: null,
      contact_date: null,
      contact_people: 1,
      contact_name: "",
      contact_email: "",
      contact_company: null,
      contact_phone: "",
    };
  },
  methods: {
    prev() {
      this.step -= 1;
    },
    next() {
      this.step += 1;
    },
    async submit() {
      const axiosConfig = {
        headers: {
          "content-type": "application/json",
          "api-key": `${import.meta.env.PUBLIC_SIB_API_KEY}`,
        },
      };
      if (this.contact_name && this.contact_email)
        try {
          await axios.post(
            "https://api.sendinblue.com/v3/smtp/email",
            {
              sender: {
                name: this.contact_name,
                email: this.contact_email,
              },
              to: [
                {
                  email: "eat@ribtasticbrothers.nl",
                  name: "The Ribtastic Brothers",
                },
              ],
              subject: "Een nieuwe catering aanvraaag!",
              htmlContent: `<html><head></head><body><p>Hoi,</p>Er is een catering aanvraag geplaatst. Hiero kan je zien wat de gegevens zijn:</p>
              <p>
              <ul>
                <li>${this.contact_name}</li>
                <li>${this.contact_phone}</li>
                <li>${this.contact_email}</li>
                <li>${this.contact_company}</li>
                <li>${this.contact_option}</li>
                <li>${this.contact_people}</li>
                <li>${this.contact_date}</li>
              </ul>
              
              </body></html>`,
            },
            axiosConfig
          );
          console.log("hello world");
        } catch (error) {
          console.log(error);
        }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/config.scss";

.formCatering {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2em 0;
  padding: 1.5em 2.5em;
  height: 100%;
  background: $off-black-color;
  border: 2px solid darken($color: $off-black-color, $amount: 3);
  border-radius: 15px;
  font-size: 0.75em;
  z-index: 2;

  h2 {
    margin-bottom: 0.7em;
  }

  button {
    margin: 1em 0;
    display: inline;
  }

  &__First {
    z-index: 2;
  }

  &__Second {
    position: absolute;

    background: inherit;
    padding: inherit;
    width: 100%;
    height: 95%;
    top: auto;
    border-radius: inherit;
    transform: translateX(-5%);
    opacity: 0;
    bottom: auto;
  }
  .show {
    transition: transform 500ms ease-in-out, opacity 500ms;
    transform: translateX(88%);
    opacity: 1;
  }
}

@media (min-width: 650px) {
  .formCatering {
    margin: 2em;
    grid-row: 1;

    button {
      max-width: 100%;
      margin: 0;
      display: inline;
    }
  }
}
</style>
