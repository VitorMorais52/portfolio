"use client";
import dynamic from "next/dynamic";
import React from "react";

interface DynamicIconProps {
  iconName: string;
  sizeClasses?: string;
}

interface IconProps {
  className: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = React.memo(
  ({ iconName, sizeClasses }) => {
    const iconSize = sizeClasses || "w-[60%] h-[60%]";
    const ImportedIcon = dynamic<IconProps>(
      () => import(`./icons/${iconName}.tsx`),
      {
        loading: () => <p>...</p>,
      }
    );

    return <ImportedIcon className={`${iconSize} fill-[#D9D9D9]`} />;
  }
);

DynamicIcon.displayName = "DynamicIcon";
export default DynamicIcon;
