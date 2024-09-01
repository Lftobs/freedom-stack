/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type PocketBase from "pocketbase";
import * as htmx from 'htmx.org';
import type { User, Session } from "astro:db";

declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
    htmx: typeof htmx;
  }

  namespace App {
    interface Locals {
      pb: PocketBase;
      user: User | null;
      session: Session | null;
    }
  }
}

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
  /** https://docs.sentry.io/platforms/javascript/guides/astro/#configure */
  readonly SENTRY_DSN: string;
  /** https://docs.sentry.io/platforms/javascript/guides/astro/#configure */
  readonly SENTRY_AUTH_TOKEN: string;
  /** https://docs.sentry.io/platforms/javascript/guides/astro/#configure */
  readonly SENTRY_PROJECT: string;
  /** https://docs.astro.build/en/guides/astro-db/#astro-studio */
  readonly ASTRO_STUDIO_APP_TOKEN: string;
  /** https://docs.astro.build/en/guides/astro-db/#libsql */
  readonly ASTRO_DB_REMOTE_URL: string;
  /** https://docs.astro.build/en/guides/astro-db/#libsql */
  readonly ASTRO_DB_APP_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
