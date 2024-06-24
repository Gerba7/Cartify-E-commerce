

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: "ecomm-853e7.firebaseapp.com",
  projectId: "ecomm-853e7",
  storageBucket: "ecomm-853e7.appspot.com",
  messagingSenderId: "12435692473",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-C2JZ5PJ6E2"
};


const app = initializeApp(firebaseConfig);

export default app;




export const uploadImage = async (file) => {

  if (!file) {
    console.log('No file selected');
    return null;    
  }
  
    const storage = getStorage(app);
    
    const uploadFiles = async () => {

        let result = await new Promise((resolve, reject) => {
          
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            
            const uploadTask = uploadBytesResumable(storageRef, file);
    
            uploadTask.on('state_changed',
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                  default: 
                    console.log('Uploader')
                }
              }, 
              (error) => {
                switch (error.code) {
                  case 'storage/unauthorized':
                    break;
                  case 'storage/canceled':
                    break;
    
                  case 'storage/unknown':
                    break;
    
                  default: 
                  console.log('error')
                }
                // dispatch(resetLoading())
              }, 
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  resolve(downloadURL)
                });
              }
            );
        })
      
      return result
        
    }
    
    const url = await uploadFiles()

    return url
      

}
