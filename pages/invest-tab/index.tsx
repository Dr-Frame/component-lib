import s from './investTab.module.scss';
import Input from '../../components/Input';
import { useEffect, useState } from 'react';
import { investAPI } from '../../services/InvestService';
import classNames from 'classnames/bind';
import topCryptoList from '../../utils/topCryptoList';
import Button from '../../components/Button';
import { ICategory, IInvestItem } from '../../types/investTypes';
import { ImBoxAdd } from 'react-icons/im';
import InvestTableRow from '../../components/InvestTableRow';
import MultiSelect from '../../components/MultiSelect';
import IconButton from '../../components/IconButton';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { RiAddBoxFill } from 'react-icons/ri';
import Modal from '../../components/Modal';

const cx = classNames.bind(s);

export default function InvestTabPage() {
  const [asset, setAsset] = useState('');
  const [price, setPrice] = useState('');
  const [investedAmount, setInvestedAmount] = useState('');
  const [category, setCategory] = useState('');

  const [newCategory, setNewCategory] = useState('');
  const [categoryToDelete, setCategoryToDelete] = useState<null | number>(null);

  const [isAddModalActive, setIsAddModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

  const [isBtnDisabled, setisBtnDisabled] = useState(true);

  const { data: categories } = investAPI.useFetchCategoryQuery(null);
  const [addCategory, {}] = investAPI.useAddCategoryMutation();
  const [deleteCategory, {}] = investAPI.useDeleteCategoryMutation();
  const {
    data: investments,
    error,
    isLoading,
  } = investAPI.useFetchAllInvestmentQuery(10);
  const [createInvestment, {}] = investAPI.useCreateInvestmentMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'asset':
        setAsset(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'invested':
        setInvestedAmount(value);
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
    const investment = {
      asset,
      price: Number(price),
      invested: Number(investedAmount),
      category,
    };
    await createInvestment(investment as IInvestItem);
    setAsset('');
    setPrice('');
    setCategory('');
    setInvestedAmount('');
  }

  function handleAddCategory(categoryName: string) {
    const categoryToAdd = {
      value: categoryName,
      label: categoryName,
    };
    addCategory(categoryToAdd);
  }

  function handleDeleteCategory(id: number) {
    deleteCategory(id);
  }

  const handleSelectChange = (selected: ICategory) => {
    setCategory(selected.value);
  };

  function handleSelectCategoryToDelete(selected: ICategory) {
    setCategoryToDelete(selected.id);
  }

  useEffect(() => {
    if ((asset || price || investedAmount || category) && true) {
      setisBtnDisabled(false);
    }
  }, [asset, price, investedAmount, category]);

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
              list={topCryptoList}
              extraWrapperClass={s.extraWrapper}
            />
            <Input
              label="Buy price, $"
              name="price"
              value={price}
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
            {categories && (
              <div className={s.selectTabWrapper}>
                <MultiSelect
                  isMulti={false}
                  data={categories}
                  label={'Category'}
                  isSearchable
                  borderThickness={'2px'}
                  onChange={handleSelectChange}
                  selectedOption={category}
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
        <div className={s.rankWrapper}>crypto rank list</div>
      </div>

      <div className={s.wrapperBottom}>
        {' '}
        {isLoading && <h2>loading...</h2>}
        {error && <h2>error occured</h2>}
        <div className={s.tableWrapper}>
          <table className={s.table}>
            <thead className={s.tableHead}>
              <tr className={s.tableRow}>
                <th className={cx(s.headCell, s.number)}>№</th>
                <th className={cx(s.headCell, s.asset)}>Asset</th>
                <th className={cx(s.headCell, s.symbol)}>Symbol</th>
                <th className={cx(s.headCell, s.category)}>Category</th>
                <th className={cx(s.headCell, s.amount)}>Amount</th>
                <th className={cx(s.headCell, s.invested)}>Invested, $</th>
                <th className={cx(s.headCell, s.avarage)}>Buy price</th>
                <th className={cx(s.headCell, s.current)}>Current price</th>
                <th className={cx(s.headCell, s.profit)}>Profit</th>
                <th className={cx(s.headCell, s.edit)}></th>
                <th className={cx(s.headCell, s.delete)}></th>
              </tr>
            </thead>
            <tbody className={s.tableBody}>
              {investments &&
                investments.map((investment, i) => (
                  <InvestTableRow
                    key={investment.id}
                    index={i}
                    item={investment}
                    categories={categories}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div className={s.diagramWrapper}>portfolio diagram</div>
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
            }}
          >
            Add category
          </Button>
        </div>
      </Modal>
      <Modal
        active={isDeleteModalActive}
        setActive={setIsDeleteModalActive}
        onClose={() => setCategoryToDelete(null)}
      >
        <div className={s.modalContentWrapper}>
          {categories && (
            <MultiSelect
              isMulti={false}
              data={categories}
              label={'Category'}
              isSearchable
              borderThickness={'2px'}
              onChange={handleSelectCategoryToDelete}
              selectedOption={categoryToDelete}
            />
          )}

          <Button
            as="button"
            type="button"
            view="outlined"
            color="mainLight"
            size="default"
            animation="mouseRipple"
            disabled={categoryToDelete ? false : true}
            extraClass={s.deleteBtnModal}
            onClick={() => {
              categoryToDelete ? handleDeleteCategory(categoryToDelete) : null;
              setIsDeleteModalActive(false);
            }}
          >
            Delete category
          </Button>
        </div>
      </Modal>
    </div>
  );
}
