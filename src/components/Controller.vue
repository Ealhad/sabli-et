<template>
  <main>
    <header>
      <h1>
        sabli-et
      </h1>
      <p>
        Ceci est un splendide (faux) chrono. Passez <a target="_blank" href="http://article17.picdeballmer.science/p/sabli-et">ici</a> si vous avez des choses à dire.
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
      <button @click="temps -= 1">-</button>
      <input id="temps" type="number" min="0" v-model="temps"/>
      <button @click="temps += 1">+</button>
    </div>
    <hr>
    <div>
      <input type="number" min="0.2" step="0.2" v-model="fontSize"/>
      <label>
        Taille du texte
      </label>
    </div>
    <footer>
      <p>
        Fait avec ♥ et <a target="_blank" href="https://vuejs.org/">Vue.js</a>
      </p>
      <p>
        © Copyright 2017 Charles de Lacombe — code sur <a target="_blank" href="https://github.com/Ealhad/sabli-et/tree/master">Github</a>
      </p>
    </footer>
  </main>
</template>

<script>

export default {
  name: 'controller',
  computed: {
    fontSize: {
      get () {
        return this.$store.state.fontSize
      },
      set (size) {
        if (size < 0.2) {
          size = 0.2
        }
        this.$store.commit('setSize', size)
      }
    },
    temps: {
      get () {
        return this.$store.state.time
      },
      set (temps) {
        temps = parseInt(temps)
        if (temps < 0) {
          temps = 0
        }
        this.$store.commit('majChrono', temps)
      },
    },
  },
  methods: {
    open () {
      window.open('#/view')
    },
  },
}
</script>

<style scoped>
input {
  width: 50px;
  text-align: center;
  height: 1.8em;
}

#temps {
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

button {
  border: 1px solid #bbb;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  height: 1.8em;
  background-color: transparent;
  outline: none;
}

button:hover { border-color: #999; }
button:active { border-color: #777; }

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

</style>
