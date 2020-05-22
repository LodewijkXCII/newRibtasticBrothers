<template>
  <div>
    <NavBar />
    <header class="homeHeader">
      <img
        src="@/assets/img/catering_foodtruck_bbq.jpg"
        alt=""
        class="homeHeader__image"
      />
      <div class="container">
        <h1>De lekkerste Spareribs</h1>
        <h2>met de foodtruck thuis, op een festival of catering</h2>
        <div class="cta">
          <router-link to="#"
            >Foodtruck <font-awesome-icon :icon="['fas', 'utensils']"
          /></router-link>
          <router-link to="#"
            >Catering <font-awesome-icon :icon="['fas', 'utensils']"
          /></router-link>
          <router-link to="#"
            >Bezorging <font-awesome-icon :icon="['fas', 'bicycle']"
          /></router-link>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <h1 class="text-center">The Ribtastic Brothers</h1>
        <h2 class="text-center">In het kort</h2>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style></style>
