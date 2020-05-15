import { writable } from 'svelte/store';

const tourStore = writable({
  active: false,
  items: []
});

export { default as Tour } from './Tour.svelte';

export const store = {
  set register(el) {
    tourStore.update(store => ({
      ...store,
      items: [...store.items, el]
    }));
  },
  run() {
    tourStore.update(store => ({
      ...store,
      active: true
    }));
  },
  stop() {
    tourStore.update(store => ({
      ...store,
      active: false
    }));
  },
  subscribe: tourStore.subscribe.bind(tourStore)
}
