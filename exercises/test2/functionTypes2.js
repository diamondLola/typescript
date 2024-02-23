"use strict";
var IStatus;
(function (IStatus) {
    IStatus["SUCCESS"] = "success";
    IStatus["FAILED"] = "failed";
})(IStatus || (IStatus = {}));
//shows the status because of `status: IStatus.FAILED,`
// messages inside of `data:StatusFailed`
function test2(status) {
}
