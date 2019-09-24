<template>
  <transition-group name="fade" mode="out-in" tag="div" class="row m-0 mx-auto">
    <div class="event" :class="{ 'full-container': (full && selected == event.name) }" v-for="event in events" :key="event.name">
      <Card
        :event="event"
        @onOpen="onOpen"
        @onClose="onClose"
        v-if="(!full) || (full && selected == event.name)"
      />
    </div>
  </transition-group>
</template>

<script>
import Card from './Card';

export default {
  components: {
    Card
  },
  props: {
    events: Array
  },
  data() {
    return {
      selected: "",
      full: false,
    }
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
}
</script>

<style scoped>
.full-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  transition: all 1s;
}
.full-container::-webkit-scrollbar { width: 0 !important }
.fade-move {
  transition: transform 1s;
}
</style>