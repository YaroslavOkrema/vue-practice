<script>
  import MyButton from "@/components/UI/MyButton/MyButton.vue";
  import MyInput from "@/components/UI/MyInput/MyInput.vue";

  export default {
    components: { MyButton, MyInput,},
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
    <my-input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Назва"
    />
      <my-input
          v-model="post.body"
          type="text"
          placeholder="Опис"
      />
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
    >
      Створити
    </my-button>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
</style>