import React from "react";
import styled from "styled-components";

const Return = () => {
  return (
    <div>
      <Container>
        <Loading>Loading...</Loading>
        <Img src={process.env.PUBLIC_URL + "loading2.gif"} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin-top: 250px;
`;

const Img = styled.img`
  margin: auto;
  display: block;
  margin-top: 30px;
  width: 100px;
  height: 100px;
`;

const Loading = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
`;

export default Return;
