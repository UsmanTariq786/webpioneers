import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-rubik", // Define the custom property name
});

export default rubik;