/// <reference types="node" />
import { LoaderContext } from 'webpack';
/**
 * 自动在js文件最后面require同名的less文件
 */
export default function (this: LoaderContext<unknown>, src: string | Buffer): string | Buffer;
