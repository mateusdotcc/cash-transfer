import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Country, DashboardState } from 'store/modules/dashboard/types';
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

  const { youSend } = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard,
  );

  useEffect(() => {
    dispatch(countriesRequest());
  }, [dispatch]);

  const handleClickCountry = useCallback(
    (selectorName: string, country: Country) => {
      dispatch(updateYouSend(youSend.toString()));

      if (selectorName === 'from') {
        return dispatch(setFromCountry(country));
      }

      return dispatch(setToCountry(country));
    },
    [dispatch, youSend],
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
