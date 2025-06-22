# TODO

> Content in the landing page

> An About page

> Docusaurus marking in about

> Make private blogs

> Documents landing page






# Intializing Website locally

> run `npm start`

## Build the website (for production)

> run `npm run build` or `npm run build -- --no-minify`

> Copy the contents of `build` folder to `004Ajay.github.io` website hosting folder 

## Test the build (final website render) locally

> run `npm run serve`

---

## Create a new doc as a folder (eg: commands)

> Add new folder to `docs` folder, example `useful_cmds`

> To that folder add `_category_.json` file to display contents under that folder as tiles in output

> Now we can add as many pages (in markdown format) under the folder `useful_cmds`
    
    > Don't forget to add this at the starting of markdown file

    ---
    id: rsync
    title: Rsync
    sidebar_label: Rsync
    ---