import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Container>
        <Head>
          <Img src={process.env.PUBLIC_URL + "Pisces.svg"} />
          <Font>PISCES</Font>
        </Head>
      </Container>
    </>
  );
};

const Head = styled.div`
  width: 1000px;
  position: absolute;
  left: 200px;
`;

const Container = styled.div`
  width: 100%;
  height: 50px;
`;
const Img = styled.img`
  width: 40px;
  height: 61px;
  float: left;
  user-select: none;
`;

const Font = styled.div`
  color: #121222;
  font-family: SUITE;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  position: relative;
  left: 15px;
  top: 15px;
  user-select: none;
`;
export default Header;
