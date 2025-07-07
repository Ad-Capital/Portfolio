import styles from './style.module.scss';

const Index: React.FC = () => {
  return (
    <div className={styles.footer}>
      <a href="https://wa.me/+2349029458058"><img src="whatsapp.svg" alt="whatsapp" /></a>
      <a href="mailto:isaacona2@gmail.com"><img src="email.png" alt="email" /></a>
      {/* <a href='linkedin.com/in/ona-isaac'><img src="linkedin.svg" alt="linkedin" /></a>
      <a href='https://x.com/TraderAD_'><img src="twitter.svg" alt="twitter" /></a> */}
    </div>
  );
};

export default Index;
