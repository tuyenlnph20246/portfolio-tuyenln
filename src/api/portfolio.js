import instance from "./config";
const getPortfolios = ()=>{
  return instance.get(`/portfolio`);
}
const getPortfolio = (id)=>{
  return instance.get(`/portfolio/${id}`);
}
const addPortfolio = (portfolio)=>{
  return instance.post(`/portfolio`,portfolio);
}
const deletePortfolio = (id)=>{
  return instance.delete(`/portfolio/${id}`);
}
const updatePortfolio = (portfolio)=>{
  return instance.put(`/portfolio/${portfolio.id}`,portfolio);
}
export {getPortfolios,getPortfolio,addPortfolio,deletePortfolio,updatePortfolio}