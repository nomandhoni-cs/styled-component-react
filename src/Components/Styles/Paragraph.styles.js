import styled from "styled-components";
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.fg};
`;
export default Paragraph;
