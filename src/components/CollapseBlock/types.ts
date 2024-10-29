export interface Technology {
    title: string;
    alt?: string;
    description: string;
    imageUrl?: string;
    key: string;
    code?: string;
  }

  export interface TechnologyCollapseItem {
    key: string,
    label: string,
    children: JSX.Element,
  }
  