<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <div class="county">{{ getCounter() }}</div>
    <ion-button color="success" v-on:click="incrementCounter(1)">+</ion-button>
    <ion-button color="danger" v-on:click="decrementCounter(1)">-</ion-button>
    <div>
      <ion-button color="success" v-on:click="incrementCounter(10)"
        >10</ion-button
      >
      <ion-button color="success" v-on:click="incrementCounter(50)"
        >50</ion-button
      >
      <ion-button color="success" v-on:click="incrementCounter(100)"
        >100</ion-button
      >
    </div>
    <div>
      <ion-button color="danger" v-on:click="decrementCounter(10)"
        >10</ion-button
      >
      <ion-button color="danger" v-on:click="decrementCounter(50)"
        >50</ion-button
      >
      <ion-button color="danger" v-on:click="decrementCounter(100)"
        >100</ion-button
      >
    </div>
  </div>
</template>

<script lang="ts">
let counter = 0;
export default {
  name: "ExploreContainer",
  props: {
    name: String,
  },
  data() {
    return {
      counter: localStorage["a"] ? localStorage["a"] : 0,
    };
  },
  methods: {
    incrementCounter: function(value: number) {
      counter += value;
      const curCou = document.querySelector(".county");
      curCou!.innerHTML = "<div>" + counter + "</div>";
      localStorage["a"] = counter;
      console.log(counter);
    },

    decrementCounter: function(value: number) {
      counter -= value;
      const curCou = document.querySelector(".county");
      curCou!.innerHTML = "<div>" + counter + "</div>";
      localStorage["a"] = counter;
      console.log(counter);
    },

    getCounter: function() {
      return counter;
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
