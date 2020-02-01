<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Pokémon App
        </q-toolbar-title>

        <div>v{{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-0"
    >
      <q-list>
        <q-item-label header>Menu Principal</q-item-label>
        <q-item clickable tag="a" href="/">
          <q-item-section avatar>
            <q-icon name="fas fa-caret-right" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Início</q-item-label>
            <q-item-label caption>Página inicial</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/pokemon-list">
          <q-item-section avatar>
            <img
              src="~assets/Psyduck.svg"
              style="width:25vw;max-width:30px;"
            >
          </q-item-section>
          <q-item-section>
            <q-item-label>Pokémons</q-item-label>
            <q-item-label caption>Lista de pokémons</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/ltrindadebr/pokemonApp">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/ltrindadebr/pokemonApp</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.toolbar {
  background-color: $dark-red;
}
</style>

<script>
export default {
  name: 'Layout',

  data() {
    return {
      version: '1.0.0',
      leftDrawerOpen: false,
    };
  },
};
</script>
