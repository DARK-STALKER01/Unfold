import HeaderModule from "../components/Header";

export default function LayoutModule({ children }){
  return (
    <>
      <HeaderModule />
      {children}
    </>
  );
}
