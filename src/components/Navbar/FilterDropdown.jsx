import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

const FilterDropdown = ({
  isOpen,
  selected,
  onSelect,
  toggle,
  values,
  title,
}) => (
  <Dropdown isOpen={isOpen} toggle={toggle}>
    <DropdownToggle caret>
      {`${title}:${values.find((x) => x.value === selected).label}`}
    </DropdownToggle>
    <DropdownMenu>
      {values.map((x) => (
        <DropdownItem onClick={onSelect} key={x.value} value={x.value}>
          {x.label}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </Dropdown>
);

FilterDropdown.propTypes = {
  isOpen: PropTypes.bool,
  selected: PropTypes.string,
  title: PropTypes.string,
  onSelect: PropTypes.func,
  values: PropTypes.array,
  toggle: PropTypes.func,
};
export default FilterDropdown;
