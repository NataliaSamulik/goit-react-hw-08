import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css'
const HomePage = () => {
  return (
    <div className={css.divHomePage}>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className={css.title}>Wellcome to you PhoneBook</h1>
    </div>
  );
};

export default HomePage;
