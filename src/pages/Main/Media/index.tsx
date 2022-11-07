import useMediaData from 'hooks/useMediaData';
import { MediaContents, SubHeader, SubSection } from '../styles';
import Chart from './Chart';
import Statistics from './Statistics';

const Media = () => {
  const { chartMedia, mergeData } = useMediaData();

  return (
    <SubSection>
      <SubHeader>
        <h2>매체 현황</h2>
      </SubHeader>
      <MediaContents>
        <Chart chartMedia={chartMedia} />
        <Statistics mergeData={mergeData} />
      </MediaContents>
    </SubSection>
  );
};

export default Media;
