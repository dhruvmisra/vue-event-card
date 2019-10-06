import Vue from 'vue';
import Card from './Card/Card';
import CardGrid from './Card/CardGrid';

// const Components = {
//   Card,
//   CardGrid
// }

// Object.keys(Components).forEach(key => {
//   Vue.component(key, Components[key]);
// });

Vue.component('CardGrid', CardGrid);

export default CardGrid;