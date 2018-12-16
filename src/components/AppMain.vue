<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    visitedViews() {
      return this.$store.state.tagsview.visitedviews
    },
    key() {
      return this.$route.fullPath + this.$route.params.id
    }
  }
}
</script>



