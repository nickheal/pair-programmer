<script>
  import List, {Item, Meta, Text} from '@smui/list';
	import Textfield, {Input, Textarea} from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import { TourItem } from '../stores/tour';

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

<TourItem message="Add the items you want to pair to this list.">
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
</TourItem>

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
      