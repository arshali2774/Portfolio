import styled from 'styled-components';

const Wrapper = styled.div`
  .roundedButton {
    border-radius: 3em;
    border: 1px solid rgb(136, 136, 136);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 60px 15px 60px;

    p {
      position: relative;
      z-index: 1;
      transition: color 0.4s linear;
    }

    &:hover {
      p {
        color: white;
      }
    }
  }

  .circle {
    width: 100%;
    height: 150%;
    position: absolute;
    border-radius: 50%;
    top: 100%;
  }
`;

export default Wrapper;
