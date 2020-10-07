<template>
  <div class="visitie">
    <section class="visitie__left">
      <img
        src="https://images.unsplash.com/photo-1585047668151-b281b0c89c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        alt=""
      />
    </section>
    <section class="visitie__right">
      <h1>The Ribtastic Brothers</h1>
      <ul>
        <li>Naam: Art van Eeden Petersman</li>
        <li>EMAIL:eat@ribtasticbrothers.nl</li>
        <li>TEL:0618676722</li>
        <li>URL:www.ribtasticbrothers.nl</li>
      </ul>

      <!-- <p>
        Leuk dat je interesse hebt, vinden we tof!<br />
        Er is even wat miscommunicatie ontstaan tussen ons en de Buik. We zijn
        31 juli namelijk gestopt met het leveren van onze DIY pakketten. 😓😥
      </p>
      <p>
        Dit zodat we nu wat meer tijd hebben om ons te focussen op het up and
        running krijgen van onze warme maaltijdvisitie. 🤤🍗🍔🚲
      </p>
      <p>
        Halverwege september staat de livegang gepland, en dan kunnen we je nog
        beter van dienst zijn.
      </p>
      <p>
        Vind je het goed als we je dan weer benaderen voor full experience?
      </p> -->

      <a href="/Ribtastic_Brothers.vcf" class="btn btn-primary"
        >Download contact</a
      >
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: `Visitekaart | The Ribtastic Brothers`,
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },

  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.visitie {
  &__right {
    margin: 2rem;
  }
}

@media (min-width: 650px) {
  .visitie {
    display: grid;
    grid-template-columns: 45% 55%;
    height: 100vh;
    width: 100%;

    &__left {
      overflow: hidden;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: auto;
        min-height: 100%;
        width: 100%;
      }
    }
    &__right {
      margin: auto;
      max-width: 800px;
      min-width: 550px;

      label {
        font-weight: 700;
      }
    }
  }
}
</style>
