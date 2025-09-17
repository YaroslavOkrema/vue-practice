<script>
  export default {
    data() {
      return {
        posts: [
          {id: 1, title: 'JavaScript', body: 'JavaScript топ'},
          {id: 2, title: 'Python', body: 'Python топ'},
          {id: 3, title: 'C++', body: 'C++ топ'},
          {id: 4, title: 'React', body: 'React топ'},
        ],
        title: '',
        body: '',
      }
    },

    methods: {
      createPost() {
        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }
        this.posts.push(newPost);
        this.title = '';
        this.body = '';
      },
    }
  }
</script>

<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Додати пост</h4>
      <input
          v-bind:value="title"
          @input="title = $event.target.value"
          class="input"
          type="text"
          placeholder="Назва"
      >
      <input
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Опис"
      >
      <button @click="createPost" class="btn">Створити</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Назва: </strong>{{ post.title }}</div>
      <div><strong>Опис: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }

  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
  }

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