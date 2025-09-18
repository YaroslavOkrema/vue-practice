<script>
import PostItem from "@/components/PostItem/PostItem.vue";

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div v-if="posts.length > 0">
    <h3>Список користувачів</h3>
    <post-item
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @remove="$emit('remove', post)"
    />

  </div>
  <h2 v-else style="color: red">
    Список постів порожній
  </h2>
</template>

<style scoped>

</style>