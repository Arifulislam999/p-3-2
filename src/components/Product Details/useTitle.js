"use client";
import { useSearchParams } from "next/navigation";

export const useTitle = () => {
  const queryParams = useSearchParams();
  const para = queryParams?.get("_title");
  return (document.title = para);
};
