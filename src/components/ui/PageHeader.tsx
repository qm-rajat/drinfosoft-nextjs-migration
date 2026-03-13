export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-slate-600">{description}</p>
      ) : null}
    </header>
  );
}
