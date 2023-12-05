import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const List = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Font>
        도서 조회 <p />: 내가 읽었던 책들을 확인해보세요 🥰
      </Font>
      <Button onClick={navigateToHome}>
        <ButtonFont>처음으로 돌아가기</ButtonFont>
      </Button>
    </div>
  );
};

const Font = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  margin-left: 190px;
  margin-top: 50px;
  user-select: none;
`;

const Button = styled.button`
  display: flex;
  position: relative;
  left: 1150px;
  top: 430px;
  width: 170px;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #5cb0ff;
  border: none;
  cursor: pointer;
`;

const ButtonFont = styled.div`
  color: var(--gray-scale-gㅣray-scale-700, #fff);
  text-align: center;
  font-family: SUITE;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  padding: 3px;
`;

export default List;
