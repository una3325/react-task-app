import { createGlobalTheme, style } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    main: '#2F4F4F',
    mainDarker: '#2C3E50',
    mainFaded: '#778899',
    mainFadedBright: '#B0C4DE',
    list: '	rgb(235,236,240)',
    task: 'rgb(255,255,255)',
    taskHover: 'rgb(245,245,245)',
    brightText: 'rgb(255,255,255)',
    darkText: 'rgb(24,42,77)',
    secondaryDarkText: 'rgb(94,108,132)',
    secondaryDarkTextHover: 'rgb(218,219,226)',
    selectedTab: '#708090',
    updateButton: '#5F9EA0',
    deleteButton: '#8B0000',
  },

  fontSizeing: {
    T1: '32px',
    T2: '24px',
    T3: '18px',
    T4: '14px',
    P1: '12px',
  },
  spacing: {
    small: '5px',
    medium: '10px',
    big1: '20px',
    big2: '15px',
    listSpacing: '30px',
  },
  font: {
    body: 'arial',
  },
  shadow: {
    basic: '4px 4px 8px 0px rgba(34, 60, 80,0.2)',
  },
  minWidth: {
    list: '250px',
  },
});

export const appContainer = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: 'max-content',
  width: '100vw',
});

export const board = style({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
});
export const buttons = style({
  marginTop: 'auto',
  paddingLeft: vars.spacing.big2,
});
