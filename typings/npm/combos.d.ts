declare module "combos" {
  interface Input {
    // tslint:disable-next-line no-any
    [key: string]: any[];
  }

  export default function combos<T extends Input>(
    inp: T
  ): Array<{ [P in keyof T]: T[P][0] }>;
}
