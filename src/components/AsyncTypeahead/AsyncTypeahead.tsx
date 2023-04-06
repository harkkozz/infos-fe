import React from 'react';

import AsyncSelect, { ActionMeta, SingleValue } from 'react-select';

import { typeaheadStyles } from 'components/AsyncTypeahead/AsyncTypeaheadStyles';

export type TypeaheadOption = { label: string; value: string };

interface IProps {
  options: TypeaheadOption[];
  placeholder?: string;
  isLoading: boolean;
  selectContainerClass?: string;
  onInputChange: (arg: string) => void;
  onChange: (newValue: SingleValue<TypeaheadOption>, actionMeta: ActionMeta<TypeaheadOption>) => void;
}

const AsyncTypeahead: React.FC<IProps> = ({
  options,
  placeholder,
  isLoading,
  selectContainerClass = '',
  onInputChange,
  onChange
}) => {
  return (
    <AsyncSelect
      className={selectContainerClass}
      options={options}
      placeholder={placeholder}
      styles={typeaheadStyles}
      onInputChange={onInputChange}
      onChange={onChange}
      isLoading={isLoading}
      isClearable
    />
  );
};

export default React.memo(AsyncTypeahead);
