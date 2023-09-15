import MetaPanel from "@/components/MetaPanel";
import ArabulucuPanel from "@/components/ArabulucuPanel";
import PageTemplate from "@/components/PageTemplate";
import Arabuluculuk from "./Arabuluculuk";

//- Kullanılmıyor. (Normalde açılış sayfası olarak kullanılır ama biz açılışı Arabulucuk sayfasına yönlendiriyoruz
export default function Home() {
  return (
    <>
      {/* <MetaPanel
        title="Arabulucuyuz.org"
        name="Arabulucu ve Avukat"
        content="Arabuluculuk ve İcra Hukuku Konularında Uzman"
      />
      <PageTemplate content={<ArabulucuPanel />} /> */}
      <Arabuluculuk />
    </>
  );
}
