import { policyMetadata } from "../PolicyPage";
import CookiesClient from "./CookiesClient";

type Props = { params: Promise<{ lang: string }> };

export function generateMetadata(props: Props) {
  return policyMetadata(props, "cookies");
}

export default async function Page(props: Props) {
  return <CookiesClient initialLocale={(await props.params).lang} />;
}
