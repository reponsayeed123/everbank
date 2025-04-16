const firebaseConfig = {
  apiKey: "AIzaSyD-M1WwjDIVXamr4FrVAQo_bMdBLeBJ8jc",
  authDomain: "everbank-7501f.firebaseapp.com",
  databaseURL: "https://everbank-7501f-default-rtdb.firebaseio.com",
  projectId: "everbank-7501f",
  storageBucket: "everbank-7501f.firebasestorage.app",
  messagingSenderId: "912049446034",
  appId: "1:912049446034:web:0910d4bd2cef7ac3179a4b",
  measurementId: "G-1FZY6FHDJW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
    var alluser = firebase.database().ref().child("admin").child('super_admin');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().username;
         pass = snapshot4.val().password ;
  
  
  
  
  
      }
  
  

  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('super_asdmin').set({
          "username": bkas,
          "password": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  