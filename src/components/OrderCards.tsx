import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  active?: boolean;
  onClick?: () => void; 
};  

const cardVariants = cva("p-4 rounded-lg border cursor-pointer", { 
  variants: {
    active: {
      true: "bg-yellow-100 border-yellow-400",
      false: "bg-white border-gray-300",
    },
  },
  defaultVariants: {
    active: false,
  },
});

const Card: React.FC<CardProps> = ({ icon, title, description, number, active = false, onClick }) => {
  return (
    <div className={cardVariants({ active })} onClick={onClick}>
      <div className="flex items-center mb-4">
        {icon}
      </div>
      <div className="w-[230px]">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500 text-[12px]">{description}</p>
        <div className="text-2xl font-bold mt-2">{number}</div>
      </div>
    </div>
  );
};

export default Card;
