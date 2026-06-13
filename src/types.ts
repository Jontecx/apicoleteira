/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InstagramPost {
  id: string;
  username: string;
  location: string;
  imageUrl: string;
  likes: number;
  testimonial: string;
  growth: string;
}

export interface NavItem {
  id: string;
  label: string;
  emoji?: string;
  href: string;
}
