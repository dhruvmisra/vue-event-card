<template>
  <div class="home">
    <!-- <h1 class="title" v-if="true">Events</h1> -->
    <transition-group name="fade" tag="div" class="row m-0 mx-auto justify-content-center">
      <div class="event" v-for="event in events" :key="event.name">
        <Card
          :event="event"
          @onOpen="onOpen"
          @onClose="onClose"
          v-if="(!full) || (full && selected == event.name)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "home",
  components: {
    Card
  },
  data() {
    return {
      selected: "",
      full: false,
      events: [
        {
          name: "Competitive Code",
          date: "October 11, 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?",
          image: "coding.jpg",
          teamSize: '2',
          time: '10AM - 1PM'
        },
        {
          name: "Hackathon",
          date: "October 11, 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?",
          image: "hackathon.jpg",
          teamSize: '2',
          time: '12PM - 8PM'
        },
        {
          name: "Treasure Hunt",
          date: "October 12, 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?",
          image: "treasure.jpg",
          teamSize: '2',
          time: '4PM - 6PM'
        },
        {
          name: "Marvel Quiz",
          date: "October 13, 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?",
          image: "marvel.jpg",
          teamSize: '2',
          time: '3PM - 5PM'
        }
      ]
    };
  },
  methods: {
    onOpen(value) {
      if (!this.full) {
        this.full = true;
        this.selected = value;
        this.$router.push({ path: "/", query: { event: value } });
      }
    },
    onClose() {
      setTimeout(() => {
        this.full = false;
      }, 400);
      this.$router.push({ path: "/", query: {} });
    }
  },
  created() {
    if (this.$route.query.event) {
      this.full = true;
      this.selected = this.$route.query.event;
    }
  }
};
</script>

<style scoped>
.title {
  color: white;
  text-align: center;
  font-size: 8vw;
}
.events {
  display: flex;
  justify-content: space-evenly;
}
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 800ms ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
.fade-move {
  transition: transform 0.5s;
}
</style>
