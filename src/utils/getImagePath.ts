/**
 * Helper function to generate correct image paths for GitHub Pages
 * Works on both localhost and production (GitHub Pages)
 * 
 * Usage:
 * const imagePath = getImagePath('/Experienceimages/image1.png')
 * // On localhost: /Experienceimages/image1.png
 * // On GitHub Pages: /sataniarman-art/Experienceimages/image1.png
 */

export const getImagePath = (path: string): string => {
  // Check if running on GitHub Pages
  const isGitHub = window.location.hostname.includes('github.io');
  
  if (isGitHub) {
    // Add the repository name as base path
    return `/sataniarman-art${path}`;
  }
  
  // On localhost or custom domain, use path as-is
  return path;
};