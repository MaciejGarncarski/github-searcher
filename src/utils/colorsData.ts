import { Color } from '@/types/types';

type ColorRecord = Record<Color, string>;

export const TAG_COLORS: ColorRecord = {
  blue: 'bg-blue-300',
  red: 'bg-red-300',
  yellow: 'bg-yellow-300',
  green: 'bg-green-300',
  white: 'bg-slate-300',
};

export const SHIELD_COLORS: ColorRecord = {
  blue: 'bg-blue-900',
  red: 'bg-red-900',
  yellow: 'bg-yellow-900',
  green: 'bg-green-900',
  white: 'bg-slate-500',
};

export const BG_COLORS: ColorRecord = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  white: 'bg-slate-300',
};

export const TEXT_COLORS: ColorRecord = {
  blue: 'dark:text-blue-500 text-blue-400',
  red: 'dark:text-red-500 text-red-400',
  yellow: 'dark:text-yellow-500 text-yellow-400',
  green: 'dark:text-green-500 text-green-400',
  white: 'dark:text-slate-300 text-slate-400',
};

export const BORDER_COLORS: ColorRecord = {
  blue: 'border-blue-300',
  red: 'border-red-300',
  yellow: 'border-yellow-200',
  green: 'border-green-200',
  white: 'border-slate-300',
};

export const BUTTON_COLORS: ColorRecord = {
  blue: 'bg-blue-300',
  red: 'bg-red-300',
  yellow: 'bg-yellow-200',
  green: 'bg-green-200',
  white: 'bg-slate-300',
};

export const ACTIVE_BUTTON_COLORS: ColorRecord = {
  blue: 'bg-blue-200',
  red: 'bg-red-200',
  yellow: 'bg-yellow-200',
  green: 'bg-green-200',
  white: 'bg-slate-300',
};
