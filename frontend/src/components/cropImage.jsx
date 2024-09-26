// cropImage.js
const getCroppedImg = (imageSrc, pixelCrop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
  
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
  
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
  
        // Get the image data URL and resolve
        const base64Image = canvas.toDataURL('image/jpeg');
        resolve(base64Image);
      };
  
      image.onerror = () => {
        reject(new Error('Failed to load image for cropping.'));
      };
    });
  };
  
  export default getCroppedImg;
  