
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countries: [],
        poplationCountries: [],
        regionCountries: [],
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
        'SET_POPULATION_COUNTRIES'(state, countries) {
            state.populationCountries = countries;
        },
        'SET_CURRENT_COUNTRIES'(state, countries) {
            state.currentCountries = countries;
        },
        'SET_REGION_COUNTRIES'(state, countries) {
            state.regionCountries = countries;
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
                case 1:
                    newCountries = state.countries.filter(country => country.population >= 100000 & country.population < 1000000);
                    break;
                case 2:
                    newCountries = state.countries.filter(country => country.population >= 1000000 & country.population < 10000000);
                    break;
                case 3:
                    newCountries = state.countries.filter(country => country.population >= 10000000 & country.population < 50000000);
                    break;
                case 4:
                    newCountries = state.countries.filter(country => country.population > 50000000);
                    break;
            }
            commit('SET_POPULATION_COUNTRIES', newCountries);
        },
        regionFilter: ({ commit, state }, filterParam) => {
            
            let newCountries;
            switch(filterParam){
                case 0:
                    newCountries = state.countries.filter(country => country.region == "Asia");
                    break;
                case 1:
                    newCountries = state.countries.filter(country => country.region == "Europe");
                    break;
                case 2:
                    newCountries = state.countries.filter(country => country.region == "Africa");
                    break;
                case 3:
                    newCountries = state.countries.filter(country => country.region == "Oceania");
                    break;
                case 4:
                    newCountries = state.countries.filter(country => country.region == "Americas");
                    break;
            }
            commit('SET_REGION_COUNTRIES', newCountries);
        },
    }
});