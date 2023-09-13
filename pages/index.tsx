import MetaPanel from "@/components/MetaPanel";
import Arabuluculuk from "@/components/Arabuluculuk";
import PageTemplate from "@/components/PageTemplate";

//- Açılış sayfası , Hizmetlerimiz sayfası
export default function Home() {
  return (
    <>
      <MetaPanel title="Arabulucuyuz.org"
      name="Arabulucu ve Avukat" 
      content="Arabuluculuk ve İcra Hukuku Konularında Uzman" />
      <PageTemplate content={<Arabuluculuk />}/>
    </>
  );
}
