import * as S from './styles';
import { MdClose, MdOutlineSearch, MdOutlineArrowForwardIos } from 'react-icons/md';
import Button from '../Button';
import { SearchContext } from '../../contexts/Search';
import { useContext, useState, useEffect } from 'react';
import { getSearchedContent } from '../../services/getSearchedContent';
import { Search } from '../../types/Search';
import { WeatherContext } from '../../contexts/Weather';
import { getForecast } from '../../services/getForecast';

const SearchDisplay = () => {
  const { setIsSearchActive } = useContext(SearchContext);
  const { setWeatherData } = useContext(WeatherContext);
  const [search, setSearch] = useState('')
  const [searchContent, setSearchContent] = useState<Search[] | null>(null);

  const handleSearchSubmit = async (location: string) => {
    const response = await getForecast(location);
    if (response) {
      setWeatherData(response);
      setIsSearchActive(false);
      setSearch('');
    }
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (search) {
        const response = await getSearchedContent(search);
        setSearchContent(response);
      }
    }
    handleSearch();
  }, [search])

  return (
    <S.Container
    animate={{x: 0, opacity: 1}}
    initial={{x: '-100%', opacity: 0}}
    transition={{ease: "easeInOut", duration: .3}}
    exit={{x: '-100%', opacity: 0}}>
      <S.CloseContainer>
        <MdClose size={32} onClick={() => setIsSearchActive(false)}/>
      </S.CloseContainer>

      <S.SearchContainer>
        <S.Search>
          <MdOutlineSearch size={32}/>
          <S.SearchInput
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
        </S.Search>

        <Button customBackground='#3C47E9' buttonType='normal'>
          Search
        </Button>
      </S.SearchContainer>

      <S.SearchResultContainer>
        {
          searchContent ? searchContent.map(search => (
            <S.SearchResult key={search.id} onClick={() => handleSearchSubmit(search.name)}>
              <span>{search.name}</span>
              <MdOutlineArrowForwardIos color='#616475'/>
            </S.SearchResult>
          )) : (
            <></>
          )
        }
      </S.SearchResultContainer>
    </S.Container>
  );
}

export default SearchDisplay;
