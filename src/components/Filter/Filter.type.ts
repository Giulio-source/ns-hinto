export type FilterProp = {
  filters: React.ReactElement;
  disabled: boolean;
  onFilter: () => void;
  activeFilters: string[];
};
