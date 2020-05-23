<template>
  <div class="eventOverview">
    <div v-for="event in events" :key="event" class="eventItem">
      <div class="eventItem__date">
        <h6>{{ event.date }}</h6>
      </div>
      <div class="eventItem__info">
        <h4>{{ event.title }}</h4>
        <small>{{ event.location }}</small>
        <a :href="event.link">Bekijk event</a>
      </div>
      <div class="eventItem__genre"></div>
    </div>
    <nuxt-link to="catering">
      <div class="eventItemCta">
        <h2>Ook graag samenwerken?</h2>
        <p>Bekijk de mogelijkheden</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: 'King-S Festival',
          date: '27 apr',
          location: 'Strijp-S, Eindhoven',
          genre: '@assets/img/icons/bar.png',
          link: '#'
        },
        {
          title: 'Freshtival',
          date: '4-6 jun',
          location: 'Strijp-S, Eindhoven',
          genre: '@assets/img/icons/bar.png',
          link: '#'
        },
        {
          title: 'Zegevieren Festival',
          date: '5 mei',
          location: 'Strijp-S, Eindhoven',
          genre: '@assets/img/icons/bar.png',
          link: '#'
        },
        {
          title: 'Bedrijfs Catering',
          date: '26 jun',
          location: 'Strijp-S, Eindhoven',
          genre: '@assets/img/icons/bar.png',
          link: '#'
        }
      ]
    }
  }
}
</script>
