<template>
  <v-card class="post d-flex justify-space-between align-center">
    <div class="post__info">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.subtitle }}</div>
    </div>
    <div class="post__buttons">
      <v-btn @click="$emit('remove', post)" color="deep-orange lighten-1">Удалить</v-btn>
    </div>
  </v-card>
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

