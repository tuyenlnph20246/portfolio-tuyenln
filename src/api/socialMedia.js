import instance from "./config";
const getMedias =()=>{
  return instance.get(`/socialMedia`);
}
const getMedia = (id) => {
  return instance.get(`/socialMedia/${id}`)
}
const addMedia = (media) =>{
  return instance.post(`/socialMedia`, media)
}
const deleteMedia = (id) =>{
  return instance.delete(`/socialMedia/${id}`)
}
const updateMedia = (media) =>{
  return instance.put(`/socialMedia/${media.id}`, media)
}
export { getMedias, getMedia, addMedia, deleteMedia, updateMedia }