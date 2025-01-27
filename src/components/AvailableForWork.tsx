export const AvailableForWork = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 text-zinc-400 tracking-wide">
        <span className="relative w-3 h-3 rounded-full bg-emerald-400 me-1">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
        </span>
        Disponible para trabajar
      </div>
    </div>
  );
};
