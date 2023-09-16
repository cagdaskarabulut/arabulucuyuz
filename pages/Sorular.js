import MetaPanel from "../components/MetaPanel";
import SorularPanel from "@/components/SorularPanel";
import PageTemplate from "@/components/PageTemplate";

//-Sorular sayfası
export default function Sorular() {
  return (
    <>
      <MetaPanel
        name="Arabuluculuk Hakkında Sorular"
        descriptionContent="Arabuluculuk hakkında sorular ve cevaplarını içermektedir"
        keywordsContent="Arabuluculuk sorular, arabuluculuk cevaplar, Avukatlık Sorular, Avukatlık Cevaplar "
      />
      <PageTemplate content={<SorularPanel />} />
    </>
  );
}
