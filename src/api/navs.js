import instance from "./config";
const getNavs = ()=>{
  return instance.get(`/navs`);
}
const getNav = (id)=>{
  return instance.get(`/navs/${id}`);
}
const addNavs = (nav)=>{
  return instance.post(`/navs`,nav);
}
const deleteNavs = (id)=>{
  return instance.delete(`/navs/${id}`);
}
const updateNavs = (nav)=>{
  return instance.put(`/navs/${nav.id}`,nav);
}
export {getNavs,getNav,addNavs,deleteNavs,updateNavs}