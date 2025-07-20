"use client";

import { useState } from "react";
import WorkPageHeading from "./workPageHeading";
import WorkWeDoChips from "@/Components/workWeDoChips";
import MapProjects from "./mapProjects";

export default function Home() {
  const [selectedChip, setSelectedChip] = useState<string | null>('all');



  return (
    <div>
       <WorkPageHeading/>
       <WorkWeDoChips selectedChip={selectedChip} setSelectedChip={setSelectedChip}/>
       <MapProjects selectedChip={selectedChip}/>
    </div>
  );
}