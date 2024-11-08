import styled from "styled-components";
import {Link} from "react-router-dom";

export const SimpleLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: darkred;
        text-decoration: underline;
    }
`