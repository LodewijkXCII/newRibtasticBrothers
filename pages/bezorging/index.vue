<template>
  <div>
    <ImageHeader v-bind="heading" :image="image" />
    <section class="container bezorgIntro">
      <div class="bezorgIntro__text">
        <h2>Bezorging via Deliveroo en UberEats</h2>
        <p>
          The Ribtastic Brothers bij je thuis? Het kan nu! Na de DIY pakketten
          gaan we nog een stapje verder met bezorging. Heerlijk warm bij je
          thuis via Deliveroo of UberEats. Verder tref je op deze pagina ons
          menu en het bezorggebeid van Rotterdam. Via onderstaande buttons kom
          je direct op de juiste bestelpagina's van jouw favoriete bezorgdienst.
        </p>
        <div class="delivery_links">
          <a
            class="btn btn-primary"
            target="_blank"
            href="https://deliveroo.nl/nl/menu/rotterdam/noord/the-ribtastic-brothers"
          >
            Deliveroo
          </a>

          <a
            class="btn btn-primary"
            target="_blank"
            href="https://order.ubereats.com/rotterdam/food-delivery/The%20Ribtastic%20Brothers%20-%20Rotterdam/3s-RdoMYRfuUdjhainvmuA/?utm_source=web-restaurant-manager"
            >UberEats</a
          >
          <a
            class="btn btn-primary"
            target="_blank"
            href="https://www.thuisbezorgd.nl/en/menu/the-ribtastic-brothers"
            >Thuisbezorgd</a
          >
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
        <div
          class="bezorging__categorie--image"
          :class="categorie.toLowerCase().slice(2)"
        >
          <img
            :src="`https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/trb_category_${categorie.toLowerCase()}.jpg`"
            alt=""
          />
          <h2>{{ categorie }}</h2>
        </div>

        <div
          class="bezorgOption__gerecht"
          v-for="meal in gerecht"
          :key="meal.id"
        >
          <div class="bezorgOption__gerecht--img">
            <img
              v-if="meal.afbeelding"
              :src="meal.afbeelding.url"
              :alt="meal.afbeelding.caption"
            />
          </div>
          <div class="bezorgOption__gerecht--text">
            <div>
              <h4>{{ meal.titel }}</h4>
              <p>{{ meal.omschrijving }}</p>
              <div v-if="meal.sauzens.length">
               <p><span>In een van de volgende smaken:</span>
                <ul v-for="saus in meal.sauzens" :key="saus.id">
                  <li>{{ saus.titel }}</li>
                </ul>
                </p>
              </div>
            </div>
            <small class="price">&euro; {{ meal.prijs.toFixed(2) }}</small>
          </div>
        </div>
      </div>
    </section>
    <section class="radius">
      <div class="radius__text container">
        <h2>Bezorggebied</h2>
        <p>
          Helaas bezorgen we nog niet in heel Nederland. We werken samen met
          Deliveroo en UberEats om onze Rotterdamse bezorging van alle heerlijke
          BBQ creaties uit te voeren. Zij hebben dan ook een maximaal
          bezorggebied aangegeven. Dit gebied is 3km van onze keuken vandaan. In
          de afbeelding hieronder is te zien wat het gebied is waar we bezorgen!
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

import _ from 'lodash'

import Counter from '@/components/Counter.vue'
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  head: {
    title: `Bezorging | The Ribtastic Brothers`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  components: {
    Counter,
    ImageHeader,
  },
  data() {
    return {
      heading: {
        title: 'Rotterdamse bezorging',
        subtitle: 'Spareribs, Chicken Wings en meer',
      },
      gerechten: [],
      email: '',
      message: 'Aanmelden',
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/Ribtastic-brothers-bezorging-ubereats-deliveroo.jpg',
    }
  },

  async mounted() {
    const url = 'https://admin.ribtasticbrothers.nl/bezorg-productens?_sort=categorie,location'
    // const url = 'http://localhost:1337/bezorg-productens?_sort=categorie,location'

    try {
      const { data } = await this.$axios.get(url);
      /* sort data by categorie met lodash */      
      this.gerechten = _.groupBy(data, (gerecht) => gerecht.categorie.slice(2));
      
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
    margin: 8rem 0;
    &:nth-child(even) {
      direction: rtl;

      h4,
      p,
      .price {
        direction: initial;
      }
    }
    &--image {
      height: 100%;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      user-select: none;
      img {
        height: 100%;
        width: auto;
      }
      h2 {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: rgba($color: #000000, $alpha: 0.3);
      }

      &.chicken,
      &.sides {
        grid-row: 1/2;
      }
      &.spareribs {
        grid-row: 1/2;
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
    margin: 1rem 2rem;
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
        font-size: 0.8rem;
      }
      p {
        font-size: 0.7rem;
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
      grid-template-columns: repeat(4, minmax(10rem, 1fr));
      grid-template-rows: auto;
      gap: 1.5rem;
      padding: 0 5rem;
    }
  }
  .bezorgOption {
    padding: 0 1.5rem 0;
    &__gerecht {
      margin: 0;
      &--text {
        h4,
        p {
          margin: 0;
        };

        p:last-child {
          margin-top: 1rem;
        }
        span {
          color: $primary-color;
          font-weight: 700;
          margin-top: .2rem
        };
        li {
        list-style: none;
        position: relative;
        margin: 0.45em 0;
        font-size: 0.6rem;

        &::before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          left: -15px;
          top: 50%;
          border-radius: 50%;
          background: $off-primary-color;
        }

        };
      }
    }
    &__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
