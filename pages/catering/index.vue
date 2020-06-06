<template>
  <div>
    <ImageHeader />
    <div class="container">
      <h1>BBQ Catering</h1>
      <h2>Inclusief Toffe BBQ Bakfiets</h2>
      <div class="wrapper-1-2">
        <FormCatering />
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
            twee catering varianten onderscheiden, namelijk Just Meat en All-In.
            De namen zeggen het eigenlijk al een beetje, maar hieronder per
            pakket een kleine toelichting en een prijsindicatie.
          </p>
        </div>
      </div>

      <h1>De Pakketten</h1>
      <h2>Voor ieder wat wils</h2>

      <div class="cateringWrapper">
        <OptionsCatering
          v-for="catering in catering"
          :key="catering.id"
          :name="catering.name"
          :recommended="catering.recommended"
          :price="catering.price"
          :id="catering.id"
          :cateringProducts="catering.cateringProducts"
        />
      </div>

      <nuxt-link to="/gallerij" class="btn btn-primary"
        >Impressie gallerij <font-awesome-icon :icon="'images'" />
      </nuxt-link>
    </div>
    <div class="smallGallery">
      <img src="@/assets/img/catering_bbq_1.jpg" alt="Catering_1" />
      <img src="@/assets/img/catering_bbq_2.jpg" alt="Catering_2" />
      <img src="@/assets/img/catering_bbq_3.jpg" alt="Catering_3" />
      <img src="@/assets/img/catering_bbq_4.jpg" alt="Catering_4" />
    </div>
  </div>
</template>
<script>
import FormCatering from '@/components/FormCatering.vue'
import OptionsCatering from '@/components/OptionsCatering.vue'
import ImageHeader from '@/components/ImageHeader.vue'

export default {
  name: 'Catering',
  components: {
    ImageHeader,
    FormCatering,
    OptionsCatering
  },

  data() {
    return {}
  },
  asyncData(context) {
    return context.app.$axios
      .get('http://localhost:1337/catering-options')
      .then(res => {
        return {
          catering: res.data.map(co => {
            return {
              id: co.id,
              name: co.name,
              price: co.price,
              cateringProducts: co.catering_products,
              recommended: co.recommended
            }
          })
        }
      })
  }
}
</script>
