
/**
 * Auth utilities for the Coaching Management System
 * In a real application, these would connect to a backend API
 */

// Simple email validation function
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Password strength checker
export function getPasswordStrength(password: string): 'weak' | 'medium' | 'strong' {
  // Basic password strength calculation
  if (password.length < 8) return 'weak';
  
  let strength = 0;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;
  
  if (strength <= 2) return 'weak';
  if (strength === 3) return 'medium';
  return 'strong';
}

// Helper to hash passwords (in a real app, we'd use bcrypt or similar)
export function hashPassword(password: string): string {
  // This is just a placeholder - NEVER use this in production
  // In a real app, this would be done server-side with proper hashing
  return btoa(password + "salt");
}
