import React from 'react';

import { ActionMeta, SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';

import { typeaheadStyles } from 'components/AsyncTypeahead/AsyncTypeaheadStyles';

export type TypeaheadOption = { label: string; value: string };

interface Props {
  placeholder?: string;
  selectContainerClass?: string;
  loadOptions: (inputValue: string, callback: (options: TypeaheadOption[]) => void) => void;
  defaultOptions: TypeaheadOption[];
  onChange: (newValue: SingleValue<TypeaheadOption>, actionMeta: ActionMeta<TypeaheadOption>) => void;
}

const AsyncTypeahead: React.FC<Props> = ({
  loadOptions,
  defaultOptions,
  onChange,
  placeholder,
  selectContainerClass = ''
}) => {
  return (
    <AsyncSelect
      className={selectContainerClass}
      styles={typeaheadStyles}
      cacheOptions
      defaultOptions={defaultOptions}
      loadOptions={loadOptions}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default React.memo(AsyncTypeahead);
