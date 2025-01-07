import SubNav from "@/app/components/SubNav";

export default function OpinionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SubNav item={12} />
      {children}
    </>
  );
}
