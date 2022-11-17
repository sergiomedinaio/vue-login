<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert
          :value="alert"
          color="pink"
          dark
          border="top"
          icon="mdi-home"
          transition="scale-transition"
        >
          Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    
          Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
                contain
                height="100"
      
            :src="require('../assets/logo.svg')"
          >
          </v-img>
          <v-card-text>
            <v-form>
              <v-row justify="center">
                <v-col cols="12" sm="6" md="10">
                  <v-text-field label="Email" placeholder="Email"></v-text-field>
                  <v-text-field label="Password" placeholder="Password"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row justify="center">
              <v-col>
                <v-btn
                  color="orange"
                  text
                  @click="alert = !alert"
                >
                  Iniciar sesión
                </v-btn>
          
                <v-btn
                  color="orange"
                  text
                >
                  Registrarse
                </v-btn>

              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <template>
</template>    </v-row>
    <v-row class="text-center">
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      alert: false,
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
