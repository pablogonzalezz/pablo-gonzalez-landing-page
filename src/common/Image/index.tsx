import { withTranslation } from "react-i18next";
import { ImageProps } from "../types";
import { Suspense } from "react";
import { Spin } from "antd";

const Image = ({ src, className, key }: ImageProps) => (
  <Suspense fallback={<Spin spinning={true}></Spin>}>
    <img src={src} className={className} key={key}></img>
  </Suspense>
);

export default withTranslation()(Image);
