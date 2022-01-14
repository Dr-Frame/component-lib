import s from './investTab.module.scss';
import Input from '../../components/Input';
import { useEffect, useState } from 'react';
import { investAPI } from '../../services/InvestService';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import { ICategory, IInvestItem } from '../../types/investTypes';
import { ImBoxAdd } from 'react-icons/im';
import IconButton from '../../components/IconButton';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { RiAddBoxFill } from 'react-icons/ri';
import Modal from '../../components/Modal';
import CryptoStatsBar from '../../components/CryptoStatsBar';
import { cryptoApi } from '../../services/CryptoService';
import PieChart from '../../components/PieChart';
import MySelect from '../../components/MySelect';
import Table from '../../components/Table';
import { getProfit } from '../../utils/getProfit';
import { getAmount } from '../../utils/investmentCalculations';
import LineChart from '../../components/LineChart';
import { symbolsUrlConstructor } from '../../utils/urlSymbolConstructor';

const cx = classNames.bind(s);

const investTypeData = [
  { id: 1, label: 'Sell' },
  { id: 2, label: 'Buy' },
];

export default function InvestTabPage() {
  const [choosedAssetData, setChoosedAssetData] = useState({});

  const [asset, setAsset] = useState('');
  const [buyPrice, setBuyPrice] = useState('');
  const [investType, setInvestType] = useState('');
  const [investedAmount, setInvestedAmount] = useState('');
  const [category, setCategory] = useState('');

  const [newCategory, setNewCategory] = useState('');
  const [categoryToDelete, setCategoryToDelete] = useState<ICategory>({});

  const [isAddModalActive, setIsAddModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  //redux querry
  const { data: topThreeCrypto } = cryptoApi.useFetchInvestedCryptoQuery([
    'BTC',
    'ETH',
    'BNB',
  ]);
  const { data: searchResult } = cryptoApi.useSearchCryptoQuery(asset);
  const {
    data: investments,
    error,
    isLoading,
  } = investAPI.useFetchAllInvestmentQuery(10);
  const { data: categories } = investAPI.useFetchCategoryQuery(null);

  const [addCategory, {}] = investAPI.useAddCategoryMutation();
  const [deleteCategory, {}] = investAPI.useDeleteCategoryMutation();
  const [createInvestment, {}] = investAPI.useCreateInvestmentMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'asset':
        setAsset(value);
        break;
      case 'price':
        setBuyPrice(value);
        break;
      case 'invested':
        setInvestedAmount(value);
        break;
      case 'type':
        setInvestType(value);
        break;
      case 'category':
        setNewCategory(value);
        break;

      default:
        break;
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    /* const result = getProfit(
      Number(buyPrice),
      Number(choosedAssetData.price),
      getAmount(Number(investedAmount), Number(buyPrice)),
      Number(investedAmount),
      investType,
    ); */

    const investment = {
      asset: choosedAssetData,
      buyPrice: Number(buyPrice),
      invested: Number(investedAmount),
      investType,
      category,
      /*       profit: result.profit,
      profitPercentage: result.profitInPercent, */
    };
    await createInvestment(investment as IInvestItem);
    setChoosedAssetData('');
    setAsset('');
    setBuyPrice('');
    setCategory('');
    setInvestedAmount('');
    setInvestType('');
  }

  function handleAddCategory(categoryName: string) {
    const categoryToAdd = {
      value: categoryName,
      label: categoryName,
    };
    addCategory(categoryToAdd);
  }

  function handleInvestTypeSelect(selected: ICategory) {
    setInvestType(selected.label);
  }

  function handleCategorySelect(selected: ICategory) {
    setCategory(selected.label);
  }

  function handleCategoryToDeleteSelect(selected: ICategory) {
    setCategoryToDelete(selected);
  }

  console.log(investments);

  useEffect(() => {
    if (
      (asset === '' ||
        buyPrice === '' ||
        investedAmount === '' ||
        category === '' ||
        investType === '') === true
    ) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [asset, buyPrice, investedAmount, category, investType]);
  console.log('TOP', topThreeCrypto);

  console.log(symbolsUrlConstructor(['BTC', 'ETH', 'BNB']));

  return (
    <div className={s.container}>
      <div className={s.wrapperTop}>
        <div className={s.formWrapper}>
          <form className={s.form} onSubmit={handleSubmit}>
            <Input
              label="Asset"
              name="asset"
              value={asset}
              styleType="animated"
              theme="mainLight"
              onChange={handleInputChange}
              isAutocomplete
              setClickedValue={setAsset}
              setChoosedAsset={setChoosedAssetData}
              list={searchResult?.data?.coins}
              extraWrapperClass={s.extraWrapper}
            />
            <Input
              label="Entry price, $"
              name="price"
              value={buyPrice}
              type="number"
              styleType="animated"
              theme="mainLight"
              onChange={handleInputChange}
              extraWrapperClass={s.extraWrapper}
            />
            <Input
              label="Invested, $"
              name="invested"
              value={investedAmount}
              type="number"
              styleType="animated"
              theme="mainLight"
              onChange={handleInputChange}
              extraWrapperClass={s.extraWrapper}
            />
            <MySelect
              list={investTypeData}
              label="Type"
              selected={investType}
              setSelected={handleInvestTypeSelect}
              theme="mainLight"
              animated={true}
            />
            {categories && (
              <div className={s.selectTabWrapper}>
                <MySelect
                  list={categories}
                  label="Category"
                  selected={category}
                  setSelected={handleCategorySelect}
                  theme="mainLight"
                  animated={true}
                />
                <div className={s.buttonsWrapper}>
                  <IconButton
                    size="small"
                    theme="transparent"
                    extraClass={s.categoryBtn}
                    onClick={() => setIsAddModalActive(true)}
                  >
                    <RiAddBoxFill />
                  </IconButton>
                  <IconButton
                    size="small"
                    theme="transparent"
                    extraClass={s.categoryBtn}
                    onClick={() => setIsDeleteModalActive(true)}
                  >
                    <RiDeleteBack2Fill />
                  </IconButton>
                </div>
              </div>
            )}

            <Button
              as="button"
              type="submit"
              view="outlined"
              color="mainLight"
              size="default"
              animation="mouseRipple"
              isFlex
              disabled={isBtnDisabled}
              extraClass={s.button}
            >
              <p className={s.buttonText}>
                <ImBoxAdd className={s.buttonIcon} />
                Add to portfolio
              </p>
            </Button>
          </form>
        </div>
        <div className={s.topCryptoWrapper}>
          {topThreeCrypto &&
            topThreeCrypto.data.coins.map(item => {
              return <LineChart key={item.rank} asset={item} />;
            })}
        </div>
        <div className={s.statWrapper}>
          <CryptoStatsBar />
        </div>
      </div>

      <div className={s.wrapperBottom}>
        {' '}
        {isLoading && <h2>loading...</h2>}
        {error && <h2>error occured</h2>}
        {investments && categories && (
          <div className={s.tableWrapper}>
            <Table investments={investments} categories={categories} />
          </div>
        )}
        <div className={s.diagramsWrapper}>
          <div className={s.diagramBuyWrapper}>
            <p className={s.diagramTitle}>Your Longs</p>
            {investments && (
              <PieChart investments={investments} investType="Buy" />
            )}
          </div>
          <div className={s.diagramSellWrapper}>
            <p className={s.diagramTitle}>Your Shorts</p>
            {investments && (
              <PieChart investments={investments} investType="Sell" />
            )}
          </div>
        </div>
      </div>
      <Modal
        active={isAddModalActive}
        setActive={setIsAddModalActive}
        onClose={() => setNewCategory('')}
      >
        <div className={s.modalContentWrapper}>
          <Input
            label="Category name"
            name="category"
            value={newCategory}
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
            disabled={newCategory ? false : true}
            onClick={() => {
              handleAddCategory(newCategory);
              setIsAddModalActive(false);
              setNewCategory('');
            }}
          >
            Add category
          </Button>
        </div>
      </Modal>
      <Modal
        active={isDeleteModalActive}
        setActive={setIsDeleteModalActive}
        onClose={() => setCategoryToDelete({})}
      >
        <div className={s.modalContentWrapper}>
          {categories && (
            <MySelect
              list={categories}
              label="Category"
              selected={categoryToDelete.label}
              setSelected={handleCategoryToDeleteSelect}
              theme="mainLight"
              animated={true}
            />
          )}

          <Button
            as="button"
            type="button"
            view="outlined"
            color="mainLight"
            size="default"
            animation="mouseRipple"
            disabled={categoryToDelete.id ? false : true}
            extraClass={s.deleteBtnModal}
            onClick={() => {
              categoryToDelete ? deleteCategory(categoryToDelete) : null;
              setIsDeleteModalActive(false);
              setCategoryToDelete({});
            }}
          >
            Delete category
          </Button>
        </div>
      </Modal>
    </div>
  );
}
