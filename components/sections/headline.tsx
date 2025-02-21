import Link from "next/link";
import { ArrowDownRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

// --------- LAYOUT ---------
export function Headline() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="mx-auto font-display max-w-3xl font-bold text-3xl leading-none tracking-tight text-foreground md:text-5xl">
          당신의 브랜드를 성장시키는 SNS 전략
        </h1>
        <h2 className="text-base md:text-xl text-muted-foreground selection:text-muted-foreground/80 tracking-tighter">
          팔로워를 충성 고객으로, 브랜드를 강력한 커뮤니티로!
          <br />
          데이터 기반 SNS 컨설팅으로 최적의 성장을 이끌어 드립니다.
        </h2>
      </div>
    </div>
  );
}
