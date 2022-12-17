import { SearchContext } from '../../contexts/Search';
import SearchDisplay from '../SearchDisplay';
import SidebarDisplayState from '../SidebarDisplayState';
import * as S from './styles'
import { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

interface SidebarProps {
  ip: string | undefined
}

const Sidebar = ({ip}: SidebarProps) => {
  const {isSearchActive} = useContext(SearchContext);

  return (
    <S.Container>
      <AnimatePresence mode='wait'>
      {
        isSearchActive ? (
          <SearchDisplay key='searchDisplay'/>
        ) : (
          <SidebarDisplayState ip={ip} key='searchDisplayState'/>
        )
      }
      </AnimatePresence>
    </S.Container>
  );
}

export default Sidebar;
