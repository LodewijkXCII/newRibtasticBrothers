<template>
  <div class="delivery">
    <section class="delivery__left">
      <a
        href="https://order.ubereats.com/rotterdam/food-delivery/The%20Ribtastic%20Brothers%20-%20Rotterdam/3s-RdoMYRfuUdjhainvmuA/?utm_source=web-restaurant-manager"
      >
        <div class="container">
          <img src="@/assets/img/partners/uberEats.svg" alt="UberEats" />
          <h1>Bestel bij UberEats</h1>
          <small>klik hier</small>
        </div>
      </a>
      <img src="" alt="" />
    </section>
    <section class="delivery__right">
      <a
        href="https://deliveroo.nl/nl/menu/rotterdam/noord/the-ribtastic-brothers"
      >
        <div class="container">
          <img src="@/assets/img/partners/deliveroo.svg" alt="Deliveroo" />
          <h1>Bestel bij Deliveroo</h1>
          <small>klik hier</small>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Bezorgkeuze | The Ribtastic Brothers`,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.delivery {
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  &__right,
  &__left {
    margin: 1.5rem;

    h1 {
      margin: 2rem;
    }
  }
}

@media (min-width: 650px) {
  .delivery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100%;

    &__right,
    &__left {
      margin: auto 5%;
      a {
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin: 2rem;
          align-items: center;

          img {
            width: 75%;
          }

          &--text {
            max-width: 400px;
            align-self: center;
          }
        }
      }
    }
  }
}
</style>
