import React from 'react';
import { MapPin, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FastInquirySectionProps {
  onOpenApplication?: () => void;
}

export const FastInquirySection: React.FC<FastInquirySectionProps> = ({ onOpenApplication }) => {
  const CONSULTATION_URL = 'https://naver.me/F8lHp37r';

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onOpenApplication) {
      onOpenApplication();
    } else {
      window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="fast-inquiry" className="bg-[#ffcc00] text-black py-16 md:py-24 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* LEFT COLUMN: Catchy Banner Text & Contact Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.25] tracking-tight mb-6">
                망설이지 마세요.<br />
                국비교육 전문가가<br />
                친절하게 안내해드립니다.
              </h2>

              <p className="text-base sm:text-lg font-bold text-black/90 leading-relaxed mb-10">
                국비지원 자격 여부부터 취업 및 교육과정까지<br />
                <span className="underline decoration-2 underline-offset-4 decoration-black">
                  무료로 상담해드립니다.
                </span>
              </p>

              {/* Info Contact List */}
              <div className="space-y-6 mb-8">
                {/* Way / Campus Block */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black text-[#ffcc00] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-black/70 block">교육방식</span>
                    <p className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
                      100% 오프라인 (서울)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base font-extrabold text-black/80 mt-2">
                여러분의 꿈을 응원합니다!
              </p>
            </div>

            {/* RIGHT COLUMN: Fast Counseling Application Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div
                id="fast-inquiry-form"
                className="w-full max-w-xl bg-black text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-black/20 flex flex-col items-center text-center relative overflow-hidden group scroll-mt-20"
              >
                {/* Subtle background glow effect */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#ffcc00]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#ffcc00]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffcc00]/15 border border-[#ffcc00]/30 text-[#ffcc00] text-xs font-black tracking-wide mb-6">
                  <Sparkles className="w-3.5 h-3.5 fill-[#ffcc00]" />
                  <span>1:1 맞춤 무료 국비컨설팅</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-snug tracking-tight">
                  지금 바로 1:1 상담받고<br />
                  <span className="text-[#ffcc00]">교육비 95~100% 국비지원</span> 확인하세요!
                </h3>
                <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed mb-8 max-w-md">
                  비전공자 맞춤 커리큘럼, 훈련장려금(매월 최대 80만원 지원), 취업 연계 혜택까지 전문 멘토가 친절하게 1:1 맞춤 안내를 도와드립니다.
                </p>

                {/* The Consultation Application Button */}
                <a
                  href={CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleApplyClick}
                  className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-[#ffcc00] via-[#ffe066] to-[#ffcc00] hover:from-[#ffd633] hover:to-[#ffb700] text-black font-black text-lg sm:text-xl tracking-tight shadow-xl shadow-black/40 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 border border-[#ffeb99] cursor-pointer"
                >
                  <span>상담신청 바로가기</span>
                  <ExternalLink className="w-5 h-5 shrink-0" />
                </a>

                {/* Benefit checklist badges below */}
                <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-6 border-t border-white/10 text-xs text-gray-400 font-bold">
                  <div className="flex items-center justify-center gap-1.5 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ffcc00] shrink-0" />
                    <span>간편 1분 네이버폼 신청</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ffcc00] shrink-0" />
                    <span>선착순 25명 소수정예</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
