import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

function Count() {
  return (
    <div>
      0 <input type="button" value="+"></input>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Count></Count> <br />
      <Count></Count>
    </>
  );
}
