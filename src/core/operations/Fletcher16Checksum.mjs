/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import Operation from "../Operation";
import Utils from "../Utils";

/**
 * Fletcher-16 Checksum operation
 */
class Fletcher16Checksum extends Operation {

    /**
     * Fletcher16Checksum constructor
     */
    constructor() {
        super();

        this.name = "Fletcher-16 Checksum";
        this.module = "Hashing";
        this.description = "The Fletcher checksum is an algorithm for computing a position-dependent checksum devised by John Gould Fletcher at Lawrence Livermore Labs in the late 1970s.<br><br>The objective of the Fletcher checksum was to provide error-detection properties approaching those of a cyclic redundancy check but with the lower computational effort associated with summation techniques.";
        this.inputType = "byteArray";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {byteArray} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        let a = 0,
            b = 0;

        for (let i = 0; i < input.length; i++) {
            a = (a + input[i]) % 0xff;
            b = (b + a) % 0xff;
        }

        return Utils.hex(((b << 8) | a) >>> 0, 4);
    }

}

export default Fletcher16Checksum;
