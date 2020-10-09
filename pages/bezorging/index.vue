<template>
  <div>
    <ImageHeader v-bind="heading" :image="image" />
    <section class="container bezorgIntro">
      <div class="bezorgIntro__text">
        <h2>Bezorging</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque
          at corporis, aspernatur natus voluptatem quibusdam maiores expedita
          eaque nihil unde, ex quam assumenda ipsa totam saepe aperiam,
          consectetur deleniti. Amet dolorem, earum repellendus obcaecati autem
          voluptatem architecto optio, dignissimos quasi et modi voluptatibus
          voluptate non cupiditate assumenda, ratione rem!
        </p>
        <div class="delivery_links">
          <button class="btn btn-primary">Deliveroo</button>
          <button class="btn btn-primary">UberEats</button>
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
                <h4>{{ meal.title }}</h4>
                <p>{{ meal.korte_omschrijving }}</p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab culpa
          laborum, fugit unde adipisci natus porro vel sint eveniet nisi
          dignissimos enim, voluptate nemo a, odit ex nesciunt assumenda non
          similique. Aperiam tempora culpa provident saepe quaerat itaque unde
          at architecto accusamus vel vero delectus recusandae sunt, cum dolor
          laudantium cupiditate incidunt. Suscipit reprehenderit modi illo
          reiciendis quos culpa?
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
    gap: 1.5rem;
    margin-bottom: 1rem;
    &:nth-child(even) {
      direction: rtl;
    }
  }
}

.delivery_links {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.bezorgOption {
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: inherit;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  &__gerecht {
    background: lighten($color: #000000, $amount: 7);
    border-radius: 15px;
    border: 1px solid lighten($color: #000000, $amount: 5);
    &--img img {
      border-radius: 15px 15px 0 0;
    }

    &--text {
      padding: 1rem;
      text-align: left;
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
    }
  }
  .bezorgOption {
    &__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
