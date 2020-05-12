<script>
	import ListBuilder from '../components/ListBuilder';
  import Pairer from '../components/Pairer';
  
  let items = [];

  function onAdd(newValue) {
    items = [...items, newValue];
  }

  function onDelete(itemToDelete) {
    items = items.filter((item) => item !== itemToDelete);
  }
</script>

<svelte:head>
	<title>Pair programmer</title>
</svelte:head>

<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell--span-12">
      <h1 class="mdc-typography--headline2">Let's go!</h1>

      <p class="mdc-typography--body1">
        Pair-programming is a software development technique that involves two developers working together at the same workstation, on the same code problem.
      </p>
      <p class="mdc-typography--body1">
        You can find more information about <a href="https://en.wikipedia.org/wiki/Pair_programming" target="_blank">pair-programming on wikipedia</a>.
      </p>
      <p class="mdc-typography--body1">
        If you want you can <a href="#">read about my experience writing this app</a>.
      </p>
    </div>

    <div class="mdc-layout-grid__cell--span-6">
      <p class="mdc-typography--body1">1. Add everything you want to pair to this list.</p>

      <ListBuilder {items} {onAdd} {onDelete} />
    </div>

    <div class="mdc-layout-grid__cell--span-6">
      <p class="mdc-typography--body1">2. Once your list is complete, click 'Generate pairs' to get your random pairings.</p>

      <Pairer {items} />
    </div>
  </div>
</div>
