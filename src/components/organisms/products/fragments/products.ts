import { paths } from "@/utils/navigation";

export const products = [
  {
    name: "Validation Time Attack",
    path: paths.validation,
    description:
      "Get past the validation and fill in the form as quickly as possible!",
    image: "/pageValidation.png",
  },
  {
    name: "Costume",
    path: paths.costume,
    description: "Enjoy dressing up in your favorite clothes!",
    image: `${process.env.NEXT_PUBLIC_URL}//pageCostume.png`,
  },
];
