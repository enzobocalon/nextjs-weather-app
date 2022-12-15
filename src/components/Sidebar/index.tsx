import { SearchContext } from '../../contexts/Search';
import SearchDisplay from '../SearchDisplay';
import SidebarDisplayState from '../SidebarDisplayState';
import * as S from './styles'
import { useContext } from 'react';


const Sidebar = () => {
  const {isSearchActive} = useContext(SearchContext);

  return (
    <S.Container>
      {
        isSearchActive ? (
          <SearchDisplay />
        ) : (
          <SidebarDisplayState />
        )
      }
    </S.Container>
  );
}

export default Sidebar;
