import HomeClient from "./HomeClient";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  return <HomeClient lang={(await params).lang} />;
}
