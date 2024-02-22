enum IStatus {
  SUCCESSFUL = "success",
  FAIL = "failed",
}
interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface MyCalc extends IPayment {}
// если появятся другие параметры, которых я хочу добавить => create new interface и брать extends from it

interface StatusSuccess extends IPayment {
  databaseId: number;
}
// only messages of successful payment

interface StatusFailed {
  errorMessage: string;
  errorCode: number;
}
// only messages of failed payment

interface IStatusSuccess {
  status: IStatus.SUCCESSFUL;
  data: StatusSuccess;
}
//shows the status because of ` status: IStatus.SUCCESS,`
// messages inside of `data:StatusSuccess`

interface IStatusFailed {
  status: IStatus.FAIL;
  data: StatusFailed;
}
//shows the status because of `status: IStatus.FAILED,`
// messages inside of `data:StatusFailed`

//TYPE GUARD
type Res = IStatusSuccess | IStatusFailed;
function succeed(res: Res): res is IStatusSuccess {
  if (res.status === IStatus.SUCCESSFUL) {
    return true;
  }
  return false;
}

function getIdFromData(res: Res): number {
  if (succeed(res)) {
    return res.data.databaseId;
  }
  throw new Error(res.data.errorMessage);
}
