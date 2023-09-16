import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function UcretHesaplama() {
  const PageContentDosyalarim = () => {
    return <p style={{marginTop:"0px"}}>Dosyalarim</p>;
  };

  return (
    <>
      <MetaPanel
        title="Arabuluculuk Dosyalarım"
        descriptionContent="Kendi Arabuluculuk Dosyalarım"
        isDontFollowByRobots={true}
      />
      <PageTemplate content={<PageContentDosyalarim />} />
    </>
  );
}
