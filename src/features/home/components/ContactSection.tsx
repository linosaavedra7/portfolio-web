'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { cn } from '@/lib/cn';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'El asunto es requerido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (_data: ContactForm) => {
    setStatus('sending');
    try {
      // TODO: connect to contactService.send(data) when API is ready
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">¿Trabajamos juntos?</h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto text-sm">
            Estoy abierto a nuevas oportunidades, proyectos freelance o simplemente conversar.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {status === 'sent' ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[var(--color-success)] text-xl">✓</span>
              </div>
              <p className="text-[var(--color-foreground)] font-medium">¡Mensaje enviado!</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Te responderé a la brevedad.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-[var(--color-accent)] hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--color-muted)]">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    {...register('name')}
                    className={cn(
                      'px-4 py-2.5 rounded-lg text-sm bg-[var(--color-surface-2)] border text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]/50 outline-none focus:border-[var(--color-primary)] transition-colors',
                      errors.name ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]',
                    )}
                  />
                  {errors.name && (
                    <p className="text-xs text-[var(--color-error)]">{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--color-muted)]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    {...register('email')}
                    className={cn(
                      'px-4 py-2.5 rounded-lg text-sm bg-[var(--color-surface-2)] border text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]/50 outline-none focus:border-[var(--color-primary)] transition-colors',
                      errors.email ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]',
                    )}
                  />
                  {errors.email && (
                    <p className="text-xs text-[var(--color-error)]">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-[var(--color-muted)]">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="¿De qué quieres hablar?"
                  {...register('subject')}
                  className={cn(
                    'px-4 py-2.5 rounded-lg text-sm bg-[var(--color-surface-2)] border text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]/50 outline-none focus:border-[var(--color-primary)] transition-colors',
                    errors.subject
                      ? 'border-[var(--color-error)]'
                      : 'border-[var(--color-border)]',
                  )}
                />
                {errors.subject && (
                  <p className="text-xs text-[var(--color-error)]">{errors.subject.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-muted)]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  {...register('message')}
                  className={cn(
                    'px-4 py-2.5 rounded-lg text-sm bg-[var(--color-surface-2)] border text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]/50 outline-none focus:border-[var(--color-primary)] transition-colors resize-none',
                    errors.message
                      ? 'border-[var(--color-error)]'
                      : 'border-[var(--color-border)]',
                  )}
                />
                {errors.message && (
                  <p className="text-xs text-[var(--color-error)]">{errors.message.message}</p>
                )}
              </div>

              {status === 'error' && (
                <p className="text-sm text-[var(--color-error)]">
                  Error al enviar el mensaje. Inténtalo de nuevo.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="self-end inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {status === 'sending' ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send size={15} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
