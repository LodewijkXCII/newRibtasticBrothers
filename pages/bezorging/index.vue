<template>
  <div>
    <ImageHeader v-bind="heading" :image="image" />
    <section class="container bezorgIntro">
      <div class="bezorgIntro__text">
        <h2>Bezorging</h2>
        <p>
          Ribtastic Brothers bij je thuis? Het kan nu! Na de DIY pakketten gaan
          we nog een stapje verder met bezorging. Heerlijk warm bij je thuis via
          Deliveroo of UberEats. Hieronder is ons menu te vinden. Via de links
          kan je naar de juiste pagina's voor Deliveroo en UberEats gaan.
          Vergeet ook zeker niet onze introvideo te bekijken!
        </p>
        <div class="delivery_links">
          <a
            class="btn btn-primary"
            href="https://deliveroo.nl/nl/menu/rotterdam/noord/the-ribtastic-brothers"
          >
            Deliveroo
          </a>

          <a class="btn btn-primary disabled">UberEats</a>
        </div>
      </div>
      <div class="bezorgIntro__video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HQ5GA3a8IfY?controls=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="bezorging">
      <div
        v-for="(gerecht, categorie) in gerechten"
        :key="categorie"
        class="bezorging__categorie"
      >
        <div class="bezorging__categorie--image">
          <img
            :src="`https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/trb_category_${categorie}.jpg`"
            alt=""
          />
        </div>
        <div class="bezorgOption">
          <h2>{{ categorie }}</h2>
          <div class="bezorgOption__grid">
            <div
              class="bezorgOption__gerecht"
              v-for="meal in gerecht"
              :key="meal.id"
            >
              <div class="bezorgOption__gerecht--img">
                <img
                  v-if="meal.image"
                  :src="meal.image.url"
                  :alt="meal.image.caption"
                />
              </div>
              <div class="bezorgOption__gerecht--text">
                <div>
                  <h4>{{ meal.title }}</h4>
                  <p>{{ meal.korte_omschrijving }}</p>
                </div>
                <small class="price">&euro; {{ meal.prijs }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="radius">
      <div class="radius__text container">
        <h2>Bezorggebied</h2>
        <p>
          Helaas bezorgen we nog niet in heel nederland. We werken samen met
          Deliveroo en UberEats om onze bezorging uit te voeren. Zij hebben dan
          ook een maximaal bezorggebied aangegeven. Dit gebied is 3km van onze
          keuken vandaan. In de afbeelding hieronder is te zien wat het gebied
          is waar we bezorgen!
        </p>
      </div>
      <div class="radius__image">
        <img
          src="@/assets/img/bezorgradius_trb_ribtastic_brothers.jpg"
          alt="Bezorgradius Deliveroo, UberEats Ribtastic Brothers"
        />
      </div>
    </section>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
import _ from 'lodash'

import Counter from '@/components/Counter.vue'
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  head: {
    title: `Bezorging | The Ribtastic Brothers`,
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  components: {
    Counter,
    ImageHeader,
  },
  data() {
    return {
      heading: {
        title: 'Bezorging',
        subtitle: 'Zowel bij Deliveroo en UberEats',
      },
      gerechten: [],
      email: '',
      message: 'Aanmelden',
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/delivery_ribtastic_brothers.jpg',
    }
  },

  async mounted() {
    const url = 'https://ribtasticbrothers.herokuapp.com/bezorg-products'
    // const url = 'http://localhost:1337/bezorg-products'

    try {
      const { data } = await this.$axios.get(url)
      // sort data by categorie met lodash //
      const sortedData = _.groupBy(data, (gerecht) => gerecht.categorie)
      this.gerechten = sortedData
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="scss">
.bezorgIntro {
  max-width: 1200px !important;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  &__text,
  &__video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.bezorging {
  margin: 3rem 0;
  &__categorie {
    display: grid;
    gap: 0.5rem;
    margin: 4rem 0;
    &:nth-child(even) {
      direction: rtl;

      h4,
      p,
      .price {
        direction: initial;
      }
    }
  }
}

.delivery_links {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.bezorgOption {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: inherit;
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  &__gerecht {
    background: lighten($color: #000000, $amount: 7);
    border-radius: 15px;
    border: 1px solid lighten($color: #000000, $amount: 5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &--img img {
      border-radius: 15px 15px 0 0;
    }

    &--text {
      padding: 1rem;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      h4 {
        margin: 0;
      }
    }
    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
}

.radius {
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__image {
    img {
      height: auto;
      width: 100%;
    }
  }
}

@media (min-width: 650px) {
  .bezorgIntro {
    grid-template-columns: 1fr 1fr;
    &__video,
    &__text {
      padding: 3rem;
    }
  }
  .bezorging {
    width: 100%;
    &__categorie {
      grid-template-columns: minmax(150px, 25vw) 1fr;
      gap: 1.5rem;
    }
  }
  .bezorgOption {
    padding: 0 1.5rem 0;
    &__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
