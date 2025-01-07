interface Props {
  element?: string;
  className: string;
  children: Readonly<React.ReactNode>;
}

const Section = ({ element, className, children }: Props) => {
  if (element) {
    return <div className={`max-w-[900px] mx-auto ${className}`}>{children}</div>;
  }
  return <section className={`max-w-[900px] mx-auto ${className}`}>{children}</section>;
};

export default Section;
