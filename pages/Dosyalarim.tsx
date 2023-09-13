import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

//-Dosyalarim sayfası
export default function UcretHesaplama() {

  const PageContentDosyalarim = () => {
    return (
      <p>Dosyalarim</p>
    );
  };

  return (
    <>
      <MetaPanel title="Arabulucuyuz.org"
      name="Arabulucu ve Avukat" 
      content="Arabuluculuk ve İcra Hukuku Konularında Uzman" />
      <PageTemplate content={<PageContentDosyalarim/>}/>
    </>
  );
}
