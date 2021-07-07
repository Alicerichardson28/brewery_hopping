import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.div`
  background-color: #eeae08;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
`;
export const NavLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap");
  font-family: "Karla", sans-serif;
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
`;
