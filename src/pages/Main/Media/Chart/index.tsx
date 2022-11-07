import { MediaChartDiv } from 'pages/Main/styles';
import { IChartMedia } from 'utils/mediaUtils';
import MediaChart from './Chart';

const Chart = ({ chartMedia }: { chartMedia: IChartMedia }) => {
  return (
    <MediaChartDiv>
      <MediaChart data={chartMedia} />
    </MediaChartDiv>
  );
};

export default Chart;
