import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Return = () => {
  const navigate = useNavigate();

  const navigateToCheck = () => {
    navigate("/returncheck");
  };
  let videoRef = useRef(null);

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        //비디오 tag에 stream 추가
        let video = videoRef.current;

        video.srcObject = stream;

        video.play();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  return (
    <div>
      <Font>
        도서 반납 <p />: 준비한 도서를 라즈베리 파이의 카메라에 비추어 주세요.
      </Font>
      <Video ref={videoRef}></Video>
      <Button onClick={navigateToCheck}>
        <ButtonFont>다음</ButtonFont>
      </Button>
    </div>
  );
};

const Video = styled.div`
  width: 1000px;
  height: 450px;
  flex-shrink: 0;
  margin-left: 200px;
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
export default Return;
