<script>
  import PostList from "@/components/PostList/PostList.vue";
  import PostForm from "@/components/PostForm/PostForm.vue";
  import MyDialog from "@/components/UI/MyDialog/MyDialog.vue";
  import MyButton from "@/components/UI/MyButton/MyButton.vue";
  import axios from "axios";
  import MySelect from "@/components/UI/MySelect/MySelect.vue";
  import MyInput from "@/components/UI/MyInput/MyInput.vue";
  import MyPagination from "@/components/UI/MyPagination/MyPagination.vue";

  export default {
    components: {
      MyPagination,
      MyInput,
      MySelect,
      MyButton,
      MyDialog,
      PostList, PostForm,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
          {value: "title", name: "По назві"},
          {value: "body", name: "По опису"},
        ],
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
      changePage(pageNumber) {
        this.page = pageNumber;
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
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
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
      },
      searchSortedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
    },
    watch: {
      page() {
        this.fetchPosts();
      }
    },
  }
</script>

<template>
  <div class="app">
    <h1>Сторінка з постами</h1>
    <my-input v-model="searchQuery" placeholder="Пошук..."/>
    <div class="app__btn">
      <my-button
          @click="showDialog"
      >
        Створити пост
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @createPost = 'createPost'/>
    </my-dialog>
    <post-list
        :posts="searchSortedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Завантаження...</div>
    <my-pagination :totalPages="totalPages" v-model="page" />
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

  .app__btn {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
</style>