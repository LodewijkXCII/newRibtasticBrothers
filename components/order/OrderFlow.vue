<template>
  <div class="orderFlow">
    <div v-for="flow in flows" :key="flow.id" class="flowCard">
      <div class="flowCard__top">
        <div class="flowCard__top--number">
          <span>{{ flow.number }}</span>
        </div>
        <div class="flowCard__top--icon">
          <font-awesome-icon :icon="flow.icon" />
        </div>
      </div>
      <div class="flowCard__bottom">
        <h4>{{ flow.title }}</h4>
        <p>
          {{ flow.discription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flows: [
        {
          id: 1,
          number: 1,
          title: 'Bestellen',
          discription:
            'Dit doe je gemakkelijk via onze bestelsite. Alle bestellingen voor vrijdag 14:00 uur, worden op vrijdagavond in dezelfde week geleverd. Je ontvangt na je bestelling direct en bevestigingsmailtje.',
          icon: 'shopping-bag'
        },
        {
          id: 2,
          number: 2,
          title: 'Bezorgen',
          discription:
            'Wij bezorgen alleen op vrijdagavond vanaf 17:30 uur. Op donderdagavond ontvang je van ons een whatsapp bericht met de verwachtte bezorgtijd.',
          icon: 'home'
        },
        {
          id: 3,
          number: 3,
          title: 'Bereiden',
          discription:
            'De finishing touch doe je thuis in eigen keuken (DIY). We hebben een bereidingswijze voor oven, BBQ, grillpan of Airfryer toegevoegd aan het pakket.',
          icon: 'mitten'
        },
        {
          id: 4,
          number: 4,
          title: 'Genieten',
          discription:
            'Na het volgen van de bereidingswijze kun je heerlijk gaan genieten van je eigen Ribtastic Ribs. Laat maar weten wat je ervan vindt!',
          icon: 'utensils'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.orderFlow {
  display: grid;
  grid-gap: 2rem;
  margin: 3rem 0;
}
.flowCard {
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: 1fr 7fr;
  align-items: center;
  justify-content: center;

  &__top {
    margin-top: -25px;

    &--icon {
      background-color: $off-white-color;
      padding: 1rem;
      margin: 1rem;
      border-radius: 50%;
      width: 95px;
      height: 95px;
      text-align: center;
      svg {
        color: $primary-color;
        margin-top: 7px;
        width: 45px;
        height: 45px;
      }
    }

    &--number {
      background-color: $primary-color;
      position: relative;
      top: 30px;
      left: 10px;
      height: 30px;
      width: 30px;
      border-radius: 50%;

      span {
        transform: translate(9px, 3px);
        position: absolute;
      }
    }
  }

  &__bottom {
    padding: 0 1rem;

    h4 {
      text-transform: uppercase;
      text-align: left;
    }

    p {
      font-size: 1rem;
      margin: 0;
      text-align: left;
    }
  }
}
@media (min-width: 650px) {
  .orderFlow {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .flowCard {
      grid-template-columns: 1fr;
      grid-auto-rows: 150px 200px;
      background-color: $off-black-color;
      padding: 1rem 0.5rem 2rem 0.5rem;
      align-items: flex-start;
      border-radius: 0.8rem;
      position: relative;

      &:not(:last-child)::after {
        content: '\203A';
        font-weight: bold;
        font-size: 3rem;
        position: absolute;
        color: $primary-color;
        right: -22px;
        align-self: center;
      }

      &__top {
        margin: auto;
      }

      &__bottom {
        h4 {
          text-align: center;
          margin-bottom: 0.5rem;
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
