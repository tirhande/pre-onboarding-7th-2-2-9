import { useAppSelector } from 'redux/hooks';
// import { filterTrendData } from 'utils/utils';

const useAdsData = () => {
  const { adItems, status } = useAppSelector(state => state.adsmanage);
  const filterItem = status === 'all' ? adItems : adItems.filter(obj => obj.status === status);
  return filterItem;
};

export default useAdsData;
