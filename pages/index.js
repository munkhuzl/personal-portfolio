import Image from "next/image";
import { Inter } from "next/font/google";

import { Header} from "./component/header";
import {Navbar} from "./component/navbar"

export default function Home() {
  return (
    <main>
        <Navbar/>
        <Header/>
    </main>
  );
}
