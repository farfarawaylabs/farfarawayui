import React from "react";

const MainContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-1 flex flex-col container mx-auto p-4">{children}</main>;
};

export default MainContentContainer;
