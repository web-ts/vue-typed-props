import { PropType } from "vue";

export type Prop<T> = { type: PropType<T>; default: T };
export type ObjectLikeProp<T> = { type: PropType<T>; default: () => T };

export type RequiredProp<T> = { type: PropType<T>; default: T; required: true };
export type RequiredObjectLikeProp<T> = { type: PropType<T>; default: () => T; required: true };

function generic<T>(defaultValue?: undefined): Prop<T | undefined>;
function generic<T>(defaultValue: T): Prop<T>;
function generic<T>(defaultValue?: T) {
  const prop = {
    type: undefined as unknown as PropType<T>,
    default: (typeof defaultValue === "object" ? () => defaultValue : defaultValue) as T
  };

  return prop;
}

function number(defaultValue: number): Prop<number>;
function number<T extends number | null>(defaultValue?: undefined): Prop<T | undefined>;
function number<T extends number | null>(defaultValue: T): Prop<T>;
function number<T extends number | null>(defaultValue?: T) {
  return {
    type: Number as unknown as PropType<T | undefined>,
    default: defaultValue
  };
}

function boolean(defaultValue: boolean): Prop<boolean>;
function boolean<T extends boolean | null>(defaultValue?: undefined): Prop<T | undefined>;
function boolean<T extends boolean | null>(defaultValue: T): Prop<T>;
function boolean<T extends boolean | null>(defaultValue?: T) {
  return {
    type: Boolean as unknown as PropType<T | undefined>,
    default: defaultValue
  };
}

function string(defaultValue: string): Prop<string>;
function string<T extends string | null>(defaultValue?: undefined): Prop<T | undefined>;
function string<T extends string | null>(defaultValue: T): Prop<T>;
function string<T extends string | null>(defaultValue?: T) {
  return {
    type: String as unknown as PropType<T | undefined>,
    default: defaultValue
  };
}

function object(defaultValue: object): ObjectLikeProp<object>;
function object<T extends object | null>(defaultValue?: undefined): ObjectLikeProp<T | undefined>;
function object<T extends object | null>(defaultValue: T): ObjectLikeProp<T>;
function object<T extends object | null>(defaultValue?: T) {
  return {
    type: Object as unknown as PropType<T | undefined>,
    default: () => defaultValue
  };
}

function array<T = any>(defaultValue: Array<T>): ObjectLikeProp<Array<T>>;
function array<T = any>(defaultValue?: undefined): ObjectLikeProp<Array<T> | undefined>;
function array<T = any>(defaultValue: Array<T>): ObjectLikeProp<Array<T>>;
function array<T = any>(defaultValue?: Array<T>) {
  return {
    type: Array as unknown as PropType<T | undefined>,
    default: () => defaultValue
  };
}

function func(defaultValue: Function): Prop<Function>;
function func<T extends Function | null>(defaultValue?: undefined): Prop<T | undefined>;
function func<T extends Function | null>(defaultValue: T): Prop<T>;
function func<T extends Function | null>(defaultValue?: T) {
  return {
    type: Function as unknown as PropType<T | undefined>,
    default: defaultValue
  };
}

function reqGeneric<T>(defaultValue?: undefined): RequiredProp<T>;
function reqGeneric<T>(defaultValue: T): RequiredProp<T>;
function reqGeneric<T>(defaultValue?: T) {
  const prop = {
    type: undefined as unknown as PropType<T>,
    default: (typeof defaultValue === "object" ? () => defaultValue : defaultValue) as T,
    required: true
  };

  return prop;
}

function reqNumber(defaultValue: number): RequiredProp<number>;
function reqNumber<T extends number | null>(defaultValue?: undefined): RequiredProp<T>;
function reqNumber<T extends number | null>(defaultValue: T): RequiredProp<T>;
function reqNumber<T extends number | null>(defaultValue?: T) {
  return {
    type: Number as unknown as PropType<T>,
    default: defaultValue,
    required: true
  };
}

function reqBoolean(defaultValue: boolean): RequiredProp<boolean>;
function reqBoolean<T extends boolean | null>(defaultValue?: undefined): RequiredProp<T>;
function reqBoolean<T extends boolean | null>(defaultValue: T): RequiredProp<T>;
function reqBoolean<T extends boolean | null>(defaultValue?: T) {
  return {
    type: Boolean as unknown as PropType<T>,
    default: defaultValue,
    required: true
  };
}

function reqString(defaultValue: string): RequiredProp<string>;
function reqString<T extends string | null>(defaultValue?: undefined): RequiredProp<T>;
function reqString<T extends string | null>(defaultValue: T): RequiredProp<T>;
function reqString<T extends string | null>(defaultValue?: T) {
  return {
    type: String as unknown as PropType<T>,
    default: defaultValue,
    required: true
  };
}

function reqObject(defaultValue: object): RequiredObjectLikeProp<object>;
function reqObject<T extends object | null>(defaultValue?: undefined): RequiredObjectLikeProp<T>;
function reqObject<T extends object | null>(defaultValue: T): RequiredObjectLikeProp<T>;
function reqObject<T extends object | null>(defaultValue?: T) {
  return {
    type: Object as unknown as PropType<T>,
    default: () => defaultValue,
    required: true
  };
}

function reqArray<T = any | null>(defaultValue: Array<T>): RequiredObjectLikeProp<Array<T>>;
function reqArray<T = any | null>(defaultValue?: undefined): RequiredObjectLikeProp<Array<T>>;
function reqArray<T = any | null>(defaultValue: Array<T>): RequiredObjectLikeProp<Array<T>>;
function reqArray<T = any | null>(defaultValue?: Array<T>) {
  return {
    type: Array as unknown as PropType<T>,
    default: () => defaultValue,
    required: true
  };
}

function reqFunc(defaultValue: Function): RequiredProp<Function>;
function reqFunc<T extends Function | null>(defaultValue?: undefined): RequiredProp<T>;
function reqFunc<T extends Function | null>(defaultValue: T): RequiredProp<T>;
function reqFunc<T extends Function | null>(defaultValue?: T) {
  return {
    type: Function as unknown as PropType<T>,
    default: defaultValue,
    required: true
  };
}

export default {
  number,
  boolean,
  string,
  object,
  array,
  func,
  generic,
  required: {
    generic: reqGeneric,
    number: reqNumber,
    boolean: reqBoolean,
    string: reqString,
    object: reqObject,
    array: reqArray,
    func: reqFunc
  }
};
