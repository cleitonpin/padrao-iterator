import fetch from 'node-fetch'
import { Iterator } from './iterator.js';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

async function getPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
}

(async () => {
  const posts = await getPosts();
  const { stats } = await getPokemon('gengar');

  const iterator = new Iterator(posts);

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.currentItem())
  console.log(iterator.last());

  const iterator2 = new Iterator(stats);

  console.log(iterator2.next());
  console.log(iterator2.next());
  console.log(iterator2.next());
  console.log(iterator2.currentItem());
  console.log(iterator2.last());
})();
