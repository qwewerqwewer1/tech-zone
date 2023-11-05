<template>
  <div class="mb-15">
    <h2>Создание поста</h2>
    <div>
      <v-text-field v-model="post.title" label="Название поста" variant="outlined" />
      <v-text-field v-model="post.subtitle" label="Описание поста" variant="outlined" />
    </div>
    <div class="post__buttons">
      <v-btn width="100%" color="#235325" @click="createPost">Добавить пост</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data: () => ({
    post: {
      title: '',
      subtitle: '',
    }
  }),
  methods: {
    createPost: function () {
      const post = {
        id: Date.now(),
        title: this.post.title,
        subtitle: this.post.subtitle,
      }
      this.$emit('emit_createPost', post)
      this.post.title = ""
      this.post.subtitle = ""
    }
  }
};
</script>
