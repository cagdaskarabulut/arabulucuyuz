import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function UcretHesaplama() {
  const PageContentFormlar = () => {
    return <p style={{marginTop:"0px"}}>Formlar</p>;
  };
  return (
    <>
      <MetaPanel
        title="Arabuluculuk Formları"
        descriptionContent="Arabuluculuk ve İcra Hukuku Konularında Uzman"
        keywordsContent="Arabuluculuk ve İcra Hukuku Konularında Güncel Formlar"
        isDontFollowByRobots={true}
      />
      <PageTemplate content={<PageContentFormlar />} />
    </>
  );
}
