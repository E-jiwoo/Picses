import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Borrow = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const navigateToCheck = async () => {
    try {
      const apiUrl = "https://picses-backend.happycoding.co.kr/api/read/camera";
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log("GET 요청 성공", jsonData);
      navigate("/borrowcheck", { state: { bookname: jsonData.msg } });
    } catch (error) {
      console.error("GET 요청 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const getUserCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        const video = videoRef.current;

        if (video) {
          video.srcObject = stream;
          video.play();
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      getUserCamera();
    } else {
      console.log("getUserMedia가 지원되지 않습니다.");
    }
  }, []);

  return (
    <div>
      <Font>
        도서 대출 <p />: 준비한 도서를 라즈베리 파이의 카메라에 비추어 주세요.
      </Font>
      <Video ref={videoRef}></Video>
      <Button onClick={navigateToCheck}>
        <ButtonFont>다음</ButtonFont>
      </Button>
    </div>
  );
};

const Video = styled.video`
  margin-left: 430px;
  margin-top: 20px;
`;

const Font = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  margin-left: 190px;
  margin-top: 30px;
  user-select: none;
`;

const Button = styled.button`
  display: flex;
  position: relative;
  top: 10px;
  left: 1150px;
  width: 75px;
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

export default Borrow;
