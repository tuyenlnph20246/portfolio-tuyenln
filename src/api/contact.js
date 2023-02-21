import instance from "./config";
const getContacts =()=>{
  return instance.get(`/contact`);
}
const getContact = (id) => {
  return instance.get(`/contact/${id}`)
}
const addContact = (contact) =>{
  return instance.post(`/contact`, contact)
}
const deleteContact = (id) =>{
  return instance.delete(`/contact/${id}`)
}
const updateContact = (contact) =>{
  return instance.put(`/contact/${contact.id}`, contact)
}
export { getContacts, getContact, addContact, deleteContact, updateContact }