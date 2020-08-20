<template>
  <section>
    <ImageHeader v-bind="heading" :image="image" />
    <div class="container-fluid">
      <p>
        Het geheim van lekker vlees zit voor een groot gedeelte in de
        voorbereiding en de magie van marinade. Ons vlees wordt daarom met een
        overvloed van marinade op een ambachtelijke wijze klaargemaakt, zodat de
        smaaksensatie tot diep in het vlees kan trekken.
      </p>
      <p>
        Met onze goedkeuring bepalen wij of het vlees klaar is voor de BBQ, en
        bereid kan worden voor onze gasten. Daarna volgt de finale stap in het
        proces, de Ribtastic Secret Sauce. Met de juiste temperatuur wordt
        tijdens het grillen de geheime marinade vorstelijke op het vlees
        gesmeerd zodat de smaaksensatie wordt afgemaakt. Zie hieronder onze
        heerlijke creaties, you wanna try?
      </p>
    </div>
    <div class="container sauzen">
      <div class="saus" v-for="saus in sauzen" :key="saus.id">
        <img :src="saus.image.formats.small.url" alt />
        <div class="saus__text">
          <h2>{{ saus.title }}</h2>
          <p>{{ saus.description }}</p>
        </div>
      </div>
    </div>
    <nuxt-link to="catering" class="btn btn-line">Catering</nuxt-link>

    <!-- <SmallGallery /> -->
  </section>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'
import ImageHeader from '@/components/ImageHeader.vue'
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
  name: 'Saus',
  components: {
    SmallGallery,
    ImageHeader,
  },
  data() {
    return {
      heading: {
        title: 'Ribtastic Saus',
        subtitle: 'Onze geheime formule',
      },
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/ribtastic_bbq_saus_juicy_f6b768fae5.jpeg',
    }
  },
  asyncData(context) {
    return context.app.$axios
      .get('https://ribtasticbrothers.herokuapp.com/saus')
      .then((res) => {
        return {
          sauzen: res.data.map((saus) => {
            return {
              id: saus.id,
              title: saus.title,
              description: saus.omschrijving,
              image: saus.afbeelding,
            }
          }),
        }
      })
  },
}
</script>

<style lang="scss">
.sauzen {
  .saus {
    margin: 2rem 0;
    overflow: hidden;
    h2 {
      margin-bottom: 0.5rem;
      text-align: left;
    }
    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 1.5rem 0;
    }

    img:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
}

@media (min-width: 650px) {
  .sauzen {
    .saus {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 2.5rem;
      margin: 4rem 0;

      &:nth-child(even) {
        grid-template-columns: 3fr 2fr;

        img {
          grid-column-start: 2;
        }

        .saus__text,
        h2 {
          grid-column-start: 1;
          grid-row-start: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: right;
        }
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
