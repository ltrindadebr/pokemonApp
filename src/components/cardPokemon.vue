<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="local_bar" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ ListaPokemon.name }}</q-item-label>
          <q-item-label caption>Need a description.</q-item-label>
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
};
</script>
