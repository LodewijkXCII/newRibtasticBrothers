<template>
  <section class="partners">
    <div class="container">
      <h1>Onze Partners</h1>
      <div class="partnersOverview">
        <div class="partner" v-for="partner in partners" :key="partner.id">
          <a :href="partner.url" target="_blank">
            <img :src="`../assets/img/partners/${partner.logo}`" alt />
          </a>
        </div>
        <div class="partner__last">
          <a to="/contact">
            <p>Ook graag samenwerken? Klik hier om contact op te nemen</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          name: "Brouwerij Noordt",
          logo: "brouwerij_noordt.png",
          url: "https://www.brouwerijnoordt.nl",
        },
        {
          name: "Snoei Salades",
          logo: "snoeisaladslogo.png",
          url: "https://www.snoeisalads.nl/",
        },
      ],
    };
  },
  methods: {
    getImgUrl(logo) {
      //   return require('../assets/img/partners/' + logo);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/config.scss";

.partners {
  margin: 2rem 0;
}
.partnersOverview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin: 2rem 0;

  .partner {
    background: $off-black-color;
    width: 100%;
    height: 100%;
    display: flex;
    a {
      margin: auto;
      justify-self: center;
      padding: 1em;
      img {
        width: 80px;

        &:hover {
          transform: scale(1.05);
          transition: 0.5s;
        }
      }
    }
  }
  .partner__last {
    background: $off-primary-color;
    padding: 0.4em;
    display: flex;
    a {
      text-align: center;
      align-self: center;
      color: $secondary-color;
      p {
        font-size: 0.75rem;
        margin: 0 0.5rem;
      }
    }
  }
}

@media (min-width: 650px) {
  .partnersOverview {
    grid-template-columns: repeat(5, 1fr);

    .partner {
      img {
        width: 150px;
      }
    }
  }
}
</style>
