<template>
  <section>
    <div class="container">
      <h1>{{ gallery.title }}</h1>
      <h2>{{ gallery.locatie }}</h2>
      <p>{{ gallery.description }}</p>
      <n-link to="/gallerij" class="btn btn-inline">Terug naar het overzicht</n-link>

      <div class="galleryImages">
        <div v-for="image in gallery.gallery" class="galleryImages__img gallery" :key="image.id">
          <a :href="image.formats.large.url">
            <img :src="image.formats.thumbnail.url" alt />
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
		title: 'Overheerlijke smaak | The Ribtastic Brothers',
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
				`https://ribtasticbrothers.herokuapp.com/events?title=${context.params.title}`
			)
			.then((res) => {
				return {
					gallery: {
						id: res.data[0].id,
						title: res.data[0].title,
						locatie: res.data[0].locatie,
						gallery: res.data[0].event_gallery.images,
						description: res.data[0].event_gallery.description,
					},
				}
			})
	},
}
</script>

<style>
@import '@/assets/css/simplelightbox.css';
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
