import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../const/colors";

export const Container = styled.div`
  /* position: relative; */
`;

export const DropdownButton = styled(Link)`
  display: block;
  margin: 0 5px;
  position: relative;
  span {
    font-size: 8px;
    line-height: 1em;
    position: absolute;
    top: -2px;
    right: -3px;
    border: 1px solid #ffffff;
    background-color: #a30015;
    padding: 1px 2px;
    border-radius: 3px;
    color: #ffffff;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  padding-left: 15px;
  padding-right: 15px;
  right: 0;
  top: calc(100% + 5px);
  width: 380px;
  max-width: 100vw;
  background-color: ${colors.primary};
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px 10px;
  margin-bottom: 5px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
  }
  div {
    margin-left: 10px;
  }
  p:first-of-type {
    font-weight: 700;
  }
  p:last-of-type {
    color: rgba(255, 255, 255, 0.5);
  }
  img {
    display: block;
    height: 40px;
    width: 40px;
  }
`;

export const DrButton = styled(Link)`
  display: block;
  margin: 0 0 0 5px;
`;

export const DrList = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 5px);
  width: 200px;
  max-width: 100vw;
  background-color: ${colors.primary};
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
`;

export const DrItem = styled.div`
  h3 {
    font-size: 18px;
    position: relative;
    padding: 0 10px 5px;
    margin-bottom: 5px;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10px;
      right: 10px;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.5),
        transparent
      );
    }
  }
  ul {
    padding: 0 10px 10px;
    list-style: none;
  }
`;

export const Icon2 = styled(FontAwesomeIcon)`
  font-size: 14px;
  position: relative;
  bottom: 1px;
  margin-right: 10px;
  display: inline-block;
  width: 15px;
`;
