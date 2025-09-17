<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="post">
    <div><strong>Назва: </strong>{{ post.title }}</div>
    <div><strong>Опис: </strong>{{ post.body }}</div>
  </div>
</template>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
  }
</style>