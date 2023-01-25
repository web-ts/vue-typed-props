import { expectType } from "tsd";
import prop, { ObjectLikeProp, Prop, RequiredObjectLikeProp, RequiredProp } from ".";

expectType<Prop<number | undefined>>(prop.number());
expectType<Prop<number>>(prop.number(1));
expectType<Prop<1 | 2 | 3>>(prop.number<1 | 2 | 3>(2));
expectType<Prop<1 | 2 | 3 | undefined>>(prop.number<1 | 2 | 3>());

expectType<Prop<string | undefined>>(prop.string());
expectType<Prop<string>>(prop.string("test"));
expectType<Prop<"test" | "other">>(prop.string<"test" | "other">("test"));
expectType<Prop<"test" | "other" | undefined>>(prop.string<"test" | "other">());

expectType<Prop<boolean | undefined>>(prop.boolean());
expectType<Prop<boolean>>(prop.boolean(true));
expectType<Prop<true>>(prop.boolean<true>(true));
expectType<Prop<true | undefined>>(prop.boolean<true>());

expectType<ObjectLikeProp<object | undefined>>(prop.object());
expectType<ObjectLikeProp<object>>(prop.object({ a: 1 }));
expectType<ObjectLikeProp<{ a: number }>>(prop.object<{ a: number }>({ a: 1 }));
expectType<ObjectLikeProp<{ a: number } | undefined>>(prop.object<{ a: number }>());

expectType<ObjectLikeProp<Array<any> | undefined>>(prop.array<any>());
expectType<ObjectLikeProp<Array<any>>>(prop.array<any>([1, 2, 3]));
expectType<ObjectLikeProp<Array<number>>>(prop.array<number>([1, 2, 3]));
expectType<ObjectLikeProp<Array<number> | undefined>>(prop.array<number>());

function testFunc(v: number): number {
  return v;
}

expectType<Prop<Function | undefined>>(prop.func());
expectType<Prop<Function>>(prop.func(() => 0));
expectType<Prop<(v: number) => number>>(prop.func<(v: number) => number>(testFunc));
expectType<Prop<((v: number) => number) | undefined>>(prop.func<(v: number) => number>());

expectType<RequiredProp<number>>(prop.required.number());
expectType<RequiredProp<number>>(prop.required.number(1));
expectType<RequiredProp<1 | 2 | 3>>(prop.required.number<1 | 2 | 3>(2));
expectType<RequiredProp<1 | 2 | 3>>(prop.required.number<1 | 2 | 3>());

expectType<RequiredProp<string>>(prop.required.string());
expectType<RequiredProp<string>>(prop.required.string("test"));
expectType<RequiredProp<"test" | "other">>(prop.required.string<"test" | "other">("test"));
expectType<RequiredProp<"test" | "other">>(prop.required.string<"test" | "other">());

expectType<RequiredProp<boolean>>(prop.required.boolean());
expectType<RequiredProp<boolean>>(prop.required.boolean(true));
expectType<RequiredProp<true>>(prop.required.boolean<true>(true));
expectType<RequiredProp<true>>(prop.required.boolean<true>());

expectType<RequiredObjectLikeProp<object>>(prop.required.object());
expectType<RequiredObjectLikeProp<object>>(prop.required.object({ a: 1 }));
expectType<RequiredObjectLikeProp<{ a: number }>>(prop.required.object<{ a: number }>({ a: 1 }));
expectType<RequiredObjectLikeProp<{ a: number }>>(prop.required.object<{ a: number }>());

expectType<RequiredObjectLikeProp<Array<any>>>(prop.required.array<any>());
expectType<RequiredObjectLikeProp<Array<any>>>(prop.required.array<any>([1, 2, 3]));
expectType<RequiredObjectLikeProp<Array<number>>>(prop.required.array<number>([1, 2, 3]));
expectType<RequiredObjectLikeProp<Array<number>>>(prop.required.array<number>());

expectType<RequiredProp<Function>>(prop.required.func());
expectType<RequiredProp<Function>>(prop.required.func(() => 0));
expectType<RequiredProp<(v: number) => number>>(prop.required.func<(v: number) => number>(testFunc));
expectType<RequiredProp<(v: number) => number>>(prop.required.func<(v: number) => number>());

// Generics

expectType<Prop<unknown>>(prop.generic());
expectType<Prop<"test">>(prop.generic("test"));
expectType<Prop<"test" | "other">>(prop.generic<"test" | "other">("test"));
expectType<Prop<"test" | "other" | undefined>>(prop.generic<"test" | "other">());
expectType<Prop<{ a: string } | { b: number }>>(prop.generic<{ a: string } | { b: number }>({ a: "test" }));
expectType<Prop<{ a: string } | { b: number } | undefined>>(prop.generic<{ a: string } | { b: number }>());

expectType<RequiredProp<unknown>>(prop.required.generic());
expectType<RequiredProp<"test">>(prop.required.generic("test"));
expectType<RequiredProp<"test" | "other">>(prop.required.generic<"test" | "other">("test"));
expectType<RequiredProp<"test" | "other">>(prop.required.generic<"test" | "other">());
expectType<RequiredProp<{ a: string } | { b: number }>>(prop.required.generic<{ a: string } | { b: number }>({ a: "test" }));
expectType<RequiredProp<{ a: string } | { b: number }>>(prop.required.generic<{ a: string } | { b: number }>());
