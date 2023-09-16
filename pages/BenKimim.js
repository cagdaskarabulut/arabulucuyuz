import MetaPanel from "../components/MetaPanel";
import PageTemplate from "@/components/PageTemplate";

export default function BenKimim() {
  const PageContentBenKimim = () => {
    return (
      <div>
        <p style={{marginTop:"0px"}}>
          <b>AV. ARB. ÖZNUR İLHAN KARABULUT</b>
        </p>
        <p>
          2010 YILINDA MALTEPE ÜNİVERSİTESİ HUKUK FAKÜLTESİNDEN MEZUN OLMASININ
          ARDINDAN ÖZEL HUKUK ALANINDA ÇALIŞMA HAYATI OLMUŞTUR. 2020 YILINDA
          ARABULUCULUK DAİRE BAŞKANLIĞI SİCİLİNE KAYIT OLARAK 12511 SİCİL NOLU
          ARBULUCU OLARAK GÖREV YAPMAYA BAŞLAMIŞTIR.
        </p>
      </div>
    );
  };

  return (
    <>
      <MetaPanel
        title="Avukat Arabulucu Öznur İlhan Karabulut"
        descriptionContent="Avukat Arabulucu Öznur İlhan Karabulut Hakkında Bilgiler"
        keywordsContent="arabulucu, avukat, öznur ilhan karabulut"
      />
      <PageTemplate content={<PageContentBenKimim />} />
    </>
  );
}
