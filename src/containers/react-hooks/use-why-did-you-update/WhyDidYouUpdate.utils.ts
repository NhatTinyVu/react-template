export const getDiffValues = (firstObject: any, secondObject: any): object => {
  const diffValues: any = {};
  if (firstObject) {
    const allKeys = Object.keys({ ...firstObject, ...secondObject });
    allKeys.forEach(key => {
      if (firstObject[key] !== secondObject[key]) {
        diffValues[key] = {
          from: firstObject[key],
          to: secondObject[key],
        };
      }
    });
  }
  return diffValues;
};
