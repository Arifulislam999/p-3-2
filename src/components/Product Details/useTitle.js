"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useTitle = () => {
  const queryParams = useSearchParams();
  const para = queryParams?.get("_title");
  useEffect(() => {
    document.title = para;
  }, [para]);
};
