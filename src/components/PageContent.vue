<template>
<div class="page-content">
  <!-- <div class="md-title">{{ pageTitle }}</div> -->
  <slot></slot>
</div>
</template>

<style lang="scss" scoped>
.page-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
}
</style>

<script>
export default {
  // props: {
  //   pageTitle: String
  // },
};
</script>
