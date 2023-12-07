import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const List = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    const getBookListData = async () => {
      try {
        const res = await axios.get(
          "https://picses-backend.happycoding.co.kr/api/read/book"
        );
        const sortedBooks = res.data.bookLists.booksListInfo.sort(
          (a, b) => a.id - b.id
        );
        setBookList(sortedBooks);
        console.log(sortedBooks);
      } catch (err) {
        console.log(err);
      }
    };
    getBookListData();
  }, []);

  const handleButtonClick = () => {
    axios
      .get("https://picses-backend.happycoding.co.kr/api/read/book")
      .then((res) => {
        console.log(res.data);
        // 여기에 추가적인 처리를 원하는 코드 작성 가능
      })
      .catch(() => console.log("요청 실패"));

    // 홈으로 이동
    navigateToHome();
  };

  return (
    <div>
      <Font>
        도서 조회 <p />: 내가 읽었던 책들을 확인해보세요 🥰
      </Font>

      {bookList.map((a) => (
        <Padding key={a.bookId}>
          <BookList>
            <Number>{a.bookId}</Number>
            <Name>{a.bookName}</Name>
            <Time>{a.bookDate}</Time>
            <State>{a.bookState}</State>
          </BookList>
        </Padding>
      ))}
      <Button onClick={handleButtonClick}>
        <ButtonFont>처음으로 돌아가기</ButtonFont>
      </Button>
    </div>
  );
};

const Padding = styled.div`
  padding: 10px;
`;

const State = styled.div`
  position: relative;
  left: 90px;
  width: 110px;
  flex-shrink: 0;
  color: #a6ff4d;
  text-align: center;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
`;

const Time = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
`;

const Name = styled.div`
  width: 587px;
  flex-shrink: 0;
  color: #000;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
`;

const Number = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
`;

const BookList = styled.div`
  position: relative;
  left: 180px;
  top: 30px;
  display: flex;
  width: 1070px;
  height: 75px;
  padding: 0px 45px;
  flex: center;
  align-items: center;
  gap: 30px;
  border-radius: 10px;
  border: 1px solid #99ceff;
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
  left: 1150px;
  top: 50px;
  width: 170px;
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

export default List;
