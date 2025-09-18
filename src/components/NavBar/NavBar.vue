<template>
  <div class="navbar">
    <div>Vue 3</div>
    <div class="navbar__btn">
      <my-button @click="$router.push('/posts')">Пости</my-button>
      <my-button @click="$router.push('/about')">Про сайт</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
      <my-button @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton/MyButton.vue";

export default {
  name: "NavBar",
  components: { MyButton },
};
</script>

<style scoped>
  .navbar {
    height: 50px;
    background-color: gray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .navbar__btn {
    margin-left: auto;
  }
</style>
