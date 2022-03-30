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
import MySelect from '../MySelect';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { RiAddBoxFill } from 'react-icons/ri';
import Modal from '../Modal';
import { ICategory } from '../../types/investTypes';

const cx = classNames.bind(s);

interface IWordCardProps {
  wordData: IWord;
  isLoading?: boolean;
  search?: string;
  setModal?(arg: boolean): void;
  isAddFuncOn: boolean;
}

function WordCard({
  wordData,
  isLoading,
  search,
  setModal,
  isAddFuncOn = true,
}: IWordCardProps) {
  const [userTranslation, setUserTranslation] = useState(wordData.translate);
  const [isRedacting, setIsRedacting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [inputCategory, setInputCategory] = useState('');

  //redux
  const [addWord] = wordsApi.useAddWordMutation();
  const [updateWord] = wordsApi.useUpdateWordMutation();
  const [addNewCategory] = wordsApi.useAddCategoryMutation();
  const { data: categoryList } = wordsApi.useGetCategoryQuery();

  useEffect(() => {
    setIsRedacting(false);
  }, [wordData]);

  useEffect(() => {
    setUserTranslation(wordData.translate);
  }, [wordData]);

  const handleTranslationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTranslation(e.target.value.toLowerCase());
  };

  const handleSelectCategory = (e: ICategory) => {
    setSelectedCategory(e.label);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCategory(e.target.value);
  };

  const handleWordAdd = () => {
    const newWord = {
      ...wordData,
      translate: userTranslation,
      time: Date.now(),
      category: selectedCategory,
      trainingsDone: [],
      lastRepeatDate: Date.now(),
    };
    addWord(newWord);
    setUserTranslation('');
    setModal(false);
    setIsRedacting(false);
  };

  const handleAddCategory = (name: string) => {
    const newCategory: ICategory = { value: name, label: name };
    addNewCategory(newCategory);
  };

  return (
    <>
      <div className={s.cardWrapper}>
        {!isLoading && (
          <>
            {isAddFuncOn && (
              <div className={s.userActionsWrapper}>
                <Button
                  color="mainDark"
                  as="button"
                  size="default"
                  extraClass={s.addBtn}
                  onClick={handleWordAdd}
                >
                  Add word
                </Button>
                <div className={s.selectCategoryWrapper}>
                  {categoryList && categoryList?.length > 0 ? (
                    <MySelect
                      list={categoryList}
                      label="Category"
                      selected={selectedCategory}
                      setSelected={handleSelectCategory}
                      theme="mainLight"
                      extraClass={s.select}
                      padding={'6px 5px 6px 10px'}
                    />
                  ) : (
                    <p className={s.noCategory}>Add new category</p>
                  )}

                  <div className={s.buttonsWrapper}>
                    <IconButton
                      size="small"
                      theme="transparent"
                      extraClass={s.categoryBtn}
                      onClick={() => setIsCategoryModalOpen(true)}
                    >
                      <RiAddBoxFill />
                    </IconButton>
                    <IconButton
                      size="small"
                      theme="transparent"
                      extraClass={s.categoryBtn}
                      onClick={() => setSelectedCategory('')}
                    >
                      <RiDeleteBack2Fill />
                    </IconButton>
                  </div>
                </div>
              </div>
            )}

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
                  onClick={() => {
                    setIsRedacting(true);
                  }}
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
                  value={userTranslation || wordData.translate}
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
                    if (!isAddFuncOn) {
                      const updatedWord = {
                        ...wordData,
                        translate: userTranslation,
                      };
                      updateWord(updatedWord);
                    }
                  }}
                >
                  <FiCheckSquare />
                </IconButton>
              </div>
            </div>

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
      <Modal active={isCategoryModalOpen} setActive={setIsCategoryModalOpen}>
        <div className={s.categoryModalContentWrapper}>
          <Input
            label="Category name"
            name="category"
            value={inputCategory}
            styleType="animated"
            theme="mainLight"
            onChange={handleInputChange}
            extraWrapperClass={s.extraWrapper}
          />
          <Button
            as="button"
            type="button"
            view="outlined"
            color="mainLight"
            size="default"
            animation="mouseRipple"
            disabled={inputCategory ? false : true}
            onClick={() => {
              handleAddCategory(inputCategory);
              setIsCategoryModalOpen(false);
              setInputCategory('');
            }}
          >
            Add category
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default WordCard;
