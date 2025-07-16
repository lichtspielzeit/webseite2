import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const EmailForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Mailchimp-Integration über Netlify Functions
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        
        // Google Analytics Event tracking (falls verfügbar)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'email_signup', {
            event_category: 'engagement',
            event_label: 'ebook_download',
          });
        }
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Deine E-Mail für die 10 Rituale"
            {...register('email', { 
              required: 'E-Mail ist erforderlich',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ungültige E-Mail-Adresse'
              }
            })}
            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
            style={{
              borderColor: errors.email ? '#ef4444' : 'var(--sage)',
              focusRingColor: 'var(--honey)'
            }}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <motion.button
          type="submit"
          className="w-full btn btn-primary py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Ja, ich will die Rituale!'}
        </motion.button>
      </form>
      
      {submitStatus === 'success' && (
        <motion.div 
          className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-semibold">Vielen Dank!</p>
          <p>Du erhältst das E-Book in wenigen Minuten per E-Mail.</p>
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div 
          className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-semibold">Ups, da ist etwas schiefgelaufen.</p>
          <p>Bitte versuche es noch einmal oder schreibe uns direkt eine E-Mail.</p>
        </motion.div>
      )}
      
      <p className="text-sm opacity-70 text-center" style={{ color: 'var(--anthracite)' }}>
        Deine Daten sind bei uns sicher. Kein Spam, versprochen.
      </p>
    </div>
  );
};

export default EmailForm;

