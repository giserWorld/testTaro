import { init } from '@rematch/core'
import models from './models/index';

//通过"@rematch/core"将数据model初始化为store对象
const store = init({
    models 
});
var storeState=store.getState();//获取所有的存贮容器中的状态
//console.log("storeState：",storeState);
export default store;