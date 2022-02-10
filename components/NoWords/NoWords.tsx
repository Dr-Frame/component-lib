import Link from 'next/link';
import s from './NoWords.module.scss';

export default function NoWords() {
  return (
    <div className={s.noWordsWrapper}>
      <p className={s.noWords}>
        You dont have words for this particular training, <br /> <br />
        go to the dictionary and add one!
      </p>
      <Link href="/dictionary">
        <a className={s.homeLink}>Go to the dictionary</a>
      </Link>
    </div>
  );
}
