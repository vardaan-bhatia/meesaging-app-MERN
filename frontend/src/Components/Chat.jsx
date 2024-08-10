import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chat, setChats] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/chat");
      console.log(res.data);
      setChats(res.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-white">
      {chat.map((e) => (
        <li key={e._id} className="list-none">
          {e.chatName}
        </li>
      ))}
    </div>
  );
};

export default Chat;
