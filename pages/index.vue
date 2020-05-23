<template>
  <div>
    <header class="homeHeader">
      <img
        src="@/assets/img/catering_foodtruck_bbq.jpg"
        alt=""
        class="homeHeader__image"
      />
      <div class="container fullImageHeader">
        <h1>De lekkerste Spareribs</h1>
        <h2>met de foodtruck thuis, op een festival of catering</h2>
        <div class="cta">
          <router-link to="#"
            >Foodtruck <font-awesome-icon :icon="'utensils'"
          /></router-link>
          <router-link to="#"
            >Catering <font-awesome-icon :icon="'utensils'"
          /></router-link>
          <router-link to="#"
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
        src="@/assets/img/catering_spareribs_ribtastic.jpg"
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
          <div class="partner" v-for="partner in partners" :key="partner">
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
  components: {
    KeyValue,
    Events
  },
  data() {
    return {
      partners: [
        { name: 'Brouwerij Noordt', logo: 'brouwerij_noordt.png' },
        { name: 'El Parador', logo: 'el_parador.png' }
      ]
    }
  }
}
</script>

<style></style>
