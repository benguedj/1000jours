/* eslint-disable sort-keys-fix/sort-keys-fix */
import { scaleNormalize } from "../utils";

const Sizes = {
  dxxxs: scaleNormalize(10),
  xxxs: scaleNormalize(10),
  xxs: scaleNormalize(12),
  xs: scaleNormalize(14),
  sm: scaleNormalize(16),
  md: scaleNormalize(18),
  mmd: scaleNormalize(20),
  lg: scaleNormalize(22),
  xl: scaleNormalize(24),
  xxl: scaleNormalize(28),
  xxxl: scaleNormalize(36),
  xxxxl: scaleNormalize(46),
  giant: scaleNormalize(300),
};

export default Sizes;