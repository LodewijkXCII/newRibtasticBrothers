<template>
  <form class="formCatering">
    <div v-if="step === 1">
      <h2>Vraag een offerte op</h2>
      <h4 style="color: white">
        Op dit moment is onze email service offline. Neem contact op via
        06-18676722 voor een offerte!
      </h4>
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
        <!-- Tof dat je intresse hebt, als je de laatste info invult komen we zo snel
        mogelijk bij je terug!  -->
        Op dit moment is onze email service offline. Neem contact op via
        06-18676722 voor een offerte!
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
          /*
          Eerst de submit naar Google Analytics
          */

          this.$axios
            .$post(
              // 'https://ribtasticbrothers.herokuapp.com/email',
              'https://cors-anywhere.herokuapp.com/https://ribtasticbrothers.herokuapp.com/email',
              {
                to: 'eat@ribtasticbrothers.nl',
                from: 'contact@ribtasticbrothers.nl',
                replyTo: 'eat@ribtasticbrothers.nl',
                subject: 'Een nieuwe contact formulier aanvraag!',
                html: `<h1>Er is een nieuwe catering aanvraag van ${this.registration.name}</h1>
                <h2>De gegevens zijn als volgt:</h2>
                
                <ul>
                <li>Naam: ${this.registration.name}</li>
                <li>Email: ${this.registration.email}</li>
                <li>Bedrijf: ${this.registration.company}</li>
                <li>Datum: ${this.registration.date}</li>
                <li>Optie: ${this.registration.option}</li>
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

  button {
    margin: 1em 0;
    display: inline;
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
