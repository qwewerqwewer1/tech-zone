<template>
  <v-card class="post">
    <div class="post__info">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.subtitle }}</div>
    </div>
    <div class="post__buttons">

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
