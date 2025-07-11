import React from "react";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={classNames("rounded-xl p-4 bg-white shadow-md", className)}>
      {children}
    </div>
  );
};

export default Card;
