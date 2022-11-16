import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light:   {
                primary: '#9c27b0',
                secondary: '#795548',
                accent: '#cddc39',
                error: '#f44336',
                warning: '#ff9800',
                info: '#03a9f4',
                success: '#4caf50'
            }
        }
    }
});
