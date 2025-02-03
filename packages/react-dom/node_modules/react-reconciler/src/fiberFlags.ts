export type Flags = number;
export const NoFlags = 0b0_000_000;
export const Placement = 0b0_000_001;
export const Update = 0b0_000_010;
export const ChildDeletion = 0b0_000_100;

export const MutationMask = Placement | Update | ChildDeletion;
