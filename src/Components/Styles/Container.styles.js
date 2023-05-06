import styled from "styled-components";
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    min-width : 320px;
    background-color: ${props => props.backgroundColor};
`;
export default Container;