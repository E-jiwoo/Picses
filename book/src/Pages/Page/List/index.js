import { React, useState, useEffect } from "react";
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
    const getListData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/api/read/book");
        setBookList(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getListData();
  }, []);

  return (
    <div>
      <Font>
        도서 조회 <p />: 내가 읽었던 책들을 확인해보세요 🥰
      </Font>

      {bookList.map((booksListInfo) => (
        <BookListItem key={booksListInfo.bookId}>
          <Number>{booksListInfo.bookId}</Number>
          <Name>{booksListInfo.bookName}</Name>
          <Time>{booksListInfo.bookDate}</Time>
          <State>{booksListInfo.bookState}</State>
        </BookListItem>
      ))}
      <Button onClick={navigateToHome}>
        <ButtonFont>처음으로 돌아가기</ButtonFont>
      </Button>
    </div>
  );
};

const State = styled.div`
  position: relative;
  left: 90px;
  width: 90px;
  flex-shrink: 0;
  color: #a6ff4d;
  text-align: center;
  font-family: SUIT;
  font-size: 24px;
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

const BookListItem = styled.div`
  position: fixed;
  left: 180px;
  top: 230px;
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
  top: 430px;
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
