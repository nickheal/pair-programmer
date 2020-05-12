<script>
	import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Drawer, {Content, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
	import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
	import H6 from '@smui/common/H6.svelte';
	
	let menuDrawer;
	let menuOpen = false;

	export let segment;
</script>

<TopAppBar variant="static" dense color="primary">
	<Row>
		<Section>
			<IconButton class="material-icons" on:click={() => menuOpen = !menuOpen}>menu</IconButton>
			<Title>Pair programmer</Title>
		</Section>
	</Row>
</TopAppBar>

<Drawer variant="modal" bind:this={menuDrawer} bind:open={menuOpen}>
	<Content>
		<List>
			<Item href="." on:click={() => menuOpen = false} activated={segment === undefined ? "page" : undefined}>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>Home</Text>
			</Item>

			<Separator nav />
			<Subheader component={H6}>About</Subheader>
			<Item href="purpose" on:click={() => menuOpen = false} activated={segment === 'purpose' ? "page" : undefined}>
				<Graphic class="material-icons" aria-hidden="true">supervised_user_circle</Graphic>
				<Text>Purpose</Text>
			</Item>

			<Item href="technology" on:click={() => menuOpen = false} activated={segment === 'technology' ? "page" : undefined}>
				<Graphic class="material-icons" aria-hidden="true">memory</Graphic>
				<Text>Technology</Text>
			</Item>
		</List>
	</Content>
</Drawer>
<Scrim />
