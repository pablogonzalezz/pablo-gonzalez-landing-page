
import { IFrameProps } from "../types";
import "./styles.scss";

const IFrame = ({ src }: IFrameProps) => (
    <iframe 
    width="560" 
    height="315" 
    className="embed-video" 
    src={src} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
);

export default IFrame;
