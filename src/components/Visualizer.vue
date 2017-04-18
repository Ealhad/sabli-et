<template>
  <main>
    <div id="temps">
      {{ temps.minutes }} : {{ temps.secondes }}
    </div>
  </main>
</template>

<script>

const pad = number => ('00' + number).slice(-2)

const humanTime = totalSecondes => {
  const secondes = totalSecondes % 60
  const minutes = (totalSecondes - secondes) / 60
  return {
    minutes,
    secondes: pad(secondes)
  }
}

export default {
  computed: {
    temps () {
      return humanTime(this.$store.state.time)
    }
  }
}
</script>

<style scoped>
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
  font: 4em bold sans-serif;
  text-shadow: 0 0 3px white;
}

</style>
