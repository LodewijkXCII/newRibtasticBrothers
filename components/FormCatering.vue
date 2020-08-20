<template>
  <form class="formCatering">
    <div v-if="step === 1">
      <h2>Vraag een offerte op</h2>
      <label for="option">Gewenst pakket: *</label>
      <!-- TODO Options inladen + selected binden -->
      <select name="option" id="option" v-model="registration.option" required>
        <option value="just-meat">Just meat</option>
        <option value="happy-grillin" selected>Happy Grillin</option>
        <option value="all-in">All-In</option>
        <option value="custom">Catering op Maat</option>
      </select>
      <label for="date">Gewenste datum: *</label>
      <input
        type="date"
        name="date"
        id="date"
        v-model="registration.date"
        required
      />
      <label for="people">Aantal personen: *</label>
      <input
        type="number"
        name="people"
        id="people"
        min="1"
        value="1"
        required
        v-model.number="registration.people"
      />
      <button class="btn btn-primary" @click.prevent="next()">Aanvragen</button>
    </div>
    <div v-if="step === 2">
      <h4>
        Tof dat je intresse hebt, als je de laatste info invult komen we zo snel
        mogelijk bij je terug!
      </h4>
      <label for="name">Naam: *</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="registration.name"
        required
      />
      <label for="email">Email: *</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="registration.email"
        required
      />
      <label for="company">Bedrijf:</label>
      <input
        type="text"
        name="company"
        id="company"
        v-model="registration.company"
      />
      <button class="btn btn-line" @click.prevent="prev()">Terug</button>
      <button type="submit" class="btn btn-primary" @click.prevent="submit()">
        Versturen
      </button>
    </div>
  </form>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
  data() {
    return {
      step: 1,
      registration: {
        option: null,
        date: null,
        people: 1,
        name: '',
        email: '',
        company: null,
      },
    }
  },
  methods: {
    prev() {
      this.step -= 1
    },
    next() {
      this.step += 1
    },
    submit() {
      if (this.registration.name && this.registration.email)
        try {
          this.$axios
            .$post(
              'https://ribtasticbrothers.herokuapp.com/email',
              // 'https://cors-anywhere.herokuapp.com/https://ribtasticbrothers.herokuapp.com/email',
              {
                to: 'loekzweers@gmail.com',
                from: 'eat@ribtasticbrothers.nl',
                replyTo: 'eat@ribtasticbrothers.nl',
                subject: 'Een nieuwe offerte aanvraag!',
                html: `<h1>Er is een nieuwe aanvraag van ${this.registration.name}</h1>, 
                <h2>De gegevens zijn als volgt:</h2>

                <ul>
                <li>Gewenste pakket: ${this.registration.option}</li>
                <li>Gewenste datum: ${this.registration.date}</li>
                <li>Aantal personen: ${this.registration.people}</li>
                <li>Naam: ${this.registration.name}</li>
                <li>Email: ${this.registration.email}</li>
                <li>Bedrijf: ${this.registration.company}</li>
                </ul>
                `,
              }
            )
            .then(function (response) {
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            })
          console.log('submitted')
        } catch (error) {
          console.log(error)
        }
    },
  },
}
</script>

<style lang="scss">
.formCatering {
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

  // label {
  //   margin-bottom: 0.35em;
  // }
  // input,
  // select {
  //   margin-bottom: 1em;
  //   margin-top: 0.5em;
  //   display: block;
  //   background: #212121;
  //   border: 1px solid #4a6053;
  //   border-radius: 10px;
  //   padding: 0.8em;
  //   color: #fff;
  //   font-family: $ft-lato;
  //   width: 100%;
  // }

  button {
    margin: 1em 0;
    display: inline;
  }

  // input:focus,
  // select:focus {
  //   box-shadow: 0 0 10px $primary-color, 0 0 2px #4a6053;
  //   outline: none;
  // }
}

@media (min-width: 650px) {
  .formCatering {
    margin: 2em;
    grid-row: 1;

    button {
      max-width: 50%;
      margin: 0;
      display: inline;
    }
  }
}
</style>
