import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBar.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.filterBlock}>
      <label>Find contacts by name</label>
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
};

export default SearchBar;
