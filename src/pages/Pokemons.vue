<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <q-card class="my-card">
          <q-img v-bind:src="Pokemon.sprites.front_default" basic>
            <div
              class="absolute-bottom text-subtitle2 text-center"
            >#{{ Pokemon.id }} - {{ Pokemon.name }}</div>
          </q-img>
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Types:</q-item-label>
                <q-item-label caption>#{{ Pokemon.types }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ Pokemon.name }}</q-item-label>
                <q-item-label caption>#{{ Pokemon.id }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ListaDePokemons',

  data() {
    return {
      Pokemon: {
        name: '',
        sprites: {},
      },
    };
  },

  created() {
    this.getPokemons();
  },

  methods: {
    async getPokemons() {
      const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        id: '1',
      };

      const { url, type, id } = apiData;
      const apiUrl = `${url}${type}/${id}`;

      this.$axios.get(apiUrl).then((response) => {
        this.Pokemon = response.data;
        this.trataInformacoes();
      });
    },

    trataInformacoes() {
      this.Pokemon.name = this.corrigeNome(this.Pokemon.name);
      this.Pokemon.types = this.carregaTipos();
      this.Pokemon.types = this.corrigeNome(this.Pokemon.types);
    },

    corrigeNome(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    carregaTipos() {
      const types = [];
      this.Pokemon.types.forEach((element) => {
        types.push(element.type.name);
      });
      return types.join(', ');
    },
  },
};
</script>
