enum IStatus{
    SUCCESS = 'success',
    FAILED = 'failed'
}
interface IPayment{
    sum: number ,
    from : number ,
    to : number 
}

interface MyCalc extends IPayment{

}
// если появятся другие параметры, которых я хочу добавить => create new interface и брать extends from it
 
interface StatusSuccess extends IPayment{
 databaseId: number
}
// only messages of successful payment

interface StatusFailed {
 errorMessage: string,
 errorCode: number
}
// only messages of failed payment

interface IStatusSuccess{
    status: IStatus.SUCCESS,
    data:StatusSuccess
   }
//shows the status because of ` status: IStatus.SUCCESS,`
// messages inside of `data:StatusSuccess`

   interface IStatusFailed{
    status: IStatus.FAILED,
    data:StatusFailed
   }
//shows the status because of `status: IStatus.FAILED,`
// messages inside of `data:StatusFailed`


function test2(status: IStatusSuccess| IStatusFailed){

}