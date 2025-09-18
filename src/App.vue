<script>
  import PostList from "@/components/PostList/PostList.vue";
  import PostForm from "@/components/PostForm/PostForm.vue";
  import MyDialog from "@/components/UI/MyDialog/MyDialog.vue";
  import MyButton from "@/components/UI/MyButton/MyButton.vue";
  import axios from "axios";

  export default {
    components: {
      MyButton,
      MyDialog,
      PostList, PostForm,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false,
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
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
        } catch (e) {
          alert('Error');
        } finally {
          this.isPostLoading = false;
        }
      }
    },
    mounted() {
      this.fetchPosts();
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
        v-if="!isPostLoading"
    />
    <div v-else>Завантаження...</div>
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