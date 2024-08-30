import { splitArrayIntoChunks } from "../../../utils";
import BabySvg from "@/assets/images/components/BabySvg";
import BusinessSvg from "@/assets/images/components/BusinessSvg";
import CarSvg from "@/assets/images/components/CarSvg";
import DressSvg from "@/assets/images/components/DressSvg";
import FirstaidSvg from "@/assets/images/components/FirstaidSvg";
import HouseSvg from "@/assets/images/components/HouseSvg";
import LaptopSvg from "@/assets/images/components/LaptopSvg";
import LipstickSvg from "@/assets/images/components/LipstickSvg";
import NewspaperSvg from "@/assets/images/components/NewspaperSvg";
import PaletteSvg from "@/assets/images/components/PaletteSvg";
import ShoppingCartSvg from "@/assets/images/components/ShippingCartSvg";
import SkyscraperCitySvg from "@/assets/images/components/SkyscraperCitySvg";
import SoccerBallSvg from "@/assets/images/components/SoccerBallSvg";

const navElementsTable = {
  electronics: <LaptopSvg />,
  fashion: <DressSvg />,
  "garden-and-house": <HouseSvg />,
  supermarket: <ShoppingCartSvg />,
  baby: <BabySvg />,
  beauty: <LipstickSvg />,
  health: <FirstaidSvg />,
  "culture-and-entertainment": <NewspaperSvg />,
  "sport-and-tourism": <SoccerBallSvg />,
  automotive: <CarSvg />,
  properties: <SkyscraperCitySvg />,
  "collections-and-art": <PaletteSvg />,
  "business-and-services": <BusinessSvg />,
};

export default function useSideNavElements(
  links: { name: string; slug: string }[]
) {
  const fragmentedLinks = splitArrayIntoChunks(links, 8);

  return { fragmentedLinks, navElementsTable };
}
