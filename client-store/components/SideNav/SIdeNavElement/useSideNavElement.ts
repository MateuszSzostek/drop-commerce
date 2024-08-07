import { splitArrayIntoChunks } from "../../../utils";

export default function useSideNavElements(
  links: { name: string; slug: string }[]
) {
  const fragmentedLinks = splitArrayIntoChunks(links, 8);

  return { fragmentedLinks };
}
