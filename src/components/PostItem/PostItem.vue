<script>
import MyButton from "@/components/UI/MyButton/MyButton.vue";

export default {
  components: {MyButton},
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
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Назва: </strong>{{ post.title }}</div>
      <div><strong>Опис: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btn">
      <my-button @click="$router.push(`/posts/${post.id}`)">Відкрити</my-button>
      <my-button @click="$emit('remove', post)">Видалити</my-button>
    </div>
  </div>
</template>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
  }
</style>