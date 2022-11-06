import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type SliceState = {
  adItems: IAdItems[];
  status: string;
};

export interface IAdItems {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string | null;
  report: {
    cost: number;
    convValue: number;
    roas: number;
  };
}
// {
//   "id": 1,
//   "adType": "web",
//   "title": "매드업 레버 광고 1234",
//   "budget": 500000,
//   "status": "active",
//   "startDate": "2020-10-19T00:00:00",
//   "endDate": null,
//   "report": {
//     "cost": 267144117,
//     "convValue": 1157942685,
//     "roas": 433
//   }
// },
const initialState: SliceState = {
  adItems: [],
  status: 'all',
};

export const getAdDatas = createAsyncThunk('get/ad_data', async () => {
  const {
    data: { ads },
  } = await axios.get('/server/wanted_FE_ad-list-data-set.json');
  return ads;
});

export const adsSlice = createSlice({
  name: 'adsManage',
  initialState,
  reducers: {
    setAdItems: (state, action) => {
      state.adItems = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAdDatas.fulfilled, (state, action) => {
      state.adItems = action.payload;
    });
  },
});

export const { setAdItems, setStatus } = adsSlice.actions;

export default adsSlice.reducer;
