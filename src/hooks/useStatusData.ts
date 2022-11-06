import { useAppSelector } from 'redux/hooks';
import { diffTrendData, mergeTrendData } from 'utils/mainUtils';

const useStatusData = () => {
  const { startDate, endDate, trendDatas } = useAppSelector(state => state.dashboard);

  const prevEDate = startDate.subtract(1, 'day');
  const prevSDate = prevEDate.subtract(5, 'day');

  const curTrendData = mergeTrendData({ trendDatas, startDate, endDate });
  const prevTrendData = mergeTrendData({ trendDatas, startDate: prevSDate, endDate: prevEDate });

  const trendData = diffTrendData(curTrendData, prevTrendData);
  return trendData;
};

export default useStatusData;
