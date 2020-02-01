<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/Error404.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Desculpe, mas nenhum pokémon foi encontrado...<strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Retornar"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404',
};
</script>
