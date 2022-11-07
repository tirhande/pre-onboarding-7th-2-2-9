import { CompnayName, IChartMedia } from 'utils/mediaUtils';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLegend,
  VictoryStack,
  VictoryVoronoiContainer,
} from 'victory';

const MediaChart = ({ data }: { data: IChartMedia }) => {
  return (
    <>
      <VictoryChart
        width={960}
        domainPadding={{ x: 160, y: 0 }}
        padding={{ top: 25, right: 10, bottom: 50, left: 50 }}
        domain={{ x: [0, 5] }}
        containerComponent={<VictoryVoronoiContainer labels={({ datum }) => `${datum.y}%`} />}
      >
        {/* 가로 axis */}
        <VictoryAxis
          tickCount={5}
          tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']}
          style={{
            tickLabels: { fill: '#94a2ad', padding: 15, fontSize: 12 },
            grid: {
              stroke: 'none',
            },
            axis: { stroke: '#94a2ad', strokeWidth: 0.2 },
          }}
        />
        {/* 세로 axis */}
        <VictoryAxis
          dependentAxis
          tickFormat={tick => `${tick}%`}
          style={{
            tickLabels: { fill: '#94a2ad' },
            grid: {
              stroke: '#edeff1',
            },
            axis: { stroke: 'none' },
          }}
        />
        <VictoryStack colorScale={['#db4437', '#64cb69', '#f7e600', '#3a75ec']}>
          {Object.keys(data).map((obj, i) => (
            <VictoryBar data={data[obj]} key={i} padding={100} />
          ))}
        </VictoryStack>
        <VictoryLegend
          x={630}
          y={290}
          centerTitle
          orientation="horizontal"
          gutter={40}
          data={Object.keys(data).map(company => ({
            name: CompnayName[company].name,
            symbol: { fill: CompnayName[company].color },
            labels: { fill: '#94a2ad' },
          }))}
        />
      </VictoryChart>
    </>
  );
};

export default MediaChart;
