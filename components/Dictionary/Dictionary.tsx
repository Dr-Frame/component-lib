import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import s from './Dictionary.module.scss';
import { BsBook, BsBookHalf, BsBookFill } from 'react-icons/bs';
import classNames from 'classnames/bind';
import WordItem from '../WordItem';
import {
  dictionaryApi,
  dictionaryApi2,
  wordsApi,
} from '../../services/DictionaryService';
import Modal from '../Modal';
import { IWord } from '../../types/dictionaryTypes';
import WordCard from '../WordCard';
import { CircularProgress } from '@mui/material';
import translit from '../../utils/translitFn';
import MySelect from '../MySelect';
import { IoCloseSharp } from 'react-icons/io5';

const cx = classNames.bind(s);

interface DictionaryProps {}

type wordStateT = 'all' | 'new' | 'inProgress' | 'done';

function Dictionary() {
  const [search, setSearch] = useState('');
  const [wordsToShow, setWordsToShow] = useState<wordStateT>('all');
  const [wordData, setWordData] = useState<IWord[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  //redux
  const { data: wordList } = wordsApi.useGetWordsQuery();
  const [getTranslation] = dictionaryApi.useLazyGetTranslationQuery();
  const [getWord, { error }] = dictionaryApi2.useLazyGetWordQuery();
  const { data: userCategoriesList } = wordsApi.useGetCategoryQuery();

  useEffect(() => {
    setWordData(null);
  }, []);

  useEffect(() => {
    setSearch('');
  }, [wordList]);

  useEffect(() => {
    if (wordList) {
      setFilteredList(filterWordList(wordList, search, 'word'));
    }
  }, [search, wordList, selectedCategory]);

  function handleCategoryChange(e) {
    setSelectedCategory(e.label);
  }

  function filterWordList(
    list: IWord[],
    filter: string | number,
    filterType: 'word' | 'stage',
  ) {
    const sortByDate = (a: IWord, b: IWord) => b.time - a.time;

    let filtered = [...list].sort(sortByDate);
    if (filterType === 'word' && typeof filter === 'string') {
      if (selectedCategory) {
        return filtered
          .filter(item => item.word.includes(filter))
          .filter(item => item.category === selectedCategory);
      }
      return filtered.filter(item => item.word.includes(filter));
    }
    if (filterType === 'stage' && typeof filter === 'number') {
      if (selectedCategory) {
        return filtered
          .filter(item => item.stage === filter)
          .filter(item => item.category === selectedCategory);
      }
      return filtered.filter(item => item.stage === filter);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'search':
        setSearch(translit(value.toLowerCase()));
        break;

      default:
        break;
    }
  };

  const handleAddWord = async () => {
    setIsLoading(true);
    let wordData;

    try {
      const { data } = await getTranslation(search);
      const apiData = await getWord(search);

      wordData = {
        translate: data.translated_text,
        translations: data.translations,
        ...apiData.data[0],
        stage: 0,
        category: '',
        folder: '',
      };

      setWordData(wordData);
      setIsLoading(false);
      setIsModalOpen(true);
    } catch (error) {
      setIsModalOpen(true);
      setIsLoading(false);
    }
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>My Dictionary {`(${wordList?.length})`}</h1>
      <div className={s.topWrapper}>
        <div className={s.wordsWrapper}>
          <Input
            styleType="standart"
            label="Search"
            name="search"
            value={search}
            onChange={handleInputChange}
            theme="mainLight"
            isLabelHidden
            placeholder="Search..."
            extraClass={s.input}
          />
          <Button
            onClick={handleAddWord}
            as="button"
            disabled={
              !search || filteredList.map(item => item.word).includes(search)
            }
            extraClass={s.addBtn}
            size="default"
          >
            Add word
          </Button>
        </div>

        <div className={s.btnGroup}>
          <MySelect
            label="Category"
            list={userCategoriesList}
            extraClass={s.categoryFilter}
            extraBorderClass={s.categoryFilterBorder}
            selected={selectedCategory}
            setSelected={handleCategoryChange}
            padding={'5px 5px 5px 10px'}
          />
          <Button
            as="button"
            extraClass={cx(s.button, s.deleteCategoryBtn)}
            onClick={() => setSelectedCategory('')}
          >
            <IoCloseSharp fontSize={30} />
          </Button>
          <Button
            as="button"
            extraClass={cx(s.button, {
              active: wordsToShow === 'all',
            })}
            onClick={() => {
              setWordsToShow('all');
              setFilteredList(filterWordList(wordList, search, 'word'));
            }}
          >
            All
          </Button>
          <Button
            as="button"
            extraClass={cx(s.button, s.new, {
              active: wordsToShow === 'new',
            })}
            onClick={() => {
              setWordsToShow('new');
              setFilteredList(filterWordList(wordList, 0, 'stage'));
            }}
          >
            <BsBook className={s.icon} />
          </Button>
          <Button
            as="button"
            extraClass={cx(s.button, s.half, {
              active: wordsToShow === 'inProgress',
            })}
            onClick={() => {
              setWordsToShow('inProgress');
              setFilteredList(filterWordList(wordList, 1, 'stage'));
            }}
          >
            <BsBookHalf className={s.icon} />
          </Button>
          <Button
            as="button"
            extraClass={cx(s.button, s.done, {
              active: wordsToShow === 'done',
            })}
            onClick={() => {
              setWordsToShow('done');
              setFilteredList(filterWordList(wordList, 2, 'stage'));
            }}
          >
            <BsBookFill className={s.icon} />
          </Button>
        </div>
      </div>
      {filteredList ? (
        <ul className={s.listWrapper}>
          {filteredList.map(item => (
            <WordItem wordData={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>no words added yet</p>
      )}
      <Modal
        active={isModalOpen}
        setActive={setIsModalOpen}
        onClose={() => {
          setSearch('');
        }}
      >
        {error && (
          <div className={s.errorWrapper}>
            <div className={s.errorDescr}>{error.data.message} </div>
            <div className={s.errorHandle}>
              Type the correct word and try again
            </div>
          </div>
        )}
        {wordData && !error && (
          <WordCard
            wordData={wordData}
            isLoading={isLoading}
            search={search}
            setModal={setIsModalOpen}
          />
        )}
      </Modal>
      {isLoading && (
        <div className={s.loadingBackdrop}>
          <CircularProgress size={60} />
        </div>
      )}
    </div>
  );
}

export default Dictionary;
