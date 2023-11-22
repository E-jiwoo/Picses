import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Img src={process.env.PUBLIC_URL + "Pisces.svg"} />
      <Font>PISCES</Font>
    </>
  );
};

const Img = styled.img`
  width: 60px;
  height: 61px;
`;

const Font = styled.div`
  color: #121222;
  font-family: SUITE;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;
export default Header;
