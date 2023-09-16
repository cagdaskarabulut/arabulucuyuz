import MetaPanel from "../components/MetaPanel";
import UcretHesaplamaPanel from "@/components/UcretHesaplamaPanel";
import PageTemplate from "@/components/PageTemplate";

//-UcretHesaplama sayfası
export default function UcretHesaplama() {
  return (
    <>
      <MetaPanel
        title="Arabuluculuk Ücret Hesaplama"
        descriptionContent="Kolay, anlaşılır, basit, sade arabuluculuk ücret hesaplama aracı"
        keywordsContent="arabuluculuk ücreti hesaplama aracı, arabulucu ücret hesapla"
      />
      <PageTemplate content={<UcretHesaplamaPanel />} />
    </>
  );
}
