<template>
    <div>
        1.简单数据的绑定
        <h3>{{msg}}</h3>
        2.对象的绑定
        <h3>{{obj.name}}</h3>
        3.数组的绑定
        <ul>
            <li v-for="(item,index) in list" v-bind:key="index">
                {{item}}
            </li>
        </ul>
        4.数组的嵌套绑定
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
      5.属性的绑定
      <div v-bind:title="title">鼠标点击看标题</div>
      <img v-bind:src="url"><br>
      6.html的绑定
      <div v-html="html"></div>
      7.数据的另外一种绑定
      <div v-text="text"></div>
      8.class的绑定
      <div v-bind:class="{'red':activeRed}">我是你妈</div>
      <ul>
        <li v-for="(item,index) in list" v-bind:key="index" v-bind:class="{'red':index == 1}">
          {{item}}
        </li>
      </ul>
      9.style的绑定
      <div v-bind:style="{'color':yClor,'font-size':fontSize}">我你你爸爸</div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
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
                title:'我是标题',
                url:'https://profile.csdnimg.cn/8/C/C/2_geduo_83',
                html:'<h1>我是h1</h1>',
                text:"Text",
                activeRed:true,
                fontSize:'18px',
                activeColor:'red',
                yClor:'yellow'
            }
        }
    }
</script>

<style>
   .red{
     color: red;
   }
  .yellow{
    color: yellow;
  }
</style>
