/**
 * Mirrors basePath in next.config.ts. <Link> and static imports add it
 * automatically; raw URLs (metadata, meta refresh, files in /public) do not.
 */
export const base = process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '';
export const withBase = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);
