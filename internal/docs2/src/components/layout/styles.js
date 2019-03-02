import styled from '@auth0/cosmos/styled'

const AppLayout = styled.div`
  position: relative;
  width: 100%;
  margin-top: 80px;
  ${'' /* make room for the fixed top navigation */};
`

const HeaderContent = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #222;
  height: 80px;
  padding: 0 16px;
`

const MainContent = styled.div`
  padding-left: 19rem;
  padding-bottom: 4rem;

  @media (max-width: 800px) {
    padding-left: 4rem;
  }
`

const SideContent = styled.div`
  width: 19rem;
  position: fixed;
  height: calc(100vh - 80px);
  overflow-y: auto;
  transition: width 0.25s;

  @media (max-width: 800px) {
    width: ${props => (props.visible ? '19rem' : '0rem')};
    z-index: 2;
  }
`
const SidebarToggle = styled.div`
  padding: 16px;
  position: fixed;
  left: ${props => (props.sidebarVisible ? '19rem' : '0rem')};
  transition: left 0.25s;
  z-index: 3;

  &:hover {
    svg path {
      fill: ${props => (props.sidebarVisible ? '#E40002' : '#0a84ae')};
    }
  }

  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

const Body = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.1rem 1.05rem;
`

export {
  AppLayout,
  HeaderContent,
  MainContent,
  SideContent,
  SidebarToggle,
  Body,
}
