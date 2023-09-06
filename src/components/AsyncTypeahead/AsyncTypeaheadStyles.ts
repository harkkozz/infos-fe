export const typeaheadStyles = {
  clearIndicator: (provided: any) => ({
    ...provided
  }),
  container: (provided: any) => ({
    ...provided,
    width: 'calc(100vw - 1rem)',
    '@media only screen and (min-width: 600px)': {
      width: '30rem'
    },

    '@media only screen and (min-width: 900px)': {
      width: '40rem'
    }
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    boxShadow: 'none',
    padding: '0 0.5rem',
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#0077be'
    },
    color: state.isFocused ? '#0077be' : '#2b363b'
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    cursor: 'pointer',
    '& svg': {
      path: {
        fill: '#737680'
      }
    }
  }),
  group: (provided: any) => ({
    ...provided
  }),
  groupHeading: (provided: any) => ({
    ...provided
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    path: {
      fill: '#2b363b'
    }
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none'
  }),
  input: (provided: any) => ({
    ...provided,
    cursor: 'pointer'
  }),
  loadingIndicator: (provided: any) => ({
    ...provided
  }),
  loadingMessage: (provided: any) => ({
    ...provided
  }),
  menu: (provided: any) => ({
    ...provided,
    borderTop: '3px solid #0077be',
    borderRadius: '0',
    padding: '1rem 0',
    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.08)'
  }),
  menuList: (provided: any) => ({
    ...provided,
    border: 'none'
  }),
  menuPortal: (provided: any) => ({
    ...provided
  }),
  multiValue: (provided: any) => ({
    ...provided
  }),
  multiValueLabel: (provided: any) => ({
    ...provided
  }),
  multiValueRemove: (provided: any) => ({
    ...provided
  }),
  noOptionsMessage: (provided: any) => ({
    ...provided
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#f6f7f9' : '#fff',
    backgroundImage: state.isSelected
      ? "url('data:image/webp;base64,UklGRvoAAABXRUJQVlA4WAoAAAAQAAAAGQAAGQAAQUxQSFYAAAABZ2AgksykT2Ab0ICIiFqXjnmAaW3tTb7QQYHtDFS3wGYAFkHio5igd8Yiv4uP6P8EQLmNQ1o9Si4YZYzwnzP4jyaZQgwFpFwEjyXD2Xcg8s+moIVqAVZQOCB+AAAAkAQAnQEqGgAaAD5lKI9FpCKhG/1UAEAGRLYAX6MQBvCwIDl9Su9oguhRpL4AAP74CW//9tkiKRVY4XOf5xHo67cO+//S+5+Za9R/cl/DR+iwKYFl2dsIRURLpyB+XqHtP9/PnV4DNf/oUGEvN0mhY6OLTt39RlJ797qyMmAA')"
      : 'none',
    color: '#1e232a',
    backgroundPosition: '95% 5px',
    backgroundRepeat: 'no-repeat',
    font: 'normal 400 1rem Inter, sans-serif',
    padding: '10px 50px 10px 14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    '&:active': {
      backgroundColor: '#f6f7f9'
    }
  }),
  placeholder: (provided: any) => ({
    ...provided
  }),
  singleValue: (provided: any) => ({
    ...provided,
    font: 'normal 400 1rem Inter, sans-serif',
    margin: '0',
    padding: '0',
    color: 'inherit'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '0'
  })
};
