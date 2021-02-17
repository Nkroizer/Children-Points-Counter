<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <div>{{ counter }}</div>
    <ion-button color="success" v-on:click="incrementCounter">+</ion-button>
    <ion-button color="danger" v-on:click="decrementCounter">-</ion-button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ExploreContainer",
  props: {
    name: String,
    points: Number,
  },
  data() {
    return {
      counter: Number = this.props.points || 0,
    };
  },
  methods: {
    incrementCounter: function() {
      this.counter += 1;
      console.log(this.counter);
    },

    decrementCounter: function() {
      this.counter -= 1;
      console.log(this.counter);
    },
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
