import React, { useState, useEffect } from 'react';
import { FiHeart, FiShare2, FiAlertTriangle, FiShield } from 'react-icons/fi';
import { LuFlaskConical } from 'react-icons/lu';

const OliverMascot = () => (
  <svg width="32" height="36" viewBox="0 0 38 42" fill="none">
    <path d="M19 4 C19 4 22 1 26 2 C26 2 23 5 19 6" fill="#6b8f2a" />
    <ellipse cx="19" cy="24" rx="14" ry="16" fill="#6b8f2a" />
    <ellipse cx="19" cy="22" rx="11" ry="13" fill="#7fa832" />
    <circle cx="15" cy="21" r="2.5" fill="#1a2e05" />
    <circle cx="23" cy="21" r="2.5" fill="#1a2e05" />
    <circle cx="15.8" cy="20.2" r="0.8" fill="white" />
    <circle cx="23.8" cy="20.2" r="0.8" fill="white" />
    <path d="M15 26 Q19 29.5 23 26" stroke="#1a2e05" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

const ImagePlaceholder = ({ index }) => {
  const colors = ['#fef3c7', '#d1fae5', '#dbeafe', '#fce7f3'];
  const iconColors = ['#92400e', '#065f46', '#1e40af', '#831843'];
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: colors[index % colors.length] }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" fill={iconColors[index % iconColors.length]} opacity="0.3" />
        <circle cx="8.5" cy="8.5" r="2" fill={iconColors[index % iconColors.length]} opacity="0.6" />
        <path d="M21 15l-5-5L5 21" fill={iconColors[index % iconColors.length]} opacity="0.4" />
      </svg>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: 'Fig and Olive Crackers, Fig and Olive',
    brand: 'Lesley Stowe',
    score: 46,
    scoreLabel: 'Poor',
    dotColor: '#ef4444',
    oliverSays: '"This product\'s low score mainly comes from the processed sugars like honey and brown sugar, which can impact your family\'s health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren\'t ideal for your goal of avoiding processed foods, making this a choice to consider more carefully."',
  },
  {
    id: 2,
    name: 'Cacao-nectar Bar, Oregon Peppermint',
    brand: "Honey Mama's",
    score: 85,
    scoreLabel: 'Excellent',
    dotColor: '#4caf50',
    oliverSays: '"This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut, but it still has processed sugars from the honey, which can be a concern when looking to avoid processed foods for your family. It\'s a nice option for an occasional treat, but just keep in mind the sugar content when considering it for your kids!"',
  },
  {
    id: 3,
    name: 'San Pellegrino Sparkling Natural Mineral Water (...',
    brand: 'Sanpellegrino',
    score: 52,
    scoreLabel: 'Limit',
    dotColor: '#f9a825',
    breakdown: [
      { label: 'Contaminants', value: '7', color: '#ef4444', icon: 'warning' },
      { label: 'Fluoride', value: 'Yes', color: '#ef4444', icon: 'flask' },
      { label: 'PFAS', value: 'No', color: '#4caf50', icon: 'shield' },
    ],
  },
  {
    id: 4,
    name: 'Larabar Chocolate Chip Cookie Dough Fruit & Nu...',
    brand: 'Larabar',
    brandTag: 'General Mills',
    score: 92,
    scoreLabel: 'Excellent',
    dotColor: '#4caf50',
    oliverSays: '"This product, which includes ingredients like cashews and dates, scored well mainly because it doesn\'t contain processed sugars, harmful additives, or seed oils, making it a healthier choice for your family, especially as an occasional treat. The slight deduction for processing indicates it\'s not entirely raw, but it\'s still a good option that aligns with your goals of avoiding overly processed foods."',
  },
];

const BreakdownIcon = ({ type }) => {
  if (type === 'warning') return <FiAlertTriangle size={14} color="#f9a825" />;
  if (type === 'flask')   return <LuFlaskConical size={14} color="#6b7280" />;
  if (type === 'shield')  return <FiShield size={14} color="#6b7280" />;
  return null;
};

