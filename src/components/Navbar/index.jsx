import { useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  Label,
} from 'reactstrap';
import {
  setDateFilter,
  setIsUpcoming,
  setStatusFilter,
} from '../../features/filters/filterSlice';
import FilterDropdown from './FilterDropdown';
import Search from './Search';

const dateDropDownValues = [
  {
    label: 'Last Week',
    value: 'LAST_WEEK',
  },
  {
    label: 'Last Month',
    value: 'LAST_MONTH',
  },
  {
    label: 'Last Year',
    value: 'LAST_YEAR',
  },
  {
    label: 'All',
    value: 'ALL',
  },
];
const statusDropDownValues = [
  {
    label: 'Success',
    value: 'SUCCESS',
  },
  {
    label: 'Failure',
    value: 'FAILURE',
  },
  {
    label: 'All',
    value: 'ALL',
  },
];
const NavbarComponent = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('ALL');

  const [searchText, setSearchText] = useState('');

  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  const [isShowUpcoming, setIsShowUpcoming] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggle = () => {
    setIsOpen((state) => !state);
  };

  const onSelect = (e) => {
    setSelected(e.target.value);
    dispatch(setDateFilter(e.target.value));
  };

  const handleOnSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleStatus = () => {
    setIsStatusOpen((state) => !state);
  };
  const onStatusSelect = (e) => {
    setSelectedStatus(e.target.value);
    dispatch(setStatusFilter(e.target.value));
  };
  const handleOnToggleUpcoming = (e) => {
    setIsShowUpcoming(e.target.checked);
    if (e.target.checked) {
      dispatch(setIsUpcoming(e.target.checked));
    } else {
      dispatch(setIsUpcoming(null));
    }
  };
  const toggleNavbar = () => {
    setIsNavOpen((state) => !state);
  };
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>SPACEX Launches</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isNavOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="m-1">
            <FilterDropdown
              isOpen={isOpen}
              selected={selected}
              onSelect={onSelect}
              toggle={toggle}
              title="Date"
              values={dateDropDownValues}
            />
          </NavItem>
          <NavItem className="m-1">
            <FilterDropdown
              isOpen={isStatusOpen}
              selected={selectedStatus}
              onSelect={onStatusSelect}
              toggle={toggleStatus}
              title="Launch Status"
              values={statusDropDownValues}
            />
          </NavItem>
          <NavItem className="m-2">
            <Label check>
              <Input
                type="checkbox"
                checked={isShowUpcoming}
                onChange={handleOnToggleUpcoming}
              />
              Show Upcoming launches only
            </Label>
          </NavItem>
        </Nav>
      </Collapse>
      {/* search here */}
      <Search searchText={searchText} handleOnSearch={handleOnSearch} />
    </Navbar>
  );
};
export default NavbarComponent;
