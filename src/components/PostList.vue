<template>
  <div>
    <div class="posts" v-if="posts.length > 0">
      <h2>Список постов</h2>
      <PostItem @remove="$emit('remove', post)" :post="post" v-for="post in posts" :key="post.id" />
    </div>
    <div v-else>
      <h2 class="red--text">Список постов пуст! Создайте пост!</h2>
    </div>
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
