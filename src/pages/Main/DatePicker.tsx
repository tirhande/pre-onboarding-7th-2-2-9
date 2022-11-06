import React, { useEffect, useRef } from 'react';
import AirDatepicker from 'air-datepicker';
import localeKo from 'air-datepicker/locale/ko';
import 'air-datepicker/air-datepicker.css';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getTrendDatas, setDates } from 'redux/reducer/dashSlice';
import { ReactComponent as ArrowDown } from 'assets/ArrowDown.svg';
import dayjs from 'dayjs';
import { DateDiv } from './styles';

const RangeDatePicker = () => {
  const dispatch = useAppDispatch();
  const { startDate, endDate } = useAppSelector(state => state.dashboard);

  const dateInputRef = useRef<HTMLInputElement>(null);
  let dp = useRef<any>(null);

  useEffect(() => {
    dispatch(getTrendDatas({ startDate, endDate }));

    if (dateInputRef.current) {
      // 기본 오늘부터 5일전
      // startDate: dayjs(),
      // endDate: dayjs().subtract(5, "day"),
      dp.current = new AirDatepicker(dateInputRef.current, {
        locale: localeKo,
        range: true,
        multipleDates: true,
        autoClose: true,
        selectedDates: [startDate.toDate(), endDate.toDate()],
        startDate: endDate.toDate(),
        dateFormat(date) {
          return date
            .toLocaleString('ko', {
              year: 'numeric',
              day: 'numeric',
              month: 'long',
            })
            .replace(',', ' ~ ');
        },
        onSelect({ date, formattedDate, datepicker }) {
          if (Array.isArray(date) && date.length > 1) {
            const [sDate, eDate] = date;
            dispatch(getTrendDatas({ startDate: dayjs(sDate), endDate: dayjs(eDate) }));
            dispatch(setDates({ startDate: dayjs(sDate), endDate: dayjs(eDate) }));
          }
        },
      });
    }
  }, [dispatch]);

  return (
    <DateDiv>
      <input ref={dateInputRef} />
      <span>
        <ArrowDown />
      </span>
    </DateDiv>
  );
};

export default RangeDatePicker;
