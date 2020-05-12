<script>
  import List, {Item, Text} from '@smui/list';
	import Textfield, {Input, Textarea} from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';

  export let items;
  export let onAdd;

  let valueClickable = '';

  function clickableHandler(event) {
    if (!event.key || event.key === 'Enter') {
      onAdd(valueClickable);
      valueClickable = '';
    }
  }
</script>

<Textfield
  type="text"
  withTrailingIcon={valueClickable !== ''}
  bind:value={valueClickable}
  label="Name"
  style="min-width: 250px;"
  on:keydown={clickableHandler}
>
  {#if valueClickable !== ''}
    <Icon class="material-icons" role="button" on:click={clickableHandler}>send</Icon>
  {/if}
</Textfield>

<List>
  {#each items as item}
    <Item><Text>{item}</Text></Item>
  {/each}
</List>
      