import { useNavigate } from "react-router-dom";

const Detail = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>전달된 속성값을 토대로 페이지 구성하기</p>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
};

export default Detail;
