<template>
  <el-upload
    ref="elUploadRef"
    :action="url"
    :data="data"
    :with-credentials="true"
    :multiple="true"
    :before-remove="beforeRemove"
    :on-preview="onPreview"
    :before-uoload="beforeUpload"
    :on-success="onSuccess"
    :file-list="fileList"
    :limit="limit"
    :on-exceed="onExceed"
    :disabled="disabled"
    :class={disabled:disabled}
  >
    <el-button
      size="small"
      type="primary"
    >点击上传</el-button>
  </el-upload>
</template>
<script>
export default {
  props: {
    // 用于查询已上传的文件列表
    rrid: {
      type: [String, Number],
      default: ""
    },
    // 上传数量限制
    limit: {
      type: Number,
      default: 3
    },
    // 文件大小限制（mb）
    maxSize: {
      type: Number,
      default: 10
    },
    // 是否禁用（纯展示时使用）
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    rrid: {
      handle(val) {
        val && this.fetchFileList(val)
      },
      immediate: true
    }
  },
  data() {
    return {
      // 上传目标地址
      url: 'www.123.com',
      // 上传时额外的参数
      data: {
        documentId: ""
      },
      // 查询回来的文件列表
      fileList: []
    }
  },
  methods: {
    // 检查文件大小
    checkSize(file) {
      const mbSize = file.size / 1024 / 1024
      if (mbSize <= this.maxSize) {
        return true
      }
      this.$message({
        type: "warning",
        message: `超过了${this.maxSize}MB的最大限制[${file.name}]`
      })
    },
    // 上传之前的钩子
    beforeUpload(file) {
      if(!this.checkSize(file)){
        return false
      }
      if(this.data.documentId){
        return true
      }
    },
  },
}
</script>