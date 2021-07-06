<template>
  <div class="eventOverview">
    <div v-for="event in upcomingEvents" :key="event.id" class="eventItem">
      <div class="eventItem__date">
        <h6>{{ $moment(event.datum).format('dddd DD MMM') }}</h6>
      </div>
      <div class="eventItem__info">
        <h4>{{ event.titel }}</h4>
        <small>{{ event.locatie }}</small>
        <a v-if="event.link" :href="event.link">Bekijk event</a>
      </div>
      <div class="eventItem__genre"></div>
    </div>
    <nuxt-link to="catering">
      <div class="eventItemCta">
        <h2>Heb jij een feestje waar wij bij moeten zijn?</h2>
        <p>Klik hier om contact met ons op te nemen</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upcomingEvents: [],
    }
  },

  async fetch() {
    const { data: events } = await this.$axios.get(
      'https://ribtasticbrothers.herokuapp.com/kalenders'
    )
    const today = new Date()

    const sortedEvents = events.sort((a, b) => (a.datum < b.datum ? -1 : 1))

    sortedEvents.forEach((event) => {
      if (event.datum > today.toISOString()) {
        this.upcomingEvents.push(event)
      }
    })
  },
}
</script>
<style lang="scss" scoped>
section.events {
  position: relative;
  margin-top: 2em;
  background: #1e1e1e;

  h1 {
    padding-top: 1em;
  }
}

.eventOverview {
  display: grid;
  grid-row-gap: 15px;
  margin: 1em;
  padding: 1em 0;

  .eventItem {
    display: grid;
    gap: 5px;
    grid-template-columns: minmax(60px, 125px) 3fr auto;
    background: rgba(0, 0, 0, 0.5);

    &__date {
      padding: 1em;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;

      h6 {
        font-size: 1.2rem;
        white-space: normal;
        text-align: center;
      }
    }

    &__info {
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h4 {
        text-transform: uppercase;
      }

      a {
        margin-top: 9px;
        font-size: 0.6em;
        font-weight: bold;
        color: $primary-color;
        text-decoration: none;
        text-transform: uppercase;
      }
      a::after {
        content: '';
        display: inline-block;
        width: 0.6em;
        height: 0.6em;
        border-right: 0.2em solid $primary-color;
        border-top: 0.2em solid $primary-color;
        transform: rotate(45deg);
        margin-right: 0.5em;
        margin-left: 0.35em;
      }
    }
  }
  .eventItemCta {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1em;
    background: rgba($color: $primary-color, $alpha: 0.8);
    color: #fff;

    h2 {
      color: white;
      font-size: 1.5em;
      letter-spacing: 1.3px;
    }

    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
}

@media (min-width: 650px) {
  .eventOverview {
    grid-template-columns: 1fr;
    grid-gap: 15px;

    .eventItem,
    .eventItemCta {
      width: 60%;
      margin: auto;
    }
  }
}
</style>
