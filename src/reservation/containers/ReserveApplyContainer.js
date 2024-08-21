import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
import { apiGet } from '../../reservation/apis/apiInfo';
import { useTranslation } from 'react-i18next';
import Loading from '../../commons/components/Loading';

const ReserveApplyContainer = ({ setPageTitle }) => {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({});
  const [ampm, setAmpm] = useState([]);

  const { seq } = useParams();
  const { t } = useTranslation();

  useState(() => {
    (async () => {
      try {
        const res = await apiGet(seq);

        res.availableDates = res.availableDates.map((d) => new Date(d));
        console.log('res', res);
        setData(res);
        setPageTitle(`${res.seq} ${t('예약하기')}`);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq, setPageTitle, t]);

  const onCalendarClick = useCallback((selected) => {
    const { availableDates } = data;
    for (const [ampm] of Object.entries(availableDates)) {
      setForm((form) => ({ ...form, rDate: selected })); //date-fns-날짜 형식화 필요함
      setAmpm(ampm);
      break;
    }
  }, [data]);

  const onTimeClick = useCallback((rTime) => {
    setForm((form) => ({ ...form, rTime }));
  }, []);

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <ReservationForm
      data={data}
      form={form}
      ampm={ampm}
      onCalendarClick={onCalendarClick}
      onTimeClick={onTimeClick}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default React.memo(ReserveApplyContainer);
