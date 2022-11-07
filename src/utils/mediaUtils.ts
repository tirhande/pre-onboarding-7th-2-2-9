import dayjs, { Dayjs } from 'dayjs';
import { IMediaData } from 'redux/reducer/dashSlice';

interface IParamsType {
  mediaDatas: IMediaData[];
  startDate: Dayjs;
  endDate: Dayjs;
}

export interface ICommonData {
  [key: string]: number;
  imp: number;
  click: number;
  cost: number;
  roas: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  sales: number;
}

interface MediaFilterable extends ICommonData {
  [key: string]: number;
}

export interface IMergeMedia {
  [key: string]: ICommonData;
  facebook: ICommonData;
  naver: ICommonData;
  kakao: ICommonData;
  google: ICommonData;
}

interface IChartData {
  x: string;
  y: number;
}

export interface IChartMedia {
  [key: string]: IChartData[];
  facebook: IChartData[];
  naver: IChartData[];
  kakao: IChartData[];
  google: IChartData[];
}

interface IMaxNumber {
  [key: string]: number;
  cost: number;
  sales: number;
  imp: number;
  click: number;
  convValue: number;
}

const chartKeys = ['cost', 'sales', 'imp', 'click', 'convValue'];

export const betweenMediaData = ({ mediaDatas, startDate, endDate }: IParamsType) => {
  const keyObj = ['google', 'naver', 'kakao', 'facebook'];
  const tmpDatas = mediaDatas.filter(obj =>
    dayjs(obj.date).isBetween(startDate, endDate, 'day', '[]')
  );

  const mergeData = keyObj.reduce((acc, key) => {
    const tmp = tmpDatas
      .filter(obj => obj.channel === key)
      .map(({ channel, date, ...remains }) => {
        return {
          cost: remains.cost,
          sales: Math.floor((remains.roas * remains.cost) / 100),
          roas: remains.roas,
          imp: remains.imp,
          click: remains.click,
          ctr: remains.ctr,
          cpc: remains.cpc,
          cvr: remains.cvr,
          cpa: remains.cpa,
          convValue: remains.convValue,
        } as MediaFilterable;
      })
      .reduce(
        (cur, acc) => {
          Object.keys(acc).forEach(key => (cur[key] += acc[key]));
          return cur;
        },
        {
          cost: 0,
          sales: 0,
          roas: 0,
          imp: 0,
          click: 0,
          ctr: 0,
          cpc: 0,
          cvr: 0,
          cpa: 0,
          convValue: 0,
        } as MediaFilterable
      );
    return { ...acc, [key]: tmp };
  }, {} as IMergeMedia);

  const maxData = Object.keys(mergeData).reduce(
    (cur, acc) => {
      chartKeys.forEach(key => {
        cur[key] += mergeData[acc][key];
      });
      return cur;
    },
    {
      cost: 0,
      sales: 0,
      imp: 0,
      click: 0,
      convValue: 0,
    } as IMaxNumber
  );
  return { mergeData, maxData };
};

export const convertMediaData = ({
  mergeData,
  maxData,
}: {
  mergeData: IMergeMedia;
  maxData: IMaxNumber;
}) => {
  const filterMedia = Object.keys(mergeData).reduce((cur, acc) => {
    const filterData = Object.keys(mergeData[acc])
      .map(key => {
        const yData = maxData[key] ? Math.round((mergeData[acc][key] / maxData[key]) * 100) : 0;
        return { x: key, y: yData };
      })
      .filter(obj => chartKeys.includes(obj.x));

    return { ...cur, ...{ [acc]: filterData } };
  }, {} as IChartMedia);

  return filterMedia;
};

interface ICompanyData {
  name: string;
  color: string;
}
interface ICompany {
  [key: string]: ICompanyData;
  google: ICompanyData;
  naver: ICompanyData;
  kakao: ICompanyData;
  facebook: ICompanyData;
}

interface IKeyData {
  [key: string]: string;
  imp: string;
  click: string;
  cost: string;
  roas: string;
  convValue: string;
  ctr: string;
  cvr: string;
  cpc: string;
  cpa: string;
  sales: string;
}

export const CompnayName = {
  google: {
    name: '구글',
    color: '#db4437',
  },
  naver: {
    name: '네이버',
    color: '#64cb69',
  },
  kakao: {
    name: '카카오',
    color: '#f7e600',
  },
  facebook: {
    name: '페이스북',
    color: '#3a75ec',
  },
} as ICompany;

export const KeyName = {
  cost: '광고비',
  sales: '매출',
  roas: 'ROAS',
  imp: '노출수',
  click: '클릭수',
  ctr: '클릭률 (CTR)',
  cpc: '클릭당비용 (CPC)',
  cvr: '전환률 (CVR)',
  cpa: '행동당비용 (CPA)',
  convValue: '구매횟수',
} as IKeyData;
