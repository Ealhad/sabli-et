<template>
  <main>
    <header>
      <h1>
        sabli-et
      </h1>
      <p>
        Ceci est un splendide (faux) chrono. Passez <a href="http://article17.picdeballmer.science/p/sabli-et">ici</a> si vous avez des choses à dire.
      </p>
      <img src="sabli-et.png"/>
    </header>
    <hr>
    <div>
      <button @click="open">Ouvrir</button>
      <label>
        Pour ouvrir la page à projeter (en plein écran) sur laquelle s’affiche le temps.
      </label>
    </div>
    <hr>
    <div>
      <p>
        Et là, c’est le temps en minutes. Pas trop compliqué ? 😉
      </p>
      <button @click="decChrono">-</button>
      <input type="number" min="0" v-model="temps"/>
      <button @click="incChrono">+</button>
      <button @click="majChrono(temps)">régler</button>
    </div>
    <footer>
      <p>
        Fait avec ♥ et <a href="https://vuejs.org/">Vue.js</a>
      </p>
      <p>
        © Copyright 2017 Charles de Lacombe — code sur <a href="https://github.com/Ealhad/sabli-et/tree/master">Github</a>
      </p>
    </footer>
  </main>
</template>

<script>

export default {
  name: 'controller',
  data () {
    return {
      temps: 60,
    }
  },
  methods: {
    incChrono () {
      this.temps = parseInt(this.temps) + 1
      this.majChrono(this.temps)
    },
    decChrono () {
      this.temps -= 1
      this.majChrono(this.temps)
    },
    majChrono (temps) {
        this.$store.commit('majChrono', temps)
    },
    open () {
      window.open('#/view')
    },
  },
  
}
</script>

<style scoped>
input {
  appearance: textfield;
}

header {
  display: grid;
  grid: auto / auto 200px;
}

img {
  height: 200px;
  width: 200px;
  grid-area: 1 / 2 / 3 / 2;
  align-self: center;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

</style>
