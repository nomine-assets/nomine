var url = $('meta[name=url]').attr("content");
console.log(url);
var blog_create = new Vue({
    el: '#blog-create',
    data: {
        id: '',
        title: '',
        content: '',
        category: [],
        categoryData: [],
        keyword: [],
        keywordDump: '',
        // button status
        submit_button_status: true,
        // Image Upload
        image: '',
        preview_image: false,
        preview_image_base64: ''
    },
    watch: {
        id(id){
            this.dataSingle(id)
        }
    },
    mounted(){
    },
    methods: {
        /**
         * mengambil data detail ketika edit
         */
        dataSingle(id){
            var self = this
            axios({
                url: url + '/dashboard/blog/single',
                method: 'POST',
                data: {
                    id: id
                }
            }).then(function(result){
                var data = result.data
                console.log(result.data)
                self.title = data.title
                self.content = data.content
                self.category = data.category
                self.keyword = data.keyword
            })
        },

        _getKategori(){
            var self = this
            axios({
                url: url+'/dashboard/blog/category/data',
                method: 'GET'
            }).then(function(result){
                console.log(result.data)
                self.categoryData = result.data
            })
        },

        // KATEGORI
        _kategoriChange(param){
            // console.log(param)
            if(param.target.options.selectedIndex > -1) {
                var data_value = param.target.options[param.target.options.selectedIndex].dataset.text
            }
            this.category.push({
                key: param.target.value,
                val: data_value,
                slug: this.slugify(data_value)
            });
            console.log(this.category)
        },
        _kategoriDelete(param){
            console.log(param)
            this.category.splice(param, 1);
        },

        // KEYWORD
        _keywordChange(){
            // console.log(param)
            this.keyword.push(this.keywordDump);
            this.keywordDump = ''
            console.log(this.keyword)
        },
        _keywordDelete(param){
            console.log(param)
            this.keyword.splice(param, 1);
        },

        _onSubmit(){
            if(!this.errorCheck()){
                return false;
            }
            var text_editor = quill.root.innerHTML;
            this.content = text_editor
            this.submit_button_status = false

            var self = this
            var formData = new FormData()
            formData.append('id', self.id)
            formData.append('title', self.title)
            formData.append('content', self.content)
            formData.append('category', JSON.stringify(self.category))
            formData.append('keyword', JSON.stringify(self.keyword))
            formData.append('image', self.image)

            axios({
                url: url + '/dashboard/blog/store',
                method: 'POST',
                data: formData
            }).then(function(result){
                swal('Berhasil', 'success')
                console.log(result.data)
                self.submit_button_status = true
            }).catch(function(e){
                self.submit_button_status = true
            })
        },

        errorCheck(){
            if(!this.title){
                this.errorMessage('Kolom <b>Title</b> tidak boleh kosong')
                return false
            }
            
            if(this.category.length < 1){
                this.errorMessage('Kolom <b>Kategori</b> tidak boleh kosong')
                return false
            }

            return true;
        },

        errorMessage(message){
            toastr.error(message, 'Oops')
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "500000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        },

        slugify(text)
        {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
        },

        // Image Upload
        _onUpload(event){
            var self = this
            this.image = event.target.files[0]
        }
    }
})