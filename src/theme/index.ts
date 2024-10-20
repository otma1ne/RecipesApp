import colors from './colors';
import fonts from './fonts';

export default {
  flexOne: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignSelfStretch: {
    alignSelf: 'stretch',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  flexShrinkOne: {
    flexShrink: 1,
  },

  text14: {
    fontSize: 14,
    fontFamily: fonts.regular,
    lineHeight: 22,
  },

  text14Medium: {
    fontSize: 14,
    fontFamily: fonts.medium,
    lineHeight: 22,
  },

  text14Bold: {
    fontSize: 14,
    fontFamily: fonts.bold,
    lineHeight: 22,
  },
};
