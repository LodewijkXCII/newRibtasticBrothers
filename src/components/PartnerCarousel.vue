<template>
  <h2>PartnerCarousel</h2>
  <div v-for="(partner, index) in partners" :key="partner.id">
    <h1>{{ partner.bedrijf }}</h1>
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
};
</script>
<style lang=""></style>
