import s from './WordCard.module.scss';
import Image from 'next/image';
import { HiVolumeUp } from 'react-icons/hi';
import IconButton from '../IconButton';
import { IWord } from '../../types/dictionaryTypes';
import { BsPencilSquare } from 'react-icons/bs';
import { FiCheckSquare } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { wordsApi } from '../../services/DictionaryService';
import classNames from 'classnames/bind';
import { CircularProgress } from '@mui/material';

const cx = classNames.bind(s);

interface IWordCardProps {
  wordData: IWord;
  isLoading: boolean;
  search: string;
  setModal(arg: boolean): void;
}

function WordCard({ wordData, isLoading, search, setModal }: IWordCardProps) {
  const [userTranslation, setUserTranslation] = useState(wordData.translate);
  const [isRedacting, setIsRedacting] = useState(false);

  console.log('isLoading', isLoading);
  console.log('wordData', wordData);

  //redux
  const [addWord] = wordsApi.useAddWordMutation();

  useEffect(() => {
    setIsRedacting(false);
  }, [wordData]);

  useEffect(() => {
    setUserTranslation(wordData.translate);
  }, [wordData]);

  const handleTranslationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTranslation(e.target.value.toLowerCase());
  };

  const handleWordAdd = () => {
    const newWord = {
      ...wordData,
      translate: userTranslation,
      time: Date.now(),
    };
    addWord(newWord);
    setUserTranslation('');
    setModal(false);
    setIsRedacting(false);
  };

  return (
    <>
      <div className={s.cardWrapper}>
        {(!wordData || isLoading) && (
          <div className={s.loading}>
            <CircularProgress size={100} />
          </div>
        )}
        {!isLoading && (
          <>
            <div className={s.img}>
              <Image
                src="/../public/img/imagePlaceholder.png"
                alt="noImage"
                width={200}
                height={200}
              />
            </div>

            <p className={s.word}>{wordData.word}</p>
            <div className={s.phoneticWrapper}>
              <IconButton
                size="small"
                theme="transparent"
                extraClass={s.soundButton}
                onClick={() => {
                  const audio = new Audio(wordData.phonetics[0].audio);
                  audio.play();
                }}
              >
                <HiVolumeUp />
              </IconButton>
              <p className={s.phonetic}>[ {wordData.phonetic} ]</p>
            </div>
            <div className={s.translateChangeWrapper}>
              <div
                className={cx(s.translateWrapper, {
                  visible: !isRedacting,
                  hidden: isRedacting,
                })}
              >
                <p className={s.translate}>
                  {userTranslation || wordData.translate}
                </p>
                <IconButton
                  size="small"
                  theme="transparent"
                  extraClass={s.changeButton}
                  onClick={() => setIsRedacting(true)}
                >
                  <BsPencilSquare />
                </IconButton>
              </div>

              <div
                className={cx(s.inputWrapper, {
                  visible: isRedacting,
                  hidden: !isRedacting,
                })}
              >
                <Input
                  styleType="standart"
                  label="Your translate"
                  name="translate"
                  value={userTranslation}
                  onChange={handleTranslationChange}
                  theme="mainLight"
                  isLabelHidden
                  placeholder="Type here..."
                  extraClass={s.input}
                />
                <IconButton
                  size="small"
                  theme="transparent"
                  extraClass={s.changeButton}
                  onClick={() => {
                    setIsRedacting(false);
                  }}
                >
                  <FiCheckSquare />
                </IconButton>
              </div>
            </div>

            <Button
              color="mainDark"
              as="button"
              size="default"
              extraClass={s.addBtn}
              onClick={handleWordAdd}
            >
              Add word
            </Button>

            <p className={s.additionalText}>translation variants: </p>
            <ul className={s.extraTranslation}>
              {Object.entries(wordData.translations).map((item, i) => {
                if (item[0].toLowerCase() !== search) {
                  return (
                    <li key={i} className={s.extraTranslationItem}>
                      <p className={s.extraTranslationText}>{item[0]}</p>
                      <p key={i} className={s.extraSynonim}>
                        {item[1].slice(0, 6).join(', ')}
                      </p>
                    </li>
                  );
                }
                return;
              })}
            </ul>

            {wordData.meanings &&
              wordData.meanings.map((item, i) => {
                return (
                  <div className={s.meaningsWrapper} key={i}>
                    <p className={s.partOfSpeech}>{item.partOfSpeech}</p>
                    <ul className={s.defList}>
                      {item.definitions.map((subItem, i) => {
                        return (
                          <li key={i} className={s.defItem}>
                            <div className={s.defItemWrapper}>
                              <div className={s.defNumberWrapper}>
                                <p className={s.definitionNumber}>{i + 1}</p>
                                <p className={s.definition}>
                                  {subItem.definition}
                                </p>
                              </div>
                              {subItem.example && (
                                <p className={s.example}>
                                  example: <span>{subItem.example}</span>
                                </p>
                              )}

                              {subItem.synonyms.length > 0 && (
                                <>
                                  <p className={s.synonym}>synonyms: </p>
                                  <ul className={s.synonymsList}>
                                    {subItem.synonyms.length > 5
                                      ? subItem.synonyms
                                          .slice(0, 6)
                                          .map((item, i) => {
                                            return (
                                              <li
                                                key={i}
                                                className={s.synonymItem}
                                              >
                                                {item}
                                              </li>
                                            );
                                          })
                                      : subItem.synonyms.map((item, i) => {
                                          return (
                                            <li
                                              key={i}
                                              className={s.synonymItem}
                                            >
                                              {item}
                                            </li>
                                          );
                                        })}
                                    <li></li>
                                  </ul>
                                </>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
}

export default WordCard;
