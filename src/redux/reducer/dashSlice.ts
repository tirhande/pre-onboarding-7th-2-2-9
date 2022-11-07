import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from 'apis/axiosInstance';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

interface IDate {
  startDate: Dayjs;
  endDate: Dayjs;
}

interface ICommonData {
  imp: number;
  click: number;
  cost: number;
  roas: number;
  date: string;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
}

export interface ITrendData extends ICommonData {
  [key: string]: number | string;
  conv: number;
}

export interface IMediaData extends ICommonData {
  channel: string;
}

export interface ITrendFilter {
  fFilter: string;
  sFilter: string;
}

export interface SliceState extends IDate {
  trendDatas: ITrendData[];
  mediaDatas: IMediaData[];
  trendFilter: ITrendFilter;
}

// 기본 오늘부터 5일전
// startDate: dayjs(),
// endDate: dayjs().subtract(5, "day"),
const initialState: SliceState = {
  startDate: dayjs('2022-04-18'),
  endDate: dayjs('2022-04-23'),
  trendDatas: [],
  trendFilter: {
    fFilter: 'roas',
    sFilter: 'click',
  },
  mediaDatas: [],
};
export const getTrendDatas = createAsyncThunk('get/trend_data', async () => {
  const {
    data: {
      report: { daily },
    },
  } = await instance.get('/server/wanted_FE_trend-data-set.json');
  return daily;
});
export const getMediaDatas = createAsyncThunk('get/media_data', async () => {
  const { data } = await instance.get('/server/wanted_FE-media-channel-data-set.json');
  return data;
});

export const DashSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDates: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    setTrendFilter: (state, action) => {
      state.trendFilter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTrendDatas.fulfilled, (state, action) => {
      state.trendDatas = action.payload;
    });
    builder.addCase(getMediaDatas.fulfilled, (state, action) => {
      state.mediaDatas = action.payload;
    });
  },
});

export const { setDates, setTrendFilter } = DashSlice.actions;

export default DashSlice.reducer;
