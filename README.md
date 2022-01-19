# Intuitive -- React-in-vue-1

This sample is created to show how to consume React Components inside Vue app

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx

<template>
  <div id="app">
    <hr />
    <Button variant="outlined">Outlined</Button>
    <hr />
    <Button variant="contained">Contained</Button>
    <hr />
    <Button variant="contained" color="success">Success</Button>
    <hr />

    <Button variant="contained" disabled="true">Disabled</Button>
    <hr />
  </div>
</template>

<script>
// React MUI button
import Button from "@mui/material/Button";

export default {
  name: "App",
  components: {
    Button,
  },
  data() {
    return { name: "World" };
  },
};
</script>
```
