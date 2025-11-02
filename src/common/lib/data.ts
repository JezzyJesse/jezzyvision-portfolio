import React from 'react';
import { BookIcon, BriefcaseBusinessIcon, VideoIcon, MailIcon } from 'lucide-react';

// Navigation Links
export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Services',
    id: 'services',
  },
  {
    name: 'Videos',
    id: 'videos',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

// Skills Data
export const skillsData = [
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'TypeScript' },
  { skill: 'JavaScript' },
  { skill: 'Tailwind CSS' },
  { skill: 'HTML & CSS' },
] as const;

// Experience Data
export const experiencesData = [
  {
    title: 'Senior Developer',
    company: 'Tech Company',
    location: 'Remote',
    description: 'Led development of multiple projects',
    date: '2022 - Present',
  },
  {
    title: 'Front-end Developer',
    company: 'Web Studio',
    location: 'City',
    description: 'Developed responsive web applications',
    date: '2020 - 2022',
  },
] as const;

// Projects Data
export const projectsData = [
  {
    title: 'JezzyVision Portfolio',
    description: 'Professional portfolio website for video production',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://jezzyvision.com',
    image: '',
  },
  {
    title: 'Content Management System',
    description: 'Custom CMS for managing multimedia content',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    link: '',
    image: '',
  },
] as const;

// Services Data
export const servicesData = [
  {
    title: 'Video Production',
    description: 'Professional video production and editing services with stunning visual effects.',
    icon: React.createElement(VideoIcon),
  },
  {
    title: 'Content Creation',
    description: 'Engaging content creation tailored to your brand identity and vision.',
    icon: React.createElement(BookIcon),
  },
  {
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies to grow your online presence effectively.',
    icon: React.createElement(BriefcaseBusinessIcon),
  },
] as const;

// Videos Gallery - Empty, ready for content
export const videosData = [
  {
    id: 'video-1',
    title: 'Video Title Here',
    description: 'Video description coming soon',
    url: '',
    thumbnail: '',
  },
  {
    id: 'video-2',
    title: 'Another Video',
    description: 'Video description coming soon',
    url: '',
    thumbnail: '',
  },
] as const;

// Contact Information
export const contactData = {
  email: 'contact@jezzyvision.com',
  phone: '+1 (555) 000-0000',
  address: 'Your City, Your Country',
  social: {
    twitter: 'https://twitter.com/jezzyvision',
    linkedin: 'https://linkedin.com/company/jezzyvision',
    instagram: 'https://instagram.com/jezzyvision',
    youtube: 'https://youtube.com/@jezzyvision',
  },
} as const;

// Portfolio Metadata
export const portfolioMetadata = {
  name: 'JezzyVision',
  tagline: 'Professional Visual Content & Digital Solutions',
  description: 'Welcome to JezzyVision - Your partner for innovative video production, engaging content creation, and effective digital strategies.',
  author: 'JezzyVision Team',
  keywords: 'video production, content creation, digital strategy, visual media',
} as const;

// Theme Colors for JezzyVision
export const themeColors = {
  primary: '#6366f1', // Indigo
  secondary: '#ec4899', // Pink
  accent: '#3b82f6', // Blue
  dark: '#1f2937', // Dark Gray
  light: '#f9fafb', // Light Gray
} as const;

// Animation configuration
export const animationConfig = {
  duration: 0.5,
  delay: 0.1,
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
} as const;
