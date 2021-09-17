import React, { Suspense } from "react";
import Loading from "../Loading/Loading";
import Lottie from "react-lottie";

export const LottyDisplay = ({ animationData }) => {
  const defaultProps = {
    loo: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <Suspense fallback={<Loading />}>
      <div onClick="null">
        <Lottie options={defaultProps} />
      </div>
    </Suspense>
  );
};
