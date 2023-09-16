import MetaPanel from "@/components/MetaPanel";
import ArabulucuPanel from "@/components/ArabulucuPanel";
import PageTemplate from "@/components/PageTemplate";

//- Açılış sayfası , Hizmetlerimiz sayfası
export default function Arabuluculuk() {
  return (
    <>
      <MetaPanel
        title="Arabulucu ve Avukat"
        descriptionContent="Arabuluculuk ve İcra Hukuku Konularında Uzman"
        keywordsContent="arabulucuyuz, arabulucu, arabulucu nasıl bulurum, iyi bir arabulucu arıyorum, iyi bir avukat arıyorum"
        imagePath="/images/Arabulucu.jpg"
        imageAlt="Arabulucu"
      />
      <PageTemplate content={<ArabulucuPanel />} />
    </>
  );
}
