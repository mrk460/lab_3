import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

const linkClass =
  'break-all text-brand underline underline-offset-4 hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal';

function App() {
  return (
    <div className="min-h-screen bg-slate-200 px-3 py-4 text-ink sm:px-4 sm:py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <Header />

        <main className="grid items-start gap-6 md:grid-cols-[280px_1fr]">
          <section className="rounded-md border border-slate-300 bg-white p-6 shadow-md md:row-span-2">
            <h2 className="mb-4 border-b-2 border-slate-300 pb-2 font-display text-xl font-bold">
              Контакти
            </h2>
            <ul className="space-y-2">
              <li>
                Email:{' '}
                <a href="mailto:markiian.savchak.kb.2025@lpnu.com" className={`font-semibold ${linkClass}`}>
                  markiian.savchak.kb.2025@lpnu.com
                </a>
              </li>
              <li>
                Телефон:{' '}
                <a href="tel:+380631453965" className={`font-semibold ${linkClass}`}>
                  +380 63 145 3965
                </a>
              </li>
              <li>
                GitHub:{' '}
                <a href="https://github.com/mrk460" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  github.com/mrk460
                </a>
              </li>
            </ul>
          </section>

          <Experience />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
