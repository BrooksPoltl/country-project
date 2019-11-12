
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countries: []
    },
    getters: {
        getCountries: state =>{
            return state.countries;
        }
    },
    mutations: {
        'SET_COUNTRIES' (state, countries) {
            state.countries = countries;
        }
    },
    actions: {
        initCountries: ({ commit }) => {
            Vue.http.get('https://restcountries.eu/rest/v2/all')
            .then(response=> commit('SET_COUNTRIES', response.body))
            .catch(err => {
                console.log(err);
            });
            
        }
    }
});