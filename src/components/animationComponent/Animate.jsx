import { useInView } from 'react-intersection-observer';
import 'animate.css';
import "./animateCustom.css";

const Animate = ({ children, animation, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animateWrapper transition-opacity duration-1000 ${
        inView ? `animate__animated ${animation}` : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default Animate;

