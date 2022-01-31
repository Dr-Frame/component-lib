import Dictionary from '../../components/Dictionary';
import s from './dictionaryPage.module.scss';

function DictionaryPage() {
  console.log('render');

  return (
    <div className={s.wrapper}>
      <Dictionary />
    </div>
  );
}

export default DictionaryPage;
