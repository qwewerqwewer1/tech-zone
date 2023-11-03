<template>
  <div>
    <v-card class="post mt-3 pa-5 light-green elevation-12" variant="outlined">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.description }}</div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>
