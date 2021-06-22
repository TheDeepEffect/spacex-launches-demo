import moment from 'moment';

const isInPastTime = (date, period = 'weeks') => {
  const lastPeriod = moment().subtract(1, period);
  return moment(date).isAfter(lastPeriod);
};

export default isInPastTime;
