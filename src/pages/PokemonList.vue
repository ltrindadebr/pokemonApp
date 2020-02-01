<template>
  <q-page class="q-pa-xl">
    <div class="" style="max-width: 200px">
      <q-list dense bordered padding
      class="rounded-borders"
      v-for='pokemon in ListaPokemon'
      v-bind:key="pokemon.id"
      >
        <q-item clickable v-ripple>
          <q-item-section>
            ID: {{ pokemon.id }}
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            Nome: {{ pokemon.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ListaDePokemons',
  data() {
    return {
      ListaPokemon: null,
    };
  },

  mounted() {
    this.carregaPokemons();
  },

  methods: {
    carregaPokemons() {
      const headers = {
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
          'x-rapidapi-key': '230bf97e05msh62ac1484d005186p17c184jsnc55202ddc349',
        },
      };
      this.$axios
        .get('https://pokemon-go1.p.rapidapi.com/pokemon_names.json', headers)
        .then((response) => {
          this.ListaPokemon = response.data;
        });
    },
  },
};
</script>
