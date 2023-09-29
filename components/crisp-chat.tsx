"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
useEffect(() => {
    Crisp.configure("d5fd7593-8f0b-4a00-9ed0-4d623fb02952");
  }, []);

  return null;  
};
