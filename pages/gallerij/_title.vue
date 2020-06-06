<template>
  <section>
    <ImageHeader />

    <div class="container">
      <h1>{{ gallery.title }}</h1>
      <h2>{{ gallery.locatie }}</h2>
      <n-link to="/gallerij">Terug naar het overzicht</n-link>

      <div class="galleryImages">
        <div
          v-for="image in gallery.gallery"
          class="galleryImages__img"
          :key="image.id"
        >
          <img
            :src="`http://localhost:1337${image.formats.small.url}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios'
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  components: {
    ImageHeader
  },
  data() {
    return {}
  },

  asyncData(context) {
    return context.app.$axios
      .get(`http://localhost:1337/events?title=${context.params.title}`)
      .then(res => {
        return {
          gallery: {
            id: res.data[0].id,
            title: res.data[0].title,
            locatie: res.data[0].locatie,
            gallery: res.data[0].event_gallery.images
          }
        }
      })
  }
}
</script>

<style lang="scss">
.galleryImages {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.6em;
}
</style>
