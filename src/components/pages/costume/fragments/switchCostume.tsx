import { CSSProperties, FC } from "react";
import { Natsunochikamichi } from "../data/natsunochikamichi";
import { NagaredamaSeihuku } from "../data/nagaredamaSeihuku";
import { SakuratsukiSeihuku3ki } from "../data/sakuratsukiSeihuku3ki";
import { SilentMajority } from "../data/silentMajority";

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
    case "桜月(制服)3期生":
      return <SakuratsukiSeihuku3ki style={style} />;
    case "サイレントマジョリティ":
      return <SilentMajority style={style} />;
    default:
      return <></>;
  }
};
