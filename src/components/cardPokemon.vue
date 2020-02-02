<template>
  <q-card class="my-card">
    <img v-if="this.imagemPokemon" v-bind:src="this.imagemPokemon" />
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="local_bar" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ ListaPokemon.name }}</q-item-label>
          <q-item-label caption>#{{ ListaPokemon.id }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 220px;
  margin-bottom: 10px;
}
</style>

<script>
export default {
  name: 'cardPokemon',
  props: ['ListaPokemon'],

  data() {
    return {
      imagemPokemon: null,
    };
  },
  mounted() {
    this.carregarImagem(this.ListaPokemon.id);
  },
  methods: {
    async carregarImagem(ID) {
      let prefixBaseUrl = 'https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_';
      if (ID < 10) {
        prefixBaseUrl = 'https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_00';
      }
      if (ID >= 10 && ID < 100) {
        prefixBaseUrl = 'https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_0';
      }
      const sufixBaseUrl = '_00.png';
      const urlImagem = prefixBaseUrl + ID + sufixBaseUrl;
      this.imagemPokemon = urlImagem;
    },
  },
};
</script>
