<template>
    <div class="card" :class="{ 'full': full }" @mouseover="hover = true" @mouseleave="hover = false" @click="goToEvent">
      <div class="card-image" :style="{ 'background-image': 'url(' + getImgUrl(event.outerImage) + ')' }"></div>
      <div class="card-body">

        <div class="close-btn mx-2" @click.stop="goBack" v-if="full">&#10006;</div>

        <div class="title" v-if="full || showTitle">{{ event.name.toUpperCase() }}</div>
        <div class="footer">
          <transition name="slide-right">
            <div class="extra" v-if="hover || full">
              <p class="m-0" v-for="(detail, key) in event.details" :key="key">{{ key }}: {{ detail }}</p>
            </div>
          </transition>
          <p class="date">{{ event.date.split(',')[0] }}</p>
        </div>
        <transition name="slide-left" tag="div">
          <div class="info" v-if="full">
            <div class="text">
              <h2>Description</h2>
              <p>{{ event.description }}</p>
            </div>
            <div class="poster">
              <img :src="getImgUrl(event.innerImage)" :alt="event.name" class="w-100">
            </div>
          </div>
        </transition>
        <button class="btn register" v-if="full" @click="onButtonClick">{{ buttonText }}</button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    event: Object,
    buttonText: {
      type: String
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      full: false,
      hover: false
    }
  },
  created() {
    if(this.event.name == this.$route.query.event) {
      this.full = true;
    }
  },
  methods: {
    goToEvent() {
      this.full = true;
      this.$emit('onOpen', this.event.name);
    },
    goBack() {
      this.full = false;
      this.$emit('onClose');
    },
    getImgUrl(img) {
      if(img.startsWith('https://') || img.startsWith('http://')) {
        return img;
      }
      return require('@/' + img);
    },
    onButtonClick() {
      console.log('button clicked');
      this.$emit('buttonClicked');
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  height: 400px;  
  width: 300px;
  box-shadow: 0 5px 20px rgba(120, 120, 120, 0.4);
  border: none;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  transition: all 500ms ease-out;
}
.card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 50px rgba(120, 120, 120, 0.4);
}
.card:hover .card-image::after {
  background: rgba(0, 0, 0, 0.6);
}
.card:hover .title {
  font-size: 1.5em;
}
.card:hover .title::after {
  bottom: -15px;
}
.card:hover .date {
  font-size: 1.6em;
  opacity: 1;
}

.card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  z-index: -1;
}
.card-image::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  transition: all 800ms ease-out;
}

.card-body {
  color: rgba(252, 253, 253, 0.692);
  font-weight: bold;
  padding: 30px;
  z-index: 2;
}
.title {
  position: relative;
  text-align: center;
  color: yellow;
  font-weight: 700;
  font-size: 1.4em;
  margin-top: 30px;
  transition: all 200ms ease-out;
}
.title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30px;
  width: 20%;
  height: 3px;
  background: yellow;
  transition: all 200ms ease-out;
}
.footer {
  position: absolute;
  bottom: 20px;
  background: transparent;
}
.extra {
  margin: 20px 0;
  font-size: 1em;
}
.date {
  font-size: 1.2em;
  color: yellow;
  transition: font-size 200ms ease-out;
}

/* Animations */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 300ms ease-out;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all 400ms ease 500ms;
}
.slide-left-leave-active {
  transition: all 50ms;
}
.slide-left-enter {
  transform: translateX(100px);
  opacity: 0;
}
.slide-left-leave-to {
  opacity: 0;
}

/* Full screen card */
.card.full {
  position: relative;
  /* top: 0;
  left: 0; */
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  box-shadow: 0 0 0 white;
  border-radius: 0;
  margin: 0;
  cursor: auto;
  z-index: 10;
  transition: all 800ms ease;
}
.card.full:hover {
  transform: scale(1);
  box-shadow: 0 0 0 white;
}
.card.full .card-image, .card.full .card-image::after {
  border-radius: 0;
}
.card.full .card-image::after {
  background: rgba(0, 0, 0, 0.90);
}
.card.full .title {
  text-align: left;
  font-size: 1.5em;
  transition: all 500ms ease-out;
}
.card.full .title::after {
  left: 0;
  transform: translateX(0);
  bottom: -15px;
  transition: all 500ms ease-out;
}
.card.full .footer {
  position: relative;
  margin-top: 60px;
}
.card.full .date {
  font-size: 1.6em;
}

.info {
  display: flex;
  color: white;
}
.text {
  order: 2;
  width: 50vw;
}
.poster {
  width: 40vw;
  height: fit-content;
  border: 1px solid white;
  margin-top: -20vh;
  margin-left: auto;
  margin-right: 30px;
  order: 3;
}

.poster img {
  width: 100%; 
}

.btn {
  color: white;
  font-weight: bold;
  padding: 10px 50px;
  transition: background-color 200ms ease-out;
  border-radius: 50px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.20);
  cursor: pointer;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 30px;
  margin: 10px;
  font-size: 1.4em;
  color: white;
  cursor: pointer;
}
.register {
  position: relative;
  margin: 20px 0;
  border-radius: 5px;
  padding: 20px 50px;
  background: black;
  border: 1px solid blue;
  box-shadow: 0 0 15px rgba(0, 0, 255, 0.5);
}
.register:hover {
  color: white;
  background: blue;
  border: 1px solid blue;
}

@media screen and (max-width: 768px) {
  .card {
    width: 80vw;
  }
  .info {
    flex-direction: column;
  }
  .poster {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 80vw;
    order: 1;
  }
  .text {
    width: 80vw;
  }
  .register {
    margin: 30px 0;
  }
}
</style>