/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
export declare type File = {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    stream: Readable;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
};
