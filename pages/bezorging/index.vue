<template>
  <div class="bezorging">
    <section class="bezorging__left">
      <img
        src="https://images.unsplash.com/photo-1585047668151-b281b0c89c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        alt=""
      />
    </section>
    <section class="bezorging__right">
      <h1>Comming Soon!</h1>
      <p>
        Leuk dat je interesse hebt, vinden we tof!<br />
        Er is even wat miscommunicatie ontstaan tussen ons en de Buik. We zijn
        31 juli namelijk gestopt met het leveren van onze DIY pakketten. 😓😥
      </p>
      <p>
        Dit zodat we nu wat meer tijd hebben om ons te focussen op het up and
        running krijgen van onze warme maaltijdbezorging. 🤤🍗🍔🚲
      </p>
      <p>
        Halverwege september staat de livegang gepland, en dan kunnen we je nog
        beter van dienst zijn.
      </p>
      <p>
        Vind je het goed als we je dan weer benaderen voor full experience?
      </p>
      <label for="email">Laat je email achter:</label>
      <input type="email" name="email" id="email" v-model="email" />
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="bezorgEmail()"
      >
        {{ message }}
      </button>
    </section>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
  data() {
    return {
      email: '',
      message: 'Aanmelden',
    }
  },
  methods: {
    async bezorgEmail() {
      if (this.email) {
        this.message = 'Versturen'
        try {
          response = await this.$axios.$post(
            'https://ribtasticbrothers.herokuapp.com/bezorgings',
            { email: this.email }
          )
          if (response) {
            console.log(response)
            this.message = 'Dankjewel!'
            this.email = ''
          }
        } catch (error) {
          console.error(error)
        }
      }
    },
  },
}
</script>

<style lang="scss">
.bezorging {
  &__right {
    margin: 2rem;
  }
}

@media (min-width: 650px) {
  .bezorging {
    display: grid;
    grid-template-columns: 45% 55%;
    height: 100vh;
    width: 100%;

    &__left {
      overflow: hidden;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: auto;
        min-height: 100%;
        width: 100%;
      }
    }
    &__right {
      margin: auto;
      max-width: 500px;

      label {
        font-weight: 700;
      }
    }
  }
}
</style>
