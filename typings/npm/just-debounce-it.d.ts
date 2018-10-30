declare module "just-debounce-it" {
  export default function debounce<T extends (...args: any[]) => any>(
    fn: T,
    wait: number,
    callFirst?: boolean
  ): T;
}
