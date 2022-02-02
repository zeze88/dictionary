import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      주소가 올바르지 않아요~:(
      <button
        onClick={() => {
          navigate(-1);
        }}>
        {" "}
        뒤로 가기
      </button>
    </div>
  );
};

export default NotFound;
