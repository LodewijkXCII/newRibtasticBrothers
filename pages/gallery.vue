<template>
  <div>
    <div class="imgHeader">
      <img
        src="@/assets/img/catering_foodtruck_spareribs-min.jpg"
        alt=""
        class="imgHeader__image"
      />
    </div>
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

      <nuxt-link to="catering" class="btn btn-primary"
        >Bekijk de cateringsmogelijkheden
        <font-awesome-icon :icon="'utensils'" />
      </nuxt-link>

      <div class="galleryWrapper">
        <div class="galleryPost" v-for="gallery in gallery" :key="gallery">
          <nuxt-link :to="gallery.link">
            <img
              v-bind:src="gallery.thumbnail"
              v-bind:alt="gallery.title"
              class="galleryPost__img"
            />
            <div class="galleryPost__body">
              <h3 class="galleryPost__title">{{ gallery.title }}</h3>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        {
          title: 'RSC Lustrum',
          thumbnail: 'https://source.unsplash.com/random/350x230',
          link: '/#'
        },
        {
          title: 'Catering huwelijk',
          thumbnail: 'https://source.unsplash.com/random/351x230',
          link: '/#'
        },
        {
          title: 'Bedrijfscatering Swapfiets',
          thumbnail: 'https://source.unsplash.com/random/350x231',
          link: '/#'
        }
      ]
    }
  }
}
</script>
