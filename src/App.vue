<template>
  <v-app>
    <v-main class="pa-10">
      <PostForm @emit_createPost="pushPost" />
      <PostList :posts="posts" @remove="removePost" />
    </v-main>
  </v-app>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  name: "App",
  components: {
    PostList,
    PostForm,
  },

  data: () => {
    return {
      posts: [
        { id: 1, title: 'Это будет название поста 1', subtitle: 'Это будет описание этого поста 1' },
        { id: 2, title: 'Это будет название поста 2', subtitle: 'Это будет описание этого поста 2' },
        { id: 3, title: 'Это будет название поста 3', subtitle: 'Это будет описание этого поста 3' },
      ]
    }
  },
  methods: {
    pushPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
};
</script>

