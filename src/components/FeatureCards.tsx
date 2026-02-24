import { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';

// --- Card 1: Shuffling Stack ---
function FeatureShuffler() {
  const [cards, setCards] = useState([
    { id: 1, title: '注册资本1528万', desc: '雄厚资金池，保障货主货物安全与司机运费结算，抗风险能力强。' },
    { id: 2, title: '20年实体老牌', desc: '成立于2001年，非虚拟皮包公司，证件资质齐全，跑不了的真企业。' },
    { id: 3, title: '千辆级协力车队', desc: '常年合作各型重卡，运力池深厚，随时响应各类大宗物资调配。' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const next = [...prev];
        const last = next.pop()!;
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full">
      {cards.map((card, i) => {
        const isTop = i === 0;
        return (
          <div
            key={card.id}
            className="absolute left-0 right-0 rounded-3xl border border-gray-200 bg-white p-6 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              top: `${i * 1.5}rem`,
              scale: `${1 - i * 0.05}`,
              opacity: 1 - i * 0.2,
              zIndex: 10 - i,
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <ShieldCheck className={`h-8 w-8 ${isTop ? 'text-accent' : 'text-gray-300'}`} />
              <span className="text-xs font-mono text-gray-400">0{card.id} / 实体底盘</span>
            </div>
            <h3 className="text-xl font-bold text-primary">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

// --- Card 2: Typewriter ---
function FeatureTypewriter() {
  const lines = [
    '明码标价，无隐形消费...',
    '运价真实，绝不中途加价...',
    '司机运费，绝不恶意克扣...',
    '结算痛快，说到一定做到...',
  ];
  const [text, setText] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (charIdx < lines[lineIdx].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + lines[lineIdx][charIdx]);
        setCharIdx(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIdx(0);
        setLineIdx(prev => (prev + 1) % lines.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, lineIdx]);

  return (
    <div className="flex h-64 w-full flex-col justify-between rounded-3xl border border-gray-800/50 bg-[#0F172A] p-6 shadow-xl text-white">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono text-gray-400">实时承诺记录</span>
        </div>
        <h3 className="text-xl font-bold mb-4">诚信为本不扯皮</h3>
        <p className="font-mono text-sm text-accent min-h-[3rem]">
          {text}
          <span className="animate-ping inline-block w-2 h-4 bg-white ml-1 align-middle" />
        </p>
      </div>
      <div className="text-xs text-gray-500 font-mono">SYSTEM: PRICING_TRANSPARENT</div>
    </div>
  );
}

// --- Card 3: Scheduler ---
function FeatureScheduler() {
  return (
    <div className="relative h-64 w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-xl overflow-hidden group">
      <h3 className="text-xl font-bold text-primary mb-2">责任到底跟进全</h3>
      <p className="text-sm text-gray-500 mb-6">管家式服务，专人盯办不推诿</p>
      <div className="grid grid-cols-7 gap-1 mb-4 text-center text-xs text-gray-400 font-mono relative z-0">
        <span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className={`h-6 rounded bg-gray-50 flex items-center justify-center transition-colors duration-500 ${
              i === 9 ? 'group-hover:bg-accent group-hover:text-white delay-700' : ''
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes cursorAnim {
          0% { transform: translate(0, 0) scale(1) rotate(-90deg); opacity: 1; }
          25% { transform: translate(80px, 40px) scale(1) rotate(-90deg); opacity: 1; }
          30% { transform: translate(80px, 40px) scale(0.8) rotate(-90deg); opacity: 1; }
          35% { transform: translate(80px, 40px) scale(1) rotate(-90deg); opacity: 1; }
          70% { transform: translate(180px, 90px) scale(1) rotate(-90deg); opacity: 1; }
          80% { opacity: 0; transform: translate(180px, 90px) scale(1) rotate(-90deg); }
          100% { opacity: 0; transform: translate(0, 0) scale(1) rotate(-90deg); }
        }
        .animate-cursor { animation: cursorAnim 4s infinite ease-in-out; }
      `}</style>

      <Navigation className="absolute top-0 left-0 w-6 h-6 text-primary fill-primary drop-shadow-md z-10 animate-cursor" />

      <div className="absolute bottom-4 right-4 bg-green-50 text-green-700 px-3 py-1 rounded text-xs font-bold border border-green-200 flex items-center gap-1">
        <CheckCircle2 className="w-3 h-3" /> 异常已处理
      </div>
    </div>
  );
}

// --- Exported Section ---
export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      <FeatureShuffler />
      <FeatureTypewriter />
      <FeatureScheduler />
    </div>
  );
}
