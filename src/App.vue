<template>
  <div id="app">
    Who do you want to say hello to?
    <br />
    <input v-model="name" />
    <hr />
    <HelloVue :name="name" />
    <hr />
    <HelloReact :name="name" />
    <hr />
    <Button variant="outlined">Test</Button>
    <hr />
    <Button variant="contained">Test</Button>
    <hr />
    <Button variant="contained" disabled="true">Disabled</Button>
    <!--<Button
      name="Solid-High-Contrast"
      iconPosition="left"
      theme="light"
      hasicon="true"
      size="default"
      label="New Button"
    ></Button>-->
  </div>
</template>

<script>
import HelloVue from "./components/HelloVue";
import HelloReact from "./components/HelloReact.jsx";
import Button from "@mui/material/Button";
// import Button from "@hmoussa1995/react-button-lib-github";

export default {
  name: "App",
  components: {
    HelloVue,
    HelloReact,
    Button,
  },
  data() {
    return { name: "World" };
  },
};
</script>