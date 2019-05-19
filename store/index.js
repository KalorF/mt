import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: { geo, home },
  actions: {
    async nuxtServerInit({ commit }, { req, app }) {
      const { status, data: { city } } = await app.$axios.get('/geo/getPosition')
      // eslint-disable-next-line no-console
      const newdata = city.replace('var ', '')
      const realCity = newdata.replace(';', '')
      const string = JSON.parse(realCity.replace('returnCitySN = ', '')).cname
      const province = string.substring(0, 3)
      const thiscity = string.substring(string.length - 3)
      commit('geo/setPosition', status === 200 ? { thiscity, province } : { thiscity: '', province: '' })
      const { status: status2, data: { menu } } = await app.$axios.get('geo/menu')
      commit('home/setMenu', status2 === 200 ? menu : [])
      const { status: status3, data: { result } } = await app.$axios.get('search/hotPlace', {
        params: {
          city: '三亚'
        }
      })
      commit('home/setHotPlace', status3 === 200 ? result : [])
    }
  }
})

export default store
