<template>
  <div>
    <NavBar />
    <div class="container">
      <h1>Bestel je eigen Do-It-Yourself kit</h1>
      <h2>De smaak van Ribtastic Ribs, gewoon vanuit je eigen keuken</h2>
      <p>
        Wij bezorgen op vrijdagavond de lekkerste spareribs die jij binnen no
        time klaar hebt gemaakt in eigen oven of BBQ! Wil je dat ook? Zorg dan
        dat je voor vrijdag 14 uur je bestelling bij ons hebt gedaan!
      </p>
    </div>
    <section id="hoewerkthet">
      <div class="container">
        <h2>Hoe werkt het</h2>
        <OrderFlow />
      </div>
    </section>
    <section id="depakketten">
      <div class="container">
        <h2>De pakketten</h2>
        <Product />
      </div>
    </section>
    <section>
      <div class="container">
        <h2>Unieke samenwerkingen</h2>
      </div>
    </section>
    <section id="faq">
      <FAQ />
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/order/NavBar.vue'
import OrderFlow from '@/components/order/OrderFlow.vue'
import FAQ from '@/components/order/FAQ.vue'
import Product from '@/components/order/Product.vue'

export default {
  components: {
    OrderFlow,
    NavBar,
    FAQ,
    Product
  }
}
</script>

<style lang="scss" scoped></style>
