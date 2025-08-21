import axios from "axios";
import { useEffect, useState } from "react";

const Post = () => {
  const [data, setData] = useState();
  const getImageData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImageData();
  }, []);
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((e) => (
        <div
          key={e._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-full h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={e.url}
              alt="Card Image"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">{e.caption}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
