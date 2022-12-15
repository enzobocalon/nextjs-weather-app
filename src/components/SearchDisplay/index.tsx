import * as S from './styles';
import { MdClose, MdOutlineSearch, MdOutlineArrowForwardIos } from 'react-icons/md';
import Button from '../Button';
import { SearchContext } from '../../contexts/Search';
import { useContext } from 'react';

const SearchDisplay = () => {
  const {setIsSearchActive} = useContext(SearchContext);
  return (
    <S.Container animate={{x: 0}} initial={{x: '-100%'}} transition={{ease: "linear", duration: .3}}>
      <S.CloseContainer>
        <MdClose size={32} onClick={() => setIsSearchActive(false)}/>
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
