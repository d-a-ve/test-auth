// Generated by https://quicktype.io
interface HashOptions {
  type: string;
  memoryCost: number;
  timeCost: number;
  threads: number;
}

interface Prefs {}

interface Target {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  userId: string;
  providerId: string;
  providerType: string;
  identifier: string;
}

export interface Session {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  password: string;
  hash: string;
  hashOptions: HashOptions;
  registration: string;
  status: boolean;
  labels: string[];
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  mfa: boolean;
  prefs: Prefs;
  targets: Target[];
  accessedAt: string;
}
