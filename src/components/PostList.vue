<template>
  <div class="posts">
    <v-card class="post d-flex justify-space-between" v-for="post in posts" :key="post.id">
      <div>
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div><strong>Описание:</strong> {{ post.subtitle }}</div>
      </div>
      <div>
        <v-btn color="deep-orange" variant="outlined">Удалить пост</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ['posts'],
}
</script>

<style scoped>
.post {
  padding: 15px;
  margin-bottom: 15px;
}
</style>