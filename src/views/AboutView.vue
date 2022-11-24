  <template>
    <div class="about">
      <h1>Bienvenido al sistema</h1>
      <button v-on:click="logout">CERRAR SESION</button>
    </div>
  </template>

  <script>

  export default {
    name: 'about',
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
          console.log("cerrar sesion");
          localStorage.setItem("login", JSON.stringify(false));
          this.$router.push("/login");  
      }
    }
  }
  </script>
