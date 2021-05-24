import {
    mapState
} from 'vuex'
// 1、
export default {
    computed: mapState({
        a: state => state.a,
        b: 'b'
    })
}
// 2、
export default {
    computed: mapState(['a', 'b'])
}
// 3、c为本地属性
export default {
    computed: {
        c() {},
        ...mapState(['a', 'b'])
    }
}
// 4、store.js
store = {
    getters: {
        catLength: state => {
            return state.categories.length
        },
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        activeTodosCount: (state, getters) => {
            return state.todos.length - getters.doneTodos.length
        }
    }
}
//
/* <p>{{getEvent(1)}}</p> */
// computed: {
//     getEvent() {
//         return this.$store.getters.getEventById
//     }
// }
// import {
//     mapGetters
// } from 'vuex'
// computed: {
//     ...mapGetters(['getEventById'])
// }

// getters
// getEventById: state => id => {
//     return state.events.find(event => event.id === id)
// }

// rootState
// export const namespaced=true
// dispatch('moduleName/actionToCall', null // payload, {
// root: true
// })