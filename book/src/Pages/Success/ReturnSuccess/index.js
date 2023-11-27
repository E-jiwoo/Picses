import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ReturnSuccess = () => {
  const navigate = useNavigate();
  const navigateToReturn = () => {
    navigate("/return");
  };
  const navigateToMain = () => {
    navigate("/");
  };
  return (
    <div>
      <Font>
        ‘콩쥐팥쥐’
        <p />: 정상적으로 반납이 완료되었어요!
      </Font>
      <HomeButton onClick={navigateToMain}>
        <WhiteFont>홈으로 돌아가기</WhiteFont>
      </HomeButton>
      <MoreButton onClick={navigateToReturn}>
        <BlackFont>한 권 더 반납하기</BlackFont>
      </MoreButton>
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
const HomeButton = styled.button`
  display: flex;
  position: relative;
  left: 190px;
  top: 32px;
  width: 265px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #5cb0ff;
  border: none;
  cursor: pointer;
`;
const MoreButton = styled.button`
  display: flex;
  position: relative;
  left: 470px;
  bottom: 13px;
  width: 265px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-primary-100, #ffe7ee);
  background: var(--gray-scale-gray-scale-700, #fff);
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

export default ReturnSuccess;
