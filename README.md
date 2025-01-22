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

### Output Configuration

You can configure the output in two ways:

1. **Words per file**: Pass a number as the second argument to set how many words per file:
```bash
node index.js kits 4000
```
By default, it will generate 5000 words per file.

2. **Folder-based**: Pass 'folder' as the second argument to generate one file per folder, maintaining the directory structure:
```bash
node index.js kits folder
```
This will create files like `dist/next-supabase-turbo/admin.md`, `dist/next-supabase-turbo/analytics.md`, etc.