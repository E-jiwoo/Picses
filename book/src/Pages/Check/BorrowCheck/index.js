import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../Page/Loading/index';

const BorrowCheck = () => {
  const navigate = useNavigate();
  const location = useLocation(); // useLocation 훅을 사용하여 location 객체를 가져옵니다.
  const [loading, setLoading] = useState(false);
  const [bookname, setBookname] = useState(null);

  useEffect(() => {
    // useLocation 훅을 사용하여 location 객체에서 state에 접근합니다.
    const { state } = location;
    if (state && state.bookname) {
      setBookname(state.bookname);
    }
  }, [location]); // useLocation을 의존성 배열에 추가

  const navigateToSuccess = () => {
    navigate('/borrowsuccess', {
      state: { bookname: location.state.bookname },
    });
  };

  const navigateToError = () => {
    navigate('/borrowerror');
  };

  const handleButtonClick = () => {
    setLoading(true);

    axios
      .post('https://picses-backend.happycoding.co.kr/api/rental/book', {
        bookName: bookname, // 여기에서 bookName으로 수정
      })
      .then((res) => {
        console.log(res.data);
        navigateToSuccess();
      })
      .catch(() => {
        console.log('요청 실패');
        navigateToError();
      })
      .finally(() => {
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
              'Loading bookname...'
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
