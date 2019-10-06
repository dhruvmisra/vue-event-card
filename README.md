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

<p align="center">
  <img src="https://media.giphy.com/media/jO18cveEuJIJLBFyxK/giphy.gif">
</p>

# Installation
`npm i --save vue2-baremetrics-calendar`

_This package in also dependent on the vue-router_

`npm i --save vue-router` or `vue add router`

## Global Usage

Register the component globally using the Vue.use() method.

```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Import the plugin
import CardGrid from 'vue-event-card'

//Use the plugin
Vue.use(CardGrid);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

Once registered, you can use the component by passing an array of events:

```html
<CardGrid :events="events" buttonText="Know More" hideTitle />
```

## Props
| Prop         	| Type             	| Default    	| Description                                                             	|
|--------------	|------------------	|------------	|-------------------------------------------------------------------------	|
| `events`     	| Array (Required) 	| -          	| The array of event objects                                              	|
| `buttonText` 	| String           	| "Register" 	| The text which appears inside the button                                	|
| `hideTitle`  	| Boolean          	| false      	| Hide the title on collapsed card <br> (Will show in the expanded state) 	|
| `hideButton` 	| Boolean          	| false      	| Hide button in the expanded state                                       	|

## Emits
| Emitted Action  	| Description                                                            	|
|-----------------	|------------------------------------------------------------------------	|
| `buttonClicked` 	| Fired when the user clicks the button. Used to handle the click event. 	|

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
| Name          	| Type                	| Description                                                                                                       	|
|---------------	|---------------------	|-------------------------------------------------------------------------------------------------------------------	|
| `name`        	| String (Required)   	| Name of the event (_`Should be unique`_)                                                                          	|
| `date`        	| String              	| Date of the event                                                                                                 	|
| `description` 	| String              	| ...Oh what do I describe about this?                                                                              	|
| `html`        	| String              	| Valid HTML code to render inside the card.                                                                        	|
| `outerImage`  	| String (Image path) 	| The image appearing in the card in it's collapsed state. <br> Also the image in the background in expanded state. 	|
| `innerImage`  	| String (Image path) 	| The image appearing inside the card in expanded state.                                                            	|
| `details`     	| Object              	| Key-value pairs to show essential details on hovering the card.                                                   	|               

## Things to keep in mind

### Image paths
_Image paths can be defined for images in the project relative to `src` folder_

```js
outerImage: 'assets/images/marvel.jpg'  //converts to: /src/assets/images/marvel.jpg
```
> **How these paths works?**

> The given image path is prefixed with `@/` and then the image is imported using require() to get the webpack relative path.

_Image paths can also be a URL_
```js
outerImage: 'https://i.imgflip.com/3cjfgr.jpg'  //should start with https:// or http://
```

### Details Object
_This object should contain key-value pairs for the information to be shown on hover_
```js
details: {
  'Field A': 'Value A',
  'Field B': 'Value B',
  'Field C': 'Value C',
  ...
}
```

This will have this affect:

![Hover effect](https://media.giphy.com/media/MZXDWBbmbtp3HaARWG/giphy.gif)

### Date Field
Preferred format for the date string:

`[Month] [Date], [Year]`

The comma (,) is important as the component takes the first part of the string before comma to display. I am planning to switch to UNIX timestamps or maybe another slight animation for the year.

<br>

<center>

**This is my first NPM package for Vue.js, would love to hear your suggestions**

Feel free to point out bugs or request features

Nothing but :heart: for the community

</center>
