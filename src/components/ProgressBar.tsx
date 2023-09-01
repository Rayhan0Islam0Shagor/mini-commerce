'use client';
import NextNProgress from 'nextjs-progressbar';

const ProgressBar = () => {
  return (
    <NextNProgress
      options={{ easing: 'ease', speed: 500, showSpinner: false }}
      color="#BD2217"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  );
};

export default ProgressBar;
