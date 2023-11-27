import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Borrow = () => {
  const navigate = useNavigate();

  const navigateToBorrowCheck = () => {
    navigate("/borrowcheck");
  };

  return (
    <div>
      <Font>
        도서 대출 <p />: 준비한 도서를 라즈베리 파이의 카메라에 비추어 주세요.
      </Font>
      <Button onClick={navigateToBorrowCheck}>
        <ButtonFont>다음</ButtonFont>
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
  line-height: 20px;
  margin-left: 190px;
  margin-top: 50px;
`;

const Button = styled.button`
  display: flex;
  position: relative;
  left: 1150px;
  top: 430px;
  width: 75px;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #5cb0ff;
  border: none;
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

export default Borrow;
