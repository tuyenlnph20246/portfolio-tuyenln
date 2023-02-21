import instance from "./config";
const getAccounts =()=>{
  return instance.get(`/users`);
}
const getAccount = (id) => {
  return instance.get(`/users/${id}`)
}
const addAccount = (account) =>{
  return instance.post(`/users`, account)
}
const deleteAccount = (id) =>{
  return instance.delete(`/users/${id}`)
}
const updateAccount = (account) =>{
  return instance.put(`/users/${account.id}`, account)
}
export { getAccounts, getAccount, addAccount, deleteAccount, updateAccount }