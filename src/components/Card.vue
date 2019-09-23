<template>
    <div class="card border-0" :class="{ 'full': full }" @mouseover="hover = true" @mouseleave="hover = false" @click="goToEvent">
      <div class="card-image" :style="{ 'background-image': 'url(' + getImgUrl(event.image) + ')' }"></div>
      <div class="card-body">

        <div class="close-btn mx-2" @click.stop="goBack" v-if="full">&#10006;</div>

        <div class="title">{{ event.name.toUpperCase() }}</div>
        <div class="footer">
          <transition name="slide-right">
            <div class="extra" v-if="hover || full">
              <p class="m-0">Team-size: {{ event.teamSize }}</p>
              <p class="m-0">Time: {{ event.time }}</p>
            </div>
          </transition>
          <p class="date">{{ event.date.split(',')[0] }}</p>
        </div>
        <transition name="slide-left" tag="div">
          <div class="info row m-0" v-if="full">
            <div class="col-sm-12 col-md-6 px-0">
              <h4>Description</h4>
              <p>{{ event.description }}</p>
              <button class="btn register my-5">Register</button>
              <!-- <AppButton class="register my-4">Register</AppButton> -->
            </div>
            <div class="poster ml-auto">
              <img :src="getImgUrl(event.image)" :alt="event.name" class="w-100 h-100">
            </div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    event: Object,
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
      return require('../assets/images/' + img);
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  height: 400px;  
  width: 300px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.45);
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  transition: all 500ms ease-out;
  /* transform: rotate(-3deg); */
}
.card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.45);
}
.card:hover .card-image::after {
  background: rgba(0, 0, 0, 0.6);
}
.card:hover .title {
  font-size: 1.6em;
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
  /* text-shadow: 0 0 4px yellow; */
  z-index: 2;
}
.title {
  position: relative;
  text-align: center;
  color: yellow;
  font-weight: 500;
  font-size: 1.5em;
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

.card.full {
  position: relative;
  /* top: 0;
  left: 0; */
  height: 100vh;
  width: 100vw;
  box-shadow: 0 0 0px rgba(255, 255, 255, 0.45);
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
  background: rgba(0, 0, 0, 0.95);
}
.card.full .title {
  text-align: left;
  font-size: 1.6em;
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
  color: white;
}
.poster {
  max-width: 40vw;
  height: fit-content;
  border: 1px solid white;
  margin: 0 30px;
  margin-top: -200px;
}

.btn {
  color: white;
  padding: 10px 50px;
  transition: background-color 200ms ease-out;
  border-radius: 50px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.20);
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
}
.register {
  border-radius: 5px;
  padding: 15px 50px;
  background: transparent;
  border: 1px solid blue;
  box-shadow: 0 0 15px rgba(0, 0, 255, 0.5);
}
.register:hover {
  border-radius: 5px;
  padding: 15px 50px;
  color: white;
  background: blue;
  border: 1px solid blue;
}

</style>