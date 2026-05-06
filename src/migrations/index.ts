import * as migration_20260424_180353 from './20260424_180353';
import * as migration_20260425_065232 from './20260425_065232';

export const migrations = [
  {
    up: migration_20260424_180353.up,
    down: migration_20260424_180353.down,
    name: '20260424_180353',
  },
  {
    up: migration_20260425_065232.up,
    down: migration_20260425_065232.down,
    name: '20260425_065232'
  },
];
