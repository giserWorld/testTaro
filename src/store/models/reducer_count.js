/**************************redux***********************
 *1.
*/
//定义组件的 Reducer
const counter = {
    state:0,//初始化状态
    reducers: {
        //定义action
        increase(state, payload) {
            return state + 1
        },
        //payload为参数
        test_action(state, payload){
            return state + payload
        }
    },
    effects: {
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.increment(payload)
        },
    },
}//e
export {counter}