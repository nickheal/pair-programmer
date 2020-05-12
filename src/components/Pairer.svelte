<script>
  import Button, {Label} from '@smui/button';
  import List, {Item, Text} from '@smui/list';

  export let items;

  let pairs = [];

  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function generatePairs() {
    pairs = shuffle(items).reduce((pairs, item, index, array) => {
      const lastItem = index === array.length - 1;
      const lastInAccIncomplete = pairs[pairs.length - 1].length < 2;

      if (lastItem || lastInAccIncomplete) {
        pairs[pairs.length - 1] = [...pairs[pairs.length - 1], item];
      } else {
        pairs = [...pairs, [item]]
      }
      
      return pairs;
    }, [[]]);
  }
</script>

<Button on:click={generatePairs}><Label>Generate pairs</Label></Button>

<List>
  {#each pairs as item}
    <Item class="mdc-layout-grid__inner">
      <Text class="mdc-layout-grid__cell--span-{item.length === 3 ? '4' : '6'}">{item[0]}</Text>
      <Text class="mdc-layout-grid__cell--span-{item.length === 3 ? '4' : '6'}">{item[1]}</Text>
      {#if item.length === 3}
        <Text class="mdc-layout-grid__cell--span-4">{item[2]}</Text>
      {/if}
    </Item>
  {/each}
</List>
