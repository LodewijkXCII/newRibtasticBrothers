<template>
  <div>
    <ImageHeader v-bind="heading" :image="image" />
    <div class="container-fluid">
      <p>
        Een belangrijk onderdeel van een gezond en geluk leven is het hebben van
        “meaningfull relationships”. En zeg nu eerlijk, wat is nu een beter
        moment om lekker te socializen? Precies, lekker tijdens het eten. In
        veel culturen is men zelfs niets anders gewend; eten doe je samen.
      </p>
      <p>
        Tijdens het eten onderhouden we onze vriendschappen en familierelaties.
        Wij geloven daarom in het geluk van gezamenlijk eten en willen niets
        liever dan mensen samenbrengen met onze unieke BBQ creaties.
      </p>
      <p>Waar wacht je nog op? Invite your friends and organize a BBQ!</p>
    </div>
    <div class="smallGallery">
      <!-- TODO Duurzaamheid images toevoegen. (image gallery's aanmaken strapi?) -->
      <div v-for="image in images" :key="image.index">
        <img :src="require(`@/assets/img/${image.src}`)" :alt="image.alt" />
      </div>
    </div>
    <div class="container-fluid">
      <h2>Duurzaamheid</h2>
      <p>
        Samen genieten, is tevens samen zorgdragen. Zorgen voor het opruimen,
        zorgen voor de afwas, zorgen voor het minimaliseren van je afval en het
        beperken van jouw impact op het milieu. Wij van Ribtastic Brothers,
        dragen ons steentje hierin bij. Duurzaamheid zit diep in onze vezels.
        Alles wat we doen, doen we met een duurzame gedachte.
      </p>
      <p>
        Alle producten en materialen die we gebruiken zijn zoveel mogelijk
        duurzaam. Dat zie je terug in de materialen die we hebben gebruikt voor
        het maken van onze fiets, in de biologisch afbreekbare verpakkingen en
        de CO2 die we jaarlijks compenseren.
      </p>
      <p>
        Wij nemen de verantwoordelijkheid om duurzaam te ondernemen, zodat we
        samen nog lang kunnen genieten van onze aardkloot.
      </p>
      <div class="btn btn-line">
        <nuxt-link to="catering">Catering</nuxt-link>
      </div>
    </div>
    <!-- <SmallGallery :images="images" /> -->
  </div>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  head: {
    title: 'Samen Duurzaam | The Ribtastic Brothers',

    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  name: 'Saus',
  components: {
    SmallGallery,
    ImageHeader,
  },
  data() {
    return {
      heading: {
        title: 'Samen',
        subtitle:
          'May you always be surrounded by\ngood friends and awesome BBQ',
      },
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/ribtastic_brothers_samen.jpg',
      images: [
        { src: 'catering_foodtruck_spareribs-min.jpg', alt: 'header1' },
        { src: 'header_1.jpg', alt: 'header2' },
        { src: 'header_2.jpg', alt: 'header3' },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
