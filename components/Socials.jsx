"use client";

import { icons } from "@/lib/dataLibrary";
import Link from "next/link";
import React from "react";

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}{" "}
    </div>
  );
};

export default Socials;
