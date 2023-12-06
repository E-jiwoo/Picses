import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BorrowCheck = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const navigateToSuccess = () => {
    navigate("/borrowsuccess");
  };

  const navigateToError = () => {
    navigate("/borrowerror");
  };

  const handleButtonClick = () => {
    setLoading(true);

    axios
      .get("https://picses-backend.happycoding.co.kr/api/rental/book")
      .then((res) => {
        console.log(res.data);
        // 여기에 추가적인 처리를 원하는 코드 작성 가능

        // 요청이 성공하면 성공 페이지로 이동
        navigateToSuccess();
      })
      .catch(() => {
        console.log("요청 실패");
        // 요청이 실패하면 에러 페이지로 이동
        navigateToError();
      })
      .finally(() => {
        // API 호출 완료 후 로딩 상태를 false로 설정
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <LoadingPage>Loading...</LoadingPage>
      ) : (
        <>
          <Font>
            ‘콩쥐팥쥐’
            <p />: 다음의 도서가 대출을 원하는 책이 맞나요?
          </Font>
          <OKButton onClick={handleButtonClick}>
            <WhiteFont>예</WhiteFont>
          </OKButton>
          <NoButton onClick={navigateToError}>
            <BlackFont>아니오</BlackFont>
          </NoButton>
        </>
      )}
    </div>
  );
};

const LoadingPage = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
`;

const WhiteFont = styled.div`
  color: var(--gray-scale-gㅣray-scale-700, #fff);
  text-align: center;
  font-family: SUITE;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  padding: 3px;
  user-select: none;
`;
const BlackFont = styled.div`
  color: var(--gray-scale-gray-scale-200, #262636);
  text-align: center;
  font-family: SUITE;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  padding: 3px;
  user-select: none;
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
  user-select: none;
`;

export default BorrowCheck;
