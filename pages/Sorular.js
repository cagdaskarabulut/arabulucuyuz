import MetaPanel from "../components/MetaPanel";
import SorularPanel from "@/components/SorularPanel";
import PageTemplate from "@/components/PageTemplate";

//-Sorular sayfası
export default function Sorular() {
  return (
    <>
      <MetaPanel
        name="Arabuluculuk ve Avukatlık hakkında sorular"
        descriptionContent="Arabuluculuk ve Avukatlık hakkında sorular ve cevaplarını içermektedir"
        keywordsContent="arabuluculuk avukatlık soru cevap "
      />
      <PageTemplate content={<SorularPanel />} />
    </>
  );
}
