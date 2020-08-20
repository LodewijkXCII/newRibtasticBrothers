<template>
  <section>
    <ImageHeader v-bind="heading" :image="image" />+
    <div class="container-fluid">
      <h1>Service</h1>
      <div class="textInfo">
        <p>
          Heb je een vraag, of goed idee? Bel of laat een berichtje achter, we
          komen namelijk graag in contact.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="wrapper">
        <form @submit.prevent="sendContact()">
          <h2>Neem contact op!</h2>
          <label for="name">Naam:</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="contact.name"
            required
          />
          <label for="company">Bedrijf:</label>
          <input
            type="text"
            name="company"
            id="company"
            v-model="contact.company"
          />
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
            v-model="message"
          ></textarea>

          <button type="submit" class="btn btn-primary" style="max-width: 45%;">
            {{ buttonMsg }}
          </button>
        </form>
        <div class="belInfo">
          <font-awesome-icon icon="phone" />
          <h2>Bel ons!</h2>

          <p>
            We staan altijd klaar om te antwoorden op alle prangende vragen!
          </p>
          <h3>06-18676722</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageHeader from '@/components/ImageHeader.vue'
import axios from '@nuxtjs/axios'

export default {
  head: {
    title: 'Overheerlijke smaak | The Ribtastic Brothers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  components: {
    ImageHeader,
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        company: '',
        message: '',
      },
      buttonMsg: 'Verstuur',
      heading: {
        title: 'Service',
        subtitle: 'Laat van je horen!',
      },
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/ribtastic_brothers_contact+(1).jpg',
    }
  },
  methods: {
    async sendContact() {
      this.buttonMsg = 'Versturen...'
      if (this.contact.name && this.contact.email)
        try {
          const contactSend = await this.$axios.$post(
            'https://ribtasticbrothers.herokuapp.com/email',
            // 'https://cors-anywhere.herokuapp.com/https://ribtasticbrothers.herokuapp.com/email',
            {
              to: 'eat@ribtasticbrothers.nl',
              from: 'eat@ribtasticbrothers.nl',
              replyTo: 'eat@ribtasticbrothers.nl',
              subject: 'Een nieuwe contact formulier aanvraag!',
              html: `<h1>Er is een nieuwe contactformulier van ${this.contact.name}</h1>,
                <h2>De gegevens zijn als volgt:</h2>
                <p>${this.contact.message}</p>
                <ul>
                <li>Naam: ${this.contact.name}</li>
                <li>Email: ${this.contact.email}</li>
                <li>Bedrijf: ${this.contact.company}</li>
                </ul>
                `,
            }
          )

          this.buttonMsg = 'Verstuurd'
        } catch (error) {
          console.log(error)
        }
    },
  },
}
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;

  margin: 2em 0;
  padding: 1.5em 2.5em;

  background: $off-black-color;
  border: 2px solid darken($color: $off-black-color, $amount: 3);
  border-radius: 15px;
  font-size: 0.75em;

  h2 {
    margin-bottom: 0.7em;
  }

  label {
    margin-bottom: 0.35em;
  }
  input,
  select,
  textarea {
    margin-bottom: 1em;

    background: #212121;
    border: 1px solid #4a6053;
    border-radius: 10px;
    padding: 0.8em;
    color: #fff;
    font-family: $ft-lato;
  }
  input:focus,
  select:focus,
  textarea:focus {
    box-shadow: 0 0 10px $primary-color, 0 0 2px #4a6053;
    outline: none;
  }

  button {
    margin: 0;
    margin-right: 2em;
  }
}

@media (min-width: 650px) {
  form {
    margin: 2em;

    button {
      max-width: 50%;
      margin: auto;
    }
  }
}

.belInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5em 5em;
  background: #1e1e1e;
  border: 2px solid #161616;
  border-radius: 15px;
  font-size: 0.75em;
  margin: 2em;

  > * {
    margin: 1rem 0;
  }

  svg {
    font-size: 4em;
    margin: 0 auto 1em;
    color: $primary-color;
  }

  h3 {
    font-size: 2rem;
    text-align: center;
  }
}
</style>
