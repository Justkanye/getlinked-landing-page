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

  return (
    <center>
      <span className='loading loading-infinity loading-lg' />
    </center>
  );
};

export default Progress;
