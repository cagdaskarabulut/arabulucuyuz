import MetaPanel from "@/components/MetaPanel";
import ArabulucuPanel from "@/components/ArabulucuPanel";
import PageTemplate from "@/components/PageTemplate";

//- Açılış sayfası , Hizmetlerimiz sayfası
export default function Arabuluculuk() {
  return (
    <>
      <MetaPanel
        title="Arabuluculuk nedir?"
        descriptionContent="Arabulucu ve Arabuluculuk nedir sorularına detaylı açıklama içermektedir."
        keywordsContent="arabuluculuk, arabulucuyuz, arabulucu, arabulucu nasıl bulurum, iyi bir arabulucu arıyorum, iyi bir avukat arıyorum, arabulucu bul"
        imagePath="/images/Arabulucu.jpg"
        imageAlt="Arabulucu"
      />
      <PageTemplate content={<ArabulucuPanel />} />
    </>
  );
}
