import StyledSelect from 'components/common/Select';
import { FilterArticle, IconSpan } from 'pages/Main/styles';
import React, { ChangeEventHandler } from 'react';
import { ITrendFilter } from 'redux/reducer/dashSlice';

const TrendFilter = ({
  filter: { sFilter, fFilter },
  onSelect,
}: {
  filter: ITrendFilter;
  onSelect: ChangeEventHandler<HTMLSelectElement>;
}) => {
  const selectOption = [
    { id: 'roas', name: 'ROAS' },
    { id: 'cost', name: '광고비' },
    { id: 'imp', name: '노출 수' },
    { id: 'click', name: '클릭 수' },
    { id: 'conv', name: '전환 수' },
    { id: 'convValue', name: '매출' },
  ];
  return (
    <FilterArticle>
      <div>
        <IconSpan color="#4fadf7" />
        <StyledSelect name="fFilter" onChange={onSelect} defaultValue={fFilter}>
          {selectOption.map((obj, index) => {
            return (
              <option key={index} value={obj.id} disabled={sFilter === obj.id}>
                {obj.name}
              </option>
            );
          })}
        </StyledSelect>
      </div>
      <div>
        <IconSpan color="#85da47" />
        <StyledSelect name="sFilter" onChange={onSelect} defaultValue={sFilter}>
          {selectOption.map((obj, index) => {
            return (
              <option key={index} value={obj.id} disabled={fFilter === obj.id}>
                {obj.name}
              </option>
            );
          })}
        </StyledSelect>
      </div>
      <div className="week_select">
        <StyledSelect>
          <option>주간</option>
          <option>일간</option>
        </StyledSelect>
      </div>
    </FilterArticle>
  );
};

export default TrendFilter;
