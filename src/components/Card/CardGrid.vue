<template>
  <transition-group name="fade" mode="out-in" tag="div" class="main-container">
    <div class="event-container" :class="{ 'full-container': (full && selected == event.name) }" v-for="event in events" :key="event.name">
      <Card
        :event="event"
        :buttonText="buttonText"
        :hideTitle="hideTitle"
        :hideButton="hideButton"
        @onOpen="onOpen"
        @onClose="onClose"
        @buttonClicked="$emit('buttonClicked')"
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
    events: Array,
    buttonText: {
      type: String,
      default: 'Register'
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    hideButton: {
      type: Boolean,
      default: false
    }
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
.main-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
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
  transition: all 1s ease;
}
.full-container::-webkit-scrollbar { width: 0 !important }

.fade-move {
  transition: transform 800ms ease;
}
</style>