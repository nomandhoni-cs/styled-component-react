import styled from "styled-components";
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.theme.bg};
`;
export default Nav;