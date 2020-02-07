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
      pokemons: [],
      name: [],
      url: [],
      type: [],
      image: [],
      page: {
        actual: '',
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3',
      },
    };
  },

  created() {
    this.paginate();
  },

  methods: {
    async paginate() {
      await this.$axios.get(this.page.next).then((response) => {
        this.page.actual = this.page.next;
        this.page.next = response.data.next;
        this.pokemons = response.data.results;
      });
      this.getInfos();
    },

    async getInfos() {
      await this.getNamesAndUrl();
      await this.getImages();
      // console.log(this.name);
      // console.log(this.url);
      // console.log(this.image);
    },

    async getNamesAndUrl() {
      this.pokemons.forEach((pokemon) => {
        this.name.push(pokemon.name);
        this.url.push(pokemon.url);
      });
      // this.getImages();
    },

    async getImages() {
      this.url.forEach((url) => {
        this.$axios.get(url).then((response) => {
          this.image.push(response.data.sprites.front_default);
          this.getTypes(response.data.types);
        });
      });
    },

    async getTypes(types) {
      const base = [];
      types.forEach((type) => {
        base.push(type.type.name);
      });
      // console.log(base);
      base.forEach((type) => {
        console.log(type);
      });
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
