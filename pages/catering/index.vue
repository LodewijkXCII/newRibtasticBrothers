<template>
  <div>
    <ImageHeader v-bind="heading" :image="image" />

    <div class="container">
      <div class="wrapper-1-2">
        <div class="textInfo">
          <p>
            Naast het bieden van lekkere BBQ versnaperingen op zonnige dagen aan
            het strand, zijn we tevens gespecialiseerd in het verzorgen van
            catering op evenementen. Of het nu een lunch, een bruiloft, een
            verjaardag, een festival of een bedrijfsfeest is, laat ons uw
            genodigden verrassen met de heerlijke smaak van onze BBQ creaties.
          </p>
          <p>
            Ieder evenement is uniek en vraagt om zijn eigen invulling en
            aankleding. Wij gaan voor de perfecte match en passen onze BBQ
            specialiteiten/diensten daarom graag aan op de exacte wensen van het
            publiek. Wij voelen de verantwoordelijkheid om uw feest een succes
            te maken en denken graag actief met u mee. We staan open voor
            verzoeken en zullen deze uitgebreid in behandeling nemen.
          </p>
          <p>
            Om toch een soort richtlijn te hanteren, kunnen we over het algemeen
            een aantal catering varianten onderscheiden, hieronder per pakket
            een kleine toelichting en een prijsindicatie.
          </p>
          <nuxt-link to="sensatie" class="btn btn-line">Bakfiets</nuxt-link>
        </div>
        <FormCatering />
      </div>

      <h1>De Pakketten</h1>
      <h2>Voor ieder wat wils</h2>

      <div class="cateringWrapper">
        <OptionsCatering
          v-for="catering in orderedOptions"
          :key="catering.id"
          :id="catering.id"
          :name="catering.name"
          :slug="catering.slug"
          :recommended="catering.recommended"
          :price="catering.price"
          :cateringProducts="catering.cateringProducts"
        />

        <div class="cateringCard">
          <h2 class="cateringCard__title">Catering op Maat</h2>
          <p class="cateringCard__text">Prijs op aanvraag</p>
          <p style="padding-left: 1.5em">
            Alles is mogelijk, vraag een offerte op en we komen zo spoedig
            mogelijk bij je terug.
          </p>
        </div>
      </div>

      <nuxt-link to="/galerij" class="btn btn-primary">
        Impressie galerij
        <font-awesome-icon :icon="'images'" />
      </nuxt-link>
    </div>
    <CateringPartner />
    <!-- <SmallGallery :images="images" /> -->
  </div>
</template>
<script>
import FormCatering from '@/components/FormCatering.vue'
import ImageHeader from '@/components/ImageHeader.vue'

import OptionsCatering from '@/components/OptionsCatering.vue'
import SmallGallery from '@/components/SmallGallery.vue'
import CateringPartner from '@/components/CateringPartner.vue'

import _ from 'lodash'

export default {
  head: {
    title: 'Catering | The Ribtastic Brothers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  name: 'Catering',
  components: {
    FormCatering,
    OptionsCatering,
    SmallGallery,
    ImageHeader,
    CateringPartner,
  },

  data() {
    return {
      heading: {
        title: 'BBQ Catering',
        subtitle: 'Inclusief onze unieke BBQ bakfiets',
      },
      image:
        'https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/static/ribtastic_brothers_catering+(1).jpg',
    }
  },
  computed: {
    orderedOptions() {
      return _.sortBy(this.catering, 'price')
    },
  },
  asyncData(context) {
    const cateringOptions =
      'https://ribtasticbrothers.herokuapp.com/catering-opties'

    return context.app.$axios.get(cateringOptions).then((res) => {
      return {
        catering: res.data.map((option) => {
          return {
            id: option.id,
            name: option.titel,
            price: option.prijs,
            cateringProducts: option.catering_productens,
            recommended: option.aanbevolen,
            slug: option.slug,
          }
        }),
      }
    })
  },
}
</script>
