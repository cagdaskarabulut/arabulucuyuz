import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function UcretHesaplama() {
  const PageContentFormlar = () => {
    return <p style={{marginTop:"0px"}}>Formlar</p>;
  };
  return (
    <>
      <MetaPanel
        title="Formlar"
        descriptionContent="Arabuluculuk ve İcra Hukuku Konularında Uzman"
        keywordsContent="arabuluculuk formları"
        isDontFollowByRobots={true}
      />
      <PageTemplate content={<PageContentFormlar />} />
    </>
  );
}
