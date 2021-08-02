export const capitalizeFirstLetter = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);

export const cutOffFirstLetter = (string: string) => string.slice(1);

export const getErrors = (errorsArray: string[]) =>
  errorsArray.reduce((errors: Record<string, string>, error?: string) => {
    if (error) {
      const [, key, value] = error.split('"');
      errors[key] = value;
    }
    return errors;
  }, {});

export const getSearchParam = (query: string, key: string): string =>
  new URLSearchParams(query).get(key) || '';
