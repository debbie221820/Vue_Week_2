import{createApp}from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
const site=`https://vue3-course-api.hexschool.io/v2/`;
const api_path='debbiewang';
const app = createApp({
    data() {
        
        return {  
            products:[], //定義資料,預備取得資料
            tempProducts:{}  //暫存用: click點選查看商品細節,裡面資料暫存入tempProducts
        }
        },
    methods: {
        checkLogin(){
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)debbiewang\s*\=\s*([^;]*).*$)|^.*$/,"$1");
        axios.defaults.headers.common["Authorization"] = token;
        console.log(token);
        const url=`${site}api/user/check`;
        axios.post(url)
        .then(()=>
        { this.getProducts();
        })
        .catch((err)=>{
            console.log(err);
        });
       

        },
        getProducts(){
            const url=`${site}/api/${api_path}/admin/products/all`;
            axios.get(url)
            .then((res)=>{
                this.products=res.data.products;     
                //  console.log(Object.values( this.products));  //物件變陣列
            //     Object.values( this.products).forEach((item)=>{console.log(item);  //物件跑迴圏
          
            //     })
            })
        }
    },
    mounted() {
        this.checkLogin();
    
    },
});
app.mount('#app');

//登入check;

//取得左列表getProducts()