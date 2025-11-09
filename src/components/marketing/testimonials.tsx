import { Container } from '@/components/layout/container';
import { testimonials } from '@/config/seo';

export function Testimonials() {
  return (
    <section className="bg-slate-900 py-20">
      <Container className="grid gap-16 text-white lg:grid-cols-[320px,1fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">行业团队的真实反馈</h2>
          <p className="text-slate-300">
            我们关注可维护性与可扩展性，让市场团队能轻松更新内容，开发团队放心上线。
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold uppercase text-blue-100">
                  {testimonial.author
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-300">{testimonial.role}</div>
                </div>
              </div>
              <blockquote className="space-y-4 text-slate-100">
                <p>{testimonial.quote}</p>
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
