"use client";
import dynamic from "next/dynamic";
import React from "react";

interface DynamicIconProps {
  iconName: string;
}

interface IconProps {
  className: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = React.memo(({ iconName }) => {
  const ImportedIcon = dynamic<IconProps>(
    () => import(`./icons/${iconName}.tsx`),
    {
      loading: () => <p>...</p>,
    }
  );

  return <ImportedIcon className="w-[60%] h-[60%] fill-[#D9D9D9]" />;
});

DynamicIcon.displayName = "DynamicIcon";
export default DynamicIcon;
