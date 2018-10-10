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

export const loggingSwitch = logged => ({
  type: 'SWITCH_LOGGING',
  logged,
});

export const typReset = () => ({
  type: 'RESET_TYP',
});

export const postsUpdate = posts => ({
  type: 'UPDATE_POSTS',
  posts,
});

export const postsReset = posts => ({
  type: 'RESET_POSTS',
  posts,
});
