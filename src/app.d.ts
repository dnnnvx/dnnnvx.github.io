// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      message: string
      code: string
    }
    interface Locals {
      cache: Partial<Record<string, string>>
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
