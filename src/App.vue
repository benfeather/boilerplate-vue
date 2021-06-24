<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<Nav />
	<router-view />
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Nav from './components/Nav.vue'

	export default defineComponent({
		name: 'App',
		components: {
			Nav,
		},
	})
</script>

<style lang="scss">
	#app {
		text-align: center;
		margin-top: 60px;
	}

	.unused-class {
		background-color: red;
	}
</style>
