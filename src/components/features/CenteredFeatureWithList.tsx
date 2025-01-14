export interface CenteredFeatureWithListProps {
  tag?: string;
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    action: {
      label: string;
      href: string;
    };
    icon: React.ElementType;
  }[];
}

export default function CenteredFeatureWithList({
  title,
  subtitle,
  tag,
  features,
}: CenteredFeatureWithListProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {tag && <h2 className="text-base/7 font-semibold text-indigo-600">{tag}</h2>}
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {title}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">{subtitle}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.action.href}
                      className="text-sm/6 font-semibold text-indigo-600"
                    >
                      {feature.action.label} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
