import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const Aside = styled.aside`
  width: 280px;
`;

export const Main = styled.main`
  flex: 1;
  margin: 0 40px;
`;

export const StickySidebar = styled.div`
  position: sticky;
  top: 60px;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  padding: 10px;
`;
