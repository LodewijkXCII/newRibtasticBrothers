<template>
  <div class="trbValues">
    <div
      v-for="keyValue in keyValues"
      :key="keyValue.id"
      class="trbValues__Value"
    >
      <div class="trbValues__Value--ValueIcon">
        <font-awesome-icon :icon="keyValue.icon" />
      </div>
      <div class="trbValues__Value--ValueText">
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
            'Onze zelfgemaakte unieke BBQ Bakfiets waar we heerlijke creaties op kunnen maken. Bestaande uit  duurzame materialen en volledig zelfvoorzienend.',
          icon: 'bicycle'
        },
        {
          title: 'Saus',
          text:
            'Het geheim van ons succes bestaat voor een deel uit onze heerlijke zelfgemaakte Ribtastic Saus. Een heerlijke zoete kruidencombinatie met een licht pitje. Deze saus maakt ieder gerecht ronduit fantastisch, you wanna try?',
          icon: 'pepper-hot'
        },
        {
          title: 'Duurzaamheid',
          text:
            'Duurzaamheid zit diep in onze vezels. Alles wat we doen, doen we met een duurzame gedachte. Dit zie je terug in de materialen die we gebruiken en de CO2 die we jaarlijkse compenseren.',
          icon: 'leaf'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
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

    &--ValueText {
      top: 0;
    }

    &--ValueIcon {
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
      grid-template-rows: 100px 250px;
      text-align: center;
      grid-gap: 1em;
      margin-left: 0;

      &--ValueText {
        align-self: start;
      }
      &--ValueIcon {
        justify-self: center;
      }
    }
  }
}
</style>
