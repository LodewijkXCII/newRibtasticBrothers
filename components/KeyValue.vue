<template>
  <div class="trbValues">
    <div
      v-for="keyValue in keyValues"
      :key="keyValue.id"
      class="trbValues__Value"
    >
      <div class="ValueIcon">
        <font-awesome-icon :icon="keyValue.icon" />
      </div>
      <div class="ValueText">
        <h4>{{ keyValue.title }}</h4>
        <p>
          {{ keyValue.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyValues: [
        {
          title: 'Genieten',
          text:
            'Wij geloven in het genot van gezamenlijk buiten eten, en hebben de missie om het BBQ evangelie verder te verspreiden.',
          icon: 'trophy'
        },
        {
          title: 'Bakfiets',
          text:
            'Een uniek vervoersmiddel waar we heerlijke BBQ gerechten mee kunnen maken. Volledig zelf gemaakt met duurzame materialen.',
          icon: 'bicycle'
        },
        {
          title: 'Saus',
          text:
            'De keuze is niet: Welke saus moet ik kiezen, nee de keuze is welk vlees. Onze saus past overal bij en maakt alles overheerlijk!',
          icon: 'pepper-hot'
        },
        {
          title: 'Duurzaamheid',
          text:
            'Duurzaamheid zit in onze vezels. Alles wat we doen, doen we met een duurzame gedachten. Zo reduceren we ons gas verbruik jaarlijks',
          icon: 'leaf'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.trbValues {
  display: grid;
  grid-template-columns: 1fr;

  &__Value {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 0.5em;
    margin-left: 1em;
    margin-top: 2em;
    align-items: center;

    .ValueIcon {
      background: $off-white-color;
      border: 2px solid $off-primary-color;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;

      svg {
        color: $primary-color;
        height: 100%;
        font-size: 2em;
        margin: auto;
      }
    }

    h4 {
      margin-bottom: 0.4em;
    }
  }
}

@media (min-width: 650px) {
  .trbValues {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.1em;
    margin: 2em 0;

    &__Value {
      grid-template-columns: 1fr;
      text-align: center;
      grid-gap: 0.75em;
      margin-left: 0;

      .ValueIcon {
        justify-self: center;
      }
    }
  }
}
</style>
