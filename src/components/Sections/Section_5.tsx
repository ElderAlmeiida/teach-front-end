import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  start: number;
  end: number;
  duration: number;
  onComplete: () => void;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration, onComplete }) => {
  const [count, setCount] = useState(start);
  const frame = useRef(0);
  const totalFrames = duration * 60;

  useEffect(() => {
    const animate = () => {
      frame.current += 1;
      const progress = Math.min(frame.current / totalFrames, 1);
      const newVal = Math.floor(start + (end - start) * progress);
      setCount(newVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

interface StatisticItemProps {
  imageUrl: string;
  value: number;
  label: string;
  duration: number;
  shouldShorten?: boolean;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  imageUrl,
  value,
  label,
  duration,
  shouldShorten = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (itemRef.current) observer.observe(itemRef.current);

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  const formatShort = (val: number) => {
    if (val >= 1_000_000) return `${Math.floor(val / 1_000_000)}M`;
    if (val >= 1_000) return `${Math.floor(val / 1_000)}K`;
    return val.toString();
  };

  return (
    <div ref={itemRef} className="text-center">
      <div className="flex justify-center mb-2">
        <img src={imageUrl} alt={label} className="w-10 h-10" />
      </div>
      <motion.div style={{ fontSize: '2em', fontWeight: 'bold' }}>
        {isVisible && !hasEnded && (
          <Counter
            start={0}
            end={value}
            duration={duration}
            onComplete={() => setHasEnded(true)}
          />
        )}
        {isVisible && hasEnded && shouldShorten && <span>{formatShort(value)}</span>}
        {isVisible && hasEnded && !shouldShorten && <span>{value.toLocaleString()}</span>}
      </motion.div>
      <p className="text-sm">{label}</p>
    </div>
  );
};

const AnimatedStatistics: React.FC = () => {
  return (
    <div className="bg-dark-blue text-yellow py-12 flex flex-col md:flex-row text-mobile-h1 justify-around items-center  gap-6">

      <StatisticItem
        imageUrl="https://res.cloudinary.com/diuvgclpk/image/upload/v1746915100/Vector_f2p6ak.png"
        value={195}
        label="user countries"
        duration={2}
      />
      <StatisticItem
        imageUrl="https://res.cloudinary.com/diuvgclpk/image/upload/v1746915089/diamond_wixg2h.png"
        value={1_000_000}
        label="valued teachers"
        duration={3}
        shouldShorten={true}
      />
      <StatisticItem
        imageUrl="https://res.cloudinary.com/diuvgclpk/image/upload/v1746915027/Icon_1_iazetw.png"
        value={17_000_000}
        label="happy students"
        duration={4}
        shouldShorten={true}
      />
    </div>
  );
};

export default AnimatedStatistics;










