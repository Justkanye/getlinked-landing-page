export const getRegistrationError = (
  errObj: Record<string, any>,
  defaultError: string
) => {
  let error: string | undefined = undefined;
  for (const key in errObj) {
    if (Object.prototype.hasOwnProperty.call(errObj, key)) {
      const element = errObj[key];
      if (typeof element === "string") error = element;
      else if (
        Array.isArray(element) &&
        element.length &&
        typeof element.at(0) === "string"
      ) {
        error = element.at(0);
      }
    }
  }
  return error ?? defaultError;
};
