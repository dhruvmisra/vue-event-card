<template>
  <div class="home">
    <!-- <h1 class="title" v-if="true">Events</h1> -->
    <transition-group tag="div" class="row m-0 justify-content-center" name="fade">
      <div class="event" v-for="event in events" :key="event.name">
        <CardDesign :event="event" @clicked="onClick" v-if="(!full) || (full && selected == event.name)" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import CardDesign from '@/components/CardDesign'
export default {
  name: 'home',
  components: {
    CardDesign
  },
  data() {
    return {
      selected: '',
      full: false,
      events: [
        {
          name: 'Competitive Code',
          date: 'October 11, 2019',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?',
          image: 'coding.jpg'
        },
        {
          name: 'Hackathon',
          date: 'October 11, 2019',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?',
          image: 'hackathon.jpg'
        },
        {
          name: 'Treasure Hunt',
          date: 'October 12, 2019',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?',
          image: 'treasure.jpg'
        },
        {
          name: 'Marvel Quiz',
          date: 'October 13, 2019',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?',
          image: 'marvel.jpg'
        },
      ]
    }
  },
  methods: {
    onClick(value) {
      this.full = !this.full;
      this.selected = value;
    }
  },
}
</script>

<style scoped>
.home {
  width: 100vw;
}
.title {
  color: white;
  text-align: center;
  font-size: 10vw;
}
.events {
  display: flex;
  justify-content: center;
}
.fade-move {
  transition: transform 0.5s;
}
</style>
