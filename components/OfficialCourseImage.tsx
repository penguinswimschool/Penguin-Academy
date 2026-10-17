import Image from 'next/image'

interface OfficialCourseImageProps {
  src: string
  alt: string
}

export default function OfficialCourseImage({ src, alt }: OfficialCourseImageProps) {
  return (
    <figure className="mx-auto max-w-4xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(11,36,56,0.10)] sm:rounded-[1.75rem]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1017}
        sizes="(min-width: 1024px) 896px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
        className="h-auto w-full"
      />
    </figure>
  )
}
