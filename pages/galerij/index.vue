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
          even tagged via de bekende kanalen...
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
          :title="gallery.title"
          :slug="gallery.slug"
          :thumbnailImage="gallery.thumbnailImage"
          :id="gallery.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import GalleryBlock from '@/components/GalleryBlock.vue'
import ImageHeader from '@/components/ImageHeader.vue'

import axios from '@nuxtjs/axios'

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
      heading: {
        title: 'Galerij',
        subtitle: 'Plaatjes en Daadjes',
      },

      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/ribtastic_brothers_gallerij+(1).jpg',
    }
  },
  async asyncData(context) {
    return context.app.$axios
      .get('https://ribtasticbrothers.herokuapp.com/event-galleries')
      .then((res) => {
        return {
          gallery: res.data.map((ig) => {
            return {
              id: ig.id,
              title: ig.calender.title,
              slug: ig.calender.slug,
              thumbnailImage: ig.thumbnail.formats.thumbnail.url,
            }
          }),
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
