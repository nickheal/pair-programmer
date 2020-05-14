<script>
  import List, {Item, Meta, Text} from '@smui/list';
	import Textfield, {Input, Textarea} from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';

  export let items;
  export let onAdd;
  export let onDelete;

  let valueClickable = '';

  function add(event) {
    if (!event.key || event.key === 'Enter') {
      onAdd(valueClickable);
      valueClickable = '';
    }
  }

  function deleteItem(item) {
    onDelete(item);
  }
</script>

<Textfield
  data-testid="add-item-input"
  type="text"
  withTrailingIcon={valueClickable !== ''}
  bind:value={valueClickable}
  label="Name"
  style="min-width: 250px;"
  on:keydown={add}
>
  {#if valueClickable !== ''}
    <Icon class="material-icons" role="button" on:click={add}>send</Icon>
  {/if}
</Textfield>

<List>
  {#each items as item}
    <Item data-testid={`item-${item}`}>
      <Text>{item}</Text>
      <Meta
        class="material-icons"
        data-testid={`delete-item-${item}`}
        on:click={() => deleteItem(item)}
      >
        delete
      </Meta>
    </Item>
  {/each}
</List>
      