import { useAppSelector } from 'redux/hooks';
import { betweenMediaData, convertMediaData } from 'utils/mediaUtils';

const useMediaData = () => {
  const { startDate, endDate, mediaDatas } = useAppSelector(state => state.dashboard);
  const { mergeData, maxData } = betweenMediaData({ mediaDatas, startDate, endDate });
  const chartMedia = convertMediaData({ mergeData, maxData });
  return { mergeData, chartMedia };
};

export default useMediaData;
