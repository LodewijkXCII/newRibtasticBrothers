<template>
  <div class="container">
    <h2>Veel gestelde vragen</h2>
    <div class="faq">
      <div class="question" v-for="question in questions" :key="question.id">
        <div class="question__title">
          <h4>{{ question.question }}</h4>
        </div>
        <div class="question__anwser">
          <p>
            {{ question.anwser }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          id: 1,
          question: 'Hoe zit het met de betaling?',
          anwser:
            'De betaling van je bestelling regelen we via een betaallink. Deze sturen we op donderdagavond, één dag voorafgaand aan de bezorging, per whatsapp bericht naar je toe. Mocht je op vrijdag voor 14:00 uur hebben besteld, dan krijg je de betaallink in de loop van de dag toegestuurd.'
        },
        {
          id: 2,
          question: 'Wanneer is de bezorging?',
          anwser:
            'Wij bezorgen alleen op vrijdagavond vanaf 17:30 uur. Alle bestellingen voor vrijdag 14:00 uur, worden dezelfde week geleverd. Op donderdagavond krijg je i.c.m. de betaallink een whatsapp bericht met een tijdslot waarin wij op vrijdag komen bezorgen.'
        },
        {
          id: 3,
          question: 'Waar wordt er geleverd?',
          anwser:
            'Onze uitvalsbasis is Rotterdam, daar bevindt zich tevens onze keuken waarin we ons vlees met liefde voor je bereiden. De vuistregel is dat we in Rotterdam en omstreken bezorgen, en we zijn niet vies van een paar extra kilometers om jou blij te kunnen maken. Doe je bestelling, of bel ons even op zodat we je locatie kunnen bespreken. We zijn flexibel en zoeken altijd naar een passende oplossing.\n Iedere week proberen we tevens een grote stad, naast Rotterdam te voorzien van onze DIY pakketten. Hou onze socials in de gaten om te zien welke stad er aan de beurt is. Mocht je zelf een mooie locatie willen voorstellen, laat het ons dan weten.'
        },
        {
          id: 4,
          question: 'Hoe lang kan ik mijn Ribtastic Kit bewaren?',
          anwser:
            'De inhoud van onze pakketten heeft al een liefdevolle voorbewerking gekregen, dit is dus niet rauw. De DIY pakketten zijn daarom drie dagen houdbaar in de koelkast. Genoeg tijd om een heerlijk moment uit te zoeken.'
        },
        {
          id: 5,
          question: 'Voor hoeveel personen is 1 pakket?',
          anwser:
            'De pakketten zijn rijkelijk gevuld met ons sparerib vlees en kan gedeeld worden. Een befaamd vleeseter krijgt het pakket echter wel alleen op. Wij adviseren daarom één pakket per persoon, om roof-van-je-bord praktijken te voorkomen.'
        },
        {
          id: 6,
          question: 'Ik wil graag meer weten, wie moet ik contacteren?',
          anwser:
            'Wij proberen alles zo overzichtelijk en duidelijk mogelijk te beschrijven op onze website. Mocht je toch nog graag wat extra info willen ontvangen of even willen babbelen, staan we je uiteraard graag te woord. Je kunt ons bereiken per mail op eat@ribtasticbrothers.nl, telefonisch via 0618676722, of per DM via Facebook of Instagram.'
        },
        {
          id: 7,
          question: 'Wat is de bereidingswijze?',
          anwser:
            'Ben je geen held in de keuken, of laat je de boel vaak verbranden op je BBQ? Geen stress, in ieder pakket zit een duidelijke bereidingswijze toegevoegd zodat iedereen onze Ribtastic Ribs thuis kan maken. Het staat uitgelegd voor bereiding middels de BBQ, de grillpan, de oven of zelfs de airfryer. Een kind kan de was doen!'
        },
        {
          id: 8,
          question: 'Wat zit er in de saus?',
          anwser:
            'We kunnen je vertellen, je bent niet de enige met deze vraag! Velen gingen je al voor, en velen zullen er nog komen. Onze saus is gebaseerd op een geheim recept met een waslijst aan kruiden. De juiste hoeveelheden en volgorde zorgt voor deze bijzondere smaak.\n Voor de gasten met allergieën; bij de productinfo tref je onze allergeneninformatie.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.faq {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-top: 2.5em;

  .question__title {
    h4 {
      text-transform: uppercase;
      font-size: 1.1rem;
    }
  }
  .question__anwser {
    p {
      font-weight: 100;
      font-size: 1rem;
    }
  }
}

@media (min-width: 650px) {
  .faq {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
