/**
 * Created by yeanzhi on 16/12/6.
 */
'use strict';
import Command from '../lib/command';
import event from '../lib/event.js';

export default function (ei) {
    let colorCommand = new Command(ei);
    colorCommand.execute = function(size) {
        ei.changeFontSize(size);
        event.emit('contentChange');

        return size;
    };
    colorCommand.queryState = function () {

    };
    colorCommand.queryEnabled = function () {

    };
    ei.commands['fontSize'] = colorCommand;
}
