import Joi, { SchemaLike, ValidationErrorItem } from '@hapi/joi';
import { pathOr } from 'ramda';

export default (validationSchema: SchemaLike) => (values: object) => {
  const result = Joi.validate(values, validationSchema, { abortEarly: false });

  return pathOr([], ['error', 'details'], result).reduce(
    (prev: { [key: string]: any }, curr: ValidationErrorItem) => {
      const key = (curr.context || {}).key;

      if (key) {
        prev[key] = curr.message;
      }
      return prev;
    },
    {},
  );
};
