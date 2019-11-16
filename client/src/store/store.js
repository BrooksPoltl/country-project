
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countries: [],
        currentCountries: [],
    },
    getters: {
        getCountries: state =>{
            return state.currentCountries;
        }
    },
    mutations: {
        'SET_COUNTRIES' (state, countries) {
            state.countries = countries;
            state.currentCountries = countries;
        },
        'SET_CURRENT_COUNTRIES'(state, countries) {
            state.currentCountries = countries;
        }
    },
    actions: {
        initCountries: ({ commit }) => {
            Vue.http.get('https://restcountries.eu/rest/v2/all')
            .then(response=> commit('SET_COUNTRIES', response.body))
            
            
        },
        populationFilter: ({ commit, state }, filterParam) => {
            
            let newCountries;
            switch(filterParam){
                case 0:
                    newCountries = state.countries.filter(country => country.population < 100000);
                    break;
            }
            commit('SET_CURRENT_COUNTRIES', newCountries);
        },
    }
});