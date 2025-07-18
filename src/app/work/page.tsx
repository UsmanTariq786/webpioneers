"use client";

import GridLayout from "@/components/GridLayout";
import { useState } from "react";
import WorkPageHeading from "./workPageHeading";
import WorkWeDoChips from "@/components/workWeDoChips";
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