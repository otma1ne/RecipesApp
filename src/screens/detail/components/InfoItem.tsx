import {StyleSheet, Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';

interface InfoItemProps {
  icon: React.FC<SvgProps>;
  iconColor: string;
  label: string;
  value: number | string | undefined;
}

export default function InfoItem({
  icon: Icon,
  iconColor,
  label,
  value,
}: InfoItemProps) {
  return (
    <View style={styles.item}>
      <Icon width={26} height={26} stroke={iconColor} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    marginTop: 8,
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: colors.secondary,
  },
  label: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: fonts.medium,
  },
});
