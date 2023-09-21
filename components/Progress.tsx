"use client";

import NProgress from "nprogress";
import { useEffect } from "react";

const Progress = () => {
  useEffect(() => {
    const isClient = typeof window !== "undefined";
    if (isClient) {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
    }

    return () => {
      if (isClient) NProgress.done();
    };
  }, []);

  return <></>;
};

export default Progress;
