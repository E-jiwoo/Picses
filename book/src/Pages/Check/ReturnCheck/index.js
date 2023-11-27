import React from "react";
import styled from "styled-components";

const ReturnCheck = () => {
  return (
    <div>
      <Font>
        ‘콩쥐팥쥐’
        <p />: 다음의 도서가 반납을 원하는 책이 맞나요?
      </Font>
      <OKButton>
        <WhiteFont>예</WhiteFont>
      </OKButton>
      <NoButton>
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

export default ReturnCheck;
