import { withTranslation } from "react-i18next";
import { ImageProps } from "../types";
import { Suspense } from "react";
import { Spin } from "antd";

const Image = ({ src, alt, className }: ImageProps) => (
  <Suspense fallback={<Spin spinning={true}></Spin>}>
    <img src={src} alt={alt} className={className} />
  </Suspense>
);

export default withTranslation()(Image);
