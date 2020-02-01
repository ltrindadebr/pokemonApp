<template>
  <q-page style="padding-top: 30px;" class="q-pa-md">
    <p v-for="n in 5" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
      nihil praesentium molestias a adipisci, dolore vitae odit,
      quidem consequatur optio voluptates asperiores pariatur eos
      numquam rerum delectus commodi perferendis voluptate?
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'ListaDePokemons',
  methods: {
  },
};
</script>
