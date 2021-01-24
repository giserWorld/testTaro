/**************************redux***********************
 *1.Redux 是 JavaScript 状态容器，提供可预测化的状态管理
 *2.通过"connect()"函数创建"容器组件"
 *3.使用 connect()前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
*/
 const count = {
    state:0,//初始化状态
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            return state + payload
        },
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
export {count}