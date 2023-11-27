import React from "react";
import styled from "styled-components";

const ReturnCheck = () => {
  return (
    <div>
      <Font>
        ‘콩쥐팥쥐’
        <p />: 다음의 도서가 반납을 원하는 책이 맞나요?
      </Font>
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

export default ReturnCheck;
