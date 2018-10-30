declare module "combos" {
  interface Input<T> {
    [key: keyof T]: any[];
  }
  interface Output<T> {
    [key: keyof T]: any;
  }
  export default function combos<T extends {}>(inp: Input<T>): Output<T>[];
}
