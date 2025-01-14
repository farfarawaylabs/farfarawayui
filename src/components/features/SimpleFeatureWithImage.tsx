export interface SimpleFeatureWithImageProps {
  title: string;
  subtitle: string;
  image: string | React.ReactNode;
  imagePosition?: "left" | "right";
  features: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

export default function SimpleFeatureWithImage({
  title,
  subtitle,
  features,
  image,
  imagePosition = "right",
}: SimpleFeatureWithImageProps) {
  const contentOrder = imagePosition === "right" ? "order-1" : "order-2";
  const imageOrder = imagePosition === "right" ? "order-2" : "order-1";
  const imageContainerClass = imagePosition === "right" ? "lg:-ml-0" : "lg:-mr-0 flex justify-end";
  const imageClass = `w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]
    ${imagePosition === "right" ? "md:-ml-4" : "md:-mr-4"}`;

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className={`lg:pr-8 lg:pt-4 ${contentOrder}`}>
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {title}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">{subtitle}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.title}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className={`${imageOrder} ${imageContainerClass}`}>
            {image && typeof image === "string" ? (
              <img
                alt="Product screenshot"
                src={image}
                width={2432}
                height={1442}
                className={imageClass}
              />
            ) : (
              image
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
