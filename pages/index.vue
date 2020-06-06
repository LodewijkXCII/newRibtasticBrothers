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
