import MetaPanel from "@/components/MetaPanel";
import ArabuluculukPanel from "@/components/ArabuluculukPanel";
import PageTemplate from "@/components/PageTemplate";

//- Açılış sayfası
export default function Home() {
  return (
    <>
      <MetaPanel
        title="Arabuluculuk nedir?"
        descriptionContent="Arabulucu ve Arabuluculuk nedir sorularına detaylı açıklama içermektedir."
        keywordsContent="arabulucu, arabuluculuk, arabulucuyuz, arabulucu, arabulucu nasıl bulurum, iyi bir arabulucu arıyorum, iyi bir avukat arıyorum, arabulucu bul, arabulucu ile anlaş, arabulucu tut"
        imagePath="/images/Arabulucu.jpg"
        imageAlt="Arabulucu"
      />
      <PageTemplate content={<ArabuluculukPanel />} />
    </>
  );
}
