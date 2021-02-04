/*********************************后台接口********************************/
//mockJS基础路径
var mockJSUrl="http://localhost:3005";
//var mockJSUrl="http://192.168.167.129:3005";
export let baseUrl="http://192.168.167.229:8188";//后台api接口基础路径
const BackendURL={
    //服务接口
    gaodeMapKey:"0da56e0243aee1866b69f242519e4ba4",//高德地图key
    getAddress_gd:"https://restapi.amap.com/v3/geocode/regeo",//高德"地理/逆地理编码"
    inputAddressTip_gd:"https://restapi.amap.com/v3/assistant/inputtips",//高德"输入提示"
    //项目接口
    mapDWRegionFun_ht:baseUrl+"/ly/area/getOrgBound.lt",//地图后台定位bbox
    initLayerList2:baseUrl+"/ly/layer/getInitLayer.lt",//初始化图层列表
    getLegendStyle2:baseUrl+"/ly/layerstyle/getLayerStyle.lt",//获取图例样式
    getLayerinfo_id2:baseUrl+"/ly/layer/getLayerListByTotalObject.lt",//根据图层id获取图层信息
    getFormList:baseUrl+"/ly/form/getFormList.lt",//获取表单列表
    saveGeo:baseUrl+"/ly/save/save.lt",//保存几何数据
    //测试接口
    testApi1:baseUrl+"/DiseasesGISServer/wz/wz_find_Wz.action",//远程api1
    testApi2:"/apc/YLZRBHQGISServer/Intro/getIntro.action",//远程api2
    //mockJS接口
    getUerInfo:mockJSUrl+"/userInfo",//获取登录用户信息
    initLayerList:mockJSUrl+"/layerList",//初始化图层列表
    getLegendStyle:mockJSUrl+"/legendStyle",//获取图例样式
    layerList_wms:mockJSUrl+"/layerList_wms",//wms图层列表
    saveLegendStyle:mockJSUrl+"/saveLegendStyle",//保存图例样式
    dataStatus_ok:mockJSUrl+"/dataStatus_ok",//数据状态-ok
    geoDatas_pt:mockJSUrl+"/geoDatas_pt",//点数据
    geoDatas_line:mockJSUrl+"/geoDatas_line",//线数据
    geoDatas_mian:mockJSUrl+"/geoDatas_mian",//面数据
    geoDatas_multi:mockJSUrl+"/geoDatas_multi",//多几何数据
};
export default BackendURL;