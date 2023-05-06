import styled from "styled-components";
const HeroBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export default HeroBanner;