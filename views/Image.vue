<template>
    <div>
       <h1>here we are</h1>
       <input type="file" @change="fileSelected"/>
       <div>
           <h3 v-show="!upload" style="background-color:red">uploading..</h3>
           <h3 v-show="upload" style="background-color:green">uploaded</h3>
          
       </div>
    </div>
    
</template>

<script>
import {storage} from "../firebase.js"
export default {
    data() {
        return {
            file: '',
            upload: ''
        }
    },
    methods: {
        fileSelected(e){
         console.log(e)
         //// get file 
         this.upload = true
         this.file = e.target.files[0]
         console.log(this.file)
         let tempthis = this;
         
         /// create stoarage refs
         const storageRef = storage.ref("photos/" + tempthis.file.name)
         
         //// upload file
         const task = storageRef.put(tempthis.file);

         task.on("state_changed",
         
         function complete(){
             tempthis.upload = true
         }
           )
        }
    },
}
</script>