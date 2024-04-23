import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.container}`}>
        <div>
          <a href='/'>FlashCardSage</a>
        </div>

        <div>
          <a href='/'>Decks</a>
        </div>

        <div>
          <a href='/login'>login</a>
        </div>
      </div>
    </div>
  );
}
