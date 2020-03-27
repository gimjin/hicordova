<template lang="html">
  <div>
    <el-link @click="$router.push('child')">
      Go to child
    </el-link>
    <router-view />
    <p>
      <span class="cat">{{ getCatName }}</span> is very beautiful.
    </p>
    <img
      style="width: 2rem; height: 2rem;"
      src="@/assets/icon.png"
      alt="icon"
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCatName'
    ])
  },
  mounted () {
    this.syncCat()
  },
  methods: {
    ...mapActions([
      'syncCat'
    ])
  }
}
</script>

<style lang="scss" scoped>
.cat {
  color: red;
  user-select: none;
  background: url("~@/assets/icon.png") center;
}
</style>
