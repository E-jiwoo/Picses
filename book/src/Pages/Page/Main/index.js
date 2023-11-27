import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  const navigateToBorrow = () => {
    navigate("/borrow");
  };
  const navigateToReturn = () => {
    navigate("/return");
  };
  return (
    <div>
      <Font>
        도서 대출/반납 서비스, Pisces에 오신 것을 환영합니다!
        <p />
        이용하실 서비스를 선택해주세요.
      </Font>
      <AddButton onClick={navigateToRegister}>
        <ButtonFont>도서 등록하기</ButtonFont>
      </AddButton>
      <BorrowButton onClick={navigateToBorrow}>
        <ButtonFont>도서 대출하기</ButtonFont>
      </BorrowButton>
      <ReturnButton>
        <ButtonFont onClick={navigateToReturn}>도서 반납하기</ButtonFont>
      </ReturnButton>
    </div>
  );
};

const ButtonFont = styled.div`
  color: var(--gray-scale-gㅣray-scale-700, #fff);
  text-align: center;
  font-family: SUITE;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  padding: 3px;
`;

const AddButton = styled.button`
  display: flex;
  width: 265px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border-color: none;
  background: #5cb0ff;
  margin-left: 190px;
  margin-top: 50px;
  border: none;
  cursor: pointer;
`;
const BorrowButton = styled.button`
  display: flex;
  width: 265px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border-color: none;
  background: #5cb0ff;
  margin-left: 190px;
  margin-top: 24px;
  border: none;
  cursor: pointer;
`;
const ReturnButton = styled.button`
  display: flex;
  width: 265px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border-color: none;
  background: #5cb0ff;
  margin-left: 190px;
  margin-top: 24px;
  border: none;
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
`;

export default Main;
