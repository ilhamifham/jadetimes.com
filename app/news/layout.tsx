import SubNav from "@/app/components/SubNav";

export default function NewsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SubNav item={1} />
      {children}
    </>
  );
}
