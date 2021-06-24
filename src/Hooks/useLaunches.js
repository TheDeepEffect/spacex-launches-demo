import {
  useCallback,
  useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetLaunches from '../features/launch/services';
import isInPastTime from '../helpers/dateAndTime';

const useLaunches = () => {
  const [totalLoaded, setTotalLoaded] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLaunches());
  }, [dispatch]);

  const { launch: { launches, loading, error }, filters } = useSelector((state) => state);

  const {
    search: {
      searchQuery,
      searchParameter,
    },
    dateFilter,
    statusFilter,
    isUpcoming,
  } = filters;

  const filterByDate = (launch, date) => {
    switch (date) {
      case 'LAST_WEEK':
        return launch?.launch_date_local && isInPastTime(
          launch?.launch_date_local,
        );
      case 'LAST_MONTH':
        return launch?.launch_date_local && isInPastTime(
          launch?.launch_date_local, 'months',
        );
      case 'LAST_YEAR':
        return launch?.launch_date_local && isInPastTime(
          launch?.launch_date_local, 'years',
        );
      default:
        return launch;
    }
  };

  const filterByLaunchStatus = (launch, launchStatus) => {
    switch (launchStatus) {
      case 'SUCCESS':
        return launch?.launch_success;

      case 'FAILURE':
        return !launch?.launch_success;
      default:
        return launch;
    }
  };

  const filterBySearch = useCallback((launch, query) => {
    if (query) {
      switch (searchParameter) {
        case 'ROCKET_NAME':
          return launch?.rocket?.rocket_name?.toLowerCase()?.includes(query.toLowerCase());

        default:
          return launch;
      }
    }
    return launch;
  }, [searchParameter]);

  const filterByUpcoming = (launch, upcoming) => {
    if (typeof upcoming === typeof true) {
      return launch?.upcoming;
    }
    return launch;
  };

  const filteredData = useMemo(() => {
    const filteredArray = launches.reduce((newArray, current) => {
      if (
        filterBySearch(current, searchQuery)
                && filterByDate(current, dateFilter)
                && filterByLaunchStatus(current, statusFilter)
                && filterByUpcoming(current, isUpcoming)
      ) {
        newArray.push({
          id: current?.mission_name,
          missionName: current?.mission_name,
          details: current?.details || undefined,
          isUpcoming: current?.upcoming,
          launchDate: current?.launch_date_local || undefined,
          imgSrc: current?.links?.mission_patch_small || undefined,
          rocketName: current?.rocket?.rocket_name,
        });
      }
      return newArray;
    }, []);
    return filteredArray;
  }, [launches, filterBySearch, searchQuery, dateFilter, statusFilter, isUpcoming]);

  const hasMore = useMemo(() => totalLoaded < filteredData.length,
    [filteredData.length, totalLoaded]);

  const fetchMore = () => {
    setTotalLoaded(totalLoaded + 10);
  };

  return {
    launches: filteredData.filter((x, i) => i < totalLoaded),
    loading,
    error,
    hasMore,
    fetchMore,
  };
};

export default useLaunches;
