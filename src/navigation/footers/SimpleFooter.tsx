interface SimpleFooterProps {
  mainLinks: { label: string; href: string }[];
  socialLinks?: { label: string; href: string; icon: React.ElementType }[];
  copyright?: string;
}

export default function SimpleFooter({ mainLinks, socialLinks, copyright }: SimpleFooterProps) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-20 pb-4 sm:pt-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {mainLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {socialLinks &&
            socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">{item.label}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
        </div>
        {copyright && <p className="mt-10 text-center text-sm/6 text-gray-600">{copyright}</p>}
      </div>
    </footer>
  );
}
