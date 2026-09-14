import Image from "next/image";
import Link from "next/link";

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function PhysicianCard({
  name,
  role,
  bio,
  photo,
}: {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}) {
  return (
    <div className="relative aspect-3/4 rounded-[1.75rem] overflow-hidden shadow-[0_30px_70px_-40px_rgba(20,14,8,0.65)]">
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, 440px"
          className="object-cover object-top"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-deep-teal to-sage"
          aria-hidden
        >
          <span className="font-display text-7xl font-semibold text-ivory/40">
            {initials(name)}
          </span>
        </div>
      )}

      {/* Scrim — the overlaid copy has to stay legible over whatever the
          portrait happens to be doing behind it. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col">
        <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-white leading-tight">
          {name}
        </h3>
        <p className="mt-1 text-sm text-white/70">{role}</p>
        <p className="mt-2.5 text-xs leading-relaxed text-white/70 line-clamp-2">
          {bio}
        </p>

        <Link
          href="/contact"
          className="mt-5 w-full rounded-full bg-white py-3.5 text-center text-sm font-semibold text-[#241f1a] hover:bg-white/90 transition-colors"
        >
          Request a consultation
        </Link>
      </div>
    </div>
  );
}
