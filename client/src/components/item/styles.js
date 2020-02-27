import styled from 'styled-components';
import playCircle from '../../images/play_circle_outline_black.svg';
import pauseCircle from '../../images/pause_circle_outline_black.svg';
import removeCircle from '../../images/remove_circle_red.svg';

export default styled.div`
  width: 100%;
  .tracker-item {
    width: 100%;
    height: 60px;
    padding-left: 21px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #7f7f7f;
    font-size: 17px;
    letter-spacing: 0px;
    font-family: 'PT Sans';
    font-weight: 700;
    color: ${props => (props.active ? '#3faf6c' : '#000000')};
    background-color: ${props => (props.active ? '#fdfdf6' : 'transparent')};
  }
  .icon {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    outline: none;
  }
  .icon:hover {
    cursor: pointer;
  }
  .tracker-actions {
    display: flex;
    align-items: center;
  }
  .tracker-time {
    margin-right: 29px;
  }
  .icon-av {
    margin-right: 15px;
    background-image: url(${props => (props.active ? pauseCircle : playCircle)});
  }
  .icon-delete {
    margin-right: 7px;
    background-image: url(${removeCircle});
  }
  @media only screen and (max-width: 425px) {
    .tracker-item {
      padding-left: 12px;
      font-size: 13px;
    }
    .icon-delete {
      margin-right: 14px;
    }
  }
`;
