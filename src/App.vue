<script>
  import PostList from "@/components/PostList/PostList.vue";
  import PostForm from "@/components/PostForm/PostForm.vue";
  import MyDialog from "@/components/UI/MyDialog/MyDialog.vue";
  import MyButton from "@/components/UI/MyButton/MyButton.vue";

  export default {
    components: {
      MyButton,
      MyDialog,
      PostList, PostForm,
    },
    data() {
      return {
        posts: [
          {id: 1, title: 'JavaScript', body: 'JavaScript топ'},
          {id: 2, title: 'Python', body: 'Python топ'},
          {id: 3, title: 'C++', body: 'C++ топ'},
          {id: 4, title: 'React', body: 'React топ'},
        ],
        dialogVisible: false,
      }
    },

    methods: {
      createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id);
      },
      showDialog() {
        this.dialogVisible = true;
      }
    }
  }
</script>

<template>
  <div class="app">
    <h1>Сторінка з постами</h1>
    <my-button
        @click="showDialog"
        style="margin: 15px 0;"
    >
      Створити пост
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @createPost = 'createPost'/>
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
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
</style>