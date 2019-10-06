<template>
  <div class="home">
    <h1 class="title">Events</h1>
    <div class="row mx-auto justify-content-center">
      <CardGrid :events="events" :buttonText="'Register'" />
    </div>
  </div>
</template>

<script>
import CardGrid from "@/components/CardGrid";
export default {
  name: "home",
  components: {
    CardGrid
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
          outerImage: "assets/images/coding.jpg",
          innerImage: "assets/images/coding.jpg",
          details: {
            'Team Size': '2',
            'Time': '10AM - 1PM'
          }
        },
        {
          name: "Hackathon",
          date: "October 11, 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?",
          outerImage: "assets/images/hackathon.jpg",
          innerImage: "assets/images/hackathon.jpg",
          details: {
            'Team Size': '2',
            'Time': '12PM - 8PM'
          }
        },
        {
          name: "Treasure Hunt",
          date: "October 12, 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?",
          outerImage: "assets/images/treasure.jpg",
          innerImage: "assets/images/treasure.jpg",
          details: {
            'Team Size': '2',
            'Time': '4PM - 6PM'
          }
        },
        {
          name: "Marvel Quiz",
          date: "October 13, 2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ea sint voluptatum vel rerum ipsum illo architecto repellat debitis corporis ex, ut explicabo! Voluptatum commodi dignissimos nihil cumque mollitia?",
          outerImage: "assets/images/marvel.jpg",
          innerImage: "assets/images/marvel.jpg",
          details: {
            'Team Size': '2',
            'Time': '3PM - 5PM'
          }
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
  font-weight: 700;
  margin: 20px 0;
}

@media only screen and (max-width: 768px) {
  .title {
    font-size: 15vw;
  }
}
</style>
