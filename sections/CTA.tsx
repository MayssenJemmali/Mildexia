import { type FC, useState } from 'react';
import { Content } from '../types';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface CTAProps {
  content: Content['cta'];
}

const CTA: FC<CTAProps> = ({ content }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-mildexia-primary to-mildexia-darkPrimary text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-12">
          {content.title}
        </h2>
        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-2">{content.newsletter.title}</h3>
          <p className="text-white/80 mb-6 text-sm">{content.newsletter.disclaimer}</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.newsletter.placeholder}
                className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all"
                required
                disabled={status === 'loading' || status === 'success'}
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                {status === 'loading' && <Loader2 className="animate-spin text-white/70" size={20} />}
                {status === 'success' && <CheckCircle className="text-green-400" size={20} />}
                {status === 'error' && <AlertCircle className="text-red-400" size={20} />}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full py-3 bg-white text-mildexia-darkPrimary font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                content.newsletter.loading
              ) : status === 'success' ? (
                content.newsletter.success
              ) : (
                <>
                  {content.newsletter.button}
                  <Send size={18} />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-red-300 text-sm mt-1">{content.newsletter.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;