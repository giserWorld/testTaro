/**************************redux***********************
 *1.
*/
//定义组件的 Reducer
const bookData = {
    state:{
        name:"bookData",
        count:0,
        code:"51",
        codeName:"四川省"
    },
    reducers: {
        //定义action
        changeCode(state,payload) {
            return Object.assign({...state,...{
                //redux_value:state.redux_value+(state.count+1),
                redux_value:payload,
                count:state.count+1 
            }});
        },
        changeCode2(state,code){
            // 从第二个变量开始为调用increment时传递进来的参数，后面依次类推，例如：dispatch.count.increment(10, 20)时， num1 = 10 , num2 = 20.
            return {
                ...state,
                code:code,
            }
        },
        changeCodeName(state,name){
            // 从第二个变量开始为调用increment时传递进来的参数，后面依次类推，例如：dispatch.count.increment(10, 20)时， num1 = 10 , num2 = 20.
            return {
                ...state,
                codeName:name,
            }
        },
        //初始化数据
        initRedux(state){
            return {
                ...state,
                codeName:"initdata",
                code:"initdata",
            }
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
export {bookData}