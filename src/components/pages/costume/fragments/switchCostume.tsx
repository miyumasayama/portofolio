import { CSSProperties, FC } from "react";
import { Natsunochikamichi } from "../data/natsunochikamichi";
import { NagaredamaSeihuku } from "../data/nagaredamaSeihuku";

type Props = {
  name: string;
  style?: CSSProperties;
};

export const SwitchCostume: FC<Props> = ({ name, style }) => {
  switch (name) {
    case "夏の近道":
      return <Natsunochikamichi style={style} />;
    case "流れ弾(制服)":
      return <NagaredamaSeihuku style={style} />;
    default:
      return <></>;
  }
};
