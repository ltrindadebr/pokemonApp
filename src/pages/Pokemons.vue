<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-sm-6 col-md-3" v-for="(pokemon, index) in Pokemon" :key="index">
        <q-card class="my-card">
          <q-img v-bind:src="pokemon.image" basic>
            <div
              class="absolute-bottom text-subtitle2 text-center"
            >#ID - {{ pokemon.name }}</div>
          </q-img>
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="yellow" name="blur_circular" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Types:</q-item-label>
                <q-item-label caption>#{{ pokemon.type }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="public" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Region</q-item-label>
                <q-item-label caption>Preencher</q-item-label>
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
      AllPokemons: {},
      Pokemon: [
        {
          name: '',
          image: 'https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_001_00.png',
        },
      ],
      Page: {
        actual: '',
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5',
      },
    };
  },

  created() {
    this.getAllPokemons();
    // this.getPokemons();
  },

  methods: {
    async getAllPokemons() {
      this.$axios.get(this.Page.next).then((response) => {
        this.Page.actual = this.Page.next;
        this.Page.next = response.data.next;
        this.AllPokemons = response.data.results;
        // console.log('Pagina atual: ', this.Page.actual);
        // console.log('Próxima página: ', this.Page.next);
        this.carregaInformacoes();
      });
    },

    carregaInformacoes() {
      this.organizaNomes();
      this.organizaImagens();
    },

    organizaNomes() {
      const nameAndUrl = [];
      this.AllPokemons.forEach((pokemon) => {
        pokemon.name = this.corrigeNome(pokemon.name);
        nameAndUrl.push(
          {
            name: pokemon.name,
            url: pokemon.url,
          },
        );
      });
      this.Pokemon = nameAndUrl;
      // console.log(this.Pokemon);
    },

    async organizaImagens() {
      const image = [];
      this.Pokemon.forEach((pokemon) => {
        this.$axios.get(pokemon.url).then((response) => {
          image.push(
            {
              image: response.data.sprites.front_default,
            },
          );
        });
      });

      // let result = this.Pokemon;
      // this.Pokemon.forEach((pokemon) => {
      //   result = Object.assign(pokemon, image);
      // });

      // console.log(result);
      // this.Pokemon = Object.assign(this.Pokemon, image);
      // console.log(this.Pokemon);
    },

    async getPokemon(ID) {
      const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        id: ID,
      };

      const { url, type, id } = apiData;
      const apiUrl = `${url}${type}/${id}`;

      await this.$axios.get(apiUrl).then((response) => {
        this.Pokemon = response.data;
        this.trataInformacoes();
        return this.Pokemon;
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

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 220px;
  margin-bottom: 10px;
}
</style>
