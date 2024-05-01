'use client'
import { Variants } from "framer-motion";

interface NavVariant extends Variants {
  hidden: {
    opacity: number;
    y: number | string;
    transition: {
      type: string;
      stiffness?: number;
      damping?: number;
      delay?: number;
    };
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness?: number;
      damping?: number;
      delay?: number;
    };
  };
}

export const navVariants: NavVariant = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
    },
  },
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

type StaggerContainerFunction = (staggerChildren: number, delayChildren: number) => Variants;

export const staggerContainer: StaggerContainerFunction = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

interface TextVariant {
  hidden: {
    y: number;
    opacity: number;
  };
  show: {
    y: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
}

export const textVariant = (delay: number): TextVariant => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

interface TextContainerVariant {
  hidden: {
    opacity: number;
  };
  show: (i?: number) => {
    opacity: number;
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
}

export const textContainer: TextContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

interface TextVariant2 extends Variants {
  hidden: {
    opacity: number;
    y: number;
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      ease: string;
    };
  };
}

export const textVariant2: TextVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

interface PlanetVariant {
  hidden: {
    x: string;
    rotate: number;
  };
  show: {
    x: number;
    rotate: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
}

export const planetVariants = (direction: string): PlanetVariant => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

interface ZoomVariant {
  hidden: {
    scale: number;
    opacity: number;
  };
  show: {
    scale: number;
    opacity: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
}

export const zoomIn = (delay: number, duration: number): ZoomVariant => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

interface FooterVariant {
  hidden: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      damping: number;
    };
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      delay: number;
    };
  };
}

export const footerVariants: FooterVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
