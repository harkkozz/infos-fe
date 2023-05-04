type DebounceFn = <T extends unknown[]>(fn: (...args: T) => void, delay: number) => (...args: T) => void;

export const debounce: DebounceFn = (fn, delay) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const getNameInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ');

  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
};
