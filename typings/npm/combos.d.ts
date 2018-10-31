declare module "combos" {
  export const UNDEF: Symbol;

  interface Input {
    [key: string]: any[];
  }

  export default function combos<T extends Input>(
    inp: T
  ): { [P in keyof T]: T[P][0] }[];
}
