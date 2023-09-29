"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("21dcba3e-5227-48ac-a3c5-5583077d399c");
  }, []);

  return null;
};
