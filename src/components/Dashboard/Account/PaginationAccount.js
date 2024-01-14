"use client";
import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import "../../Pagination/pagination.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

const PaginationAccount = () => {
  const router = useRouter();
  const queryStringPage = useSearchParams();
  const { totalProductSize } = useSelector((state) => state.productMonitoring);
  const pageNo = queryStringPage.get("page");
  const [currentPage, setCurrentPage] = useState(Number(pageNo) || 1);
  const totalPages = totalProductSize || 10;
  const handlerChange = (page) => {
    setCurrentPage(page);
    if (Number(pageNo) !== page) {
      router.push(`/dashboard?page=${page}`);
    }
  };
  useEffect(() => {
    if (pageNo == 1) {
      setCurrentPage(pageNo);
    }
  }, [pageNo]);

  return (
    <div className="w-full  mt-4 flex justify-center">
      <div>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={(page) => handlerChange(page)}
        />
      </div>
    </div>
  );
};

export default PaginationAccount;
