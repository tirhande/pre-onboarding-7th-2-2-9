import useChartData from 'hooks/useChartData';
import TrendFilter from './Filter';
import TrendChart from './Chart';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { ChangeEvent, useCallback } from 'react';
import { setTrendFilter } from 'redux/reducer/dashSlice';
import { ChartSection } from 'pages/Main/styles';

const Chart = () => {
  const dispatch = useAppDispatch();
  const { trendFilter } = useAppSelector(state => state.dashboard);
  const trendDatas = useChartData();
  const onSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setTrendFilter({ ...trendFilter, [e.target.name]: e.target.value }));
    },
    [dispatch, trendFilter]
  );

  return (
    <>
      <ChartSection>
        <TrendFilter filter={trendFilter} onSelect={onSelect} />
        <TrendChart data={trendDatas} />
      </ChartSection>
    </>
  );
};

export default Chart;
