export const assign = (typeof Object.assign === 'function') ? Object.assign : function(target, var_sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const output = Object(target);
  for (let i = 1, ii = arguments.length; i < ii; ++i) {
    const source = arguments[i];
    if (source !== undefined && source !== null) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
};