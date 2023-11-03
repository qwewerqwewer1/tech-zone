<template>
  <div class="mb-15">
    <v-text-field v-model="post.title" label="Название поста" variant="outlined"></v-text-field>
    <v-text-field v-model="post.subtitle" label="Описание поста" variant="outlined"></v-text-field>
    <v-btn block @click="createPost" color='green'>Создать</v-btn>
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
    createPost() {
      const post = {
        id: Date.now(),
        title: this.post.title,
        subtitle: this.post.subtitle,
      }
      this.$emit('createPost', post)
      this.post.title = ""
      this.post.subtitle = ""
    }
  }
};
</script>
