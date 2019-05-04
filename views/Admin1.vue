<template>
    <div >
        <div id="logo">
            <h1 style="color:white">Admins Pannel </h1>
        </div>
        <div class="border">
                        <el-container>
                          <el-header>Add Member</el-header>
                         </el-container>
          <!-- FORM CONTENT   -->
           <el-form ref="form" :model="form" >

        <!-- NAME INPUT ------------------->
               <div class="inputs" >
                   <el-form-item style="width:100%" label="Name :">
                       <div class="inlineInputs"> 
                  <el-input  v-model="name" type="text" placeholder="Name" ></el-input>
                       </div>
                   </el-form-item>
               </div>
        <!-- AGE INPUT ---------------------- -->
               <div class="inputs">
                   <el-form-item label="Age :">
                       <div class="inlineInputs">
                       <el-input v-model="age"  type="number" placeholder="Age in Years" ></el-input>
                       </div>
                    </el-form-item>
               </div>
        <!-- CONTACT INPUT ---------------------- -->
              <div class="inputs">
                   <el-form-item label="Contact :">
                    <div class="inlineInputs">
                      <el-input   v-model="contact" required  type="number" placeholder="Contact Number" ></el-input>
                    </div>
                   </el-form-item>
                 
               </div>
        <!-- IMAGE INPUT ---------------------- -->       
              <div class="inputs">
                <el-form-item label="Image :">
                <div class="inlineInputs">
                     <el-input   v-model="photo"  type="text" placeholder="Image URL" ></el-input>
                </div>
                </el-form-item>
                 
               </div>
        <!-- DESCRIPTION INPUT ---------------------- -->       
              <div class="inputs">
                   <el-form-item label="Info :">
                    <div class="inlineInputs"> 
                         <el-input   v-model="desc"  type="textarea" maxlength="40" rows="5" 
                               show-word-limit placeholder="Few Lines About your fitness Goal " ></el-input>
                    </div>
                  </el-form-item>
                 
              </div > 
        <!--XYZ INPUT ---------------------- -->      
                <div style="display: flex">
                    <div class="select">
                         <el-select v-model="gender" placeholder="Gender">
                       <el-option
                        v-for="item in options"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
                      </el-option>
                     </el-select>
                    </div>
                  <div class="select">
                     <el-select v-model="goal" placeholder="Fitness Goal">
                       <el-option
                        v-for="item in goals"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
                      </el-option>
                     </el-select>
                  </div>
                  <div class="select">
                     <el-select v-model="money" placeholder="Money/Month">
                       <el-option
                        v-for="item in moneyoptions"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
                      </el-option>
                     </el-select>
                  </div>
                  
              </div>
                   <el-button id="button" @click="submitted">Submit</el-button >
           </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        //// select Gender
        form:{
             options : [{value:"Male"},{value:"Female"}],
         goals :[{value:"Fat Loss"},{value:"Weight Gain"},{value:"Lean Muscle"}],
         moneyoptions : [{value:"Rs 5000"},{value:"Rs 10000"},{value:"Rs 15000"}],
         goal:"",
         gender:"",
         name:"",
         contact:"",
         desc:"",
         photo:"",
         money:"",
         age:""
        }
        }
    },
   
   methods: {
       submitted(e){
           e.preventDefault();
        //  console.log(this.gender,this.goal,this.name,this.contact,this.desc,this.photo,this.money,this.age)

         const name = this.name 
         const age = Number(this.age)
         const contact = Number(this.contact)
         console.log(typeof(age))

       }
   },
}
</script>

<style>
#logo{
background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
 height:20%;
     margin-top: -10px;
}
  .border{
      border: 3px solid black;
        margin: 20px 10px 10px 10px;
         width: 80%;
  position: absolute;
  left: 50%;
  top: 61%;
  transform: translate(-50%, -50%);

  }
  
  .el-header{
    background-color:black;
    color: white;
    text-align: center;
    line-height: 60px;
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
  .inlineInputs{
      display: flex;
      
  }
  .select{
          width: 21%;
    margin-left: 56px;
  }
  #button{
        background-color: black;
    color: white;
    width: 55%;
    margin-top: 10px;
    margin-bottom: 10px;  
  }
</style>
