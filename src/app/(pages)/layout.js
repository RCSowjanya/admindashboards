import React from "react";
import ClientLayout from "../ClientLayout";

export default function Layout({ children }) {
  return (
    <ClientLayout>
      <div className="p-4">{children}</div>
    </ClientLayout>
  );
}
