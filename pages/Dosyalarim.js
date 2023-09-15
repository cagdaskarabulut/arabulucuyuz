import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function UcretHesaplama() {
  const PageContentDosyalarim = () => {
    return <p style={{marginTop:"0px"}}>Dosyalarim</p>;
  };

  return (
    <>
      <MetaPanel
        title="Arabulucuyuz.org"
        name="Arabulucu ve Avukat"
        nameContent="Arabuluculuk ve İcra Hukuku Konularında Uzman"
      />
      <PageTemplate content={<PageContentDosyalarim />} />
    </>
  );
}
