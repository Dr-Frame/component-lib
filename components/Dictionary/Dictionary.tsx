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
  microsoftApi,
  wordsApi,
} from '../../services/DictionaryService';
import Modal from '../Modal';
import { IWord, wordLearningStageType } from '../../types/dictionaryTypes';
import WordCard from '../WordCard';
import { CircularProgress, duration } from '@mui/material';
import translit from '../../utils/translitFn';
import MySelect from '../MySelect';
import { IoCloseSharp } from 'react-icons/io5';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tooltip from '../Tooltip';

const cx = classNames.bind(s);

interface DictionaryProps {}

function Dictionary() {
  const [search, setSearch] = useState('');
  console.log(search);

  const [stageValue, setStageValue] = useState<wordLearningStageType | 'all'>(
    'all',
  );
  const [wordData, setWordData] = useState<IWord[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredList, setFilteredList] = useState<IWord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  //Speech microphone
  const [isListening, setIsListening] = useState(false);
  const [isMicroAvailable, setIsMicroAvailable] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  //redux
  const { data: wordList } = wordsApi.useGetWordsQuery();
  const [getTranslation] = dictionaryApi.useLazyGetTranslationQuery();
  const [getWord, { error }] = dictionaryApi2.useLazyGetWordQuery();
  const { data: userCategoriesList } = wordsApi.useGetCategoryQuery();

  /* const [getMicrosoft] = microsoftApi.useLazyGetTranslationQuery(); */

  useEffect(() => {
    setWordData(null);
  }, []);

  useEffect(() => {
    setSearch('');
  }, [wordList]);

  useEffect(() => {
    if (wordList) {
      setFilteredList(
        filterWordList(wordList, stageValue, selectedCategory, search),
      );
    }
  }, [search, wordList, selectedCategory, stageValue]);

  function handleCategoryChange(e) {
    setSelectedCategory(e.label);
  }

  function filterWordList(
    list: IWord[],
    stageValue: string,
    selectedCategory: string,
    filter: string,
  ) {
    const sortByDate = (a: IWord, b: IWord) => b.time - a.time;

    let filtered = [...list].sort(sortByDate);

    return filtered
      .filter(item => (filter ? item.word.includes(filter) : true))
      .filter(item =>
        selectedCategory ? item.category === selectedCategory : true,
      )
      .filter(item =>
        stageValue === 'all' ? true : item.stage === stageValue,
      );
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
    let wordInfo;

    try {
      const { data } = await getTranslation(search);
      const apiData = await getWord(search);
      /* const microSoft = await getMicrosoft(search); */
      console.log('TRANSLO', data);
      console.log('GOOGLE', apiData);
      /* console.log('MICRO', microSoft); */

      wordInfo = {
        translate: data.translated_text,
        translations: data.translations,
        ...apiData.data[0],
        stage: 'new',
        category: '',
        folder: '',
      };

      setWordData(wordInfo);
      setIsLoading(false);
      setIsModalOpen(true);
    } catch (error) {
      setIsModalOpen(true);
      setIsLoading(false);
    }
  };

  //speech =================================
  const commands = [
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  const { listening, isMicrophoneAvailable, finalTranscript, resetTranscript } =
    useSpeechRecognition({ commands });

  useEffect(() => {
    setIsListening(listening);
  }, [listening]);

  useEffect(() => {
    setSearch(finalTranscript);
  }, [finalTranscript]);

  useEffect(() => {
    if (isMicrophoneAvailable) {
      setIsMicroAvailable(true);
    } else {
      setIsMicroAvailable(false);
    }
  }, [isMicrophoneAvailable]);

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
      setIsSupported(false);
    }
  }, []);

  useEffect(() => {
    resetTranscript();
    setSearch('');
    setIsListening(false);
  }, []);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>My Dictionary {`(${filteredList?.length})`}</h1>
      <Tooltip />
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
          {isMicroAvailable && isSupported && (
            <motion.div
              className={s.soundBtnWrapper}
              animate={
                isListening
                  ? {
                      scale: [1, 0.9, 1, 1.1, 1],
                    }
                  : undefined
              }
              transition={
                isListening
                  ? { ease: 'linear', duration: 1.2, repeat: Infinity }
                  : undefined
              }
            >
              {' '}
              {!isListening && (
                <Button
                  type="button"
                  as="button"
                  extraClass={cx(s.button, {
                    active: isListening,
                  })}
                  size="default"
                  onClick={() => {
                    setIsListening(true);
                    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
                      setIsSupported(false);
                    } else {
                      SpeechRecognition.startListening({
                        continuous: false,
                        language: 'en-US',
                      });
                    }
                  }}
                  tooltip
                  tooltipText="voice"
                  tooltipSide="bottom"
                >
                  <FaMicrophone />
                </Button>
              )}
              {isListening && (
                <Button
                  type="button"
                  as="button"
                  extraClass={cx(s.button, {
                    active: isListening,
                  })}
                  size="default"
                  onClick={() => {
                    setIsListening(false);
                    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
                      setIsSupported(false);
                    } else {
                      SpeechRecognition.stopListening();
                    }
                  }}
                  tooltip
                  tooltipText="stop listening"
                  tooltipSide="bottom"
                >
                  <FaMicrophoneSlash />
                </Button>
              )}
            </motion.div>
          )}

          <motion.div
            className={s.clearBtnWrapper}
            animate={isListening ? { marginLeft: '10px' } : undefined}
            transition={{ ease: 'linear', duration: 0.3 }}
          >
            <Button
              type="button"
              as="button"
              extraClass={s.button}
              size="default"
              onClick={() => setSearch('')}
              disabled={!search}
              tooltip
              tooltipText="clear search"
              tooltipSide="bottom"
            >
              <IoCloseSharp fontSize={30} />
            </Button>
          </motion.div>

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
          {userCategoriesList && (
            <MySelect
              label="Category"
              list={userCategoriesList}
              extraClass={s.categoryFilter}
              extraBorderClass={s.categoryFilterBorder}
              selected={selectedCategory}
              setSelected={handleCategoryChange}
              padding={'5px 5px 5px 10px'}
            />
          )}

          <Button
            as="button"
            extraClass={cx(s.button, s.deleteCategoryBtn)}
            onClick={() => setSelectedCategory('')}
            tooltip
            tooltipText="clear category"
            tooltipSide="bottom"
            size="default"
          >
            <IoCloseSharp fontSize={30} />
          </Button>

          <Button
            as="button"
            extraClass={cx(s.button, {
              active: stageValue === 'all',
            })}
            onClick={() => {
              setStageValue('all');
            }}
            tooltip
            tooltipText="view all"
            tooltipSide="bottom"
            size="default"
          >
            All
          </Button>

          <Button
            as="button"
            extraClass={cx(s.button, s.new, {
              active: stageValue === 'new',
            })}
            onClick={() => {
              setStageValue('new');
            }}
            tooltip
            tooltipText="new"
            tooltipSide="bottom"
            size="default"
          >
            <BsBook className={s.icon} />
          </Button>

          <Button
            as="button"
            extraClass={cx(s.button, s.half, {
              active: stageValue === 'inProgress',
            })}
            tooltip
            tooltipText="in progress"
            tooltipSide="bottom"
            size="default"
            onClick={() => {
              setStageValue('inProgress');
            }}
          >
            <BsBookHalf className={s.icon} />
          </Button>

          <Button
            as="button"
            extraClass={cx(s.button, s.done, {
              active: stageValue === 'done',
            })}
            onClick={() => {
              setStageValue('done');
            }}
            tooltip
            tooltipText="done"
            tooltipSide="bottom"
            size="default"
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
