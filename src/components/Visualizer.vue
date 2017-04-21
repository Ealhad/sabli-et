<template>
  <main>
    <div id="temps" :style="{fontSize: fontSize}">
      {{ temps }}
    </div>
  </main>
</template>

<script>

export default {
  computed: {
    temps () {
      return this.$store.state.time
    },
    fontSize () {
      return this.$store.state.fontSize + 'em'
    },
  }
}
</script>

<style scoped>
@font-face {
   font-family: "noodle";
   src: url("https://ealhad.github.io/sabli-et/big_noodle_titling.ttf") format("truetype");
}

main {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

#temps {
  font-family: "noodle";
  text-shadow: 0 0 3px white;
}

</style>
