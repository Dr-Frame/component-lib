import { ICategory, IInvestItem } from '../../types/investTypes';
import { getAvaragePrice } from '../../utils/investmentCalculations';
import classNames from 'classnames/bind';
import s from './InvestTableRow.module.scss';
import Button from '../Button';
import { MdDeleteForever } from 'react-icons/md';
import { MdDownloadDone } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { investAPI } from '../../services/InvestService';
import { useState } from 'react';
import Input from '../Input';
import topCryptoList from '../../utils/topCryptoList';
import { getRelevantSymbol } from '../../utils/getRelevantSymbol';
import MultiSelect from '../MultiSelect';

const cx = classNames.bind(s);

interface IInvestTableRowProps {
  item: IInvestItem;
  index: number;
  categories: ICategory[] | undefined;
}

function InvestTableRow(props: IInvestTableRowProps) {
  const { id, asset, price, invested, category } = props.item;
  const { index, categories } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedAsset, setUpdatedAsset] = useState(asset || '');
  const [updatedBuyPrice, setUpdatedBuyPrice] = useState(price || '');
  const [updatedInvestedSum, setUpdatedInvestedSum] = useState(invested || '');
  const [updatedCategory, setUpdatedCategory] = useState('');
  const [deleteInvestment, {}] = investAPI.useDeleteInvestmentMutation();
  const [editInvestment, {}] = investAPI.useEditInvestmentMutation();

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
      asset: updatedAsset,
      price: Number(updatedBuyPrice),
      invested: Number(updatedInvestedSum),
      category: updatedCategory,
    });
  };

  const handleDelete = (id: number) => {
    deleteInvestment(id);
  };

  return (
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
            list={topCryptoList}
            isLabelHidden
            placeholder="Choose asset"
            extraClass={s.isRedacting}
          />
        ) : (
          asset
        )}
      </td>
      <td className={cx('tableCell', 'symbol')}>{getRelevantSymbol(asset)}</td>
      <td
        className={cx('tableCell', 'category', {
          editing: isEditing,
        })}
      >
        {isEditing ? (
          <MultiSelect
            isMulti={false}
            data={categories}
            isSearchable
            borderThickness={'2px'}
            isLabelHidden
            innerPading={'0px 5px'}
            onChange={handleSelectChange}
          />
        ) : (
          category
        )}
      </td>
      <td className={cx('tableCell', 'amount')}>
        {getAvaragePrice(invested, price)}
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
          invested
        )}
      </td>
      <td className={cx('tableCell', 'avarage')}>
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
          price
        )}
      </td>
      <td className={cx('tableCell', 'current')}>{'current price'}</td>
      <td className={cx('tableCell', 'profit')}>{'Profit'}</td>
      <td className={cx('tableCell', 'edit')}>
        {!isEditing ? (
          <Button
            as="button"
            onClick={() => setIsEditing(true)}
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
  );
}

export default InvestTableRow;
