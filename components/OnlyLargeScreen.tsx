"use client";

import useWindowSize from "@/hooks/useWindowSize";

const OnlyLargeScreen = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const screenSize = useWindowSize();
  return <>{screenSize >= 1200 && <>{children}</>}</>;
};

export default OnlyLargeScreen;
