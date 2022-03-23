/*
 * @Author: ran
 * @Date: 2022-02-11 18:45:33
 * @LastEditors: ran
 * @LastEditTime: 2022-03-23 11:55:22
 */
import * as path from 'path'
import * as fs from 'fs'
import { LoaderContext } from 'webpack'


/**
 * 自动在js文件最后面require同名的less文件
 */
 export default function(this: LoaderContext<unknown>, src: string | Buffer) {
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
