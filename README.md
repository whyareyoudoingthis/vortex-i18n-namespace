# Sample for custom extension i18n namespaces

1. Drop the `en/i8n-sample.json` file into your `%APPDATA%/Vortex/locales/en` directory
1. `npm run build` and add the extension files (in `dist/`) to the `plugins` directory
1. Hit the new "Base Text" action in Mods to show a dialog: note that the text is *not* translated using the extensions namespace
1. Uncomment line 7 of `src/index.ts`, rebuild, reinstall and click "Base Text" again: the text is now translated using the extensions namespace