/**
 * Created by yeanzhi on 16/12/6.
 */
'use strict';
export default function () {
    this.selectColor = 'red';
    this.changeColor = function(color) {
        this.selectColor = color;
        if(this.selectNode) {
            this.selectNode.changeColor(this.selectColor);
        }
    }
}
