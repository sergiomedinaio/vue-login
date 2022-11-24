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
