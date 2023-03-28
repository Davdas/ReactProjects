import React from "react";

interface CradRecipeProps {
  title: string;
  src: string;
}

const CardRecipe = ({ title, src }: CradRecipeProps) => {
  return (
    <div className=" w-[300px] m-auto mt-5 cursor-pointer bg-cyan-800 rounded-md p-1">
      <div>
        <h3 className="text-center my-5 text-sm text-white">{title}</h3>
      </div>
      <div
        className="h-[250px] w-full rounded-sm"
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
};

export default CardRecipe;
