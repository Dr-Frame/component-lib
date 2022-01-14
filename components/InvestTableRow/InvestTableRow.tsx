import { ICategory, IInvestItem } from '../../types/investTypes';
import { getAmount } from '../../utils/investmentCalculations';
import classNames from 'classnames/bind';
import s from './InvestTableRow.module.scss';
import Button from '../Button';
import { MdDeleteForever } from 'react-icons/md';
import { MdDownloadDone } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { investAPI } from '../../services/InvestService';
import { useState } from 'react';
import Input from '../Input';
import MySelect from '../MySelect';
import { getProfit } from '../../utils/getProfit';
import { cryptoApi } from '../../services/CryptoService';

const cx = classNames.bind(s);

interface IInvestTableRowProps {
  item: IInvestItem;
  index: number;
  categories: ICategory[] | undefined;
}

function InvestTableRow(props: IInvestTableRowProps) {
  const { id, asset, buyPrice, invested, investType, category } = props.item;
  const { index, categories } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedAsset, setUpdatedAsset] = useState(asset.name || '');
  const [updatedBuyPrice, setUpdatedBuyPrice] = useState(buyPrice || '');
  const [updatedInvestedSum, setUpdatedInvestedSum] = useState(invested || '');
  const [updatedCategory, setUpdatedCategory] = useState(category || '');

  const [deleteInvestment, {}] = investAPI.useDeleteInvestmentMutation();
  const [editInvestment, {}] = investAPI.useEditInvestmentMutation();
  const { data: searchResult } = cryptoApi.useSearchCryptoQuery(
    updatedAsset || asset.name,
  );
  const [choosedAssetData, setChoosedAssetData] = useState(asset);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'updateAsset':
        setUpdatedAsset(value);

        break;
      case 'updatePrice':
        setUpdatedBuyPrice(value);
        break;
      case 'updateInvested':
        setUpdatedInvestedSum(value);
        break;

      default:
        break;
    }
  };

  const handleSelectChange = (selected: ICategory) => {
    setUpdatedCategory(selected.value);
  };

  const handleEdit = () => {
    editInvestment({
      id: Number(id),
      asset: choosedAssetData,
      buyPrice: Number(updatedBuyPrice),
      invested: Number(updatedInvestedSum),
      investType,
      category: updatedCategory,
    });
  };

  const handleDelete = (id: number) => {
    deleteInvestment(id);
  };

  const result = getProfit(
    Number(buyPrice),
    Number(choosedAssetData.price),
    getAmount(Number(updatedInvestedSum), Number(buyPrice)),
    Number(updatedInvestedSum),
    investType,
  );

  return (
    <>
      {props.item && (
        <tr className={s.tableRow}>
          <td className={cx('tableCell', 'number')}>{index + 1}.</td>
          <td className={cx('tableCell', 'asset')}>
            {isEditing ? (
              <Input
                label="Asset"
                name="updateAsset"
                value={updatedAsset}
                styleType="animated"
                theme="mainLight"
                onChange={handleInputChange}
                isAutocomplete
                setClickedValue={setUpdatedAsset}
                setChoosedAsset={setChoosedAssetData}
                list={searchResult?.data?.coins}
                isLabelHidden
                placeholder="Choose asset"
                extraClass={s.isRedacting}
              />
            ) : (
              asset.name
            )}
          </td>
          <td className={cx('tableCell', 'symbol')}>
            {asset.symbol ? asset.symbol : <p>-</p>}
          </td>
          <td className={cx('tableCell', 'type')}>{investType}</td>
          <td
            className={cx('tableCell', 'category', {
              editing: isEditing,
            })}
          >
            {isEditing && categories ? (
              <MySelect
                list={categories}
                label="Category"
                selected={updatedCategory}
                setSelected={handleSelectChange}
                theme="mainLight"
                padding={false}
              />
            ) : (
              category
            )}
          </td>
          <td className={cx('tableCell', 'amount')}>
            {getAmount(invested, buyPrice)}
          </td>

          <td className={cx('tableCell', 'invested')}>
            {isEditing ? (
              <Input
                label="Invested"
                name="updateInvested"
                value={updatedInvestedSum}
                type="number"
                styleType="animated"
                theme="mainLight"
                onChange={handleInputChange}
                isLabelHidden
                placeholder="Enter sum, $"
                extraClass={s.isRedacting}
              />
            ) : (
              invested.toFixed(2)
            )}
          </td>
          <td className={cx('tableCell', 'buyPrice')}>
            {isEditing ? (
              <Input
                label="avarage price"
                name="updatePrice"
                value={updatedBuyPrice}
                type="number"
                styleType="animated"
                theme="mainLight"
                onChange={handleInputChange}
                isLabelHidden
                placeholder="Enter buy price, $"
                extraClass={s.isRedacting}
              />
            ) : (
              buyPrice
            )}
          </td>
          <td className={cx('tableCell', 'current')}>
            {Number(asset.price).toFixed(2)}
          </td>
          <td className={cx('tableCell', 'profit')}>
            {result.profit ? result.profit.toFixed(2) : '--'}
          </td>
          <td className={cx('tableCell', 'profitPercent')}>
            {result.profitInPercent
              ? `${result.profitInPercent.toFixed(2)}%`
              : '--'}
          </td>
          <td className={cx('tableCell', 'edit')}>
            {!isEditing ? (
              <Button
                as="button"
                onClick={() => {
                  setIsEditing(true);
                  /* searchCoinById(asset.uuid); */
                }}
                extraClass={s.button}
              >
                <BiEditAlt />
              </Button>
            ) : (
              <Button
                as="button"
                extraClass={s.button}
                onClick={() => {
                  handleEdit();
                  setIsEditing(false);
                }}
              >
                <MdDownloadDone />
              </Button>
            )}
          </td>
          <td className={cx('tableCell', 'delete')}>
            <Button
              as="button"
              onClick={e => {
                handleDelete(id);
                e.stopPropagation();
              }}
              extraClass={s.button}
            >
              <MdDeleteForever />
            </Button>
          </td>
        </tr>
      )}
    </>
  );
}

export default InvestTableRow;
