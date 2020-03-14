import { mapActions } from 'vuex'

export default {
  name: 'App',
  data: function () {
    return {
      name: ''
    }
  },
  mounted () {
    this.getRegionData().then(() => {
      this.name = this.$store.state.region.name
    })
  },
  methods: {
    ...mapActions([
      'getRegionData'
    ])
  }
}
