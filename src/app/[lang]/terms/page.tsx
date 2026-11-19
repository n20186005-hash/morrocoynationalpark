import { PolicyPage, policyMetadata } from "../PolicyPage";

type Props = { params: Promise<{ lang: string }> };

export function generateMetadata(props: Props) {
  return policyMetadata(props, "terms");
}

export default async function Page(props: Props) {
  return PolicyPage(props, "terms");
}
