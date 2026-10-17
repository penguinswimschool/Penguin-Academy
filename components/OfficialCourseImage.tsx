import Image from 'next/image'

interface OfficialCourseImageProps {
  src: string
  alt: string
}

export default function OfficialCourseImage({ src, alt }: OfficialCourseImageProps) {
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#071b2b] shadow-[0_20px_60px_rgba(11,36,56,0.12)]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1017}
        sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
        className="h-auto w-full"
      />
      <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-300 sm:px-6">
        Official SSI programme visual. Course delivery, fees and completion arrangements shown on this website are provided by Penguin Academy.
      </figcaption>
    </figure>
  )
}
