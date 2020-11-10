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
