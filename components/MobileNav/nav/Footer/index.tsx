import styles from './style.module.scss';

const Index: React.FC = () => {
  return (
    <div className={styles.footer}>
      <a href='https://www.facebook.com/ona.isaac.1'><img src="facebook.svg" alt="facebook" /></a>
      <a href='https://www.instagram.com/ona.adrian'><img src="instagram.svg" alt="instagram" /></a>
      <a href='linkedin.com/in/ona-isaac'><img src="linkedin.svg" alt="linkedin" /></a>
      <a href='https://x.com/TraderAD_'><img src="twitter.svg" alt="twitter" /></a>
    </div>
  );
};

export default Index;
