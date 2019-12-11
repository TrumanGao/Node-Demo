<template>
  <div class="hello">
    <h1 v-for="(msg, index) in msgList" :key="index">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <button @click="getNewMsg">获取Msg</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msgList: ['Welcome to Your Vue.js App'],
    }
  },
  methods: {
    getNewMsg(){
      this.$http.get('/get_new_msg').then(res=>{
        console.log('获取新msg',res);
        
        this.msgList.push(res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
