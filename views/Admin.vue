<template>
    <div >
        <div id="logo">
            <h1 style="color:white">Admin</h1>
        </div>
        <div class="border">
                        <el-container>
                          <el-header>Add Member</el-header>
                         </el-container>
          <!-- FORM CONTENT   -->
           <form   >

        <!-- NAME INPUT ------------------->
               <div class="inputs" >
                  <el-input v-model="form.name" type="text" placeholder="Name" required ></el-input>
               </div>
        <!-- AGE INPUT ---------------------- -->
               <div class="inputs">
                  <el-input v-model="form.age" required type="number" placeholder="Age in Years" ></el-input>
               </div>
        <!-- CONTACT INPUT ---------------------- -->
              <div class="inputs">
                  <el-input   v-model="form.contact" required  type="number" placeholder="Contact Number" ></el-input>
               </div>
        <!-- IMAGE INPUT ---------------------- -->       
              <div >
                 <div class="upload-btn-wrapper">
                 <button class="btn">Upload a file</button>
                 <input type="file" name="myfile"  @change="fileSelected"/>
                 </div>
               </div>
        <!-- DESCRIPTION INPUT ---------------------- -->       
              <div class="inputs">
                  <el-input   v-model="form.desc"  type="textarea" maxlength="400" rows="5" 
                               show-word-limit placeholder="Few Lines About your fitness Goal " ></el-input>
              </div > 
        <!-- AGE INPUT ---------------------- -->      
                <div class="options">
                    <div class="select">
                         <el-select v-model="form.gender" placeholder="Gender">
                       <el-option
                        v-for="item in options"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
                      </el-option>
                     </el-select>
                    </div>
                  <div class="select">
                     <el-select v-model="form.goal" placeholder="Fitness Goal">
                       <el-option
                        v-for="item in goals"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
                      </el-option>
                     </el-select>
                  </div>
                  <div class="select">
                     <el-select v-model="form.money" placeholder="Money/Month">
                       <el-option
                        v-for="item in moneyoptions"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
                      </el-option>
                     </el-select>
                  </div>
                  
              </div>
                   <el-button @click="register"   id="button" >Submit</el-button >
           </form>
        </div>
    </div>
</template>

<script>
import {db} from "../firebase.js";
import {storage} from "../firebase.js";
export default{
    data() {
        return {
        //// select Gender
           options : [{value:"Male"},{value:"Female"}],
         goals :[{value:"Fat Loss"},{value:"Weight Gain"},{value:"Lean Muscle"}],
         moneyoptions : [{value:"Rs 5000"},{value:"Rs 10000"},{value:"Rs 15000"}],
       
       form:{
          
         goal:"",
         gender:"",
         name:"",
         contact:"",
         desc:"",
         image_url:"",
         money:"",
         age:"",
         image_uploaded : false,
         timestamp: "",
        },
      
        }
    },
   
   methods: {

        fileSelected(e){
         
         //// get file 
        
         this.file = e.target.files[0]
         console.log(this.file)
         let tempthis = this;
         
         /// create stoarage refs
         const storageRef = storage.ref("photos/" + tempthis.file.name)
         
         //// upload file
         const task = storageRef.put(tempthis.file).then((snapshot)=>{
             console.log(snapshot.state)
         //// logic for getting file link 
            if(snapshot.state == "success"){
              storageRef.getDownloadURL().then(function(url){

                tempthis.image_url = url
                tempthis.image_uploaded = true ;
                console.log(url)
                console.log( tempthis.image_url)
                alert("image sucessfully added")
              })
            }

         });
        
    },
   
       register(e){
          
          
           const age = Number(this.form.age)

           switch(true){
               case (this.form.name === ""):
                 alert("Please enter Name !!" )
                 return false ;

               case (age === 0 ):
                 alert(this.form.name + " Please enter your age")
                 return false;

               case (this.form.contact === ""): 
                alert(this.form.name + " Please enter your contact number ")
                 return false;

                case (this.form.contact.length < 10 ): 
                alert(this.form.name + " Your contact number is not valid ")
                 return false

                   
                 
                 case (this.form.desc === ""): 
                alert(this.form.name + " Plese Describe about your fitness goal")
                 return false;
                 
                 case (this.form.gender === ""): 
                alert(this.form.name + " Please select your gender")
                 return false; 
                
                  case (this.form.goal === ""): 
                alert(this.form.name + " Please select your fitness goal")
                 return false; 

                   case (this.form.money === ""): 
                alert(this.form.name + " Please select money/month section")
                 return false; 

                 case(!this.image_uploaded):
                alert(this.form.name + " image is uploading / please select the image")
                 return false;
           }
            this.form.timestamp = Date.now()
           console.log(this.form.timestamp)
       
           let tempthis = this;
            e.preventDefault();
            
           db.collection("members").add({
              
               age  : age,
                name : tempthis.form.name,
               gender : tempthis.form.gender,
               goal : tempthis.form.goal,
               money : tempthis.form.money,
               desc  : tempthis.form.desc,
               image :  tempthis.image_url,
               contact: Number(tempthis.form.contact),
               timestamp: tempthis.form.timestamp
               
               
           }).then(function(docRef) {
             console.log("Document written with ID: ", docRef.id);
             tempthis.$router.push("/")
               })
                .catch(function(error) {
              console.error("Error adding document: ", error);
                });
       
   },
}}
</script>

<style>
#logo{
background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
 height:20%;
     margin-top: -10px;
}
  .border{
      border: 3px solid black;
          margin-left: 10%;
    margin-top: 2%;
    width: 80%;

  }
  
  .el-header{
    background-color:black;
    color: white;
    text-align: center;
    line-height: 60px;
    font-size: 15px;
  font-weight: bold;
  }
  .el-input{
      color: black;
      border-color: black
  }
  .inputs{
          margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
    margin-left: 23px;

  }
  .select{
          width: 21%;
    margin-left: 56px;
  }
  .options{
    display: flex;
  }
  #button{
        background-color: black;
    color: white;
    width: 55%;
    margin-top: 10px;
    margin-bottom: 10px;  
  }

  /* ------------------------------------------ */
   .upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid black;
  color: white;
  background-color: black;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  widows: 50%
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
  /* ------------------------------------------ */

 @media only screen and (max-width: 480px) {

   .options{
     display: inline;
   }
  
 .select{
        width: 71%;
  margin-left: 56px;
    margin-bottom: 6px;
 }


}
</style>
