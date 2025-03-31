import React, { useState, useEffect } from "react";
import { openDB } from "idb";
import "./Photoupload.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const DB_NAME = "WeddingPhotoDB";
const STORE_NAME = "photos";

export default function PhotoUpload() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { autoIncrement: true });
          }
        },
      });
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const allImages = await store.getAll();
      setImages(allImages);
    };

    loadImages();
  }, []);

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const uploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        uploadedImages.push(reader.result);
        if (uploadedImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...uploadedImages]);
          const db = await openDB(DB_NAME, 1);
          const tx = db.transaction(STORE_NAME, "readwrite");
          const store = tx.objectStore(STORE_NAME);
          for (let img of uploadedImages) {
            await store.add(img);
          }
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleRemoveImage = async (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const db = await openDB(DB_NAME, 1);
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await store.clear();
    for (let img of updatedImages) {
      await store.add(img);
    }
  };

  return (
    <div className="photo-upload-container">
      <label htmlFor="imageUpload" className="upload-box">
        <span className="upload-icon">📷</span>
        <p>Click to Upload Photos</p>
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />

      <div className="timeline">
        {images.map((image, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <img src={image} alt={`Uploaded ${index}`} className="timeline-image" />
              <button className="remove-btn" onClick={() => handleRemoveImage(index)}>
                <IoIosCloseCircleOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
