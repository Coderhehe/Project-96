var firebaseConfig = {
    apiKey: "AIzaSyCCCdKhTaHUSIOUpSl7mSgMdS2XP_RPShQ",
    authDomain: "project-93-96-62dbe.firebaseapp.com",
    databaseURL: "https://project-93-96-62dbe-default-rtdb.firebaseio.com",
    projectId: "project-93-96-62dbe",
    storageBucket: "project-93-96-62dbe.appspot.com",
    messagingSenderId: "833404659211",
    appId: "1:833404659211:web:09bd27cf8fe38abb73c90e"
  };
  
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");
  function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="fourth.html";
  }
  function send() {
    msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
name:username,
message:msg,
likes:0
});
document.getElementById("msg").value="";
}