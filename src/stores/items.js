import { writable } from 'svelte/store';

let initialState = [];

if (process.browser) {
  const storedItems = localStorage.getItem('items');
  console.log(storedItems);
  if (storedItems) initialState = JSON.parse(storedItems);
}

const itemsStore = writable(initialState);

if (process.browser) {
  itemsStore.subscribe(items => localStorage.setItem('items', JSON.stringify(items)));
};



export default itemsStore;
