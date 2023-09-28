export type HeroProps = {
  title?: string;
  subtitle?: string;
  body?: string;
  imgUrl?: string;
  imgDodgeUrl?: string;
  contentRight?: React.ReactNode;
  $isDetailContent?: boolean;
  backButton?: {
    label: string;
    url: string;
  };
  bottomButton?: {
    label: string;
    url: string;
  };
};
