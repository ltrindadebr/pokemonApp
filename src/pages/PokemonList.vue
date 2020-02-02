<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-sm-12 col-md-3" v-for="(pokemon, index) in ListaPokemon" :key="index">
        <cardPokemon :ListaPokemon='pokemon'></cardPokemon>
      </div>
    </div>
  </q-page>
</template>

<script>
import cardPokemon from '../components/cardPokemon.vue';

export default {
  name: 'ListaDePokemons',
  components: {
    cardPokemon,
  },

  data() {
    return {
      ListaPokemon: null,
    };
  },

  mounted() {
    this.carregaPokemons();
  },

  methods: {
    async carregaPokemons() {
      const headers = {
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
          'x-rapidapi-key': '230bf97e05msh62ac1484d005186p17c184jsnc55202ddc349',
        },
      };
      await this.$axios
        .get('https://pokemon-go1.p.rapidapi.com/pokemon_names.json', headers)
        .then((response) => {
          this.ListaPokemon = response.data;
        });
    },
  },
};
</script>
