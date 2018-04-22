
<template>
  <div id="app">
    <h1 v-text="title"></h1>
     <input v-model="newItem" @keyup.enter="addNew"/>
    <ul>
      <li v-for="item in items" :class="{finished:item.isFinished}" @click="changeStatus(item)">{{item.label}}</li>
    </ul>
   
 
  </div>
</template>

<script>
import Store from './store'
export default {
  data(){
    return{
      title:"this is todo list",
      items: Store.fetch(),
      newItem:''
    }
  },
  watch:{
    items:{
      handler:function(val,oldVal){
        Store.save(val);
      },
      deep:true
    }
  },

  methods:{
      changeStatus:function (item){
          item.isFinished= !item.isFinished
      },
      addNew:function(){
        this.items.push({
          label:this.newItem,
          isFinished:false
        })
        this.newItem='';
      }
  }
}

</script>

<style>
.finished{
  text-decoration: underline;
}
body{
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
