import StyledButton from 'components/common/Button';
import { IAdItems } from 'redux/reducer/adsSlice';
import dayjs from 'dayjs';
import { TenKFormatter } from 'utils/adUtils';
import { useState } from 'react';
import { useRef } from 'react';
import { AdContents, ItemArticle, Table, TableHeader, TableRow, AdTitle } from '../styles';

const AdItem = ({
  data: { adType, title, status, startDate, endDate, budget, report },
}: {
  data: IAdItems;
}) => {
  const budgetRef = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editBudget, setEditBudget] = useState(budget);

  const onEditAd = () => {
    setIsEdit(prev => !prev);
  };
  const onEditComplete = () => {
    if (budgetRef.current) {
      setEditBudget(Number(budgetRef.current.value));
      setIsEdit(prev => !prev);
    }
  };
  return (
    <ItemArticle>
      <TableHeader>
        <p>
          {adType === 'web' ? '웹광고' : '앱광고'}_{title}
        </p>
      </TableHeader>
      <Table>
        <TableRow>
          <AdTitle>상태</AdTitle>
          <AdContents>{status === 'active' ? '진행중' : '중단됨'}</AdContents>
        </TableRow>
        <TableRow>
          <AdTitle>광고 생성일</AdTitle>
          <AdContents>
            {dayjs(startDate).format('YYYY-MM-DD')}
            {endDate && ` (${dayjs(endDate).format('YYYY-MM-DD')})`}
          </AdContents>
        </TableRow>
        <TableRow>
          <AdTitle>일 희망 예산</AdTitle>
          {isEdit ? (
            <input type="number" ref={budgetRef} defaultValue={editBudget} />
          ) : (
            <AdContents>{TenKFormatter(editBudget)}원</AdContents>
          )}
        </TableRow>
        <TableRow>
          <AdTitle>광고 수익률</AdTitle>
          <AdContents>{report.roas}%</AdContents>
        </TableRow>
        <TableRow>
          <AdTitle>매출</AdTitle>
          <AdContents>{TenKFormatter(report.convValue)}원</AdContents>
        </TableRow>
        <TableRow>
          <AdTitle>광고 비용</AdTitle>
          <AdContents>{TenKFormatter(report.cost)}원</AdContents>
        </TableRow>
      </Table>
      {isEdit ? (
        <>
          <StyledButton
            onClick={onEditComplete}
            text="저장"
            width={92}
            border={'#d1d8dc'}
            background={'#3778f9'}
          />
          <StyledButton
            onClick={onEditAd}
            text="취소"
            width={92}
            border={'#d1d8dc'}
            background={'#6f757d'}
          />
        </>
      ) : (
        <StyledButton
          onClick={onEditAd}
          text="수정하기"
          width={92}
          border={'#d1d8dc'}
          background={'#fff'}
        />
      )}
    </ItemArticle>
  );
};

export default AdItem;
