export default {
  props: {
    'visible': {
      default: false
    },
    'data': {
      default: '{}'
    },
    'edit': {
      default: false
    }},
  directives: {
  },
  components: {

  },
  data () {
    return {
      form: {},
      rules: {},
      dialogVisible: false,
      active: 0,
      loading: false
      // roleTree: []

    }
  },
  watch: {
    visible (val) {
      this.dialogVisible = val // 新增result的watch，监听变更并同步到myResult上
    }
  },
  created () {

  },
  filters: {

  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
