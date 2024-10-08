import { Player } from "@lottiefiles/react-lottie-player";
import React, { ReactNode, Suspense } from "react";

export interface LottieAnimationProps {
  animation: string;
  loop?: boolean;
  animationRef?: React.Ref<Player>;
  fallback?: any;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animation,
  loop = true,
  animationRef,
  fallback,
  className,
}) => {
  return (
    <Suspense fallback={fallback}>
      <Player
        ref={animationRef}
        loop={loop}
        keepLastFrame={!loop}
        autoplay
        src={animation}
        className={className ? className : "h-full w-full"}
      />
    </Suspense>
  );
};

export default LottieAnimation;
