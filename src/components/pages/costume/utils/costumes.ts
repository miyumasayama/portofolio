import { Costume } from "@/types/costume";
// import { NagaredamaSeihuku } from "../data/nagaredamaSeihuku";
// import { Natsunochikamichi } from "../data/natsunochikamichi";

export const costumes: Costume[] = [
  {
    name: "夏の近道",
    component: "Natsunochikamichi,",
  },
  { name: "流れ弾(制服)", component: "NagaredamaSeihuku" },
];

export const costumes2 = [
  {
    name: "夏の近道",
    component: `${process.env.NEXT_PUBLIC_URL}/natsunochikamichi.png`,
  },
];
