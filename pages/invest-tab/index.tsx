import s from './investTab.module.scss';
import Input from '../../components/Input';
import { useEffect, useState } from 'react';
import { investAPI } from '../../services/InvestService';
import classNames from 'classnames';
import MultiSelect from '../../components/MultiSelect';
import axios from 'axios';
import cryptoArr from '../../utils/cryptoArr'
import selectCryptoArr from '../../utils/selectCryptoArr';

const cx = classNames.bind(s);

console.log(cryptoArr.data);


function cryptofiltered() {
  let newArr = []
  /* const rankedCrypto = cryptoArr.data.sort((a, b) => a - b); */

  cryptoArr.data.map(asset => {
    const obj = {
     /*  id: asset.id, */
      value: asset.name,
      label: asset.name,
     /*  symbol: asset.symbol, */
    }
    newArr.push(obj)
  })
  return newArr
}

console.log(cryptofiltered());


const API_KEY = '87538458-e107-4252-8115-7da0e9b8586d'
const BASE_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map'

export default function InvestTabPage() {
  const [asset, setAsset] = useState('');
  const [amount, setAmount] = useState('');
  const [investedAmount, setInvestedAmount] = useState('');

  const {
    data: investments,
    error,
    isLoading,
  } = investAPI.useFetchAllInvestmentQuery(10);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'asset':
        setAsset(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      case 'investedAmount':
        setInvestedAmount(value);
        break;

      default:
        break;
    }
  };

  /* const fetchCrypto = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
         'X-CMC_PRO_API_KEY': API_KEY,
        }
      })
      return response.data
    } catch (error) {
      console.log(error.message);
      
    }
  }

  console.log(fetchCrypto()); */
  
  
  const handleFormSubmit = () => {};

  return (
    <div>
      <div>
        <form className={s.form}>
          <Input
            label="Asset"
            name="asset"
            value={asset}
            type="animated"
            theme="mainLight"
            onChange={handleInputChange}
          />
          <Input
            label="Amount"
            name="amount"
            value={amount}
            type="animated"
            theme="mainLight"
            onChange={handleInputChange}
          />
          <Input
            label="Invested"
            name="invested"
            value={investedAmount}
            type="animated"
            theme="mainLight"
            onChange={handleInputChange}
          />
          <MultiSelect data={selectCryptoArr} isMulti={false} isSearchable label='Choose crypto asset'/>
        </form>
      </div>
      <div>
        <table className={s.table}>
          <thead className={s.tableHead}>
            <tr>
              <th className={cx('headCell', 'number')}>№</th>
              <th className={cx('headCell', 'asset')}>Asset</th>
              <th className={cx('headCell', 'currency')}>Currency</th>
              <th className={cx('headCell', 'amount')}>Amount</th>
              <th className={cx('headCell', 'invested')}>Invested</th>
              <th className={cx('headCell', 'avarage')}>Avarage price</th>
              <th className={cx('headCell', 'profit')}>Profit</th>
            </tr>
          </thead>
          <tbody className={s.tableBody}>
            {investments &&
              investments.map(({ id, asset, amount, invested }) => (
                <tr key={id}>
                  <td className={cx('tableCell', 'number')}>{id}.</td>
                  <td className={cx('tableCell', 'asset')}>{asset}</td>
                  <td className={cx('tableCell', 'currency')}>
                    {/* <Select
                      onChange={handleStatusChange}
                      value={currentStatus}
                      options={options}
                      type="table"
                    /> */}
                  </td>
                  <td className={cx('tableCell', 'amount')}>{amount}</td>

                  <td className={cx('tableCell', 'invested')}>{invested}</td>
                  <td className={cx('tableCell', 'avarage')}>
                    {invested / amount}
                  </td>
                  <td className={cx('tableCell', 'profit')}>{'Profit'}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
