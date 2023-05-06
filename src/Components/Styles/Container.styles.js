import styled from "styled-components";
const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    min-width : 320px;
    background-color: ${props => props.theme.bg};
`;
export default Container;