interface SectionProps {
  className?: string;
  id: string;
  children: React.ReactNode;
}

const Section = ({ className, id, children }: SectionProps) => {
  return (
    <div
      id={id}
      className={`
      px-4
      pb-[7rem]
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
    </div>
  );
};

export default Section;
