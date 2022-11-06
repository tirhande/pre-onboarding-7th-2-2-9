import { useAppSelector } from 'redux/hooks';
import { filterTrendData } from 'utils/mainUtils';

const useChartData = () => {
  const { startDate, endDate, trendDatas, trendFilter } = useAppSelector(state => state.dashboard);

  const curTrendData = filterTrendData({ trendDatas, startDate, endDate, ...trendFilter });
  return curTrendData;
};

export default useChartData;
