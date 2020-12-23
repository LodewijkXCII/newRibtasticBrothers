<template>
  <section>
    <div class="container gallery">
      <h1>{{ gallery.title }}</h1>
      <h2>{{ gallery.locatie }}</h2>
      <p v-if="gallery.description">{{ gallery.description }}</p>
      <n-link to="/galerij" class="btn btn-inline"
        >Terug naar het overzicht</n-link
      >

      <div class="galleryImages">
        <div
          v-for="image in gallery.galleryImages"
          class="galleryImages__img gallery"
          :key="image.id"
        >
          <a :href="image.formats.medium.url">
            <img :src="image.formats.small.url" alt />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios'

export default {
  head: {
    title: `Galerij | The Ribtastic Brothers`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  data() {
    return {
      options: {},
      index: null,
    }
  },

  asyncData(context) {
    return context.app.$axios
      .get(
        `https://ribtasticbrothers.herokuapp.com/event-gallerijs?kalender.slug=${context.params.title}`
      )
      .then((res) => {
        return {
          gallery: {
            id: res.data[0].id,
            title: res.data[0].calender.title,
            locatie: res.data[0].calender.locatie,
            galleryImages: res.data[0].images,
            description: res.data[0].description,
          },
        }
      })
  },
}
</script>

<style>
@import '@/assets/css/simplelightbox.css';

.container.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10rem;
}

.galleryImages {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
}

@media (min-width: 650px) {
  .galleryImages {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
