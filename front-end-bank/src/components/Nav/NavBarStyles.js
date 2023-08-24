import styled from "styled-components";

export const NavItem = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    @media (min-width: 485px) {
    flex-direction: row;
    }
`;
