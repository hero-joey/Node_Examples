<template>
<div>
  <div class="input-part">
    <input v-on:keyup.enter="insertItem" v-model="words" type="text"> 
    <button v-on:click="insertItem">插入</button>
  </div>

  <ul>
    <li v-for="(item, index) in list" v-bind:key="index">
        <p>{{item}}</p>
        <button v-on:click="removeItem(item)">x</button>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data()  {
    return {
        words:'',
        list:[]
    }
  },

  methods: {
    insertItem()
    {
        //用数组自带的push方法添加新内容
        this.list.push(this.words);
        this.words = '';
    },

    removeItem(item)
    {
        this.list.splice(this.list.indexOf(item, 1))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 20;
}

li {
  display: inline-block;
  margin: 0 10px;
  color: cadetblue;
}

</style>
