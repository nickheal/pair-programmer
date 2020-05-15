<script>
	import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import TourTip from '../components/TourTip';
	import { store, Tour } from '../stores/tour';

	export let segment;

	onMount(() => {
		const tourComplete = localStorage.getItem('tourComplete');
		if (!tourComplete) store.run();
		localStorage.setItem('tourComplete', true);
	});
</script>

<Nav {segment}/>

<main>
	<slot></slot>
	<Tour {TourTip}></Tour>
</main>