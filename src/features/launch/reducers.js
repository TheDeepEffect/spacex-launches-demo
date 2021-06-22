import isInPastTime from '../../helpers/dateAndTime';

/* eslint-disable no-param-reassign */
export const searchReducer = (state, action) => {
  const { payload: { query, parameter = 'ROCKET_NAME' } } = action;
  switch (parameter) {
    case 'ROCKET_NAME':
      state.launches = state.launches.filter(
        (launch) => launch?.rocket?.rocket_name?.includes(query),
      );
      break;

    default:
      break;
  }
};

export const filterByDate = (state, action) => {
  const { payload = 'LAST_WEEK' } = action;
  switch (payload) {
    case 'LAST_WEEK':
      state.launches = state.launches.filter(
        (launch) => {
          const launchDate = launch?.launch_date_local;
          return launchDate && isInPastTime(launchDate);
        },
      );
      break;
    case 'LAST_MONTH':
      state.launches = state.launches.filter(
        (launch) => {
          const launchDate = launch?.launch_date_local;
          return launchDate && isInPastTime(launchDate, 'months');
        },
      );
      break;
    case 'LAST_YEAR':
      state.launches = state.launches.filter(
        (launch) => {
          const launchDate = launch?.launch_date_local;
          return launchDate && isInPastTime(launchDate, 'years');
        },
      );
      break;

    default:
      break;
  }
};

export const fiterByLaunchStatus = (state, action) => {
  const { payload = 'SUCCESS' } = action;
  state.launches = state.launches.filter(
    (launch) => {
      if (payload === 'SUCCESS') {
        return launch?.launch_success;
      }
      return !launch?.launch_success;
    },
  );
};

export const filterByUpcoming = (state) => {
  state.launches = state.launches.filter(
    (launch) => launch?.upcoming,
  );
};
