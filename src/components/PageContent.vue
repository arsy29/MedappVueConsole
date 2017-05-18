<template>
<div>
  <!-- <main-nav/> -->
  <div class="page-content">
    <!-- <div class="md-title">{{ pageTitle }}</div> -->
    <slot></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>
.page-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;

    // height: 100vh - 10vh; use when main nav is displayed
}
</style>

<script>
export default {
  // props: {
  //   pageTitle: String
  // },
};
</script>
