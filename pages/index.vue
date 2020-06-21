<template>
  <div>
    <header class="homeHeader">
      <img
        src="@/assets/img/catering_foodtruck_bbq-min.jpg"
        alt=""
        class="homeHeader__image"
      />
      <div class="container fullImageHeader">
        <h1>De lekkerste Spareribs</h1>
        <h2>met de foodtruck thuis, op een festival of catering</h2>
        <div class="cta">
          <router-link to="#" class="btn btn-primary"
            >Foodtruck <font-awesome-icon :icon="'utensils'"
          /></router-link>
          <router-link to="catering" class="btn btn-primary"
            >Catering <font-awesome-icon :icon="'utensils'"
          /></router-link>
          <router-link to="#" class="btn btn-primary"
            >Bezorging <font-awesome-icon :icon="'bicycle'"
          /></router-link>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <h1 class="text-center">The Ribtastic Brothers</h1>
        <h2 class="text-center">In het kort</h2>
        <KeyValue />
      </div>
    </main>
    <section class="events">
      <!-- <img
        src="@/assets/img/catering_spareribs_ribtastic_min.jpg"
        alt=""
        class="homeHeader__image"
      /> -->
      <div class="container">
        <h1>Agenda 2020</h1>
        <Events />
      </div>
    </section>
    <section class="partners">
      <div class="container">
        <h1>Onze Partners</h1>
        <div class="partnersOverview">
          <div class="partner" v-for="partner in partners" :key="partner.id">
            <img
              :src="require(`~/assets/img/partners/${partner.logo}`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import KeyValue from '~/components/KeyValue.vue'
import Events from '~/components/Events.vue'

export default {
  head: {
    title: 'The Ribtastic Brothers - De lekkerste spareribs!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }]
  },
  name: 'HomePage',
  components: {
    KeyValue,
    Events
  },

  data() {
    return {
      partners: [
        //TODO partners in de DB
        { name: 'Brouwerij Noordt', logo: 'brouwerij_noordt.png' },
        { name: 'El Parador', logo: 'el_parador.png' }
      ]
    }
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: $ft-lato;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body {
  background-color: #000000;
  font-weight: normal;
  color: #ffffff;
}

.container {
  max-width: $max-width;
  margin: auto 1em;
}
@media (min-width: 650px) {
  .container {
    margin: auto;
    padding: 3em 0;
  }
}

a {
  text-decoration: none;
  color: $primary-color;
  transition: 0.5s;

  &:hover {
    color: #697564;
  }
}

img {
  height: auto;
  width: 100%;
}

.homeHeader {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 60vh;
  background: rgba(0, 0, 0, 0.5);

  .homeHeader__image {
    position: absolute;
    z-index: -10;
    left: -35%;
    width: auto;
    height: 100%;
    overflow: hidden;
    background-size: cover;
  }

  @media (min-width: 650px) {
    .homeHeader__image {
      height: auto;
      top: -200px;
      left: 0;
    }
  }

  .fullImageHeader {
    margin: auto 1em;

    h1 {
      font-size: 4.5em;
      font-weight: 400;
      line-height: 0.9;
      text-align: right;
    }

    h2 {
      font-size: 1.9em;
      font-weight: 400;
      line-height: 0.9;
      text-align: right;
      color: #fff;
    }

    @media (min-width: 650px) {
      h1 {
        font-size: 10em;
      }
      h2 {
        font-size: 4em;
      }
    }

    .cta {
      display: none;
    }

    @media (min-width: 650px) {
      .cta {
        display: flex;
        justify-content: flex-end;
        margin: 3em 0 1em;

        a {
          margin: 0 0 0 3em;
        }
      }
    }
  }
  @media (min-width: 650px) {
    .fullImageHeader {
      margin: auto;
    }
  }
}

@media (min-width: 650px) {
  .homeHeader {
    height: 90vh;
  }
}

main {
  margin-top: 2.5em;
}

@media (min-width: 650px) {
  main {
    margin-top: 1em;
  }
}

.wrapper-1-2 {
  display: grid;
  grid-template-columns: 1fr;
}

.textInfo {
  margin-top: 1.5em;
}

@media (min-width: 650px) {
  .wrapper-1-2 {
    grid-template-columns: 2fr 3fr;
    grid-gap: 1.8em;
  }
}

.partnersOverview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin: 1em;

  .partner {
    background: $off-black-color;
    width: 100%;
    height: 100%;
    display: flex;

    img {
      width: 80px;
      margin: auto;
      justify-self: center;
      padding: 1em;
    }
  }
}

@media (min-width: 650px) {
  .partnersOverview {
    grid-template-columns: repeat(5, 1fr);

    .partner {
      img {
        width: 150px;
      }
    }
  }
}
</style>
