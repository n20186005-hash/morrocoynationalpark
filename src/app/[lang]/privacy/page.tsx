import { PolicyPage, policyMetadata } from "../PolicyPage";

type Props = { params: Promise<{ lang: string }> };

export function generateMetadata(props: Props) {
  return policyMetadata(props, "privacy");
}

export default async function Page(props: Props) {
  return PolicyPage(props, "privacy");
}
