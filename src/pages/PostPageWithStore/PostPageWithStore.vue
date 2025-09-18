<script>
import PostList from "@/components/PostList/PostList.vue";
import PostForm from "@/components/PostForm/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog/MyDialog.vue";
import MyButton from "@/components/UI/MyButton/MyButton.vue";
import MySelect from "@/components/UI/MySelect/MySelect.vue";
import MyInput from "@/components/UI/MyInput/MyInput.vue";
import MyPagination from "@/components/UI/MyPagination/MyPagination.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

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
      dialogVisible: false,
    }
  },

  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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

  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPosts',
      searchSortedPosts: 'post/searchSortedPosts'
    })
  },
  watch: {

  },
}
</script>

<template>
  <div>
    <h1>Сторінка з постами</h1>
    <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Пошук..."/>
    <div class="app__btn">
      <my-button
          @click="showDialog"
      >
        Створити пост
      </my-button>
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
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
    <!--    <my-pagination :totalPages="totalPages" v-model="page" />-->
    <div v-intersection="loadMorePosts"></div>
  </div>
</template>

<style>
  .app__btn {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
</style>