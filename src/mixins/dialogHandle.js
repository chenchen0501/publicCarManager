import elDragDialog from '@/directive/el-dragDialog'
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
    elDragDialog
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
    handleOpen () {
      this.form = JSON.parse(this.data)
      if (this.$refs['form']) {
        this.$nextTick(() => {
          if (this.$refs['form'].length > 0) {
            this.$refs['form'].forEach(element => {
              element.clearValidate()
            })
          } else {
            this.$refs['form'].clearValidate()
          }
        })
      }
      this.initData()
    },
    initData () {

    },
    ok (handler, msg) {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          let message = '新增成功'
          if (this.edit) {
            message = '修改成功'
          }
          handler(this.form)
            .then(() => {
              this.loading = false
              this.formVisible = false
              this.$message({
                message: msg || message,
                type: 'success'
              })
              this.$emit('getList')
              this.handleClose()
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    handleClose () {
      this.$emit('close')
    }

  }
}
