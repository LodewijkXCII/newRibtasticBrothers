<template>
  <section class="countdown" v-if="loaded">
    <!-- <h2 v-if="!expired">Bezorging begint over:</h2>
    <h2 v-if="expired">Bezorging is live!</h2> -->
    <div class="countdown__Timer">
      <div class="countdown__Timer--days">
        {{ displayDays }}
        <span>Dagen</span>
      </div>
      <span>:</span>
      <div class="countdown__Timer--hours">
        {{ displayHours }}<span>uren</span>
      </div>
      <span>:</span>
      <div class="countdown__Timer--minutes">
        {{ displayMinutes }}<span>minuten</span>
      </div>
      <span>:</span>
      <div class="countdown__Timer--seconds">
        {{ displaySeconds }}<span>seconden</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false,
    expired: false,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(2020, 9, 1, 17, 0, 0)
        const distance = end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          this.expired = true
          return
        }

        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)

        this.displayMinutes = minutes < 10 ? '0' + minutes : minutes
        this.displaySeconds = seconds < 10 ? '0' + seconds : seconds
        this.displayHours = hours < 10 ? '0' + hours : hours
        this.displayDays = days < 10 ? '0' + days : days
        this.loaded = true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.countdown {
  max-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

  &__Timer {
    display: flex;
    font-size: 3.5rem;
    font-family: $ft-bebas;
    color: $primary-color;

    & > * {
      margin: 0.2rem;
    }

    &--days,
    &--hours,
    &--minutes,
    &--seconds {
      display: flex;
      flex-direction: column;

      span {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
