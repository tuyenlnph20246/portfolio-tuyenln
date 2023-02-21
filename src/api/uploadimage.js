import axios from "axios";
const uploadFiles = async (files) => {
  if (files) {
    const CLOUD_NAME = "dnywbghd0";
    const PRESET_NAME = "ECMA-upload";
    const FOLDER_NAME = "ECMA";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
    for (let file of files) {
      formData.append("file", file);
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      urls.push(response.data.secure_url);
    }
    return urls;
  }
};
export default uploadFiles;