<template>
  <section>
    <ImageHeader />

    <div class="container">
      <h1>Gallerij</h1>
      <h2>Plaatjes en Daadjes</h2>
      <div class="textInfo">
        <p>
          Op bijna alle events waar we komen hebben we onze huisfotograaf Lars
          mee. Hij schiet de mooiste plaatjes die wij maar al te graag op onze
          socials zetten. We hebben echter alleen ruimte voor zoveel foto's
          online. Dus willen we graag de overige foto's hier plaatsen. Mocht je
          een foto willen gebruiken mag dat uiteraard. We zouden het leuk vinden
          als je ons dat tags via de bekende kanalen.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat
          dolorem atque consectetur modi minima praesentium, odio similique
          quidem ipsam quas eos odit repellat. Libero itaque, corporis saepe cum
          enim eos consectetur rem molestias, nihil voluptates esse mollitia sit
          sunt animi reiciendis tempora, possimus dolor quisquam aperiam.
          Laborum, delectus ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          laudantium adipisci quam maiores nostrum beatae!
        </p>
      </div>

      <nuxt-link to="/catering" class="btn btn-primary">
        Bekijk de cateringsmogelijkheden
        <font-awesome-icon :icon="'utensils'" />
      </nuxt-link>
      <div class="galleryWrapper">
        <GalleryBlock
          v-for="gallery in gallery"
          :key="gallery.id"
          :title="gallery.title"
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
  components: {
    GalleryBlock,
    ImageHeader
  },
  data() {
    return {}
  },
  asyncData(context) {
    return context.app.$axios
      .get('http://localhost:1337/event-galleries')
      .then(res => {
        return {
          gallery: res.data.map(ig => {
            return {
              id: ig.id,
              title: ig.agenda.title,
              thumbnailImage: ig.thumbnail.formats.thumbnail.url
            }
          })
        }
      })
  }
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
