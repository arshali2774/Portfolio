import styled from 'styled-components';

const Wrapper = styled.div`
  .header {
    position: absolute;
    display: flex;
    z-index: 1;
    top: 0;
    color: white;
    padding: 35px;
    justify-content: space-between;
    width: 100%;
    font-weight: 300;
    box-sizing: border-box;
    align-items: center;

    .logo {
      display: flex;
      cursor: pointer;
      p {
        margin: 0px;
        transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
      }
      .name {
        display: flex;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 5px;
        transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        p {
          position: relative;
          transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
          &:nth-of-type(2) {
            padding-left: 0.8em;
          }
          &:nth-of-type(3) {
            position: absolute;
            left: 100px;
            padding-left: 0.8em;
          }
        }
      }
      &:hover {
        .copyright {
          transform: rotate(360deg);
        }
        .name {
          padding-right: 30px;
          .codeBy {
            transform: translateX(-100%);
          }
          .dennis {
            transform: translateX(-65px);
          }
          .snellenberg {
            transform: translateX(-65px);
          }
        }
      }
    }
    .nav {
      display: flex;
      align-items: center;

      .el-mobile {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        position: relative;
        z-index: 1;
        padding: 10px 0;
        cursor: pointer;
        button {
          background-color: transparent;
          border: none;
        }
        .indicator-mobile {
          width: 5px;
          height: 5px;
          background-color: white;
          border-radius: 50%;
        }
      }

      .el {
        display: none;
      }
      @media screen and (min-width: 426px) {
        .el-mobile {
          display: none;
        }
        .el {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
          padding: 15px;
          cursor: pointer;
          &:hover {
            .indicator {
              transform: scale(1);
            }
          }
          .indicator {
            position: absolute;
            width: 5px;
            height: 5px;
            top: 45px;
            left: 50%;
            background-color: white;
            border-radius: 50%;
            transform: scale(0) translateX(-50%);
            transition: transform 0.2s cubic-bezier(0.76, 0, 0.24, 1);
          }
        }
      }
      a {
        cursor: pointer;
      }
    }
  }
  .headerButtonContainer {
    transform: scale(1);
    position: fixed;
    right: 0px;
    z-index: 4;

    .button {
      position: relative;
      margin: 20px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #1c1d20;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .burger {
      width: 100%;
      position: relative;
      z-index: 1;
      &::after,
      &::before {
        content: '';
        display: block;
        height: 1px;
        width: 40%;
        margin: auto;
        background-color: white;
        position: relative;
        transition: transform 0.3s;
      }

      &::after {
        top: -5px;
      }

      &::before {
        top: 5px;
      }
    }

    .burgerActive {
      &::after {
        transform: rotate(45deg);
        top: -1px;
      }

      &::before {
        transform: rotate(-45deg);
        top: 0px;
      }
    }
  }
`;

export default Wrapper;
