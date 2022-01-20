<template>
  <div id="app">
    <!--  Who do you want to say hello to?
    <br />
    <input v-model="name" />
    <hr />
    <HelloVue :name="name" />
    <hr />
    <HelloReact :name="name" /> -->
    <hr />
    <Button variant="outlined">Outlined</Button>
    <hr />
    <Button variant="contained">Contained</Button>
    <hr />
    <Button variant="contained" color="success">Success</Button>
    <hr />

    <Button variant="contained" disabled="true">Disabled</Button>
    <hr />

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
// import HelloVue from "./components/HelloVue";
// import HelloReact from "./components/HelloReact.jsx";
import Button from "@mui/material/Button";
// import Button from "@hmoussa1995/react-button-lib-github";
// added comment 1
// added comment 2
// third commit after merge with main
    // forth

import Button from "@material-ui/core/Button";

export default {
  name: "App",
  components: {
    /*  HelloVue,
    HelloReact, */
    Button,
  },
  data() {
    return { name: "World" };
  },
};
</script>