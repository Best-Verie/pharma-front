import axios from 'axios';

export const singleUploadImage = (file: any) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', `${import.meta.env.VITE_CLOUDINARY_PRESET}`);
    formData.append('cloud_name', `${import.meta.env.VITE_CLOUDINARY_NAME}`);
    const config = {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      use_filename: true,
    };
    axios
      .post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`, formData, config)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
