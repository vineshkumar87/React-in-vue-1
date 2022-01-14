<template>
  <div id="app">Who do you want to say hello to?
    <br>
    <input v-model="name">
    <hr>
    <HelloVue :name="name"/>
    <hr>
    <HelloReact :name="name"/>
  </div>
</template>

<script>
import HelloVue from "./components/HelloVue";
import HelloReact from "./components/HelloReact.jsx";

export default {
  name: "App",
  components: {
    HelloVue,
    HelloReact,
  },
  data() {
    return { name: "World" };
  }
};
</script>