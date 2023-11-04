<template>
  <div class="posts">
    <PostItem :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue"
export default {
  name: "PostList",
  props: ['posts'],
  components: {
    PostItem,
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  margin-bottom: 15px;
}
</style>
