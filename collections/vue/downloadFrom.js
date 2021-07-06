export default {
    methods: {
        async downloadFromPost(apiUrl, apiBody) {
            const res = await this.ajax.post(apiUrl, apiBody, {
                responseType: 'blob'
            })
            const disposition = res.headres['content-disposition']
            const filename = disposition.replace(/.+filename=/, '')
            const blob = new Blob([res.data])
            // IE
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
                return window.navigator.msSaveBlob(blob, filename)
            }
            // Not IE
            const url = window.URL.createObjectURL(blob) // 生成URL
            const link = document.createElement('a')
            link.href = url
            link.download = filename
            // document.body.appendChild(link)
            // 不需要append也可以被点击
            lick.click()
            setTimeout(() => {
                // 释放URL
                window.URL.revokeObjectURL(url)
            }, 100)
        },
        downloadFromGet(url) {
            this.$message({
                message: '已开始下载'
            })
            const link = document.createElement('a')
            link.download = ''
            lick.click()
        }
    },
}