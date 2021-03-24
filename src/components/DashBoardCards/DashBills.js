import React from "react";
import DashIconsBox from "../../components/DashBoardCards/DashIconsBox";

export default function DashBills({ title }) {
   const data = [
     {
       icon: "/imgs/water-drop.svg",
       text: "Water",
       url: "/landlord/bills/Water",
     },
     {
       icon: "/imgs/electricity.svg",
       text: "Electricity",
       url: "/landlord/bills/Electricity",
     },
     {
       icon: "/imgs/gas.svg",
       text: "Gas",
       url: "/landlord/bills/Gas",
     },
     {
       icon: "/imgs/sewage.svg",
       text: "Seawage",
       url: "/landlord/bills/Sewage",
     },
     {
       icon: "/imgs/wifi.svg",
       text: "Internet",
       url: "/landlord/bills/Internet",
     },
     {
       icon: "/imgs/tv.svg",
       text: "Cable Tv",
       url: "/landlord/bills/Cabletv",
     },
   ];
  return <DashIconsBox title={title} data={data} returnLink="/landlord/bills" />;
}
