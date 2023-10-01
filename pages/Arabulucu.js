import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";
import ArabulucuPanel from "../components/ArabulucuPanel";

export default function Arabulucu() {

  return (
    <>
      <MetaPanel
        title="Avukat Arabulucu Öznur İlhan Karabulut"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut Hakkında Bilgiler"
        keywordsContent="arabulucu, avukat, öznur ilhan karabulut"
      />
      <PageTemplate
        content={<ArabulucuPanel/>}
      />
    </>
  );
}
