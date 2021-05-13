import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        images: []
    },
    actions: {
        FETCH_IMAGES({ commit }) {
            return axios('https://jsonplaceholder.typicode.com/photos?_limit=24', {
                method: 'GET'
            })
                .then((images) => {
                    commit('SET_IMAGES', images.data)
                    return images.data
                })
                .catch((error) => {
                    console.log(error);
                    return error
                })
        },
        FETCH_IMAGE_BY_ID({ commit }, imageId) {
            return axios(`https://jsonplaceholder.typicode.com/photos/${imageId}`, {
                method: 'GET'
            })
                .then((image) => {
                    const imageArray = []
                    imageArray.push(image.data)

                    commit('SET_IMAGES', imageArray)
                    return imageArray
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    },
    mutations: {
        SET_IMAGES: (state, images) => {
            state.images = images
        }
    },
    getters: {
        IMAGES(state) {
            return state.images
        },
        IMAGE_BY_ID: (state) => (imageId) => {
            return state.images.find((image) => image.id == imageId)
        }
    }
})
