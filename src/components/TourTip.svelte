<script>
  import Button, {Label} from '@smui/button';

  export let atEnd;
  export let message;
  export let onClickNext;
</script>

<div class="container">
  <p class="message">{@html message}</p>

  <Button on:click={onClickNext}>
    <Label>{atEnd ? 'Done': 'Next'}</Label>
  </Button>
</div>

<style>
  .container {
    padding: 24px;
  }
  .message {
    margin: 0 0 16px;
  }
</style>