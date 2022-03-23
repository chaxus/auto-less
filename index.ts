import * as path from 'path'
import * as fs from 'fs'


 export default function(this:any, src: string | Buffer) {
  if (this.cacheable) {
    this.cacheable();
  }
  const resourcePath = path.parse(this.resourcePath);
  const { name } = resourcePath;
  if (fs.existsSync(path.join(resourcePath.dir, `${name}.less`))) {
    const result = `${src};require('./${name}.less')`;
    return result;
  }
  return src;
};
