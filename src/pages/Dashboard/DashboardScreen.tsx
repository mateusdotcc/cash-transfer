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
  reverseCurrency,
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

  useEffect(() => {
    dispatch(updateYouSend(youSend));
  }, [dispatch, fromCountry, toCountry, youSend]);

  const handleClickCountry = useCallback(
    (selectorName: string, country: Country) => {
      if (selectorName === 'from') {
        return dispatch(setFromCountry(country));
      }

      dispatch(setToCountry(country));
    },
    [dispatch],
  );

  const handleChangeYouSend = useCallback(
    (value: string | number) => {
      dispatch(updateYouSend(Number(value)));
    },
    [dispatch],
  );

  const handleUpdateDateCalendar = useCallback(
    (date: string, delivery: string) => {
      dispatch(updateDeliveryDate(date, delivery));
    },
    [dispatch],
  );

  const handleClickReverseCurrency = useCallback(
    (from: Country, to: Country) => {
      dispatch(reverseCurrency(from, to));
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
      onReverseCurrency={handleClickReverseCurrency}
      onUpdateDateCalendar={handleUpdateDateCalendar}
      onSubmitConfirm={handleSubmitConfirm}
    />
  );
};

export default DashboardScreen;
