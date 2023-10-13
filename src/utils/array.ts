import * as R from 'ramda';

export type ArrayLike<T> = T | T[];

export const arrayOf = <T>(value: T) => R.of(Array, value);

export const toArray = <T>(value: ArrayLike<T>) =>
	R.ifElse(R.is(Array), R.identity, arrayOf)(value) as T[];
