import FavoritesDahsboard from "@/components/Dashboard/Favorites/FavoritesDahsboard";
import React from "react";
export const metadata = {
  title: "Favorites Section",
  description: "Favorites Section",
};
const page = () => {
  return (
    <div>
      <FavoritesDahsboard />
    </div>
  );
};

export default page;
