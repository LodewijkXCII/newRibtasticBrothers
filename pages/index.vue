<template>
  <div>
    <header class="homeHeader">
      <!-- <img
        src="@/assets/img/catering_foodtruck_bbq-min.jpg"
        alt
        class="homeHeader__image"
      /> -->
      <div class="container fullImageHeader">
        <h1>De lekkerste Spareribs</h1>
        <h2>Thuis, op een festival of catering</h2>
        <div class="cta">
          <router-link to="catering" class="btn btn-primary">
            Catering
            <font-awesome-icon :icon="'utensils'" />
          </router-link>
          <a
            href="https://bestellen.ribtasticbrothers.nl/"
            class="btn btn-primary"
          >
            Bezorging
            <font-awesome-icon :icon="'bicycle'" />
          </a>
        </div>
      </div>
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </header>
    <main>
      <!-- <RiderGezocht /> -->
      <div class="container">
        <h1 class="text-center">The Ribtastic Brothers</h1>
        <h2 class="text-center">In het kort</h2>
        <KeyValue />
      </div>
    </main>
    <section class="events">
      <div class="container">
        <h1>Agenda {{ new Date().getFullYear() }}</h1>
        <Events />
      </div>
    </section>
    <section class="partners">
      <div class="container">
        <h1>Onze Partners</h1>
        <div class="partnersOverview">
          <div class="partner" v-for="partner in partners" :key="partner.id">
            <a :href="partner.url" target="_blank">
              <img
                :src="require(`~/assets/img/partners/${partner.logo}`)"
                alt
              />
            </a>
          </div>
          <div class="partner__last">
            <nuxt-link to="contact">
              <p>Ook graag samenwerken? Klik hier om contact op te nemen</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import KeyValue from '~/components/KeyValue.vue'
import Events from '~/components/Events.vue'
import RiderGezocht from '~/components/RiderGezocht.vue'

export default {
  head: {
    title: 'The Ribtastic Brothers - De lekkerste spareribs!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'De beste spareribs van de barbecue voor thuis of een festival. Catering met de speciale BBQ-bakfiets mogelijk in all-in of eigen keuze menu!',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  name: 'HomePage',
  components: {
    KeyValue,
    Events,
    RiderGezocht,
  },

  data() {
    return {
      partners: [
        {
          name: 'Brouwerij Noordt',
          logo: 'brouwerij_noordt.png',
          url: 'https://www.brouwerijnoordt.nl',
        },
        {
          name: 'Snoei Salades',
          logo: 'snoeisaladslogo.png',
          url: 'https://www.snoeisalads.nl/',
        },
      ],
    }
  },
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
  line-height: 1.75;
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

@media (min-width: 650px) {
  html {
    font-size: 19px;
    line-height: 1.75;
  }
}

.container {
  max-width: $max-width;
  margin: auto 1em;
  padding: 1em 0;

  &-fluid {
    max-width: 750px;
    margin: auto;
    padding: 5em 1em;
  }
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;
}
@media (min-width: 650px) {
  .container {
    margin: auto;
    padding: 3em 0;

    &-fluid {
      padding: 3em 0;
    }
  }
  .wrapper {
    grid-template-columns: 1fr 1fr;
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
  display: block;
}

.homeHeader {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  &::after {
    content: '';
    width: 100%;
    background: url(https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/catering_foodtruck_bbq-min.jpg);
    background-attachment: fixed;
    height: 100vh;
    opacity: 0.85;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  // .homeHeader__image {
  //   position: absolute;
  //   z-index: -10;
  //   left: -35%;
  //   width: auto;
  //   height: 100%;
  //   overflow: hidden;
  //   background-size: cover;
  // }

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
        font-size: 8em;
      }
      h2 {
        font-size: 3em;
      }
    }

    .cta {
      margin: 2em 0;
    }

    @media (min-width: 650px) {
      .cta {
        display: inline-flex;
        width: 100%;
        justify-content: flex-end;

        a {
          margin: 0;
          margin-left: 1.5em;
          font-size: 0.65rem;
        }
      }
    }
  }

  .scroll-downs {
    position: absolute;
    right: 0;
    bottom: 30px;
    left: 0;
    margin: 0 auto;
    width: 34px;
    height: 55px;
  }
  .mousey {
    width: 3px;
    padding: 10px 15px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
  }
  .scroller {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }

  @media (min-width: 650px) {
    .fullImageHeader {
      margin: auto auto 0;
    }
  }

  @media (min-width: 1400px) {
    .fullImageHeader {
      margin: auto;
    }
  }
}

@media (min-width: 650px) {
  .homeHeader {
    height: 100vh;

    .homeHeader__image {
      height: auto;
      top: -150px;
      left: 0;
    }
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
  margin-bottom: 2rem;
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
.partners {
  margin: 2rem 0;
}
.partnersOverview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin: 2rem 0;

  .partner {
    background: $off-black-color;
    width: 100%;
    height: 100%;
    display: flex;
    a {
      margin: auto;
      justify-self: center;
      padding: 1em;
      img {
        width: 80px;

        &:hover {
          transform: scale(1.05);
          transition: 0.5s;
        }
      }
    }
  }
  .partner__last {
    background: $off-primary-color;
    padding: 0.4em;
    display: flex;
    a {
      text-align: center;
      align-self: center;
      color: $secondary-color;
      p {
        font-size: 0.75rem;
        margin: 0 0.5rem;
      }
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

section.events {
  position: relative;
  margin-top: 2em;
  background: rgba(0, 0, 0, 0.5);
  background: url(https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/catering_spareribs_ribtastic_min_552c73a808.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // &::after {
  //   content: '';
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //   background: rgba(0, 0, 0, 0.5);
  // }

  //   img {
  //     position: absolute;
  //     width: 100%;
  //     object-fit: cover;
  //     height: 100%;
  //     z-index: -100;
  //   }

  h1 {
    padding-top: 1em;
  }
}
</style>
