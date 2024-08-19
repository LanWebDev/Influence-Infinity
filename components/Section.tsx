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
      pb-[6rem]
      ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
