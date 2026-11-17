/** Re-mounts on every navigation, giving each route a short fade-in (disabled under reduced motion). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
