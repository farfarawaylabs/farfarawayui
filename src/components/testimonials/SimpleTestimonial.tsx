import { StarIcon } from "lucide-react";

export interface SimpleTestimonialProps {
  testimonial: string;
  author: string;
  authorTitle: string;
  avatarUrl: string;
}

export default function SimpleTestimonial({
  testimonial,
  author,
  authorTitle,
  avatarUrl,
}: SimpleTestimonialProps) {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon aria-hidden="true" className="size-5 flex-none" fill="currentColor" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" fill="currentColor" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" fill="currentColor" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" fill="currentColor" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" fill="currentColor" />
        </div>
        <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
          <p>{`“${testimonial}”`}</p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <img alt="" src={avatarUrl} className="size-12 rounded-full bg-gray-50" />
          <div className="text-sm/6">
            <div className="font-semibold text-gray-900">{author}</div>
            <div className="mt-0.5 text-gray-600">{authorTitle}</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
