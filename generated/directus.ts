/** * Generated TypeScript types for Directus Schema * Generated on: 2026-01-07T10:41:49.279Z */
export interface Global {
  id: number;
  seo: Record<string, unknown>;
}

export interface Welcome {
  id: number;
  /** Title of the main landing page */
  title: string;
  /** Subtitle on landing page */
  subtitle: string;
  hero_image: string | DirectusFile;
}

export interface DirectusFile {
  id: string;
  storage: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  folder: string | DirectusFolder;
  uploaded_by: string | DirectusUser;
  uploaded_on: string;
  modified_by: string | DirectusUser;
  modified_on: string;
  charset: string;
  filesize: number;
  width: number;
  height: number;
  duration: number;
  embed: string;
  description: string;
  location: string;
  tags: string;
  metadata: string;
  created_on: string;
  focal_point_x: string;
  focal_point_y: string;
  tus_id: string;
  tus_data: string;
}

export interface DirectusUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  location: string;
  title: string;
  description: string;
  tags: string;
  avatar: string;
  language: string;
  tfa_secret: boolean;
  status: string;
  role: string;
  token: string;
  last_access: string;
  last_page: string;
  provider: string;
  external_identifier: string;
  auth_data: string;
  email_notifications: boolean;
  appearance: string;
  theme_dark: string;
  theme_light: string;
  theme_light_overrides: string;
  theme_dark_overrides: string;
  policies: string;
}

export interface DirectusFolder {
  id: string;
  name: string;
  parent: string | DirectusFolder;
}

export interface DirectusRole {
  id: string;
  name: string;
  icon: string;
  description: string;
  admin_access: boolean;
  app_access: boolean;
  children: string;
  users: string;
  parent: string | DirectusRole;
  policies: string;
}

export interface ApiCollections {
  global: Global;
  welcome: Welcome;
  directus_files: DirectusFile[];
}

