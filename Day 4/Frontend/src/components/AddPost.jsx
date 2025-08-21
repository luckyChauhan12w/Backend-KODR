import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddPost = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const notify = () => toast("Your Image uploaded Successfully!");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("mama", file);
    formData.append("caption", caption);

    try {
      const response = await axios.post(
        "http://localhost:3000/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);

      setFile(null);
      setCaption("");
      setPreview(null);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsLoading(false);
      notify();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg w-96 mx-auto mt-10"
    >
      <ToastContainer />
      <input type="file" onChange={handleFileChange} className="border p-2" />

      {preview && (
        <div className="flex justify-center">
          <img
            src={preview}
            alt="preview"
            className="w-40 h-40 object-cover rounded-lg border"
          />
        </div>
      )}

      <input
        type="text"
        placeholder="Enter caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isLoading ? "Uploading..." : "Upload Post"}
      </button>
    </form>
  );
};

export default AddPost;
