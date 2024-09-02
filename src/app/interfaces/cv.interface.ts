export interface CvTimeLineItemInterface {
  start: number;
  end?: number;
  title?: number;
  descr: string[];
  location?: string;
  diploma?: boolean;
  duration?: string;
}

export interface CvSectionIntercace {
  title: string;
  timeline?: CvTimeLineItemInterface[];
  languages?: {
    max: number;
    items: [language: string, level: number][];
  };
}

export interface CvContactItemInterface {
  title: string;
  text?: string;
  email?: string[];
  url?: string;
}

export interface CvInterface {
  info: {
    name: string;
    title: string;
    contact: CvContactItemInterface[];
  };
  intro: string;
  skills: string[];
  sections: [];
}
