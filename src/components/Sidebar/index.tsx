import Button from '../Button';
import * as S from './styles'

import { BiTargetLock } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <S.Container>
      <S.TopContent>

        <Button buttonType='normal'>
          Search for places
        </Button>

        <Button buttonType='rounded'>
          <BiTargetLock color='#E7E7EB' size={24}/>
        </Button>
      </S.TopContent>

      <S.MiddleContent>
        
      </S.MiddleContent>
    </S.Container>
  );
}

export default Sidebar;
