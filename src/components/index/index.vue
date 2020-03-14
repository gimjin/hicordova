<template lang="html">
  <div>
    <el-link @click="$router.push('child')">
      Go to child
    </el-link>
    <router-view />
    <p>
      <span class="cat">{{ name }}</span> is very beautiful.
    </p>
    <img
      style="width: 2rem; height: 2rem;"
      src="@/assets/icon.png"
      alt="icon"
    >
  </div>
</template>

<style lang="scss" scoped>
.cat {
  color: red;
  user-select: none;
  background: url("~@/assets/icon.png") center;
}
</style>

<script src="./index.js"></script>
