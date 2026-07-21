import React from 'react';
import { cn } from "../../lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8 cursor-pointer">
      <h1 className="text-4xl md:text-6xl font-black text-[var(--color-text)] transition-all duration-500 group-hover:opacity-40 group-hover:text-[#F97316]">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Web Development",
      images: [
        {
          src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60",
          alt: "Web Development 1",
        },
        {
          src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=60",
          alt: "Web Development 2",
        },
      ],
    },
    {
      text: "Mobile Development",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=60",
          alt: "Mobile Development 1",
        },
        {
          src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop&q=60",
          alt: "Mobile Development 2",
        },
      ],
    },
    {
      text: "AI Solutions",
      images: [
        {
          src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&auto=format&fit=crop&q=60",
          alt: "AI Solutions 1",
        },
        {
          src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=60",
          alt: "AI Solutions 2",
        },
      ],
    },
    {
      text: "Data Analytics",
      images: [
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=60",
          alt: "Data Analytics 1",
        },
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
          alt: "Data Analytics 2",
        },
      ],
    },
    {
      text: "Cloud & DevOps",
      images: [
        {
          src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=60",
          alt: "Cloud 1",
        },
        {
          src: "https://images.unsplash.com/photo-1614064641913-6b71a2ec00db?w=400&auto=format&fit=crop&q=60",
          alt: "Cloud 2",
        },
      ],
    },
    {
      text: "System Architecture",
      images: [
        {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=60",
          alt: "Architecture 1",
        },
        {
          src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=60",
          alt: "Architecture 2",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-[var(--color-bg)] px-4 md:px-12 py-10 shadow-xl border border-gray-100">
      <h3 className="text-sm font-black uppercase text-[#F97316] tracking-widest mb-4">Our services</h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };
