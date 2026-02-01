'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const serviceOptions = [
  'Interior Painting',
  'Exterior Painting',
  'Powerwashing',
  'Light Carpentry',
  'Multiple Services',
  'Other',
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  general?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.errors?.[0] || 'Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-cmg-white border border-cmg-royal rounded-xl p-8 text-center" data-testid="form-success">
        <div className="w-16 h-16 rounded-full bg-cmg-royal flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-cmg-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-cmg-charcoal mb-2">Thank You!</h3>
        <p className="text-cmg-gray">
          We&apos;ve received your request and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form" noValidate>
      {/* General error message */}
      {errors.general && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3" data-testid="form-error">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-700 text-sm">{errors.general}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cmg-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            data-testid="input-name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-cmg-white text-cmg-charcoal placeholder-cmg-gray/50 focus:outline-none focus:ring-2 focus:ring-cmg-royal focus:border-transparent transition-all ${
              errors.name ? 'border-red-400' : 'border-cmg-light'
            }`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600" data-testid="error-name">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-cmg-charcoal mb-2">
            Contact Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            data-testid="input-phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-cmg-white text-cmg-charcoal placeholder-cmg-gray/50 focus:outline-none focus:ring-2 focus:ring-cmg-royal focus:border-transparent transition-all ${
              errors.phone ? 'border-red-400' : 'border-cmg-light'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600" data-testid="error-phone">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-cmg-charcoal mb-2">
          Your E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          data-testid="input-email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-cmg-white text-cmg-charcoal placeholder-cmg-gray/50 focus:outline-none focus:ring-2 focus:ring-cmg-royal focus:border-transparent transition-all ${
            errors.email ? 'border-red-400' : 'border-cmg-light'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" data-testid="error-email">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-cmg-charcoal mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          data-testid="input-service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-cmg-light bg-cmg-white text-cmg-charcoal focus:outline-none focus:ring-2 focus:ring-cmg-royal focus:border-transparent transition-all"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cmg-charcoal mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          data-testid="input-message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-cmg-light bg-cmg-white text-cmg-charcoal placeholder-cmg-gray/50 focus:outline-none focus:ring-2 focus:ring-cmg-royal focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
        data-testid="submit-button"
      >
        {isSubmitting ? 'Sending...' : 'Request Free Quote'}
      </Button>

      <p className="text-cmg-gray text-xs text-center">
        By submitting this form, you agree to be contacted about your project.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
