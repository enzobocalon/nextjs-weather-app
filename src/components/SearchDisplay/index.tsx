import * as S from './styles';
import { MdClose, MdOutlineSearch, MdOutlineArrowForwardIos } from 'react-icons/md';
import Button from '../Button';

const SearchDisplay = () => {
  return (
    <S.Container>
      <S.CloseContainer>
        <MdClose size={32}/>
      </S.CloseContainer>

      <S.SearchContainer>
        <S.Search>
          <MdOutlineSearch size={32}/>
          <S.SearchInput />
        </S.Search>

        <Button customBackground='#3C47E9' buttonType='normal'>
          Search
        </Button>
      </S.SearchContainer>

      <S.SearchResultContainer>
        <S.SearchResult>
          <span>London</span>
          <MdOutlineArrowForwardIos color='#616475'/>
        </S.SearchResult>
      </S.SearchResultContainer>
    </S.Container>
  );
}

export default SearchDisplay;
