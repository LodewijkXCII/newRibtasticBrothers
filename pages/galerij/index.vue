<template>
  <section>
    <ImageHeader v-bind="heading" :image="image" />

    <div class="container-fluid">
      <div class="textInfo">
        <p>
          Op bijna alle events waar we komen hebben we onze huisfotograaf Lars
          mee. Hij schiet de mooiste plaatjes waarmee we onze feestjes kunnen
          vereeuwigen. We zetten vaak een aantal plaatjes op onze socials, maar
          voor de volledige reportage moet je hier zijn. Hopelijk geven
          onderstaande foto’s een glimpse van wat wij in petto hebben.
        </p>
        <p>
          Mocht je een foto willen gebruiken mag dat, mits je ons natuurlijk
          even tagt via de bekende kanalen...
        </p>
      </div>

      <nuxt-link to="/catering" class="btn btn-primary">
        Catering
        <font-awesome-icon :icon="'utensils'" />
      </nuxt-link>
    </div>
    <div class="container">
      <div class="galleryWrapper">
        <GalleryBlock
          v-for="gallery in gallery"
          :key="gallery.id"
          :title="gallery.titel"
          :slug="gallery.slug"
          :thumbnailImage="gallery.thumbnail"
          :id="gallery.id"
          :type="gallery.type"
        />
      </div>
    </div>
  </section>
</template>

<script>
import GalleryBlock from '@/components/GalleryBlock.vue'
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  head: {
    title: 'Geweldige Galerij | The Ribtastic Brothers',
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  components: {
    GalleryBlock,
    ImageHeader,
  },
  data() {
    return {
      gallery: [],
      heading: {
        title: 'Galerij',
        subtitle: 'Plaatjes en Daadjes',
      },

      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/ribtastic_brothers_gallerij+(1).jpg',
    }
  },
  async mounted() {
    const data = await this.$axios.$get(
      'https://admin.ribtasticbrothers.nl/event-gallerijs'
    )

    this.gallery = data.map((event) => {
      let setTitel = ''
      if (event.titel) {
        setTitel = event.titel
      } else {
        setTitel = event.kalender.titel
      }
      return {
        id: event.id,
        omschrijving: event.omschrijving,
        titel: setTitel,
        thumbnail: event.thumbnail,
        afbeeldingen: event.afbeeldingen,
        slug: setTitel.toLowerCase(),
      }
    })
  },
}
</script>

<style lang="scss">
.galleryWrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1em;
  margin-bottom: 1em;
}

@media (min-width: 650px) {
  .galleryWrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
