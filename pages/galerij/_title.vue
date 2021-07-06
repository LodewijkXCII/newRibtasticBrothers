<template>
  <section>
    <div class="container gallery">
      <h1>{{ event.titel }}</h1>
      <h2 v-show="event.locatie">{{ event.locatie }}</h2>
      <p v-show="event.omnschrijving">{{ event.omnschrijving }}</p>
      <n-link to="/galerij" class="btn btn-inline">
        Terug naar het overzicht
      </n-link>

      <div class="galleryImages">
        <div
          v-for="image in event.afbeeldingen"
          class="galleryImages__img gallery"
          :key="image.id"
        >
          <a :href="image.formats.medium.url">
            <img :src="image.formats.small.url" :alt="image.name" />
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
      event: {},
    }
  },
  async created() {
    const data = await this.$axios.$get(
      `https://ribtasticbrothers.herokuapp.com/event-gallerijs?slug=${this.$route.params.title}`
    )
    this.event = data[0]
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
