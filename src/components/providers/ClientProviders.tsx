"use client";

import { useLenis } from "@/hooks/useLenis";
import CustomCursor from "@/components/effects/CustomCursor";
import Preloader from "@/components/effects/Preloader";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      {children}
    </>
  );
}
