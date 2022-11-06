import StyledButton from 'components/common/Button';
import StyledSelect from 'components/common/Select';
import { ChangeEventHandler, MouseEventHandler } from 'react';

const FilterHeader = ({
  status,
  onSelect,
  onCreateAd,
}: {
  status: string;
  onSelect: ChangeEventHandler<HTMLSelectElement>;
  onCreateAd: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <StyledSelect onChange={onSelect} defaultValue={status}>
        <option value="all">전체 광고</option>
        <option value="active">진행중</option>
        <option value="ended">중단됨</option>
      </StyledSelect>
      <StyledButton
        onClick={onCreateAd}
        text="광고 만들기"
        width={108}
        border={'none'}
        background={'#586cf5'}
      />
    </>
  );
};

export default FilterHeader;
