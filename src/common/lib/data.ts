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
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Services',
    id: 'services',
  },
  {
    name: 'Projects',
    id: 'projects',
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
    icon: BriefcaseBusinessIcon,
    title: 'Senior Developer',
    company: 'Tech Company',
    location: 'Remote',
    description: 'Led development of multiple projects',
    date: '2022 - Present',
  },
  {
    icon: BriefcaseBusinessIcon,
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
  },
] as const;
