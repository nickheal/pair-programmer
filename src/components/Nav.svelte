<script>
	import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Drawer, {Content, Scrim} from '@smui/drawer';
	import Button, {Label} from '@smui/button';
	import LinearProgress from '@smui/linear-progress';
	import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
	import H6 from '@smui/common/H6.svelte';
	import { store } from '../stores/tour';
	import './Nav.scss';
	
	let menuOpen = false;
	let timer;
	let progress;
	let closed = true;

	export let segment;

	function onClickTimer() {
		window.clearInterval(timer);
		progress = 0;
		closed = false;
		timer = window.setInterval(() => {
			progress += (1 / 1500);
			if (progress > 1) {
				closed = true;
				window.clearInterval(timer);
			}
		}, 1000);
	}
</script>

<TopAppBar variant="static" dense color="primary">
	<Row>
		<Section>
			<div bind:this={store.register} data-tour="Click here to access the navigation.">
				<IconButton
					class="material-icons"
					data-testid="nav-control"
					on:click={() => menuOpen = !menuOpen}
				>
					menu
				</IconButton>
			</div>
			<Title>Pair programmer</Title>
		</Section>
		<Section align="end" toolbar>
			<div bind:this={store.register} data-tour={`Click here to start a 25 minute timer. When the timer runs down take a few minutes break, and then switch who 'drives', and who assists. This is based on the <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Pomodoro Technique</a>.`}>
				<IconButton
					class="material-icons"
					aria-label="Timer"
					on:click={onClickTimer}
				>
					schedule
				</IconButton>
			</div>
		</Section>
	</Row>
</TopAppBar>

<Drawer variant="modal" bind:open={menuOpen}>
	<Content>
		<List>
			<Item
				data-testid="nav-home"
				href="."
				on:click={() => menuOpen = false}
				activated={segment === undefined ? "page" : undefined}
			>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>Home</Text>
			</Item>

			<Separator nav />
			<Subheader component={H6}>About</Subheader>
			<Item
				data-testid="nav-purpose"
				href="purpose"
				on:click={() => menuOpen = false}
				activated={segment === 'purpose' ? "page" : undefined}
			>
				<Graphic class="material-icons" aria-hidden="true">supervised_user_circle</Graphic>
				<Text>Purpose</Text>
			</Item>

			<Item
				data-testid="nav-technology"
				href="technology"
				on:click={() => menuOpen = false}
				activated={segment === 'technology' ? "page" : undefined}
			>
				<Graphic class="material-icons" aria-hidden="true">memory</Graphic>
				<Text>Technology</Text>
			</Item>
		</List>
	</Content>
</Drawer>
<Scrim />

<div>
	<LinearProgress class="colored-bar" {progress} {closed} />
</div>