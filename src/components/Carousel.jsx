import React, { useState } from 'react';

export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0);
  if (!images || images.length === 0) return null;

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <img
        src={images[index]}
        alt={`${alt} — imagem ${index + 1} de ${images.length}`}
        loading="lazy" decoding="async" width="1280" height="800"
        className="rounded-xl border border-slate-800 w-full aspect-[8/5] object-contain bg-slate-100 dark:bg-slate-950 select-none"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label={`Imagem anterior de ${alt}`}
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/80 border border-slate-700 text-white rounded-full w-9 h-9 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label={`Próxima imagem de ${alt}`}
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/80 border border-slate-700 text-white rounded-full w-9 h-9 flex items-center justify-center"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-cyan-400' : 'bg-slate-600'}`}
              />)
            )}
          </div>
        </>
      )}
    </div>
  );
}


