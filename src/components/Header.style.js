import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../const/colors";

export const Header = styled.header`
  background-color: ${colors.primary};
  color: #fafafa;
  padding-top: 5px;
  padding-bottom: 5px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
    Link {
      width: 40px;
    }
    Form {
      flex: 1;
      Input {
        width: calc(100% - 15px);
      }
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 5px 20px 5px 10px;
  border-radius: 13px;
  border: unset;
  margin-left: 15px;
`;

export const Icon2 = styled(FontAwesomeIcon)`
  position: absolute;
  right: 5px;
  top: 5px;
  bottom: 0;
  color: ${colors.text.medium};
  font-size: 16px;
  cursor: pointer;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border-radius: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-around;
  }
`;
