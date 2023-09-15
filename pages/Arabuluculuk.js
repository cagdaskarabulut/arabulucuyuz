import MetaPanel from "@/components/MetaPanel";
import ArabulucuPanel from "@/components/ArabulucuPanel";
import PageTemplate from "@/components/PageTemplate";

//- Açılış sayfası , Hizmetlerimiz sayfası
export default function Arabuluculuk() {
  return (
    <>
      <MetaPanel
        title="Arabulucuyuz.org"
        name="Arabulucu ve Avukat"
        nameContent="Arabuluculuk ve İcra Hukuku Konularında Uzman"
      />
      <PageTemplate content={<ArabulucuPanel />} />
    </>
  );
}
