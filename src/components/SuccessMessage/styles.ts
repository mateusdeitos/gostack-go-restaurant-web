import styled from 'styled-components';

export const Container = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background: #121214;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  img {
    height: 48px;
    width: 48px;
    margin-bottom: 24px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
`;
