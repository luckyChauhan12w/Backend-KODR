import React, { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !caption) {
      alert("Please select a file and enter caption");
      return;
    }

    const formData = new FormData();
    formData.append("mama", file);
    formData.append("caption", caption);

    try {
      const res = await axios.post("http://localhost:3000/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", res.data);
      alert("Upload successful ✅");
    } catch (err) {
      console.error("Error uploading:", err);
      alert("Upload failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg w-96 mx-auto mt-10"
    >
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2"
      />

      <input
        type="text"
        placeholder="Enter caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        Upload Post
      </button>
    </form>
  );
};

export default AddPost;
