<template>
    <div>
        <h3>1.简单数据的绑定</h3>
        <span>{{msg}}</span>
        <h3>2.对象的绑定</h3>
        <span>{{obj.name}}</span>
        <h3>3.数组的绑定</h3>
        <ul>
            <li v-for="(item,index) in list" v-bind:key="index">
                {{item}}
            </li>
        </ul>
        <h3>4.数组的嵌套绑定</h3>
        <ul>
            <li v-for="(item,index) in list1" v-bind:key="index">
                {{item.title}}
                <ul>
                    <li v-for="(item1,index1) in item.type" v-bind:key="index1">
                        {{item1}}
                    </li>
                </ul>
            </li>
        </ul>
        <h3>5.属性的绑定</h3>
        <div v-bind:title="title">鼠标点击看标题</div>
        <img v-bind:src="url"><br>
        <h3>6.html的绑定</h3>
        <div v-html="html"></div>
        <h3>7.数据的另外一种绑定</h3>
        <div v-text="text"></div>
        <h3>8.class的绑定</h3>
        <div v-bind:class="{'red':activeRed}">我是你妈</div>
        <ul>
            <li v-for="(item,index) in list" v-bind:key="index" v-bind:class="{'red':index == 1}">
                {{item}}
            </li>
        </ul>
        <h3>9.style的绑定</h3>
        <div v-bind:style="{'color':yClor,'font-size':fontSize}">我你你爸爸</div>
        <h3>10.数据的双向绑定</h3>
        <div style="border: 2px solid red">
            <input type="text" v-model="name">
            <button v-on:click="getName">获取Name</button>
            <button v-on:click="setName">设置Name</button>
            <input type="text" ref="age"/>
            <button type="button" v-on:click="getAge">获取Age</button>

        </div>
        <h3>11.获取DOM节点</h3>
        <div style="border: 2px solid red">
            <span ref="grade">3年级2班</span>
            <button type="button" v-on:click="updateStyle">修改文本的颜色</button>
        </div>
        <h3>12.获取事件对象</h3>
        <button data-aid="123" ref="eventBtn" v-on:click="getEvent($event)">获取事件对象</button>
        <h3>13.实现一个todolist</h3>
         <input type="text" v-model="todo">
        <button v-on:click="addTodo">添加</button>
        <ul>
            <li v-for="(item,index) in todoList" v-bind:key="index">
                {{item}}<button v-on:click="delTodo(index)">删除</button>
            </li>
        </ul>
        <h3>14.实现一个本地存储的todo</h3>
        <div id="app">

            <input type="text" v-model='todo' @keydown="doAdd($event)" />

            <span>进行中</span>
            <ul>

                <li v-for="(item,key) in listabc.filter(obj=>obj.checked!=true)"  v-bind:key="key">

                    <input type="checkbox" v-model='item.checked'> {{item.title}}   ----  <button @click="removeData(key)">删除</button>
                </li>
            </ul>


            <br>
            <span>已完成</span>
            <ul class="finish">

                <li v-for="(item,key) in listabc.filter(obj=>obj.checked==true)"  v-bind:key="key">

                    <input type="checkbox" v-model='item.checked'> {{item.title}} ----<button @click="removeData(key)">删除</button>
                </li>
            </ul>
            <span v-if='ok'>这是一个ok</span>
            <span v-if='!ok'>这是一个No</span>
            <button @click="getList()">获取list的值</button>
        </div>
        <h3>15.组件的定义,父组件传递数据到子组件</h3>
        <div>
            <Home></Home>
            <News></News>
        </div>
        <h3>16.声明周期</h3>
        <Life></Life>
        <h3>17.路由的使用</h3>
         <div>
             <div><span><router-link to="/home">首页</router-link></span><span style="margin: 20px"><router-link to="/news">新闻</router-link></span><span v-on:click="goto">小视频</span></div>
             <router-view></router-view>
         </div>
        <h3>17.axios的使用</h3>
        <div><button v-on:click="getData">Axiso获取数据</button></div>
        <div><button v-on:click="getData1">vue-resource获取数据</button></div>
    </div>
</template>

<script>
    import Storage from "./assets/js/storage";
    import Home from "./components/Home";
    import News from "./components/News";
    import Life from "./components/Life";
    import Axios from 'axios';
    export default {
        name: 'App',
        components: {News, Home,Life},
        data() {
            return {
                msg: '你好vue',
                obj: {
                    name: '张三'
                },
                list: ['111', '222', '333'],
                list1: [
                    {title: 111, type: ['1-1', '1-2', '1-3']},
                    {title: 222, type: ['2-1', '2-2', '2-3']},
                    {title: 333, type: ['3-1', '3-2', '3-3']},
                ],
                title: '我是标题',
                url: 'https://profile.csdnimg.cn/8/C/C/2_geduo_83',
                html: '<span>我是h1</span>',
                text: "Text",
                activeRed: true,
                fontSize: '18px',
                activeColor: 'red',
                yClor: 'red',
                name: '',
                todo:'',
                todoList:[],
                ok:false,
                listabc: [

                    {
                        title: '录制nodejs',
                        checked: true
                    },
                    {
                        title: '录制ionic',
                        checked: false
                    }
                ]
            }
        },
        created(){
        },
        mounted(){
            // eslint-disable-next-line no-unused-vars
            //let list = window.localStorage.getItem("list")
            let list = Storage.getValue('list');
            if(list){
                this.listabc = JSON.parse(list)
            }
        },
        methods: {
            getName() {
                alert(this.name)
            },
            setName() {
                this.name = '我是马保国'
            },
            getAge() {
                console.log(this.$refs.age)
                alert(this.$refs.age.value)
            },
            updateStyle() {
                this.$refs.grade.style.color = '#ff0000'
                console.log("update style...")
            },
            getEvent(event) {
                console.log(event)
                console.log(this.$refs.eventBtn.dataset.aid)
                console.log(event.target.getAttribute('data-aid'));  /*获取自定义属性的值*/
                console.log(event.target.dataset.aid);  /*获取自定义属性的值*/
            },
            addTodo(){
                this.todoList.push(this.todo)
            },
            delTodo(index){
                this.todoList.splice(index,1)
            },
            doAdd(e){
                console.log(e.keyCode)
                if(e.keyCode==13){
                    this.listabc.push({

                        title: this.todo,
                        checked: false
                    })
                    this.todo='';
                }
                //window.localStorage.setItem("list",JSON.stringify(this.listabc))
                Storage.putValue('list',JSON.stringify(this.listabc))
            },
            removeData(key){
                this.listabc.splice(key,1);
            },
            getList(){
                console.log(this.listabc)
            },
            goto(){
                this.$router.push({name:'Video',params:{'a':'1','b':"2"}})
            },
            getData(){
                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                Axios.get(api).then((response)=>{
                    this.list=response.data.result;
                    console.log("login start...")
                    console.log(this.list)
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getData1(){
                //请求数据
                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then((response)=>{
                    console.log(response);
                    //注意this指向
                    this.list=response.body.result;

                },function(err){
                    console.log(err);
                })

            }

        }
    }
</script>

<style>
    .red {
        color: red;
    }

    .yellow {
        color: yellow;
    }
</style>
