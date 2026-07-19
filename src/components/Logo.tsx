import logoUrl from '../../logo.png';

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

/**
 * Image recreation of the KodaSoft mark.
 */
export default function Logo({ className = "h-9", withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={logoUrl} alt="KodaSoft Logo" className="h-full w-auto" />

      {withWordmark && (
        <span className="font-display text-xl font-bold tracking-wide">
          <span className="text-ice">KODA</span>
          <span className="text-cyan-400">SOFT</span>
        </span>
      )}
    </span>
  );
}
