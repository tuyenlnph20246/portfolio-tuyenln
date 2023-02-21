import instance from "./config";
const getTestmonials =()=>{
  return instance.get(`/testmonial`);
}
const getTestmonial = (id) => {
  return instance.get(`/testmonial/${id}`)
}
const addTestmonial = (Testmonial) =>{
  return instance.post(`/testmonial`, Testmonial)
}
const deleteTestmonial = (id) =>{
  return instance.delete(`/testmonial/${id}`)
}
const updateTestmonial = (Testmonial) =>{
  return instance.put(`/testmonial/${Testmonial.id}`, Testmonial)
}
export {getTestmonials,getTestmonial,addTestmonial,deleteTestmonial,updateTestmonial }