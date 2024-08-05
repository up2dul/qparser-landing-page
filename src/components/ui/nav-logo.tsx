export const NavLogo = ({ isResponsive }: { isResponsive?: boolean }) => {
  return (
    <div className="flex items-center gap-[18px]">
      <img
        src="/images/logo.webp"
        alt="QParser logo"
        className="w-10 h-10 border-dark-400 border rounded-full"
      />

      {isResponsive && (
        <h1 className="font-bold text-6 hidden md:block">QParser</h1>
      )}
    </div>
  );
};
