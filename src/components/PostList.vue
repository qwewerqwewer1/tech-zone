<template>
  <div class="pa-3">
    <h3>Список постов</h3>
    <post-item v-for="post in posts" :key="post.id" :post="post"></post-item>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  name: 'PostList',
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}
</script>
