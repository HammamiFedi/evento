export interface SectionContentProps {
  children: string;
}
function SectionContent({ children }: SectionContentProps) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}

export default SectionContent;
