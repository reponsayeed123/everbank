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
    
    
    var service_name = '';
    var url = '';
    
    var key2 = '';
    
    var customer = firebase.database().ref().child("customer_care");
    
    
  
    
    
    var sigImage = '';
    
    
    
  
    
    
    
  
    
    
    customer.once("value").then(function (snapshot) {

        if (snapshot.exists()) {
      
          var content = '';
      
      
      
      
      
      
          snapshot.forEach(function (data) {
      
      
      
            var val = data.val();

            console.log(val.url)
      
            content += '<tr name="bc">';
      
            // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
      
      
            content += '<td >' + val.service_name + '</td>';
            content += '<td >' + val.url + '</td>';
       
      
      
      
            // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';
      
            content += "<td>" +
            '<a href="#" data-tip="edit" style="color: rgb(28, 81, 214);" onclick=edit("' + data.key + '") ><i class="fa fa-edit"></i></a>' +
      
    
    
            "</td>";
      
      
            content += '</tr>';
      
      
      
      
      
      
          });
      
      
      
      
      
      
          $('#atttbl_posts_body').html(content);
      
      
        }
      
      
      });
    
  
    function edit(key) {
  
      //alert(key)
    
      key2 = key ;
    
      document.getElementById("mainp").style.display = "none"
      document.getElementById("frm").style.display = "none"
      document.getElementById("user").style.display = "none"
      document.getElementById("clos").style.display = "block"
      document.getElementById("det3").style.display = "block"
    
      var arr = document.getElementsByName('x').value;



      var ref5 = firebase.database().ref().child("customer_care").child(key);
  
  
      console.log(key)
    
    
      ref5.on("value", function (snapshot4) {
          if (snapshot4.exists()) {
    
    
    
            service_name = snapshot4.val().service_name;
            url = snapshot4.val().url;
      
       
    
    
    
    
    
    
          }
    
  
    $('#pstatus').html(service_name);
    
      
    
          $('#mob').val(url);
  
    
    
        })
   
  
    
    }
    
    
    function myclose() {
        // get user input
        document.getElementById("mainp").style.display = "block"
        document.getElementById("frm").style.display = "block"
        document.getElementById("user").style.display = "block"
        document.getElementById("clos").style.display = "none"
   
        document.getElementById("det2").style.display = "none"
        document.getElementById("det3").style.display = "none"
         document.getElementById("det4").style.display = "none"
      
        notif = '';
      
      
      }
      
    
    

    
    
      function validate34() {
        var didConfirm = confirm("Are you sure You want to Update ??");

        if (didConfirm == true) {
    
    
    
          const url2 = document.getElementById('mob').value;
      
    
      
        
      
          var database = firebase.database();
      
      
          database.ref('customer_care').child(key2).set({
      
      
            'service_name': service_name,
            'url': url2,
     
          
      
      
          }).then(() =>{
            window.location.href = "customer.html";
           });
      
    
        }
    
        else {
          return false;
      }
    
      }
    
    
    
    
    
    
    
    