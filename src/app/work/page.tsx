"use client";

import { useState } from "react";
import WorkPageHeading from "./workPageHeading";
import WorkWeDoChips from "@/Components/workWeDoChips";
import MapProjects from "./mapProjects";
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";

export default function Home() {
  const [selectedChip, setSelectedChip] = useState<string | null>("all");

  return (
    <div className="">
      <section>
        <div className="w-full flex">
          <div className="w-[10%] border-r border-b border-[#373737]"></div>
          <div className="w-[79.95%]">
            <WorkPageHeading />
          </div>
          <div className="w-[10.05%] border-l border-b border-[#373737]"></div>
        </div>
      </section>

      <section>
  <div className="w-full flex">
    <div className="w-[9.95%] border-b border-[#373737]"></div>
    <div className="w-[80.08%]">
      <RoundCornerWrapper>
      <WorkWeDoChips
        selectedChip={selectedChip}
        setSelectedChip={setSelectedChip}
      />
      </RoundCornerWrapper>
    </div>
    <div className="w-[9.95%] border-b border-[#373737]"></div>
  </div>
</section>

      {/* <RoundCornerWrapper> */}
    
      {/* </RoundCornerWrapper> */}
      <MapProjects selectedChip={selectedChip} />
    </div>
  );
}
