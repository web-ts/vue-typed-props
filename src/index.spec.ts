import { it, describe, expect } from "vitest";

import prop from ".";

describe("generic function", () => {
  it("should return a Prop object with the correct type and default value", () => {
    const p = prop.generic(5);

    expect(p).toEqual({ type: undefined, default: 5 });
  });

  it("should return a RequiredProp object with the correct type and default value", () => {
    const obj = { a: 1, b: 2 };
    const p = prop.generic(obj);

    expect(typeof p.default).toEqual("function");
    expect(p.default()).toEqual(obj);
  });
});

describe("number function", () => {
  it("should return a Prop object with the correct type and default value", () => {
    const p = prop.number(5);

    expect(p).toEqual({ type: Number, default: 5 });
  });
});

describe("boolean function", () => {
  it("should return a Prop object with the correct type and default value", () => {
    const p = prop.boolean(true);

    expect(p).toEqual({ type: Boolean, default: true });
  });
});

describe("string function", () => {
  it("should return a Prop object with the correct type and default value", () => {
    const p = prop.string("test");

    expect(p).toEqual({ type: String, default: "test" });
  });
});

describe("object function", () => {
  it("should return a ObjectLikeProp object with the correct type and default value", () => {
    const p = prop.object({});

    expect(JSON.stringify(p)).toEqual(
      JSON.stringify({
        type: Object,
        default: () => {
          /*empty*/
        }
      })
    );
  });
});

describe("array function", () => {
  it("should return a ObjectLikeProp object with the correct type and default value", () => {
    const p = prop.array([]);

    expect(JSON.stringify(p)).toEqual(JSON.stringify({ type: Object, default: () => [] }));
  });
});

describe("func function", () => {
  it("should return a Prop object with the correct type and default value", () => {
    const func = () => {
      /*empty*/
    };
    const p = prop.func(func);

    expect(p).toEqual({ type: Function, default: func });
  });
});

describe("reqGeneric function", () => {
  it("should return a RequiredProp object with the correct type and default value", () => {
    const p = prop.required.generic(5);

    expect(p).toEqual({ type: undefined, default: 5, required: true });
  });

  it("should return a RequiredProp object with the correct type and default value", () => {
    const obj = { a: 1, b: 2 };
    const p = prop.required.generic(obj);

    expect(typeof p.default).toEqual("function");
    expect(p.default()).toEqual(obj);
    expect(p.required).toEqual(true);
  });
});

describe("reqNumber function", () => {
  it("should return a RequiredProp object with the correct type and default value", () => {
    const p = prop.required.number(5);

    expect(p).toEqual({ type: Number, default: 5, required: true });
  });
});

describe("reqBoolean function", () => {
  it("should return a RequiredProp object with the correct type and default value", () => {
    const p = prop.required.boolean(true);

    expect(p).toEqual({ type: Boolean, default: true, required: true });
  });
});

describe("reqString function", () => {
  it("should return a RequiredProp object with the correct type and default value", () => {
    const p = prop.required.string("test");

    expect(p).toEqual({ type: String, default: "test", required: true });
  });
});

describe("reqObject function", () => {
  it("should return a RequiredObjectLikeProp object with the correct type and default value", () => {
    const p = prop.required.object({});

    expect(JSON.stringify(p)).toEqual(
      JSON.stringify({
        type: Object,
        default: () => {
          /*empty*/
        },
        required: true
      })
    );
  });
});

describe("reqArray function", () => {
  it("should return a RequiredObjectLikeProp object with the correct type and default value", () => {
    const p = prop.required.array([]);

    expect(JSON.stringify(p)).toEqual(JSON.stringify({ type: Object, default: () => [], required: true }));
  });
});

describe("reqFunc function", () => {
  it("should return a RequiredProp object with the correct type and default value", () => {
    const func = () => {
      /*empty*/
    };
    const p = prop.required.func(func);

    expect(p).toEqual({ type: Function, default: func, required: true });
  });
});
