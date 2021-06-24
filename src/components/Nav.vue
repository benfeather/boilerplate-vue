<template>
	<nav class="nav">
		<router-link class="nav__link" to="/">Home</router-link>
		<router-link class="nav__link" to="/About">About</router-link>
	</nav>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'Nav',
	})
</script>

<style lang="scss">
	.nav {
		display: grid;
		grid-auto-columns: min-content;
		grid-auto-flow: column;
		justify-content: center;
		gap: 20px;

		&__link {
			color: $primary;
			text-decoration: none;
			text-transform: uppercase;
		}
	}
</style>
