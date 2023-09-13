import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function UcretHesaplama() {
  const PageContentFormlar = () => {
    return <p style={{marginTop:"0px"}}>Formlar</p>;
  };
  return (
    <>
      <MetaPanel
        title="Arabulucuyuz.org"
        name="Arabulucu ve Avukat"
        content="Arabuluculuk ve İcra Hukuku Konularında Uzman"
      />
      <PageTemplate content={<PageContentFormlar />} />
    </>
  );
}
