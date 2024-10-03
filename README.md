# Makerkit's Documentation

This repository mirrors Makerkit's documentation to allow external contributions, offline reading, LLM context, etc.

## Generated Markdown Files for LLM context

You can generate markdown files, useful for LLM context, by running the following command:

```bash
node index.js kits/next-supabase-turbo
```

To ensure a more precise context, always scope the generation for the kit you are interested in. For example, to generate the markdown files for the Remix Supabase Kit, run the following command:

```
node index.js kits/remix-supabase-turbo
```

You can also do it for the courses by running the following command:

```bash
node index.js courses
```

This will generate markdown files in the `dist` folder.

You can configure how many words per file by passing a second argument to the script, e.g.:

```bash
node index.js kits 4000
```

By default, it will generate 5000 words per file.