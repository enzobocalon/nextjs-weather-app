import SearchDisplay from '../SearchDisplay';
import SidebarDisplayState from '../SidebarDisplayState';
import * as S from './styles'



const Sidebar = () => {
  return (
    <S.Container>
      {/* <SidebarDisplayState /> */}
      <SearchDisplay />
    </S.Container>
  );
}

export default Sidebar;
