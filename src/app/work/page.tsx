"use client";

import { useState } from "react";
import WorkPageHeading from "./workPageHeading";
import WorkWeDoChips from "@/Components/workWeDoChips";
import MapProjects from "./mapProjects";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";

export default function Home() {
  const [selectedChip, setSelectedChip] = useState<string | null>('all');



  return (
    <div className="container mx-auto px-4 mt-6 sm:px-6 sm:mt-8 md:px-8 md:mt-10 lg:px-12 lg:mt-12 max-w-screen-xl">
      {/* <RoundCornerWrapper> */}
        <WorkPageHeading />
      {/* </RoundCornerWrapper> */}
      {/* <RoundCornerWrapper> */}
        <WorkWeDoChips selectedChip={selectedChip} setSelectedChip={setSelectedChip} />
      {/* </RoundCornerWrapper> */}
  <MapProjects selectedChip={selectedChip} />
</div>
  );
}