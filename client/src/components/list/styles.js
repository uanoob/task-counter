import styled from 'styled-components';

export default styled.div`
  width: 100%;
  .tracker-list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: ${props => (props.empty ? 'none' : '1px solid #7f7f7f')};
  }
`;
