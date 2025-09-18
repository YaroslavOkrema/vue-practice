<script>
import PostList from "@/components/PostList/PostList.vue";
import PostForm from "@/components/PostForm/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog/MyDialog.vue";
import MyButton from "@/components/UI/MyButton/MyButton.vue";
import MySelect from "@/components/UI/MySelect/MySelect.vue";
import MyInput from "@/components/UI/MyInput/MyInput.vue";
import MyPagination from "@/components/UI/MyPagination/MyPagination.vue";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearched from "@/hooks/useSortedAndSearched";

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
      sortOptions: [
        {value: "title", name: "По назві"},
        {value: "body", name: "По опису"},
      ],
    }
  },
  setup(props) {
    const {totalPages, isPostLoading, posts} = usePosts(10);
    const {selectedSort, sortedPosts} = useSortedPosts(posts);
    const {searchQuery, searchSortedPosts} = useSortedAndSearched(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      selectedSort,
      searchQuery,
      searchSortedPosts,
    }
  }
}
</script>

<template>
  <div>
    <h1>Сторінка з постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Пошук..."/>
    <div class="app__btn">
      <my-button>
        Створити пост
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list
        :posts="searchSortedPosts"
        v-if="!isPostLoading"
    />
    <div v-else>Завантаження...</div>
  </div>
</template>

<style>
  .app__btn {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
</style>