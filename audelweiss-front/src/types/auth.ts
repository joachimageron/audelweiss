export interface User {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  jwt: string; // Add JWT to the user object
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  addressDetail: string | null;
  city: string | null;
  postalCode: string | null;
  country: string | null;
  phone: string | null;
}

export interface AuthResponse {
  jwt: string;
  user: User;
}

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<User>;
}
