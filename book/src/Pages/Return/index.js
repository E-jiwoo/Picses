import React from "react";
import styled from "styled-components";

const Return = () => {
  return (
    <Font>
      도서 반납 <p />: 준비한 도서를 라즈베리 파이의 카메라에 비추어 주세요.
    </Font>
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
export default Return;
