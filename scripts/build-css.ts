import * as fs from 'fs'
import sass from 'sass'
import path from 'path'

(async() => {
    const libs = fs.readdirSync('package')
    for (const lib of libs) {
        const stat = fs.lstatSync(`package/${lib}`)
        if (!stat.isDirectory()) continue
        const files = fs.readdirSync(`package/${lib}`)
        const scss = files.filter((file) => file.endsWith('.scss')).map((file) => path.parse(file))

        for (const { name, base } of scss) {
            const file = `package/${lib}/${base}`
            const outFile = `package/${lib}/${name}.css`

            console.log('[build-css]', file, '-->', outFile)

            const { css } = sass.compile(file, {
                style: 'compressed'
            })

            fs.writeFileSync(outFile, css)
        }

        const sveltes = files.filter((file) => file.endsWith('.svelte') || file.endsWith('.svelte.d.ts'))

        for (const base of sveltes) {
            const file = `package/${lib}/${base}`
            const data = fs.readFileSync(file)
            fs.writeFileSync(file, data.toString().replace(/import '(.*)?\.scss'/g, 'import \'$1.css\''))
        }
    }
})()