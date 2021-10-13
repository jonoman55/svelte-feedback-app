import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'This is a really cool website. I think it is the best website ever. 10 out of 10 for me!!!',
  },
  {
    id: 2,
    rating: 9,
    text: 'I really like this website. It has a very good look and the functionality is great!',
  },
  {
    id: 3,
    rating: 8,
    text: 'Nice website - good styling but could use some work. :)',
  },
])