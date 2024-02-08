import { Recordings } from "@/types";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

type TableProps = {
  recordings: Recordings;
};

export function Table({ recordings }: TableProps) {
  return (
    <>
      <Desktop recordings={recordings} />
      <Mobile recordings={recordings} />
    </>
  );
}
