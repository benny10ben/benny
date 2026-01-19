export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold text-foreground">
        <span className="text-accent mr-2 font-mono text-2xl">/</span>
        {title}
      </h2>
      <div className="h-[1px] bg-zinc-800 flex-1 max-w-sm ml-4" />
    </div>
  );
}