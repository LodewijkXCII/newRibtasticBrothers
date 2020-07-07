<template>
  <div class="container">
    <h2>Veel gestelde vragen</h2>
    <div class="faq">
      <div class="question" v-for="faq in faqs" :key="faq.id">
        <div class="question__title">
          <h4>{{ faq.Question }}</h4>
        </div>
        <div class="question__anwser">
          <p>
            {{ faq.Awnser }}
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
      faqs: []
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('https://ribtasticbrothers.herokuapp.com/faqs')
    this.faqs = data
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
