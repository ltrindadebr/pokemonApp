<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-sm-6 col-md-3" v-for="(pokemon, index) in pokemons" :key="index">
        <q-card class="my-card">
          <q-img src="https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_001_00.png" basic>
            <div
              class="absolute-bottom text-subtitle2 text-center"
            >#ID - Nome</div>
          </q-img>
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="yellow" name="blur_circular" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Types:</q-item-label>
                <q-item-label caption>ABCD</q-item-label>
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
      pokemons: {},
      name: [],
      url: [],
      type: [],
      page: {
        actual: '',
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3',
      },
    };
  },

  created() {
    this.paginate();
    this.getNames();
  },

  methods: {
    async paginate() {
      this.$axios.get(this.page.next).then((response) => {
        this.page.actual = this.page.next;
        this.page.next = response.data.next;
        this.pokemons = response.data.results;
        console.log(this.pokemons);
      });
    },
    async getNames() {
      const names = [];
      this.pokemons.forEach((pokemon) => {
        names.push(pokemon.name);
      });
      this.name = names;
      console.log(this.name);
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
