export const titleChange = title => ({
  type: 'UPDATE_TITLE',
  title,
});

export const typChange = typ => ({
  type: 'UPDATE_TYP',
  typ,
});

export const filterSwitch = typFilter => ({
  type: 'SWITCH_FILTER',
  typFilter,
});
