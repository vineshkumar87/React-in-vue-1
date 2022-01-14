<template>
  <div>Hello {{ name }}, I am a Vue component</div>
</template>

<script>
export default {
  name: "HelloVue",
  props: {
    name: String
  }
};
</script>