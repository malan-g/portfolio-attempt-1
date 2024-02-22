/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    pages: Page;
    experiences: Experience;
    projects: Project;
    resources: Resource;
    skills: Skill;
  };
  globals: {
    'main-menu': MainMenu;
    socials: Social;
  };
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Page {
  id: string;
  title?: string;
  loadTemplate?: 'no' | 'yes';
  template?: (
    | {
        heroContent?: {
          heading?: string;
          subheading?: string;
        };
        status?: string;
        id?: string;
        blockName?: string;
        blockType: 'homePage';
      }
    | {
        heroContent?: {
          heading?: string;
          subheading?: string;
        };
        experiences?: {
          experience: string | Experience;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'workExperiencePage';
      }
    | {
        heroContent?: {
          heading?: string;
          subheading?: string;
        };
        id?: string;
        blockName?: string;
        blockType: 'projectsPage';
      }
    | {
        heroContent?: {
          heading?: string;
          subheading?: string;
        };
        id?: string;
        blockName?: string;
        blockType: 'resourcesPage';
      }
  )[];
  slug?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Experience {
  id: string;
  title?: string;
  description?: string;
  skills?: string[] | Skill[];
  slug?: string;
  startDate?: string;
  endDate?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Skill {
  id: string;
  title?: string;
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Project {
  id: string;
  title?: string;
  description?: string;
  skills?: string[] | Skill[];
  slug?: string;
  isComplete?: 'no' | 'yes';
  completionDate?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Resource {
  id: string;
  title?: string;
  description?: string;
  source?: {
    title?: string;
    link?: string;
  };
  slug?: string;
  updatedAt: string;
  createdAt: string;
}
export interface MainMenu {
  id: string;
  menuItems?: {
    link: {
      label: string;
      page?: string | Page;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Social {
  id: string;
  socials?: {
    platform?: {
      name?: string;
      link?: string;
      svg?: string | Media;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
