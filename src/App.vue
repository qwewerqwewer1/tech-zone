<template>
  <v-app>
    <v-main class="pa-5">
      <PostForm @create="addPost" />
      <PostList :posts="posts" />
    </v-main>
  </v-app>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  name: "App",
  components: {
    PostForm,
    PostList,
  },
  data: function () {
    return {
      posts: [
        { id: 1, title: 'Пост о JavaScript', description: 'Просто какой то пост о языке' },
        { id: 2, title: 'Пост о JavaScript', description: 'Просто какой то пост о языке' },
        { id: 3, title: 'Пост о JavaScript', description: 'Просто какой то пост о языке' }
      ],
    }
  },
  methods: {
    addPost: function (post) {
      this.posts.push(post)
    }
  }
};
</script>

<style scoped>
#app {
  margin: 30px;
}
</style>
