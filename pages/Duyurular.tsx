import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

//-Duyurular sayfası
export default function UcretHesaplama() {

  const PageContentDuyurular= () => {
    return (
      <p>Duyurular</p>
    );
  };

  return (
    <>
      <MetaPanel title="Arabulucuyuz.org"
      name="Arabulucu ve Avukat" 
      content="Arabuluculuk ve İcra Hukuku Konularında Uzman" />
      <PageTemplate content={<PageContentDuyurular/>}/>
    </>
  );
}
