import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { AiFillApple } from 'react-icons/ai';
import PhoneMockup from './PhoneMockup';

const avatarImages = [
  'https://i.pravatar.cc/40?img=11',
  'https://i.pravatar.cc/40?img=22',
  'https://i.pravatar.cc/40?img=33',
  'https://i.pravatar.cc/40?img=44',
];

const HeroSection = () => {
  return (
    <section className="w-full bg-[#f0f4e8] pt-6 pb-24 overflow-hidden">
      <div className="max-w-[760px] mx-auto px-5 md:px-8 text-center">

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex" style={{ marginRight: '4px' }}>
            {avatarImages.map((src, i) => (
              <div
                key={i}
                className="w-[36px] h-[36px] rounded-full border-[2.5px] border-[#f0f4e8] overflow-hidden bg-[#d1d5db]"
                style={{ zIndex: 4 - i, marginLeft: i === 0 ? 0 : '-10px' }}
              >
                <img
                  src={src}
                  alt="user avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
            <div
              className="w-[36px] h-[36px] rounded-full border-[2.5px] border-[#f0f4e8] bg-[#d8e5c0] flex items-center justify-center text-[10px] font-bold text-[#3d5c1a]"
              style={{ zIndex: 0, marginLeft: '-10px' }}
            >
              3k+
            </div>
          </div>
          <span className="text-[13.5px] text-[#6b7280] font-medium">
            Trusted by thousands of healthy families
          </span>
        </div>

        <h1
          className="font-extrabold text-[#1a2e05] leading-[1.08] tracking-tight mb-5"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)' }}
        >
          The Safest Way to<br />Shop for Groceries
        </h1>

        <p
          className="text-[#6b7280] font-medium leading-relaxed max-w-[460px] mx-auto mb-8"
          style={{ fontSize: 'clamp(14px, 2vw, 16.5px)' }}
        >
          Use the Olive Food Scanner App to Instantly Eliminate
          Harmful Ingredients from Your Family's Diet and Get
          Expert-Backed Food Insights
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="flex items-center gap-[10px] bg-[#1a2e05] text-white text-[14.5px] font-bold px-6 py-[13px] rounded-full hover:bg-[#2d4a0e] transition-colors border-none cursor-pointer">
            <AiFillApple size={18} color="white" />
            Download for iOS
          </button>
          <button className="flex items-center gap-2 text-[14.5px] font-bold text-[#1a2e05] hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer">
            Join the Olive Community
            <FiArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        <div className="relative pb-10">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;