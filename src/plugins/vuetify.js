import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
 theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        background: '#2f2f4f', // не сработал пока что
      },
    },
      dark: true,
  },
});
