import React from "react";

const OverviewCard = ({
  title,
  value,
  change,
  icon: Icon,
  bgColor,
  iconColor,
}) => {
  return (
    <div
      className={`rounded-xl p-6 w-full flex justify-between items-center shadow-md ${bgColor} min-h-[140px]`}
    >
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-green-500 text-sm mt-1">
          ▲ {change} period of change
        </p>
      </div>
      {Icon && <Icon className={`w-12 h-12 ${iconColor}`} />}
    </div>
  );
};

export default OverviewCard;
