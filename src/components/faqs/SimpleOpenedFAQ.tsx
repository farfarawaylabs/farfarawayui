export interface SimpleFAQProps {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function SimpleOpenedFAQ({ faqs, title }: SimpleFAQProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={`faq-${index}`} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
