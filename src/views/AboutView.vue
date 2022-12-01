  <template>
    <div class="about">
      <h1>Bienvenido al sistema</h1>
      <button v-on:click="logout">CERRAR SESION</button>
    </div>
  </template>

  <script>
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth, signOut  } from "firebase/auth";

  //import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCU5Zt6ZpfSdmiEJxrvWztBDGpOtK8zvGY",
    authDomain: "vue-login-27f87.firebaseapp.com",
    projectId: "vue-login-27f87",
    storageBucket: "vue-login-27f87.appspot.com",
    messagingSenderId: "75332090700",
    appId: "1:75332090700:web:4d56b217ac78a6043aede9",
    measurementId: "G-2DVW4S5SHT"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  console.log(firebaseApp);
  const auth = getAuth(firebaseApp);

  //const analytics = getAnalytics(app);


  export default {
    name: 'about-view',
    components: {
    },
    mounted: function(){
      const login = JSON.parse(localStorage.getItem("login"));
      if(login) {
        console.log("fue logueado");
      } else {
        console.log("inicio requerido");
        this.$router.push("/login");
      }
    },
    methods: {
      logout: function() {
        signOut(auth)
          .then(() => {
            console.log("cerrar sesion");
            localStorage.setItem("login", JSON.stringify(false));
            this.$router.push("/login");  
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  </script>
