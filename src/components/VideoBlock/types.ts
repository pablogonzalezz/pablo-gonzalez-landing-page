export interface VideoBlockProps {
  title: string;
  text: string;
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  sequence?: Array<number | string | (() => void | Promise<void>)>;
}
