import React, { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Country } from 'store/modules/dashboard/types';
import {
  countriesRequest,
  setFromCountry,
  setToCountry,
  updateYouSend,
  updateDeliveryDate,
} from 'store/modules/dashboard/actions';

import Dashboard from './Layout/Dashboard.layout';

const DashboardScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesRequest());
  }, [dispatch]);

  const handleClickCountry = useCallback(
    (selectorName: string, country: Country) => {
      if (selectorName === 'from') {
        return dispatch(setFromCountry(country));
        // return dispatch(updateYouSend())
      }

      return dispatch(setToCountry(country));
    },
    [dispatch],
  );

  const handleChangeYouSend = useCallback(
    (value: string) => {
      dispatch(updateYouSend(value));
    },
    [dispatch],
  );

  const handleUpdateDateCalendar = useCallback(
    (date: string) => {
      dispatch(updateDeliveryDate(date));
    },
    [dispatch],
  );

  return (
    <Dashboard
      onClickCountry={handleClickCountry}
      onChangeYouSend={handleChangeYouSend}
      onUpdateDateCalendar={handleUpdateDateCalendar}
    />
  );
};

export default DashboardScreen;
