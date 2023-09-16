import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function UcretHesaplama() {
  const PageContentDuyurular = () => {
    return <p style={{marginTop:"0px"}}>Duyurular</p>;
  };

  return (
    <>
      <MetaPanel
        title="Arabuluculuk Duyuruları"
        descriptionContent="Arabuluculuk ve İcra Hukuku Konularında Güncel Duyurular"
        isDontFollowByRobots={true}
      />
      <PageTemplate content={<PageContentDuyurular />} />
    </>
  );
}
