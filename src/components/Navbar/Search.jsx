/*eslint-disable*/
import { Input, Form } from 'reactstrap';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../features/filters/filterSlice';

const Search = ({ searchText, handleOnSearch }) => {
  const dispatch = useDispatch();
  const debounce = (func, delay = 300) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
  const handleOnSearchExecution = (value) => {
    dispatch(
      setSearch({
        query: value,
      })
    );
  };
  const onSearch = useCallback(debounce(handleOnSearchExecution), []);

  useEffect(() => {
    onSearch(searchText);
  }, [onSearch, searchText]);
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={handleOnSearch}
        aria-label="Search"
      />
    </Form>
  );
};

Search.propTypes = {
  searchText: PropTypes.string,
  handleOnSearch: PropTypes.func,
};
export default Search;
