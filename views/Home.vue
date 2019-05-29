<template>
    <div>
<!-- --------------------HEADER -->
       <div class="header">
           <h3 style="color:white;padding-top:9px">Fitness7</h3>
       </div>
<!-------------------------  -->
  
      <div class="card-parent">
        <div v-for="(data,index) in this.users" :key="index" class="card">
         <!-- ///--IMAGE -->
           <div class="image">
                <img :src="`${data.image}`" class="img">
              </div>
           <div>
             <h3>{{data.name}}</h3>
             <!-- <el-button type="info" size="medium">More Info</el-button> -->
             <p>{{data.desc.slice(0,20)}}</p>
             <p>goal : {{data.goal}}</p>
             <p>Created on :{{new Date(data.timestamp).toDateString().slice(4)}} </p>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
import {db} from "../firebase.js";
import {mapState} from "vuex";
export default {
    data() {
        return {

         users : [],
           imgg:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    },

    computed: {
        
    },

    created() {
         let tempthis= this
         tempthis.$store.state.users =[]
         /// local users ==== stores user
         this.users = tempthis.$store.state.users
         db.collection("members").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      
               const {name,gender,age,contact,desc,image,money,goal,timestamp} = doc.data();
            //    const name = doc.data().name;
            //    const gender = doc.data().gender;
               const id = doc.id
               const data ={name,gender,age,contact,desc,image,money,id,goal,timestamp}
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

/* // ------CARD ------ */
.card-parent{
            display: block;  
            /* overflow: auto;
            white-space: nowrap; */
}

.card{
  width:30%;
    box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.33);
        margin: 5px 5px 5px 5px;
        display: inline-block;
}
/* // ------------------ */
.image{
  margin: 5px 5px 5px 5px;
}

.img{
      width: 200px;
    height: 156px;
    
    box-shadow: 4px 4px 4px -2px rgba(0,0,0,0.33);
}

@media screen and (max-width:800px) {
  .card{
     width:40%;
    box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.33);
        margin: 5px 5px 5px 5px;
        display: inline-block;
            border-radius: 5px
  }
}

@media screen and (max-width:400px) {
  .card{
     width:90%;
    box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.33);
        margin: 5px 5px 5px 5px;
        display: inline-block;
            border-radius: 5px
  }
}

</style>
