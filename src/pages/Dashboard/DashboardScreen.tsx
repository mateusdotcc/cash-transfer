import React, { useCallback, useEffect } from 'react';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { Country, DashboardState } from 'store/modules/dashboard/types';
import {
  countriesRequest,
  setFromCountry,
  setToCountry,
  updateYouSend,
  updateDeliveryDate,
  endAnimations,
} from 'store/modules/dashboard/actions';

import Dashboard from './Layout/Dashboard.layout';

const DashboardScreen: React.FC = () => {
  const dispatch = useDispatch();

  const {
    youSend,
    recipientGets,
    fromCountry,
    toCountry,
    typeDelivery,
  } = useSelector((state: { dashboard: DashboardState }) => state.dashboard);

  useEffect(() => {
    dispatch(countriesRequest());

    setTimeout(() => {
      dispatch(endAnimations());
    }, 1000);
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
    (date: string, delivery: string) => {
      dispatch(updateDeliveryDate(date, delivery));
    },
    [dispatch],
  );

  const handleSubmitConfirm = useCallback(() => {
    const payload = `
      {
        sentAt: ${moment().format()},
        plan: ${typeDelivery},
        sent: ${youSend},
        received: ${recipientGets},
        from: ${fromCountry.value},
        to: ${toCountry.value},
      }
    `;

    alert(payload);
  }, [youSend, recipientGets, fromCountry, toCountry, typeDelivery]);

  return (
    <Dashboard
      onClickCountry={handleClickCountry}
      onChangeYouSend={handleChangeYouSend}
      onUpdateDateCalendar={handleUpdateDateCalendar}
      onSubmitConfirm={handleSubmitConfirm}
    />
  );
};

export default DashboardScreen;
