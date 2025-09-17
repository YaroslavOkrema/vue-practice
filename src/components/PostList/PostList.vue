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
  <div>
    <h3>Список користувачів</h3>
    <post-item :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<style scoped>

</style>