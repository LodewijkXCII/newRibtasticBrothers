<template>
  <section>
    <div class="container">
      <h1>Contact</h1>
      <div class="wrapper-1-2">
        <form>
          <h2>Neem contact op!</h2>
          <label for="name">Naam:</label>
          <input type="text" name="name" id="name" required />
          <label for="company">Bedrijf:</label>
          <input type="text" name="company" id="company" />
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" required />
          <label for="message">Bericht:</label>
          <textarea name="message" id="message" cols="30" rows="5"></textarea>

          <button type="submit" class="btn btn-primary">Verstuur</button>
        </form>
        <div class="textInfo">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            itaque totam nulla quae numquam blanditiis minima explicabo deleniti,
            accusamus porro repellat velit iusto fugiat modi officiis ad officia
            doloribus dolores quaerat reiciendis adipisci consequuntur sit. Magnam,
            quae reprehenderit eveniet, amet deserunt eaque earum iure, quo facere
            porro rerum repellat in.
          </p>
        </div>
      </div>
      <div class="service">
        <h2>Ge</h2>
      </div>
    </div>
    <SmallGallery />
  </section>
</template>

<script>
import SmallGallery from '@/components/SmallGallery.vue'
export default {
	components: {
		SmallGallery
	}
}
</script>

<style lang="scss">
form {
	display: flex;
	flex-direction: column;

	margin: 2em 0;
	padding: 1.5em 2.5em;

	background: $off-black-color;
	border: 2px solid darken($color: $off-black-color, $amount: 3);
	border-radius: 15px;
	font-size: 0.75em;

	h2 {
		margin-bottom: 0.7em;
	}

	label {
		margin-bottom: 0.35em;
	}
	input,
	select,
	textarea {
		margin-bottom: 1em;

		background: #212121;
		border: 1px solid #4a6053;
		border-radius: 10px;
		padding: 0.8em;
		color: #fff;
		font-family: $ft-lato;
	}
	input:focus,
	select:focus,
	textarea:focus {
		box-shadow: 0 0 10px $primary-color, 0 0 2px #4a6053;
		outline: none;
	}

	button {
		margin: 0;
		margin-right: 2em;
	}
}

@media (min-width: 650px) {
	form {
		margin: 2em;

		button {
			max-width: 50%;
			margin: auto;
		}
	}
}
</style>
