import Link from "next/link";

import { ReactBadge } from "@/components/badges/react";
import { AnimatedLink } from "@/components/shared/animated-link";
import { Section, SectionTitle } from "@/components/shared/section";

// --------- COMPONENT LAYOUT ---------
export function About() {
  return (
    <Section>
      <SectionTitle text="Meet me" />
      <div className="grid grid-cols-1 gap-4 leading-relaxed md:leading-normal tracking-tight text-muted-foreground selection:text-muted-foreground/80">
        <p className="font-semibold md:text-lg">안녕하세요, smartsm입니다!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <p className="font-normal opacify-80">
            소셜미디어 컨설팅 전문가로서, 브랜드의 성장을 돕고 있습니다. 데이터
            기반 전략과 감각적인 콘텐츠로 팔로워를 팬으로, 팬을 고객으로 만들죠!
          </p>
          <p className="font-normal opacify-80">
            작은 디테일이 큰 차이를 만든다고 믿습니다. SNS 운영이 막막하다면,
            SmartSM과 함께 효율적이고 창의적인 성장을 경험하세요.
          </p>
          <p className="font-normal opacify-80">
            소셜미디어는 단순한 홍보 도구가 아닙니다. 올바른 전략과 실행이
            더해질 때, 브랜드의 정체성이 되고, 고객과의 강력한 연결고리가
            됩니다.
          </p>
          <p className="font-normal opacify-80">
            SmartSM은 트렌드와 데이터를 기반으로 맞춤형 SNS 전략을 제공합니다.
            지금, 당신의 브랜드를 한 단계 더 성장시켜보세요! 🚀
          </p>
        </div>
        <div className="flex justify-end">
          <Link
            href="/about"
            className="group flex items-center relative w-fit font-semibold after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 hover:after:left-0 hover:after:right-auto"
          >
            <AnimatedLink href="/about">더 알아보기</AnimatedLink>
          </Link>
        </div>
      </div>
    </Section>
  );
}
