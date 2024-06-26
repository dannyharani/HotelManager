import { writable } from 'svelte/store';

export const myStore = writable(0); // Default value

// Check for browser environment 
if (typeof window !== 'undefined') {
  const storedLength = localStorage.getItem("length");
  if (storedLength) {
    // @ts-ignore
    myStore.set(storedLength); // Load from localStorage if available
  }

  myStore.subscribe((value) => {
    // @ts-ignore
    localStorage.setItem("length", value); // Update localStorage on changes
  });
}