import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BorrowError = () => {
  const navigate = useNavigate();
  const navigateToBorrow = () => {
    navigate("/borrow");
  };
  const navigateToMain = () => {
    navigate("/");
  };
  return (
    <div>
      <Font>
        뭔가 오류가 생겼나봐요 🥵
        <p />
        다시 시도할까요?
      </Font>
      <OKButton onClick={navigateToBorrow}>
        <WhiteFont>예</WhiteFont>
      </OKButton>
      <NoButton onClick={navigateToMain}>
        <BlackFont>아니오</BlackFont>
      </NoButton>
    </div>
  );
};

const WhiteFont = styled.div`
  color: var(--gray-scale-gㅣray-scale-700, #fff);
  text-align: center;
  font-family: SUITE;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  padding: 3px;
`;
const BlackFont = styled.div`
  color: var(--gray-scale-gray-scale-200, #262636);
  text-align: center;
  font-family: SUITE;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  padding: 3px;
`;
const OKButton = styled.button`
  display: flex;
  position: relative;
  left: 190px;
  top: 50px;
  width: 75px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #5cb0ff;
  border: none;
  cursor: pointer;
`;
const NoButton = styled.button`
  display: flex;
  position: relative;
  left: 300px;
  top: 5px;
  width: 75px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #fff;
  border: 2px solid #5cb0ff;
  cursor: pointer;
`;
const Font = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  margin-left: 190px;
  margin-top: 50px;
`;

export default BorrowError;
