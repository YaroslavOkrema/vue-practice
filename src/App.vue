<script>
  import PostList from "@/components/PostList/PostList.vue";
  import PostForm from "@/components/PostForm/PostForm.vue";

  export default {
    components: {
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
      }
    },

    methods: {
      createPost(post) {
        this.posts.push(post);
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id);
      }
    }
  }
</script>

<template>
  <div class="app">
    <post-form @createPost = 'createPost'/>
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