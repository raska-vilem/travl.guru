/** * Generated TypeScript types for Directus Schema * Generated on: 2026-01-11T09:51:12.327Z */
export interface Datum {
  id: string;
}

export interface HowToGuide {
  id: number;
  content: string;
  locations: number[] | HowToGuidesLocation[];
  name: string;
}

export interface HowToGuidesLocation {
  id: number;
  how_to_guides_id: number | HowToGuide;
  location_id: number | Location;
}

export interface Location {
  id: number;
  location_image: string | DirectusFile;
  slug: string;
  description: string;
  name: string;
  relation_id: unknown;
}

export interface LocationRelationId {
  id: number;
  location_id: number | Location;
  item: string;
  collection: string;
}

export interface MainInfo {
  id: number;
  seo: Record<string, unknown>;
  disclaimer: string;
  welcome_title: string;
  welcome_text: string;
  welcome_image: string | DirectusFile;
}

export interface Scam {
  id: number;
  content: string;
  locations: number[] | ScamLocation[];
  scam_type: number | ScamType;
}

export interface ScamLocation {
  id: number;
  scam_id: number | Scam;
  location_id: number | Location;
}

export interface ScamType {
  id: number;
  type: string;
  description: string;
  scam_icon: string;
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
  data: Datum[];
  how_to_guides: HowToGuide[];
  how_to_guides_location: HowToGuidesLocation[];
  location: Location[];
  location_relation_id: LocationRelationId[];
  main_info: MainInfo;
  scam: Scam[];
  scam_location: ScamLocation[];
  scam_type: ScamType[];
  directus_files: DirectusFile[];
}

