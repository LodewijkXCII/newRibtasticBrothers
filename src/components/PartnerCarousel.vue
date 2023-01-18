<template>
  <h2>PartnerCarousel</h2>
  <div class="carousel--container">
    <div
      v-for="(partner, index) in partners"
      :key="partner.id"
      class="carousel--item"
    >
      <img :src="partner.logo.url" alt="" />
      <span>{{ partner.logo.url }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      partners: [],
    };
  },
  async created() {
    const { data } = await axios.get(
      "https://admin.ribtasticbrothers.nl/catering-partners?_sort=bedrijf"
    );

    this.partners = data;
  },
  async mounted() {},
};
</script>

<style lang="scss">
.carousel {
  &--container {
    display: flex;
  }

  &--item {
    width: 500px;
    background: lightgray;
    padding: 0.75rem;

    img {
      width: 100%;
    }
  }
}
</style>
