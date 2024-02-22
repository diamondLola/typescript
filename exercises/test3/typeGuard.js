"use strict";
var IStatus;
(function (IStatus) {
    IStatus["SUCCESSFUL"] = "success";
    IStatus["FAIL"] = "failed";
})(IStatus || (IStatus = {}));
function succeed(res) {
    if (res.status === IStatus.SUCCESSFUL) {
        return true;
    }
    return false;
}
function getIdFromData(res) {
    if (succeed(res)) {
        return res.data.databaseId;
    }
    throw new Error(res.data.errorMessage);
}
