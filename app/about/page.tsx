import Link from "next/link";
import { Section, SectionTitle } from "@/components/shared/section";

// --------- 페이지 레이아웃 ---------
export default function AboutPage() {
  return (
    <Section>
      <SectionTitle text="smartsm은" />
      <div className="grid grid-cols-1 gap-4">
        <p className="text-base text-justify text-muted-foreground tracking-tight font-normal">
          안녕하세요! 저는 소셜미디어 컨설팅 전문가 <strong>smartsm</strong>
          입니다. 브랜드의 SNS 성장을 돕고, 데이터를 기반으로 최적의 마케팅
          전략을 설계합니다. 현재는{" "}
          <Link
            href="https://routin.co.kr"
            className="underline decoration-dotted decoration-1 underline-offset-4 text-muted-foreground/90"
          >
            <strong>routin</strong>
          </Link>
          에서 엔지니어로 활동하며, 디지털 마케팅과 기술을 접목한 솔루션을
          개발하고 있습니다.
        </p>
        <p className="text-base text-justify text-muted-foreground tracking-tight font-normal">
          저는 단순한 홍보가 아닌{" "}
          <strong>브랜드의 정체성을 강화하는 콘텐츠</strong>를 만드는 것이
          목표입니다. 다양한 기술과 데이터 분석을 활용해{" "}
          <strong>트렌드에 맞는 SNS 전략</strong>을 제공합니다. 감각적인
          디자인과 효과적인 스토리텔링이 결합된 콘텐츠는 브랜드의 차별화를
          만들어 냅니다.
        </p>
        <p className="text-base text-justify text-muted-foreground tracking-tight font-normal">
          SNS는 단순한 플랫폼이 아닙니다. 제대로 활용하면{" "}
          <strong>브랜드의 가장 강력한 성장 엔진</strong>이 될 수 있습니다. 저는
          항상 새로운 마케팅 트렌드와 UX/UI 디자인을 연구하며, 최신 알고리즘과
          소비자 행동 분석을 통해 **최적의 SNS 컨설팅 솔루션**을 제공합니다.
          지금, SmartSM과 함께 브랜드를 성장시켜보세요! 🚀
        </p>
      </div>
    </Section>
  );
}