const ProductCard = ({ product, index }) => (
  <div className="bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.08)' }}>
    <div className="relative h-[110px] bg-[#f3f4f6] flex items-center justify-center overflow-hidden">
      <div className="flex items-center gap-2 px-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`rounded-[10px] overflow-hidden flex-shrink-0 ${i === 2 ? 'w-[80px] h-[80px]' : 'w-[56px] h-[56px] opacity-40'}`}
          >
            <ImagePlaceholder index={(index + i) % 4} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#d1d5db] rounded-full" />
    </div>

    <div className="p-4">
      <div className="flex items-start gap-3">
        <div className="w-[52px] h-[52px] rounded-[10px] bg-[#f3f4f6] flex-shrink-0 overflow-hidden">
          <ImagePlaceholder index={index} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-bold text-[#1a2e05] leading-snug line-clamp-2">
            {product.name}
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <p className="text-[12px] text-[#6b7280]">{product.brand}</p>
            {product.brandTag && (
              <span className="inline-flex items-center gap-1 bg-[#eff6ff] text-[#3b82f6] text-[10px] font-semibold px-1.5 py-[2px] rounded-[4px]">
                {product.brandTag}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <div className="w-[11px] h-[11px] rounded-full" style={{ backgroundColor: product.dotColor }} />
          <div>
            <span className="text-[17px] font-extrabold text-[#1a2e05] leading-none">{product.score}/100</span>
            <p className="text-[11px] text-[#6b7280] leading-none mt-[1px]">{product.scoreLabel}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiHeart size={18} color="#9ca3af" />
          {!product.breakdown && <FiShare2 size={18} color="#9ca3af" />}
        </div>
      </div>

      {product.oliverSays && (
        <div className="mt-3 bg-[#f9fafb] rounded-[12px] p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <OliverMascot />
            <span className="text-[12.5px] font-bold text-[#1a2e05]">Oliver Says:</span>
          </div>
          <p className="text-[11.5px] text-[#4b5563] leading-relaxed">{product.oliverSays}</p>
        </div>
      )}

      {product.breakdown && (
        <div className="mt-3 flex flex-col gap-0">
          {product.breakdown.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-between py-[9px] ${i < product.breakdown.length - 1 ? 'border-b border-[#f3f4f6]' : ''}`}
            >
              <div className="flex items-center gap-2 text-[12.5px] text-[#6b7280]">
                <BreakdownIcon type={item.icon} />
                {item.label}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12.5px] font-semibold text-[#1a2e05]">{item.value}</span>
                <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: item.color }} />
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-[13px] font-bold text-[#1a2e05] mt-3">Breakdown</p>
    </div>
  </div>
);

const PhoneMockup = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-start">
      <div
        className="absolute hidden md:block top-[60px] opacity-30 scale-[0.88] rounded-[32px] bg-white"
        style={{ width: '100px', height: '220px', left: 'calc(50% - 260px)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
      />
      <div
        className="absolute hidden md:block top-[60px] opacity-30 scale-[0.88] rounded-[32px] bg-white"
        style={{ width: '100px', height: '220px', right: 'calc(50% - 260px)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
      />

      <div
        className="relative bg-white rounded-[44px] overflow-hidden z-10"
        style={{
          width: 'min(320px, 86vw)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.16), 0 0 0 7px #e4ecd6, 0 0 0 8px #cfdcb2',
        }}
      >
        <div className="flex justify-center mt-3 mb-1">
          <div
            className="bg-[#111] rounded-full flex items-center justify-end pr-[6px]"
            style={{ width: '110px', height: '28px' }}
          >
            <div className="w-[12px] h-[12px] rounded-full bg-[#1c2e0e] border border-[#2d4a0e]" />
          </div>
        </div>

        <div style={{ maxHeight: '480px', overflowY: 'auto', scrollbarWidth: 'none' }}>
          <ProductCard product={products[activeIndex]} index={activeIndex} />
        </div>

        <div className="flex justify-center py-[8px]">
          <div className="w-[90px] h-[4px] bg-[#e5e7eb] rounded-full" />
        </div>
      </div>

      <div className="absolute flex gap-[6px]" style={{ bottom: '-32px', left: '50%', transform: 'translateX(-50%)' }}>
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="rounded-full transition-all duration-300 border-none cursor-pointer"
            style={{
              width: i === activeIndex ? '20px' : '8px',
              height: '8px',
              backgroundColor: i === activeIndex ? '#1a2e05' : '#b5c99a',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneMockup;