<template>
  <section class="bezorging">
    <div
      v-for="(gerecht, categorie) in gerechten"
      :key="categorie"
      class="bezorging__categorie"
    >
      <div class="bezorging__categorie--image">
        <img
          :src="`https://ribtastic-brothers.s3.eu-west-2.amazonaws.com/trb_category_${categorie}.jpg`"
          alt=""
        />
      </div>
      <div class="bezorgOption">
        <h2>{{ categorie }}</h2>
        <div class="bezorgOption__grid">
          <div
            class="bezorgOption__gerecht"
            v-for="meal in gerecht"
            :key="meal.id"
          >
            <div class="bezorgOption__gerecht--img">
              <img
                v-if="meal.image"
                :src="meal.image.url"
                :alt="meal.image.caption"
              />
            </div>
            <div class="bezorgOption__gerecht--text">
              <div>
                <h4>{{ meal.title }}</h4>
                <p>{{ meal.korte_omschrijving }}</p>
              </div>
              <small class="price">&euro; {{ meal.prijs }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.bezorging {
  margin: 3rem 0;
  &__categorie {
    display: grid;
    gap: 0.5rem;
    margin: 4rem 0;
    &:nth-child(even) {
      direction: rtl;

      h4,
      p,
      .price {
        direction: initial;
      }
    }
  }
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
        margin: 0;
      }
    }
    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
}

@media (min-width: 650px) {
  .bezorging {
    width: 100%;
    &__categorie {
      grid-template-columns: minmax(150px, 25vw) 1fr;
      gap: 1.5rem;
    }
  }

  .bezorgOption {
    padding: 0 1.5rem 0;
    &__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
