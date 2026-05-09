export default {
    methods: {
        async downloadFromPost(apiUrl, apiBody) {
            const res = await this.ajax.post(apiUrl, apiBody, {
                responseType: 'blob'
            })
            const disposition = res.headres['content-disposition']
            const filename = disposition.replace(/.+filename=/, '')
            const blob = new Blob([res.data])
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
                return window.navigator.msSaveBlob(blob, filename)
            }
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = filename
            lick.click()
            setTimeout(() => {
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