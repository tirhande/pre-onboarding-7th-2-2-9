import { ChangeEvent, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setStatus } from 'redux/reducer/adsSlice';
import { SubHeader } from '../styles';
import FilterHeader from './FilterHeader';

const AdHeader = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(state => state.adsmanage);

  const onSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setStatus(e.target.value));
    },
    [dispatch]
  );

  const onCreateAd = () => {
    alert('준비중입니다.');
  };
  return (
    <SubHeader>
      <FilterHeader status={status} onSelect={onSelect} onCreateAd={onCreateAd} />
    </SubHeader>
  );
};

export default AdHeader;
