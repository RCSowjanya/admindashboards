
import React from "react";
import QuotationView from "@/Components/QuotaionView";
export default function Page({params}) {
 
  return (
   <>
   <div>{params.quoteid}</div>
    <QuotationView/>
   </>
      
       
  );
}
