import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

//-Formlar sayfası
export default function UcretHesaplama() {
  const PageContentFormlar = () => {
    return (
      <p>Formlar</p>
    );
  };
  return (
    <>
      <MetaPanel title="Arabulucuyuz.org"
      name="Arabulucu ve Avukat" 
      content="Arabuluculuk ve İcra Hukuku Konularında Uzman" />
      <PageTemplate content={<PageContentFormlar/>}/>
    </>
  );
}
