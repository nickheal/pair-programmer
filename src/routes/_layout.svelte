<script>
	import { onMount } from 'svelte';
	import { run, Tour } from 'svelte-tour';
	import Nav from '../components/Nav.svelte';
	import TourTip from '../components/TourTip';

	export let segment;

	onMount(() => {
		const tourComplete = localStorage.getItem('tourComplete');
		if (!tourComplete) run();
		localStorage.setItem('tourComplete', true);
	});
</script>

<Nav {segment}/>

<main>
	<slot></slot>
	<Tour {TourTip}></Tour>
</main>