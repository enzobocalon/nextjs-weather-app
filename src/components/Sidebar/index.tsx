import { SearchContext } from '../../contexts/Search';
import SearchDisplay from '../SearchDisplay';
import SidebarDisplayState from '../SidebarDisplayState';
import * as S from './styles'
import { useContext } from 'react';

interface SidebarProps {
  ip: string | undefined
}

const Sidebar = ({ip}: SidebarProps) => {
  const {isSearchActive} = useContext(SearchContext);

  return (
    <S.Container>
      {
        isSearchActive ? (
          <SearchDisplay />
        ) : (
          <SidebarDisplayState ip={ip}/>
        )
      }
    </S.Container>
  );
}

export default Sidebar;
