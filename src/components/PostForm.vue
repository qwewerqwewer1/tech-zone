<template>
  <v-card class="pa-3">
    <h3>Создание поста</h3>
    <form class="form_post mb-3">
      <v-text-field v-model="post.title" placeholder="Название" />
      <v-text-field v-model="post.description" placeholder="Описание" />
      <v-btn :disabled="!post.title || !post.description" @click="createPost" class="mb-1" style="width: 100%">
        Создать пост
      </v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  name: "PostForm",
  data: function () {
    return {
      post: {
        title: "",
        description: "",
      }
    }
  },
  methods: {
    createPost: function () {
      const { title, description } = this.post;
      if (title && description) {
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = { title: "", description: "" };
      }
    }
  }
}
</script>

<style scoped>
.border {
  border: 2px solid teal;
  width: 100%;
  margin-bottom: 10px;
}
</style>