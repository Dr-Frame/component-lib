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

const cx = classNames.bind(s);

interface DictionaryProps {}

type wordStateT = 'all' | 'new' | 'inProgress' | 'done';

function Dictionary() {
  const [search, setSearch] = useState('');
  const [wordsToShow, setWordsToShow] = useState<wordStateT>('all');
  const [wordData, setWordData] = useState<IWord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isErrorOcurred, setIsErrorOcurred] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  //redux
  const { data: wordList } = wordsApi.useGetWordsQuery();
  const [getTranslation] = dictionaryApi.useLazyGetTranslationQuery();
  const [getWord] = dictionaryApi2.useLazyGetWordQuery();

  useEffect(() => {
    setSearch('');
  }, [wordList]);

  useEffect(() => {
    if (wordList) {
      const filtered = wordList.filter(item => item.word.includes(search));
      setFilteredList(filtered);
    }
  }, [search, wordList]);

  useEffect(() => {
    if (isErrorOcurred) {
      setIsModalOpen(false);
      alert('please search a word again');
    }

    return () => {
      setIsErrorOcurred(false);
    };
  }, [isErrorOcurred]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'search':
        setSearch(value.toLowerCase());
        break;

      default:
        break;
    }
  };

  const handleAddWord = async () => {
    setIsLoading(true);
    let wordData;

    try {
      setIsModalOpen(true);
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
    } catch (error) {
      setIsErrorOcurred(true);
      console.log('ERROR', error);
    }
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>My Dictionary {`(${123})`}</h1>
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
            disabled={!search}
            extraClass={s.addBtn}
            size="default"
          >
            Add word
          </Button>
        </div>

        <div className={s.btnGroup}>
          <Button
            as="button"
            extraClass={cx(s.button, {
              active: wordsToShow === 'all',
            })}
            onClick={() => setWordsToShow('all')}
          >
            All
          </Button>
          <Button
            as="button"
            extraClass={cx(s.button, {
              active: wordsToShow === 'new',
            })}
            onClick={() => setWordsToShow('new')}
          >
            <BsBook className={s.icon} />
          </Button>
          <Button
            as="button"
            extraClass={cx(s.button, {
              active: wordsToShow === 'inProgress',
            })}
            onClick={() => setWordsToShow('inProgress')}
          >
            <BsBookHalf className={s.icon} />
          </Button>
          <Button
            as="button"
            extraClass={cx(s.button, {
              active: wordsToShow === 'done',
            })}
            onClick={() => setWordsToShow('done')}
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
        onClose={() => setSearch('')}
      >
        {wordData && (
          <WordCard
            wordData={wordData}
            isLoading={isLoading}
            search={search}
            setModal={setIsModalOpen}
          />
        )}
      </Modal>
    </div>
  );
}

export default Dictionary;
