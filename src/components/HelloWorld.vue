<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" contain height="100" :src="require('../assets/logo.svg')">
          </v-img>
          <v-card-text>
            <v-form>
              <v-row justify="center">
                <v-col cols="12" sm="6" md="10">
                  <v-text-field v-model="email" label="Email" placeholder="Email"></v-text-field>
                  <v-text-field v-model="password" label="Password" placeholder="Password"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row justify="center">
              <v-col>
                <v-btn color="orange" text @click="validarInformacion">
                  Iniciar sesión
                </v-btn>

                <v-btn color="orange" text>
                  Registrarse
                </v-btn>

              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <template>
      </template>
    </v-row>
    <v-row>
      <v-col>
        <v-alert :value="alert" color="pink" dark border="top" icon="mdi-home" transition="scale-transition">
            {{mensajeAlert}}
        </v-alert>
        <v-alert :value="success" color="success" dark border="top" icon="mdi-home" transition="scale-transition">
            Se ingresó correctamente sesión
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
//const analytics = getAnalytics(app);

export default {
  name: 'HelloWorld',
  data: () => {
    return {
      email: "",
      password: "",
      success: false,
      alert: false,
      mensajeAlert: ""
    }
  },
  methods: {
    validarInformacion(e){
      this.alert = false;
      this.success = false;
      this.mensajeAlert = "";
      console.log(e)
      if(!this.email) { // si esta vacio
        this.mensajeAlert += "El email es obligatorio.";
        this.alert = true;
      }
      if(!this.password) {
        this.mensajeAlert += "El password es obligatorio.";
        this.alert = true;
      }
      if(!this.mensajeAlert) {
        this.success = true;
        localStorage.setItem("login", "true");
        this.$router.push("/dashboard");
      }
      setTimeout(()=> {
        this.success = false;
        this.alert = false;
      }, 2000);
    }
  }
}
</script>
