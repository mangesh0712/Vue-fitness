<template>
    <div>
       <div class="header">
           <h3 style="color:white;padding-top:9px">Fitness7</h3>
       </div>
       <div v-for="(data,index) in this.$store.state.users" :key="index">
           <h5 style="display:flex">{{data.name}}--{{data.gender}}</h5 >
       </div>
      
    </div>
</template>

<script>
import {db} from "../firebase.js";
import {mapState} from "vuex"
export default {
    data() {
        return {
           male :[]
        }
    },

    computed: {
        
    },

    created() {
         let tempthis= this
         tempthis.$store.state.users =[]

         db.collection("members").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      
               const {name,gender} = doc.data();
            //    const name = doc.data().name;
            //    const gender = doc.data().gender;
               const id = doc.id
               const data ={name,gender,id}
               tempthis.$store.state.users.push(data)
           })

         console.log(tempthis.$store.state.users)
       }) 

   
   },

}
</script>

<style>
.header{
  height: 42px;
background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
