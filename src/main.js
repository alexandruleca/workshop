import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./pages/Home";
import WeatherHistory from "./pages/WeatherHistory";
import WeatherHistoryDetail from "./pages/WeatherHistoryDetail";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    weatherData: {},
    searchHistory: localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : [],
  },
  mutations: {
    setWeatherData(state, payload) {
      state.weatherData = payload;
    },
    addSearchHistory(state, payload) {
      state.searchHistory.push(payload);
      localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
    }
  },
  actions: {
    getWeatherData({commit}, payload) {
      commit('addSearchHistory', payload);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&lang=ro&appid=b344ee0b4f4fcbb105196d04c6305183`)
          .then(response => response.json())
          .then(data => commit('setWeatherData', data));
    }
  }
})

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/weather',
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Home
    },
    {
      path: '/history',
      name: 'WeatherHistory',
      component: WeatherHistory,
      children: [
        {
          path: 'detail/:query',
          name: 'WeatherHistoryDetail',
          component: WeatherHistoryDetail,
        }
      ],
    }
  ]
})

new Vue({
  render: h => h(App),
  store: store,
  router: router,
}).$mount('#app')
