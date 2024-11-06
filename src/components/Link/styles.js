import styled, { css } from "styled-components";
import {Link, NavLink} from "react-router-dom";

const LinkStyle = css`
    text-decoration: none;
    color: black;

    &:hover {
        color: darkred;
        text-decoration: underline;
    }
`

export const SimpleLink = styled(Link)`${LinkStyle}`

export const NavigationLink = styled(NavLink)`${LinkStyle}`