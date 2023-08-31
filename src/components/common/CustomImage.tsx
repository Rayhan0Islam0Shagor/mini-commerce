/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import * as React from 'react';

const CustomImage = ({ alt, src }: { alt: string; src: string }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="w-full overflow-hidden flex items-center justify-center rounded-lg relative">
      <Image
        alt={alt}
        src={src}
        width={1200}
        height={630}
        className={`w-full h-auto object-contain transition-opacity duration-200 ${
          loading ? 'opacity-0' : 'opacity-100'
        } `}
        onLoad={() => {
          setLoading(false);
        }}
      />

      {loading && (
        <div className="absolute w-full h-full top-0 left-0 animate-pulse bg-gray-100" />
      )}
    </div>
  );
};

export default CustomImage;
