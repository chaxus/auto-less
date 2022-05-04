import * as path from 'path'
import * as fs from 'fs'

const lessOrScss = (src: string, name: string, ext: string) => {
    const content = src.replace(/<([^<>]*)>/g, (v) => {
        const [className] = v.match(/className={?["|'].+['|"]}?/g) || []
        if (className) {
            const [_, item] = /["|'](.+)['|"]/g.exec(v) || []
            if (item) {
                const arr = item.split(" ")
                let str = ''
                arr.forEach(item => {
                    str += `\${styles['${item}']} `
                })
                return v.replace(/className={?["|'].+['|"]}?/g, `className={\`${str}\`}`)
            }
        }
        return v
    })
    const result = `import styles from './${name}.${ext}';${content}`;
    return result;
}

export default function (this: any, src: string) {
    if (this.cacheable) {
        this.cacheable();
    }
    const resourcePath = path.parse(this.resourcePath);
    const { name } = resourcePath;
    const { mode } = this.query
    if (fs.existsSync(path.join(resourcePath.dir, `${name}.less`))) {
        return mode === 'module' ? lessOrScss(src, name, 'less') : `${src};require('./${name}.less')`;
    }
    if (fs.existsSync(path.join(resourcePath.dir, `${name}.scss`))) {
        return mode === 'module' ? lessOrScss(src, name, 'scss') : `${src};require('./${name}.scss')`;
    }
    if (fs.existsSync(path.join(resourcePath.dir, `${name}.css`))) {
        return mode === 'module' ? lessOrScss(src, name, 'css') : `${src};require('./${name}.css')`;
    }
    return src;
};
