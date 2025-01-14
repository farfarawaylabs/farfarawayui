export interface HeroProps {
  title: string;
  description: string;
  background?: React.ReactNode;
}

export interface SimpleHeroProps extends HeroProps {
  primaryButton: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  announcement?: {
    label: string;
    href?: string;
  };
}

export type MobileAppHeroProps = SimpleHeroProps & {
  appImage?: React.ReactNode | string;
};

export type MultipleImagesHeroProps = SimpleHeroProps & {
  imageUrls: string[];
};
