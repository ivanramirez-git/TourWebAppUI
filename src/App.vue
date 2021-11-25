<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
</style>
<script lang="ts">
import { defineComponent, onErrorCaptured } from "vue";
export default defineComponent({
  setup() {
    onErrorCaptured((err, instance, details) => {
      console.log(err);
      alert(err.toString());
    });
  },
});
</script>
