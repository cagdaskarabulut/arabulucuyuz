import MetaPanel from "../components/MetaPanel";
import UcretHesaplamaPanel from "@/components/UcretHesaplamaPanel";
import PageTemplate from "@/components/PageTemplate";

//-UcretHesaplama sayfası
export default function UcretHesaplama() {
  return (
    <>
      <MetaPanel
        title="Arabuluculuk Ücret Hesaplama"
        name="Arabuluculuk Ücret Hesaplama"
        content="Kolay, anlaşılır, basit, sade arabuluculuk ücret hesaplama aracı"
      />
      <PageTemplate content={<UcretHesaplamaPanel />} />
    </>
  );
}
