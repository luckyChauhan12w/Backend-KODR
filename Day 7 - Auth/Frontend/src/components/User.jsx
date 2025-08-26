import axios from "axios";

const User = () => {
  const handelReq = async () => {
    const res = await axios.get("http://localhost:3000/api/auth/user", {
      withCredentials: true,
    });

    console.log(res);
  };

  return (
    <div>
      <button onClick={handelReq}>chal ja</button>
    </div>
  );
};

export default User;
