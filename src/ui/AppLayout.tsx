import styled from 'styled-components'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import UserSettings from '../features/settings/UserSettings';

const AppStyled = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`

const MainStyled = styled.main`
  flex-grow: 1;
`

function AppLayout() {
  return (
    <AppStyled>
      <UserSettings/>
      <Sidebar />
      <MainStyled>
        <Outlet/>
      </MainStyled>
    </AppStyled>
  )
}

export default AppLayout
