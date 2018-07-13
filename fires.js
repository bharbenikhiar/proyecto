var config = {
    apiKey: "AIzaSyDv56Izy4MB4iw8sRsWU-fDPV7bSaRZJZU",
    authDomain: "feriel-2002.firebaseapp.com",
    databaseURL: "https://feriel-2002.firebaseio.com",
    projectId: "feriel-2002",
    storageBucket: "feriel-2002.appspot.com",
    messagingSenderId: "329189776070"
  };
  firebase.initializeApp(config);
  var messagesRef = firebase.database().ref('messages');

  document.getElementById('contactForm').addEventListener('submit', submitForm);
  function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var number = getInputVal('number');
    var password = getInputVal('password');
    saveMessage(name,number,email,password);
    document.getElementById('contactForm').reset();
    }
    function getInputVal(id) {
        return document.getElementById(id).value;
    }
    function saveMessage(name,number,email,password){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          email:email,
          password:password,
          number:number,
        });
      }
