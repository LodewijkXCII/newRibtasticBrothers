<template>
  <div class="trbValues">
    <div v-for="keyValue in keyValues" :key="keyValue.id" class="trbValues__Value">
      <nuxt-link v-if="keyValue.link" :to="keyValue.link">
        <div class="trbValues__Value--ValueIcon">
          <font-awesome-icon :icon="keyValue.icon" />
        </div>
      </nuxt-link>
      <div class="trbValues__Value--ValueIcon" v-else>
        <font-awesome-icon :icon="keyValue.icon" />
      </div>
      <div class="trbValues__Value--ValueText">
        <h4>{{ keyValue.title }}</h4>
        <p>{{ keyValue.text }}</p>
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
					title: 'Service',
					text:
						'Wij geloven in het genot van lekker eten en persoonlijke aandacht. Het is ons doel om gasten een smaakbeleving te bezorgen, door ze kennis te laten maken met onze unieke BBQ creaties.',
					icon: 'concierge-bell',
					link: 'contact'
				},
				{
					title: 'Smaak',
					text:
						'Taste is everything! We werken daarom enkel met kwaliteitsproducten, nemen onze tijd in de bereiding en maken onze gerechten af met zelfgemaakte bijpassende sauzen. Heb jij ze al eens geprobeerd?',
					icon: 'pepper-hot',
					link: 'smaak'
				},
				{
					title: 'Sensatie',
					text:
						'Ribtastic Brothers are like no others. Met ons enthousiast team en uniek zelfgemaakte BBQ bakfiets maken we er altijd een feestje van. Vanuit dit grillmonster kunnen we volledig zelfvoorzienend onze heerlijke creaties bereiden.',
					icon: 'bicycle',
					link: 'sensatie'
				},
				{
					title: 'Samen',
					text:
						'Samen genieten, betekend samen zorg dragen. Alles wat we doen, doen we daarom met een duurzame gedachte. Dit zie je terug in de materialen die we gebruiken en de CO2 die we jaarlijkse compenseren.',
					icon: 'leaf',
					link: 'samen'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.trbValues {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	margin-top: 2rem;

	&__Value {
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		&--ValueText {
			top: 0;

			p {
				display: none;
			}
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
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 100px 250px;
			text-align: center;
			grid-gap: 1em;
			margin-left: 0;

			&--ValueText {
				align-self: start;
				p {
					display: block;
				}
			}
			a,
			&--ValueIcon {
				justify-self: center;
			}
		}
	}
}
</style>
