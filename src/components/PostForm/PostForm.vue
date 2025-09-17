<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('createPost', this.post);
        this.post = {
          title: '',
          body: '',
        }
      },
    }
  }
</script>

<template>
  <form @submit.prevent>
    <h4>Додати пост</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Назва"
    >
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Опис"
    >
    <button @click="createPost" class="btn">Створити</button>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  .input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
  }

  .btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
</style>