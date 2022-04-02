
export const findAllObject = (obj = {}, key, value, copiaObjeto) => {
    const recursiveSearch = (obj = {}) => {
      if (!obj || typeof obj !== "object") {
        return;
      }
      if (obj[key] === value) {
        copiaObjeto.push(obj);
      }
      Object.keys(obj).forEach(function (k) {
        recursiveSearch(obj[k]);
      });
    };
    recursiveSearch(obj);
  };