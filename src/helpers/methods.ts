export const replaceElementInArray = <T>(
  array: T[],
  data: T,
  index: number
) => {
  const copyArray = [...array];
  copyArray.splice(index, 1, data);

  return copyArray;
};
export const currencyFormatter = {
  format: (
    value: number | string,
    locale: string = "uk-UA",
    currency: string = "UAH"
  ): string => {
    if (typeof value === "string") {
      value = parseFloat(value);
      if (isNaN(value)) {
        return value.toString();
      }
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency
      }).format(value);
    }

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency
    }).format(value);
  }
};
