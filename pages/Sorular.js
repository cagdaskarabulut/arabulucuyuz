import MetaPanel from "../components/MetaPanel";
import SorularPanel from "@/components/SorularPanel";
import PageTemplate from "@/components/PageTemplate";

//-Sorular sayfası
export default function Sorular() {
  return (
    <>
      <MetaPanel
        title="Sorular"
        name="Arabuluculuk ve Avukatlık hakkında sorular"
        content="Arabuluculuk ve Avukatlık hakkında sorular ve cevaplarını içermektedir"
      />
      <PageTemplate content={<SorularPanel />} />
    </>
  );
}
