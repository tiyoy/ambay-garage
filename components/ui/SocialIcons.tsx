type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ambaygarage/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100041041132973",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.4 0-4.04 1.46-4.04 4.15v2.17H7.5V13h2.7v8h3.3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ambaygarage_",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3c.4 2.2 1.9 3.7 4.2 3.9v2.6c-1.5.1-2.9-.4-4.2-1.3v6.4c0 3.2-2.3 5.4-5.3 5.4-3 0-5.3-2.2-5.3-5.2 0-3 2.4-5.2 5.4-5.2.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.1-2.7 2.6 0 1.5 1.2 2.6 2.7 2.6 1.6 0 2.8-1.2 2.8-2.9V3h2.4z" />
      </svg>
    ),
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-cobalt-bright hover:text-paper transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}