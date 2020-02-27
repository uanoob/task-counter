import styled from 'styled-components';
import playCircle from '../../images/play_circle_green.svg';

export default styled.div`
  width: 100%;
  .tracker-form {
    position: relative;
    margin-bottom: 26px;
  }
  .tracker-input {
    width: 100%;
    padding: 12px 0px 12px 22px;
    box-sizing: border-box;
    border: 1px solid #7f7f7f;
    border-radius: 23px;
    outline: none;
    font-size: 17px;
    letter-spacing: 0px;
    font-family: 'PT Sans';
    font-weight: 400;
  }
  .icon {
    display: inline-block;
    width: 41px;
    height: 41px;
    background-size: cover;
    border: none;
    outline: none;
  }
  .icon:hover {
    cursor: pointer;
  }
  .icon-play {
    background-image: url(${playCircle});
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: 0px 0px;
    position: absolute;
    right: 2px;
    top: 2px;
  }
  @media only screen and (max-width: 425px) {
    .tracker-form {
      margin: 0px 14px 26px 11px;
    }
    .tracker-input {
      padding: 12px 0px 12px 19px;
    }
  }
`;
