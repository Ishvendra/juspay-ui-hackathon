export interface MenuItem {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children?: MenuItem[];
}
