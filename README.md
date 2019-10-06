<h1 align="center">Vue Event Card</h1>

<p align="center">
  <img src="https://img.shields.io/badge/made%20by-dhruvmisra-blue.svg" >

  <img src="https://img.shields.io/npm/v/vue-event-card">

  <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" >

  <!-- <img src="https://img.shields.io/github/stars/silent-lad/vue-event-card.svg?style=flat"> -->

  <img src="https://img.shields.io/github/languages/top/dhruvmisra/vue-event-card.svg">

  <img src="https://img.shields.io/github/issues/dhruvmisra/vue-event-card.svg">

  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat">
</p>

_A Vue.js interactive card design component to show essentials and description for an event._

---

The Vue Event Card is a minimalistic design to showcase your events in a clean and interactive way, and handling user actions.

Created on Vue.js by [Dhruv Misra](https://github.com/dhruvmisra)

# Live Demo
A live demo can be found [here](https://dhruvmisra.github.io/vue-event-card/).

<!-- <p align="center">
  <img src="https://media.giphy.com/media/VFvkCMvXvlTNAGuaZm/giphy.gif">
</p> -->

# Usage

## Global Usage

Register the component globally using the Vue.use() method.

```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Import the plugin
import Cards from 'vue-event-card'

//Use the plugin
Vue.use(Cards);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

Once registered, you can use the component by passing an array of events:

```html
<Cards :events="events />
```

## Events Array
 The events array should be an array of objects. Individual objects should contain the following fields:

 ```js
  events: [
    {
      name: "Event name",
      date: "October 11, 2019",
      description: "Blah blah blah blah",
      html: '<p>This is some valid <br> HTML</p>',
      outerImage: "assets/images/event.jpg",
      innerImage: "https://...",
      details: {
        'Team Size': '2',
        'Time': '10AM - 1PM'
      }
    },
    .
    .
    .
  ]
 ```
### Event Object
- **name**
      String, Name of the event

  

