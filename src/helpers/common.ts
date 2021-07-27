export const capitalizeFirstLetter = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);

export const cutOffFirstLetter = (string: string) => string.slice(1);

export const getErrors = (errors: string[]) =>
  errors.reduce((acc: Record<string, string>, current?: string) => {
    if (current) {
      const splitError = current.split('"');
      acc[splitError[1]] = splitError[2];
    }
    return acc;
  }, {});
