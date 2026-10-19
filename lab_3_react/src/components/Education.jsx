const items = [
  { degree: 'Магістр кібербезпеки', year: '2023' },
  { degree: 'Бакалавр кібербезпеки', year: '2021' },
];

function Education() {
  return (
    <section className="rounded-md border border-slate-300 bg-white p-6 shadow-md sm:px-7">
      <h2 className="mb-4 border-b-2 border-slate-300 pb-2 font-display text-xl font-bold">
        Освіта
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.degree}
            className="rounded-md border border-slate-300 border-l-4 border-l-brand p-4 transition hover:scale-[1.01] hover:bg-slate-100"
          >
            <h3 className="font-display text-lg font-bold">{item.degree}</h3>
            <p className="text-slate-700">
              НУЛП (Національний університет «Львівська політехніка»), {item.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
