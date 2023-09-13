import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function UcretHesaplama() {
  const PageContentDuyurular = () => {
    return <p style={{marginTop:"0px"}}>Duyurular</p>;
  };

  return (
    <>
      <MetaPanel
        title="Arabulucuyuz.org"
        name="Arabulucu ve Avukat"
        content="Arabuluculuk ve İcra Hukuku Konularında Uzman"
      />
      <PageTemplate content={<PageContentDuyurular />} />
    </>
  );
}
