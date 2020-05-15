<script>
  import Button, {Label} from '@smui/button';
  import List, {Item, Text} from '@smui/list';
  import generatePairs from '../utils/generatePairs';
  import { store } from '../stores/tour';

  export let items;

  let pairs = [];

  function onGeneratePairs() {
    pairs = generatePairs(items);
  }
</script>

<div bind:this={store.register} data-tour="Once the list is complete, click here to pair the items.">
  <Button
    data-testid="generate-pairs-button"
    on:click={onGeneratePairs}
  >
    <Label>Generate pairs</Label>
  </Button>
</div>

<List>
  {#each pairs as item}
    <Item data-testid="pair">
      {item[0]}
      {#if item.length >= 2}
        &
        {item[1]}
      {/if}
      {#if item.length >= 3}
        &
        {item[2]}
      {/if}
    </Item>
  {/each}
</List>
