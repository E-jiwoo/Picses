import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../Page/Loading/index";

const BorrowCheck = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [bookname, setBookname] = useState(null);

  useEffect(() => {
    // Perform the asynchronous operation to get the bookname here
    // For example, using an asynchronous function or a callback from camera capture
    // Replace the following line with the actual method to get the bookname
    const getBooknameFromCamera = async () => {
      // Simulating asynchronous call
      const response = await fetch(
        "https://picses-backend.happycoding.co.kr/api/rental/bookname"
      );
      const data = await response.json();
      setBookname(data.bookname);
    };

    getBooknameFromCamera();
  }, []); // Run this effect only once when the component mounts

  const navigateToSuccess = () => {
    navigate("/borrowsuccess");
  };

  const navigateToError = () => {
    navigate("/borrowerror");
  };

  const handleButtonClick = () => {
    setLoading(true);

    // Use the dynamic bookname in your API call
    axios
      .get(
        `https://picses-backend.happycoding.co.kr/api/rental/book/${bookname}`
      )
      .then((res) => {
        console.log(res.data);
        // Additional processing if needed

        // Successful request, navigate to success page
        navigateToSuccess();
      })
      .catch(() => {
        console.log("Request failed");
        // Request failed, navigate to error page
        navigateToError();
      })
      .finally(() => {
        // Set loading state to false after the API call is complete
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Font>
            {bookname ? (
              <>
                {bookname}
                <p />: 다음의 도서가 대출을 원하는 책이 맞나요?
              </>
            ) : (
              "Loading bookname..."
            )}
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
